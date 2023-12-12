import Hero from "./components/landing/hero"
import Slctproducts from "./components/landing/slctproducts"
import Services from "./components/landing/services"
import Testimonials from "./components/landing/testimonials"
import Contact from "./components/contact"

export default function Home() {
  return (
    <main>
      <Hero/>
      <hr className="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <Slctproducts/>
      <hr className="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <Services/>
      <hr className="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <Testimonials/>
      <hr className="w-80 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700"/>
      <Contact/>
    </main>
  )
}
