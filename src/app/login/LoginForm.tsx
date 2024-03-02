import { Link } from "react-router-dom";
import {
  MdOutlineAlternateEmail,
  RiLockPasswordLine,
} from "../../icons";

const LoginForm = () => {
  return (
    <div className="shadow-md w-[22rem] sm:w-auto p-5 sm:p-10 ring-1 ring-gray-100 bg-white rounded-[6px]">
      <div className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <h2 className="text-principal-color font-bold text-3xl">
          Iniciar Sesión
        </h2>
        <p className="-mt-2 text-[1rem] sm:text-[0.95rem]">
          Bienvenido de nuevo <span className="text-red-500 text-2xl">♥️</span>!
        </p>
      </div>
      <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-4">
          <div>
            <label className="-mb-3 text-principal-color">Correo</label>
            <div className="relative w-full flex items-center">
              <input
                placeholder="correo@mail.com"
                type="text"
                className="w-full rounded-[6px] border-[1px] border-principal-color text-principal-color pl-10 pr-3 py-2 placeholder:text-principal-color/50 shadow-md focus:ring-principal-color focus:border-none active:border-none"
              />
              <span className="absolute inset-y-0 left-0 flex items-center text-2xl text-principal-color pl-2">
                <MdOutlineAlternateEmail />
              </span>
            </div>
          </div>
          <div>
            <label className="-mb-3 text-principal-color focus:outline-none outline-red-500">
              Contraseña
            </label>
            <div className="relative w-full flex items-center">
              <span className="absolute inset-y-0 left-0 flex items-center text-2xl text-principal-color pl-2">
                <RiLockPasswordLine />
              </span>
              <input
                placeholder="********"
                type="password"
                className="w-full rounded-[6px] border-[1px] border-principal-color text-principal-color pl-10 pr-3 py-2 placeholder:text-principal-color/50 shadow-md focus:ring-principal-color focus:border-none active:border-none"
              />
            </div>
          </div>
        </div>
        <Link to={"/user/home"}>
          <button className="shadow-md mt-6 bg-gradient-to-l from-principal-color to-secondary-color text-white font-bold w-full rounded-md py-3">
            <p>Iniciar sesion</p>
          </button>
        </Link>
        <p className="mt-4 text-center font-normal">
          No tienes una cuenta?{" "}
          <Link
            to={"/create-account"}
            className="font-medium transition hover:font-bold  duration-250 ease-in-out text-principal-color"
          >
            Crear cuenta
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
