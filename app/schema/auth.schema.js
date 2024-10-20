import {z} from "zod";

export const registerSchema = z.object({
    firstName: z.string({required_error: "Nombre es requerido"}).min(3,{message:"Nombre debe contener al menos 3 caracteres"}).max(10),
    lastName: z.string({required_error: "Apellido es requerido"}).min(3,{message:"Apellido debe contener al menos 3 caracteres"}).max(10),
    userName: z.string({required_error: "Usuario es requerido"}).min(3,{message:"Nombre de usuario debe contener al menos 3 caracteres"}).max(8),
    phoneNumber: z.string().min(5,{message:"Telefono debe contener al menos 5 caracteres"}).max(13).refine(phoneNumber => !isNaN(parseFloat(phoneNumber)),{message:"Telefono debe ser numerico"}),
    email: z.string({required_error: "Correo es requerido"}).email({message:"Correo invalido"}),
    password: z.string({required_error:"Contraseña es requerido"}).min(6,{message:"La contraseña debe tener al menos 6 caracteres"}),
    confirmPassword: z.string({required_error: "Confirmar contraseña es requerido"}).min(6,{message:"La contraseña debe tener al menos 6 caracteres"}),
}).refine((data) => data.password === data.confirmPassword, {message:"Las contraseñas no coinciden", path:["confirmPassword"],})