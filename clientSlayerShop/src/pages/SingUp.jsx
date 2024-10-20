import { useForm } from "react-hook-form";
import { authRequest } from "../api/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema } from "../../../app/schema/auth.schema.js";
import Swal from "sweetalert2";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(registerSchema) });

  const onSubmit = handleSubmit(async (values) => {
    const res = await authRequest(values);
    console.log(res);
    Swal.fire({
      position: "bottom",
      icon: "success",
      title: "Usuario registrado",
      showConfirmButton: false,
      timer: 1500,
    });
  });

  return (
    <div>
      <div className="h-full bg-roseDemon">
        {/* <!-- Container --> */}
        <div className="mx-auto">
          <div className="flex justify-center px-4 py-5">
            {/* row */}
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">
              {/* col */}
              <div className="w-full h-auto hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
                <img
                  className="w-full h-full rounded-l-lg"
                  src="https://i.ibb.co/0VjH8f8/207358.jpg"
                />
              </div>
              {/* col */}
              <div className="w-full lg:w-7/12 bg-blackDemon-500 p-5 rounded-lg lg:rounded-l-none">
                <h3 className="py-4 text-2xl text-center text-white">
                  Crear una cuenta!
                </h3>
                <form
                  onSubmit={onSubmit}
                  className="px-8 pt-6 pb-8 mb-4 bg-gray-800 rounded"
                >
                  <div className="mb-4 md:flex md:justify-between">
                    <div className="mb-4 md:mr-2 md:mb-0">
                      <input
                        className="w-full px-2 py-1 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Nombre"
                        {...register("firstName", { required: true })}
                      />
                      {errors.firstName?.message && (
                        <p className="text-red-500 font-medium">
                          {errors.firstName?.message}
                        </p>
                      )}
                    </div>
                    <div className="md:ml-2">
                      <input
                        className="w-full px-2 py-1 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Apellido"
                        {...register("lastName", { required: true })}
                      />
                      {errors.lastName?.message && (
                        <p className="text-red-500 font-medium">
                          {errors.lastName?.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mb-2">
                    <input
                      className="w-full px-2 py-1 mb-3 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Nombre de usuario"
                      {...register("userName", { required: true })}
                    />
                    {errors.userName?.message && (
                      <p className="text-red-500 font-medium">
                        {errors.userName?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      className="w-full px-2 py-1 mb-3 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="text"
                      placeholder="Telefono"
                      {...register("phoneNumber", { required: true })}
                    />
                    {errors.phoneNumber?.message && (
                      <p className="text-red-500 font-medium">
                        {errors.phoneNumber?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      className="w-full px-2 py-1 mb-3 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="email"
                      placeholder="Correo"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.message && (
                      <p className="text-red-500 font-medium">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      className="w-full px-2 py-1 mb-3 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Contraseña"
                      {...register("password", { required: true })}
                    />
                    {errors.password?.message && (
                      <p className="text-red-500 font-medium">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-2">
                    <input
                      className="w-full px-2 py-1 mb-3 text-base text-black border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      type="password"
                      placeholder="Confirmar contraseña"
                      {...register("confirmPassword", { required: true })}
                    />
                    {errors.confirmPassword?.message && (
                      <p className="text-red-500 font-medium">
                        {errors.confirmPassword?.message}
                      </p>
                    )}
                  </div>
                  <div className="mb-6 text-center">
                    <button
                      className="w-full px-4 py-2 font-bold text-white bg-redDemon rounded-full hover:bg-redDemon-500 focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Registrar cuenta
                    </button>
                  </div>
                  <hr className="mb-6 border-t" />
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                      href="#"
                    >
                      ¿Has olvidado tu contraseña?
                    </a>
                  </div>
                  <div className="text-center">
                    <a
                      className="inline-block text-sm text-blue-500 dark:text-blue-500 align-baseline hover:text-blue-800"
                      href="./index.html"
                    >
                      ¿Ya tienes una cuenta?
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
