import Image from "next/image";
import Link from "next/link";
import ScrollToBottomButton from "../scrolldownbutton";

export default function Hero() {
  return (
    <main className="hero min-h-screen">
      <div className="flex flex-col z-0 items-center justify-center max-w-[95rem] p-10 mx-24 my-36 laptop:flex-row-reverse">
        <Image
          src="/imgs/hero.jpg"
          alt="hero image of a microgreen plant"
          width={400}
          height={100}
          priority
          className="img-box"
        />

        <div className="">
          <h1 className="text-6xl  font-nasa">
            Discover the freshest microgreens in Ashburton!
          </h1>

          <h2 className="text-3xl py-6">
            Elevate your meals with our vibrant, nutrient-packed greens,
            cultivated with care and delivered straight to your plate.
          </h2>

          <ScrollToBottomButton/>
        </div>
      </div>
    </main>
  );
}
