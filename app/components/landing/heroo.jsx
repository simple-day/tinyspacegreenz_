import Image from "next/image";
import ScrollToBottomButton from "../scrolldownbutton";

export default function Heroo() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 py-16 mobS::px-6 laptop:px-8">
        <div className="grid grid-cols-1 laptop:h-screen laptop:grid-cols-2">
          <div className="relative z-10 laptop:py-16">
            <div className="relative h-64 mobS:h-80 laptop:h-full">
              <Image
                src="/imgs/hero.jpg"
                alt="hero image of a microgreen plant"
                width={400}
                height={100}
                priority
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-[#361f43] bg-opacity-55 ">
            <span className="hidden laptop:absolute laptop:inset-y-0 laptop:-start-16 laptop:block laptop:w-16 laptop:bg-[#361f43] laptop:bg-opacity-65"></span>

            <div className="p-10 laptop:p-24">
              <h2 className="font-nasa mobS:text-3xl tablet:text-5xl text-zinc-50">
                discover the freshest microgreens in Ashburton!
              </h2>

              <p className="mt-4 mb-4 mobS:text-xl tablet:text-2xl">
                Elevate your meals with our vibrant, nutrient-packed greens,
                cultivated with care and delivered straight to your plate.
              </p>

              <ScrollToBottomButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
