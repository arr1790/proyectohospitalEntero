import Link from "next/link";


export default function Home() {
  return (
    <>
      <>
        <div className="flex justify-center">
          <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">
            Hospital
          </h1>
        </div>
        <div className="flex justify-center items-center gap-6">
          <Link
            href="/plantas"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
          >
            PLANTAS
          </Link>
          <Link
            href="/pacientes"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
          >
            PACIENTES
          </Link>
          <Link
            href="/medicinas"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-lg text-center shadow-md transition"
          >
            MEDICINAS
          </Link>
        </div>
      </>
    </>
  );
}
