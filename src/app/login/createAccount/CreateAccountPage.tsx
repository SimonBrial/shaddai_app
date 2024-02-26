import CreateAccount from "./CreateAccount";

const CreateAccountPage = () => {
  return (
    <div className="flex h-full sm:h-screen w-screen p-0">
      <section className="hidden w-full md:w-1/2 md:flex justify-center items-center bg-gradient-to-t from-principal-color to-secondary-color text-white">
        Icono de la aplicacion
      </section>
      <section className="w-full sm:w-1/2 bg-white flex justify-center items-center m-auto md:m-0 p-10">
        <CreateAccount />
      </section>
    </div>
  );
};

export default CreateAccountPage;
