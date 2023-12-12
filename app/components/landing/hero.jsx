import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <main className="hero min-h-screen">
      <div className="flex flex-col z-0 items-center justify-center max-w-[95rem] p-5 m-10 mr-20 mt-36 mb-36 laptop:flex-row-reverse">
        <Image
          src="/imgs/hero.jpg" 
          alt="hero image of a microgreen plant"
          width={400}
          height={100}
          priority
          className="img-box"
        />

        <div className=""> 
          <h1 className="text-7xl  font-nasa">
            Discover the freshest microgreens in Ashburton!
          </h1>

          <h2 className="text-4xl py-6">
            Elevate your meals with our vibrant, nutrient-packed greens,
            cultivated with care and delivered straight to your plate.
          </h2>

          <Link href="/">
            <button className="custom-btn ">contact us!</button>
            {/* goes down the page */}
          </Link>
        </div>
      </div>
    </main>
  );
}
