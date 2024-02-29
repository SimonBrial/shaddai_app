import {
  Typography,
  Checkbox,
  Button,
  Input,
  Card,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const CreateAccountForm = () => {
  return (
    <Card
      color="transparent"
      shadow={false}
      placeholder={"login card"}
      className="shadow-md w-[22rem] sm:w-auto p-5 sm:p-10 ring-1 ring-gray-100 bg-white"
    >
      <div className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <Typography
          variant="h4"
          color="pink"
          placeholder={"Crear Cuenta"}
          className="text-principal-color"
        >
          Crear Cuenta
        </Typography>
        <Typography
          color="gray"
          className="font-normal -mt-2 text-[0.8rem] sm:text-[0.95rem]"
          placeholder={"Crea una cuenta y únete a nuestro equipo"}
        >
          Crea una cuenta y únete a nuestro equipo{" "}
          <span className="text-red-500 text-2xl">♥️</span>!
        </Typography>
      </div>
      <form className="mt-4 mb-2 w-80 max-w-screen-lg sm:w-96 mx-auto">
        <div className="mb-1 flex flex-col gap-4">
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-principal-color"
            placeholder={"prueba"}
          >
            Nombre de Usuario
          </Typography>
          <Input
            crossOrigin={undefined}
            size="lg"
            placeholder="Nombre del Usuario"
            className="ring-1 ring-principal-color border-transparent  focus:border-principal-color  focus:ring-0 border-t-transparent focus:border-t-principal-color"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-principal-color"
            placeholder={"prueba"}
          >
            Correo
          </Typography>
          <Input
            crossOrigin={undefined}
            size="lg"
            placeholder="correo@mail.com"
            className="ring-1 ring-principal-color border-transparent  focus:border-principal-color  focus:ring-0 border-t-transparent focus:border-t-principal-color"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Typography
            variant="h6"
            color="blue-gray"
            className="-mb-3 text-principal-color focus:outline-none outline-red-500"
            placeholder={"contraseña"}
          >
            Contraseña
          </Typography>
          <Input
            crossOrigin={undefined}
            type="password"
            size="lg"
            placeholder="********"
            className="placeholder-shown:text-black ring-1 ring-principal-color border-transparent  focus:border-principal-color  focus:ring-0 border-t-transparent focus:border-t-principal-color"
            labelProps={{
              className: "before:content-none after:content-none",
            }}
          />
          <Checkbox
            crossOrigin={undefined}
            color="pink"
            ripple={true}
            label={
              <Typography
                placeholder={"Conditions and terms"}
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: "-ml-2.5 " }}
          />
        </div>
        <Link to={"/user/home"}>
          <Button
            className="mt-6 bg-gradient-to-l from-principal-color to-secondary-color"
            fullWidth
            placeholder={"iniciar sesion"}
          >
            Crear Cuenta
          </Button>
        </Link>
        <Typography
          color="gray"
          className="mt-4 text-center font-normal"
          placeholder={"crear cuenta"}
        >
          Ya tienes una cuenta?{" "}
          <Link
            to={"/"}
            className="font-medium transition hover:font-bold  duration-250 ease-in-out text-principal-color"
          >
            Iniciar Sesion
          </Link>
        </Typography>
      </form>
    </Card>
  );
};

export default CreateAccountForm;
