import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex flex-col sm:flex-row">
      <div className="w-screen sm:w-[20%] h-screen fixed z-50">
        <Sidebar />
      </div>
      <section className="w-screen sm:w-[80%] sm:absolute sm:right-0 h-screen">
        <Outlet />
      </section>
    </main>
  );
};

export default HomePage;
