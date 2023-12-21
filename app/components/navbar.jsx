import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="font-nasa navbar">
      <div className="text-2xl flex-1 ml-8 mt-6 p-3">
        <Link href="/">tiny space greenz</Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal mr-8 mt-6 px-1 text-2xl">
          <li className="transition ease-in-out delay-200 hover:scale-110 ">
            <Link href="/about">about</Link>
          </li>
          <li className="transition ease-in-out delay-200 hover:scale-110">
            <Link href="/products"> products</Link>
          </li>
          <li className="transition ease-in-out delay-200 hover:scale-110">
            <a href="/">
              <Image
                src="/icons/bag.svg"
                alt="shopping bag icon"
                width={30}
                height={30}
                priority
              />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
