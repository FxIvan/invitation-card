import Image from "next/image";
import styles from "./styles.module.css";
import lourdes from "../../public/image/imagenLourdes.jpg";

export default function LandingPrincipal() {
  return (
    <section
      className={`${styles.background} relative bg-black h-screen w-screen`}
    >
      <div className="container mx-auto relative top-0">
        <div>
          <Image
            src={lourdes}
            alt="Lourdes fondo"
            width={10000000}
            height={10000}
            className="mx-auto h-screen w-full md:w-1/2 object-cover brightness-50"
          />
        </div>
      </div>
    </section>
  );
}
