import Slctproducts from "./components/landing/slctproducts";
import Services from "./components/landing/services";
import Testimonials from "./components/landing/testimonials";
import Contact from "./components/contact";
import Heroo from "./components/landing/heroo";
Heroo;

export default function Home() {
  return (
    <main>
      <Heroo/>
      <hr className=" mobS:w-48 w- tablet:w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <Slctproducts />
      <hr className="mobS:w-48 w- tablet:w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <Services />
      <hr className="mobS:w-48 w- tablet:w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <Testimonials />
      <hr className="mobS:w-48 w- tablet:w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
      <Contact />
    </main>
  );
}
