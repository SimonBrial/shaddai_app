import Sidebar from "../../components/Sidebar";
import { Outlet } from "react-router-dom";

const HomePage = () => {
  return (
    <main className="flex">
      <Sidebar />
      <section>
        <Outlet />
      </section>
    </main>
  );
};

export default HomePage;
