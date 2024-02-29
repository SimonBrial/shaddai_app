import React from "react";
import TitleLayout from "../../components/TitleLayout";
import { IoSettingsOutline } from "../../icons";
import { useForm } from "react-hook-form";


// https://react-hook-form.com/

const SettingsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="p-5 sm:p-10 w-full flex flex-col gap-3 h-screen">
      <TitleLayout icon={<IoSettingsOutline />} title="Ajustes" withIcon />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nombre"
          {...register("Nombre", { required: true, max: 30, min: 3 })}
        />
        <input
          type="text"
          placeholder="Apellido"
          {...register("Apellido", { required: true, max: 20, min: 3 })}
        />
        <input
          type="email"
          placeholder="Correo"
          {...register("Correo", { required: true, max: 20 })}
        />
        <input
          type="tel"
          placeholder="Numero de Telefono"
          {...register("Numero de Telefono", { required: true })}
        />

        <input type="submit" />
      </form>
    </div>
  );
};

export default SettingsPage;
