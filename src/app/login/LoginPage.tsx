import Logo from "../../components/Logo";
import LoginForm from "./LoginForm";

const HomePage = () => {
  return (
    <div className="flex h-screen">
      <section className="hidden w-full md:w-1/2 md:flex justify-center items-center bg-gradient-to-t from-principal-color to-secondary-color text-white">
        <Logo />
      </section>
      <section className="w-full sm:w-1/2 bg-white flex justify-center items-center m-auto md:m-0 p-10">
        <LoginForm />
      </section>
    </div>
  );
};

export default HomePage;
