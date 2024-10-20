import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/users.js';

export const signUp = async(req, res) =>{
    try {
        const {firstName, lastName, userName, phoneNumber, email, password } = req.body;
        console.log(firstName,lastName,userName,phoneNumber,email,password)
        if (!firstName || !lastName || !userName || !phoneNumber || !email || !password){
            return res
                .status(400)
                .json({message:"Por favor ingrese los datos!"});
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message:'Existe un usuario registrado!'})
        }

        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newUser = new User({
            firstName, lastName, userName, phoneNumber, email, password:hashedPassword,
        });
        await newUser.save();

        return res
            .status(201)
            .json({message:"Usuario registrado!", newUser});
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"Error al crear el usuario!"})
    }
}

export const login = async(req, res) => {
    try {
        const {userName, password} = req.body;

        if(!userName || !password){
            return res
                .status(400)
                .json({message:"Por favor ingrese los datos!"})
        }

        const user = await User.findOne({userName});
        if (!userName){
            return res.status(401).json({message:"Usuario o contraseña invalidos!"})
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch){
            return res.status(401).json({message:"Usuario o contraseña invalidos!"})
        }

        const token = jwt.sign(
            {userId: user._id, userName:user.userName},
            process.env.SECRET_KEY || "1234!@#%<{*&)",
            {expiresIn: "1h"}
        );

        return res
            .status(200)
            .json({ message: "Usuario logeado", data: user, token });
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Error durante el login" });
    }
}

export const getAllUsers = async(req, res) =>{
    try {
        const users = await User.find({},{password:0});
        return res.status(200).json({users})
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({message:"Error obteniendo usuarios"})
    }
}
