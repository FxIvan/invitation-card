import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black w-full">
      <div className="flex flex-col text-white py-8 container mx-auto">
        <div className="pb-4">
          <Image
            src="/image/gift.png"
            alt="Gift box"
            width={50}
            height={50}
            className="mx-auto"
          />
        </div>
        <div>
          <h3 className="text-lg text-center">
            Mi mejor regalo es tu presencia,
          </h3>
        </div>
        <div className="text-sm text-center pt-4">
          <p>
            pero si deseas hacerme un obsequio, estará abierto el cofre de mis
            ahorros en el salón
          </p>
        </div>
      </div>
    </footer>
  );
}
