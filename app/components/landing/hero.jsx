import Image from "next/image";
import ScrollToBottomButton from "../scrolldownbutton";

export default function Hero() {
  return (
    <main className="hero min-h-screen">
      <div className="flex flex-col z-0 items-center justify-center gap-3 mobS:m-7 tablet:m-8 laptop:p-10 laptop:mx-24 laptop:my-36 laptop:flex-row-reverse laptop:max-w-[95rem]">
        <Image
          src="/imgs/hero.jpg"
          alt="hero image of a microgreen plant"
          width={400}
          height={100}
          priority
          className="img-box"
        />

        <div className="">
          <h1 className="font-nasa mobS:text-3xl tablet:text-6xl">
            Discover the freshest microgreens in Ashburton!
          </h1>

          <h2 className="mobS:text-xl tablet:text-3xl py-6">
            Elevate your meals with our vibrant, nutrient-packed greens,
            cultivated with care and delivered straight to your plate.
          </h2>

          <ScrollToBottomButton />
        </div>
      </div>
    </main>
  );
}
