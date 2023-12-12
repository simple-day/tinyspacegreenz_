import Image from "next/image";

export default function Contact() {
  return (
    <main className="hero min-h-screen">
      <div className="flex flex-col z-0 items-center justify-center max-w-[80rem] p-5 m-10 mr-20 mt-36 mb-36">
        {/* heading */}
        <div className="text-center m-5">
          <h1 className="font-nasa font-bold text-7xl">COLLABORATE WITH US!</h1>
          <br />
          <p className="text-4xl">
            "Connect with us to explore collaboration opportunities. We welcome
            inquiries, partnerships, and conversations about bringing fresh
            ideas to life. Let's grow together!"
          </p>
        </div>
        <br />
        {/* contact*/}
        <div>
          <form className=" w-screen max-w-[70rem]">
            <div className="form-control p-3">
              <label className="label">
                <span className="label-text text-xl text-fuchsia-100">FIRST NAME</span>
              </label>
              <input
                type="text"
                placeholder="first name"
                className="input input-bordered text-slate-950 rounded-none"
                required
              />
            </div>
            <div className="form-control p-3">
              <label className="label">
                <span className="label-text  text-xl text-fuchsia-100">LAST NAME</span>
              </label>
              <input
                type="text"
                placeholder="last name"
                className="input input-bordered text-slate-950 rounded-none"
                required
              />
            </div>
            <div className="form-control p-3">
              <label className="label">
                <span className="label-text  text-xl text-fuchsia-100 ">EMAIL</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered text-slate-950 rounded-none"
                required
              />
            </div>
            <div className="form-control p-3">
              <label className="label">
                <span className="label-text  text-xl text-fuchsia-100">MESSAGE</span>
              </label>
              <textarea
                className="textarea textarea-bordered text-slate-950 rounded-none"
                placeholder="message"
                required
              />
            </div>
            <div className="p-3 ">
              <button className="custom-btn ">SUBMIT</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
