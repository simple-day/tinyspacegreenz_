import Image from "next/image";
import Link from "next/link";


export default function Footer() {
  return (
    <main className="footer items-center justify-center gap-16 font-nasa"> 
      <div className="flex flex-row m-6 mb-7">
        <a
          href="mailto:sales@tinyspacegreenz.co.nz"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/icons/email.svg"
            alt="email logo"
            width={30}
            height={30}
            priority
            className="m-2 transition ease-in-out delay-100  hover:scale-110 "
          ></Image>
        </a>

        <a
          href="https://www.facebook.com/people/Tiny-Space-Greenz/100084206993418/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="icons/facebook.svg"
            alt="facebook logo"
            width={30}
            height={30}
            priority
            className="m-2 transition ease-in-out delay-100 hover:scale-110"
          ></Image>
        </a>
      </div>

      <div className="m-6 mb-7 transition ease-in-out delay-200 hover:scale-110">
        <Link href="/"><h1 className="text-2xl">tiny space greenz</h1></Link>
      </div>

      <div className="m-6 mb-7 cursor-pointer"><h1 className="text-2xl">made by adaysha_</h1></div>
    </main>
  );
}
