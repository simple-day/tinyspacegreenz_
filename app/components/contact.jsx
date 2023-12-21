import Image from "next/image";

export default function Contact() {
  return (
    <main className="hero min-h-screen">
      <footer className="footer footer-center p-20 rounded m-15">
        <div>
          <h2 className=" text-4xl">
            Explore the diverse world of microgreens with Tiny Space Greenz, and
            elevate your culinary creations to a whole new level. We invite you
            to get in touch with us to discover how our microgreens can enhance
            your dishes. Join us in the pursuit of freshness and flavor – choose
            Tiny Space Greenz today!
          </h2>
        </div>
        <nav>
          <div className="flex flex-row m-6 gap-3">
            <a
              href="mailto:sales@tinyspacegreenz.co.nz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/icons/email.svg"
                alt="email logo"
                width={50}
                height={50}
                priority
                className="m-2 transition ease-in-out delay-100  hover:scale-110  "
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
                width={50}
                height={50}
                priority
                className="m-2 transition ease-in-out delay-100 hover:scale-110"
              ></Image>
            </a>
          </div>
        </nav>
        <div>
          <h1 className="font-nasa text-5xl">tiny space greenz</h1>
        </div>
        <aside>
          <p className=" text-lg">made by adaysha_</p>
        </aside>
      </footer>
    </main>
  );
}
