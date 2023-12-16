import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";


const josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tiny Space Greenz",
  description: "Ashburton Microgreens",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={josefin.className}>
        <Navbar/>
        <hr className="h-px my-5 bg-gray-200 border-0" />
        {children}
        
      </body>
    </html>
  );
}
