import Link from "next/link";

export default function NotFound() {
  return (
    <main className="comingsoon min-h-screen">
      <div className="comingsoon-content flex-col text-center">
        <div className="gap-5">
          <div>
            <h2 className="font-bold underline mobS:text-3xl laptop:text-5xl m-10">
              tiny space greenz
            </h2>
          </div>
          <div className="m-5 ">
            <h1 className="font-nasa mobS:text-6xl laptop:text-8xl m-3">COMING SOON</h1>
            <h2 className=" font-bold mobS:text-3xl laptop:text-5xl ">
              still working on it, <br /> thank you for your patience
            </h2>
          </div>
          <div>
            <Link href="/" >
              <button className="custom-btn m-5">RETURN</button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
