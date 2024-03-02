import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex h-full sm:h-auto  flex-col sm:flex-row">
      <div className="w-screen sm:w-[20%] sm:h-screen relative sm:fixed z-50">
        <Sidebar />
      </div>
      <section className="w-screen sm:w-[80%] relative sm:absolute sm:right-0 h-full pb-10 sm:pb-0 sm:h-screen overflow-auto custom-scrollbar">
        <Outlet />
      </section>
    </main>
  );
};

export default HomePage;
