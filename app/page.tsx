import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative px-4 overflow-hidden">

      {/* --- Le Logo (poussé vers le haut) --- */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <Image
          src="/logo.png"
          alt="Play To Sky Productions Background Logo"
          width={2500}
          height={2500}
          priority
          quality={100}
          style={{ width: "auto", height: "auto" }}
          /* Le retour du -translate-y-24 pour remonter le logo */
          className="w-auto h-auto max-w-screen sm:max-w-[90vw] md:max-w-[100vw] lg:max-w-[130vw] xl:max-w-[180vw] object-contain transform -translate-y-24"
        />
      </div>

      {/* --- Le Texte (poussé vers le bas) --- */}
      {/* J'ai remis translate-y-32 pour le décaler vers le bas et fuir le bloc du logo */}
      <div className="z-10 text-center flex flex-col items-center gap-6 w-full max-w-7xl mx-auto transform translate-y-32">

        <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl tracking-wide text-center leading-tight px-4 lg:whitespace-nowrap">
          Movies Production Society
        </h1>

        <p className="text-gray-400 text-xs sm:text-sm md:text-base font-light uppercase tracking-widest mt-2">
          Coming Soon
        </p>

        <div className="mt-4">
          <Link
            href="https://playtosky.com/"
            className="group flex items-center gap-2 text-xs md:text-sm text-gray-500 hover:text-white transition-colors duration-300"
          >
            <span className="transition-transform duration-300 group-hover:-translate-x-1">
              ←
            </span>
            Back to Play To Sky Portal
          </Link>
        </div>
      </div>

    </div>
  );
}