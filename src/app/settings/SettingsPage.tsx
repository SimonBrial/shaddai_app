import TitleLayout from "../../components/TitleLayout";
import { IoSettingsOutline, RiCake3Line } from "../../icons";
import { useForm } from "react-hook-form";

// https://react-hook-form.com/

const SettingsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen">
      <TitleLayout icon={<IoSettingsOutline />} title="Ajustes" withIcon />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="sm:h-full border-[1px] border-red-500 p-4 shadow-md rounded-[6px] flex flex-col gap-2 items-center"
      >
        <div className="w-full">
          <h2 className="font-bold text-2xl text-principal-color pl-2 text-center sm:text-start">
            Datos del usuario
          </h2>
          {/* ------------------------------------------------ Divider ------------------------------------------------ */}
          <div className="w-full relative flex items-center h-9 py-2 pb-5 sm:pb-0 -mt-1">
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] sm:w-[48%] rounded-lg" />
            <span className="absolute left-[45.55%] sm:left-[48.3%] text-[1.5rem] top-1 text-principal-color bg-transparent px-1">
              <RiCake3Line />
            </span>
            <hr className="absolute top-4 bg-principal-color h-1 w-[45%] sm:w-[48%] right-0 rounded-lg" />
          </div>
          {/* ------------------------------------------------ Divider ------------------------------------------------ */}
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-1/2 items-center sm:justify-center sm:h-full">
          <div className="flex items-center justify-between w-full sm:px-3 py-2 hover:shadow-md rounded-[6px] transition-all">
            <label className="font-bold text-lg text-principal-color">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Nombre"
              {...register("Nombre", { required: true, max: 30, min: 3 })}
              className="w-[70%] sm:w-[65%] border-[1px] border-principal-color rounded-[6px] text-principal-color px-2 py-2 placeholder:text-principal-color/50 focus:ring-principal-color focus:border-none active:border-none shadow-md"
            />
          </div>
          <div className="flex items-center justify-between w-full sm:px-3 py-2 hover:shadow-md rounded-[6px] transition-all">
            <label className="font-bold text-lg text-principal-color">
              Apellido
            </label>
            <input
              type="text"
              placeholder="Apellido"
              {...register("Apellido", { required: true, max: 20, min: 3 })}
              className="w-[70%] sm:w-[65%] border-[1px] border-principal-color rounded-[6px] text-principal-color px-2 py-2 placeholder:text-principal-color/50 focus:ring-principal-color focus:border-none active:border-none shadow-md"
            />
          </div>
          <div className="flex items-center justify-between w-full sm:px-3 py-2 hover:shadow-md rounded-[6px] transition-all">
            <label className="font-bold text-lg text-principal-color">
              Correo
            </label>
            <input
              type="email"
              placeholder="Correo"
              {...register("Correo", { required: true, max: 20 })}
              className="w-[70%] sm:w-[65%] border-[1px] border-principal-color rounded-[6px] text-principal-color px-2 py-2 placeholder:text-principal-color/50 focus:ring-principal-color focus:border-none active:border-none shadow-md"
            />
          </div>
          <div className="flex items-center justify-between w-full sm:px-3 py-2 hover:shadow-md rounded-[6px] transition-all">
            <label className="font-bold text-lg text-principal-color">
              Telefono
            </label>
            <input
              type="tel"
              placeholder="Numero de Telefono"
              {...register("Numero de Telefono", { required: true })}
              className="w-[70%] sm:w-[65%] border-[1px] border-principal-color rounded-[6px] text-principal-color px-2 py-2 placeholder:text-principal-color/50 focus:ring-principal-color focus:border-none active:border-none shadow-md"
            />
          </div>
          <div className="sm:px-3 py-2 w-full">
            <input
              type="submit"
              className="shadow-md bg-gradient-to-l from-principal-color to-secondary-color hover:opacity-90 transition-all px-[1.5rem] py-[0.6rem] rounded-[6px] text-white font-bold flex gap-2 items-center justify-center w-full cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SettingsPage;
