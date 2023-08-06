"use client";
import Image from "next/image";
import lourdes from "../../public/image/imagenLourdes.jpg";
import "./inedx.css";
import axios from "axios";
import { useState } from "react";
import { set } from "mongoose";

export default function LandingPrincipal({ id }: { id: string }) {
  const [namePerson, setNamePerson] = useState("");
  const [quantity, setQuantity] = useState("");

  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    //https://www.xvlourdes.online:3000/api/confirm_assistance
    await axios
      .post(`https://www.xvlourdes.online/api/confirm_assistance`, {
        name: namePerson,
        family: id === "familia" ? true : false,
        quantity,
      })
      .then((res) => {
        if (res.status === 200) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            setNamePerson("");
            setQuantity("");
          }, 3000);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className={`relative bg-black h-screen w-screen`}>
      <div>
        <Image
          src={lourdes}
          alt="Lourdes fondo"
          width={10000000}
          height={10000}
          className="mx-auto h-screen w-full md:w-1/2 object-cover absolute z-0 md:left-[25%] brightness-50 "
        />
      </div>
      <div className="relative z-10 flex flex-col justify-around h-screen md:w-1/2 mx-auto">
        <div className="mx-4 text-white text-sm flex flex-col justify-center">
          <div className="text-clamp-xl-3 my-16 text-center">
            <h1>LOURDES</h1>
          </div>
          <div className="w-full ">
            <div className="w-[90%] mx-auto text-center">
              <p>
                Hay momentos inolvidables que se atesoran en el corazon para
                siempre por esa razón, quiero que compartas conmigo este dia tan
                especial
              </p>
            </div>
          </div>
        </div>
        <div className=" text-white">
          <div className="text-center">
            <h2 className="text-4xl">Mis 15 años</h2>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-row text-white justify-between mx-4 text-center items-center">
            <div className="w-1/3 border-slate-50 border-r-2">Septiembre</div>
            <div className="w-1/3 border-slate-50 border-r-2 text-4xl">02</div>
            <div className="w-1/3">2023</div>
          </div>
          <div className="mx-4 text-center py-4 text-white my-8">
            <div className="text-center">
              <h4>Ubicacion</h4>
            </div>
            <div className="text-lg">
              📍 San Martin 515, Quilmes, Buenos Aires
            </div>
            <div className="text-sm my-4">
              Salón Sede Central Empleado de comercio
            </div>
          </div>
        </div>
        <div>
          {id === "familia" ? (
            <div className="w-[85%] mx-auto">
              <input
                type="text"
                value={namePerson}
                placeholder="Nombre/s"
                className="w-full border-2 border-slate-50 rounded-full px-4 py-2 my-4"
                onChange={(e) => setNamePerson(e.target.value)}
              />
              <input
                type="text"
                value={quantity}
                placeholder="Cantidad de personas"
                className="w-full border-2 border-slate-50 rounded-full px-4 py-2 my-4"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          ) : (
            <div className="w-[95%] mx-auto ">
              <input
                type="text"
                placeholder="Nombre"
                value={namePerson}
                className="w-full border-2 border-slate-50 rounded-full px-4 py-2 my-4"
                onChange={(e) => setNamePerson(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className="my-8 text-center">
          <button
            className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={handleSubmit}
          >
            Confirmar asistencia
          </button>
        </div>
        <div className="text-center">
          {success === true && <p className="text-lg text-white">Asistencia de {namePerson} confirmada</p>}
        </div>
      </div>
    </section>
  );
}
