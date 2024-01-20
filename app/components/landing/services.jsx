import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <main>
      <section className=" ">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 laptopL:px-8 laptopL:py-16">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-5xl font-bold sm:text-4xl font-nasa">
              Welcome to Tiny Space Greenz!
            </h2>
            <br />
            <p className="mt-4 text-xl text-gray-300">
              At Tiny Space Greenz, we&apos;re passionate about bringing the
              freshest, most nutritious microgreens to the Mid Canterbury
              region. Our journey began with a commitment to quality and
              innovation, making us the very first commercial microgreen and
              vertical farm in this beautiful area.
              <br />
              What sets us apart? We grow our microgreens in nutrient-rich soil
              within a carefully controlled environment. This dedication to
              perfection ensures that every leaf bursts with flavor and packs a
              powerful nutritional punch. Whether you&apos;re a culinary enthusiast,
              a restaurant owner, or simply someone who appreciates the finest
              greens, our microgreens are a delicious addition to your menu.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8  laptop:grid-cols-3">
            <a
              className="block border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 "
              href="/about"
            >
              <Image
                src="/icons/return.svg"
                alt="contact image with microgreen image"
                width={50}
                height={50}
              />

              <h2 className="mt-4 text-2xl font-bold text-violet-500">
                Easy Returns
              </h2>

              <p className="mt-1 text-xl text-gray-300">
                Enjoy the confidence of easy returns – our commitment to
                ensuring your satisfaction with every order of premium
                microgreens
              </p>
            </a>

            <a
              className="block border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="/about"
            >
              <Image
                src="/icons/leaf.svg"
                alt="contact image with microgreen image"
                width={50}
                height={50}
              />

              <h2 className="mt-4 text-2xl font-bold text-violet-500">
                Safe and solid
              </h2>

              <p className="mt-1 text-xl text-gray-300">
                Experience the pure essence of our microgreens – spray free and
                100% guaranteed. Elevate your meals with the confidence of
                freshness and quality in every bite.
              </p>
            </a>

            <a
              className="block border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10 "
              href="/about"
            >
              <Image
                src="/icons/moneybag.svg"
                alt="contact image with microgreen image"
                width={50}
                height={50}
              />

              <h2 className="mt-4 text-2xl font-bold text-violet-500">
                Huge Savings at Lowest Prices
              </h2>

              <p className="mt-1 text-xl text-gray-300">
                Indulge in the finest microgreens with huge savings at the
                lowest prices. Elevate your culinary experience without
                compromising your budget.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/about"
              className="inline-block custom-btn transition focus:outline-none focus:ring focus:ring-yellow-400"
            >
              See More
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
