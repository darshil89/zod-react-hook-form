import Link from "next/link";
export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Link
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded mx-auto"
          href="Signup"
        >
          Register
        </Link>
      </div>
    </>
  );
}
