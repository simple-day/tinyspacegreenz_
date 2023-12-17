import Link from "next/link";
import Image from "next/image";

export default function Services() {
  return (
    <main className="hero min-h-screen">
      <section class="z-0 items-center justify-center max-w-[95rem]">
        <br />
        <h1 class="my-5 mx-5 text-center text-7xl font-bold font-nasa tracking-[2rem]">
          SERVICES
        </h1>
        <br />
        <div class="flex flex-wrap mx-9 my-10 px-20">
          <div class="mb-6 w-full shrink-0 grow-0 basis-auto px-3  laptopL:mb-0 laptopL:w-4/12">
            <p class="mb-6 font-bold uppercase text-violet-500">
              Tiny Space Greenz
            </p>
            <h2 class="mb-6 text-4xl font-bold font-nasa">Why Choose Us?</h2>

            <p class="mb-12 text-xl text-fuchsia-100">
              At Tiny Space Greenz, we go beyond providing microgreens; we
              deliver a culinary journey. Our dedication to quality,
              sustainability, and customer satisfaction sets us apart. Join the
              growing community of food enthusiasts who trust us to bring
              freshness to their tables. Ready to elevate your meals with the
              finest microgreens? Explore our offerings and embark on a
              flavorful adventure today!
            </p>
            <Link href="/">
              <button className="btn  rounded-none font-nasa">see more</button>
              {/* goes down the page */}
            </Link>
          </div>
          
          <div class="mb-md-0 mb-6 w-full shrink-0 grow-0 basis-auto px-3 laptop:w-8/12">
            <div class="flex flex-wrap">
              <div class="mb-12 w-full shrink-0 grow-0 basis-auto laptop:w-6/12 laptop:px-3">
                <div class="flex">
                  <div class="shrink-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <Image
                        src="/icons/box.svg"
                        alt="contact image with microgreen image"
                        width={100}
                        height={20}
                      />
                    </div>
                  </div>
                  <div class="ml-4 grow">
                    <h3 class="mb-3 font-bold font-nasa text-violet-500">
                      Free Shipping, Above $5 Dollars Only
                    </h3>
                    <p class="text-fuchsia-100 ">
                      Discover the freshness of our premium microgreens, and
                      enjoy free shipping on orders above $5. Elevate your
                      culinary creations without the worry of additional
                      shipping costs.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-12 w-full shrink-0 grow-0 basis-auto laptop:w-6/12 laptop:px-3">
                <div class="flex">
                  <div class="shrink-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <Image
                        src="/icons/leaf.svg"
                        alt="contact image with microgreen image"
                        width={100}
                        height={20}
                      />
                    </div>
                  </div>
                  <div class="ml-4 grow">
                    <h3 class="mb-3 font-bold font-nasa text-violet-500">
                      Safe and solid
                    </h3>
                    <p class="text-fuchsia-100 ">
                      Experience the pure essence of our microgreens – spray
                      free and 100% guaranteed. Elevate your meals with the
                      confidence of freshness and quality in every bite.
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-12 w-full shrink-0 grow-0 basis-auto laptop:w-6/12 laptop:px-3">
                <div class="flex">
                  <div class="shrink-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <Image
                        src="/icons/moneybag.svg"
                        alt="contact image with microgreen image"
                        width={100}
                        height={20}
                      />
                    </div>
                  </div>
                  <div class="ml-4 grow">
                    <h3 class="mb-3 font-bold font-nasa text-violet-500">
                      Huge Savings at Lowest Prices
                    </h3>
                    <p class="text-fuchsia-100 ">
                      Indulge in the finest microgreens with huge savings at the
                      lowest prices. Elevate your culinary experience without
                      compromising your budget."
                    </p>
                  </div>
                </div>
              </div>

              <div class="mb-12 w-full shrink-0 grow-0 basis-auto laptop:w-6/12 laptop:px-3">
                <div class="flex">
                  <div class="shrink-0">
                    <div class="mb-6 inline-block rounded-md bg-primary-100 p-4 text-primary">
                      <Image
                        src="/icons/return.svg"
                        alt="contact image with microgreen image"
                        width={100}
                        height={20}
                      />
                    </div>
                  </div>
                  <div class="ml-4 grow">
                    <h3 class="mb-3 font-bold font-nasa text-violet-500">
                      Easy Returns
                    </h3>
                    <p class="text-fuchsia-100 ">
                      Enjoy the confidence of easy returns – our commitment to
                      ensuring your satisfaction with every order of premium
                      microgreens
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
