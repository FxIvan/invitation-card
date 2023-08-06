"use client";
import Image from "next/image";
import lourdes from "../../public/image/imagenLourdes.jpg";
import "./inedx.css";
import empleadoDeComercio from "../../public/image/empleadoComercio.webp";

export default function LandingPrincipal() {
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
      <div className="relative z-10 flex flex-col justify-start h-screen md:w-1/2 mx-auto">
        <div className="mx-4 text-white text-sm flex flex-col justify-center">
          <div className="text-clamp-xl-3 mt-8 mb-16 text-center">
            <h1>LOURDES</h1>
          </div>
          <div className="w-full ">
            <div className="w-[80%] mx-auto">
              <p>
                Hay momentos inolvidables que se atesoran en el corazon para
                siempre por esa razón, quiero que compartas conmigo este dia tan
                especial
              </p>
            </div>
          </div>
          <div className="my-8">
            <div className="text-center">
              <h2 className="text-4xl">Mis 15 años</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-row text-white justify-between mx-4 text-center py-4 items-center">
          <div className="w-1/3 border-slate-50 border-r-2">Septiembre</div>
          <div className="w-1/3 border-slate-50 border-r-2 text-4xl">02</div>
          <div className="w-1/3">2023</div>
        </div>
        <div className="mx-4 text-center py-4 text-white my-8">
          <div className="text-center my-8">
            <h4>Ubicacion</h4>
          </div>
          <div className="text-lg">
            📍 San Martin 515, Quilmes, Buenos Aires
          </div>
          <div className="text-sm my-4">
            Salón Sede Central Empleado de comercio
          </div>
          <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Confirmar asistencia
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 right-1/2 py-4">
          <Image src={empleadoDeComercio} alt="SEC" width={30} height={30} />
        </div>
      </div>
    </section>
  );
}
