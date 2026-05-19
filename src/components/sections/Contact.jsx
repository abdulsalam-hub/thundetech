import {Revalscroll} from "../RevalScroll";
import { useState } from "react";
import emailjs from "emailjs-com"
export const Contact=() =>
{
  const [formData,setFormData]=useState({
  name:"",email:"",message:""})
   const SERVICE_ID = "service_8mgttam";
   const TEMPLATE_ID = "template_xsr5goc";
   const PUBLIC_KEY = "S4GIM2LGQhAX0P7IO";
  const handleSubmit=(e) =>
  {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID,TEMPLATE_ID,e.target,PUBLIC_KEY).then((result) =>
    {
      alert(result.text);setFormData({name:"",email:"",message:""})
    }).catch((err)=>{alert(err.message)})
}
  return (
    <>
      <section
        title="contact developer "
        id="contact"
        className="min-h-screen flex items-center justify-center py-20 px-30"
      >
        <Revalscroll>
          <div className="px-4 w-100">
            <h2
              title="lets talk business"
              className="text-3xl font-bold mb-8 bg-linear-to-r from-blue-700 to-gray-300 bg-clip-text text-transparent text-center"
            >
              Let's Talk !
            </h2>
            <p className="text-xs font-medium text-center  pb-3">
              available for frontend roles and freelancing projects
            </p>
            <form
              title="request form section"
              action=""
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(fv) => {
                    setFormData({...formData, name: fv.target.value});
                  }}
                  required
                  className="hover:shadow-[0_2px_8px_rgba(59,130,246,0.4)] w-full bg-white/5 border text-xl border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-900 focus:bg-blue-500/10 font-xl"
                  placeholder="Name / Company..."
                />
              </div>
              <div className="relative group font-xl hover:shadow-[0_2px_8px_rgba(59,130,246,0.5)] h-13  w-full bg-white/5 border text-xl border-white/10 rounded text-white transition ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(fv) => {
                    setFormData({...formData, email: fv.target.value});
                  }}
                  className="outline-none peer h-full w-full focus:border-gray-900 autofill:bg-blue-500/10 in-autofill:bg-blue-500/10 focus:bg-blue-500/10 capitalize indent-[5ch] not-empty:indent-[8ch]"
                  placeholder=""
                />
                <label
                  htmlFor="email"
                  className="absolute left-0 top-3 peer-user-valid:-top-5 capitalize peer-focus:-top-5 transition-transform duration-300 peer-focus-within:-top-5 peer-not-empty:top-7 peer-valid:-top-5  "
                >
                  e-mail
                </label>
              </div>
              <div className="relative">
                <textarea
                  type="message"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(fv) => {
                    setFormData({...formData, message: fv.target.value});
                  }}
                  required
                  rows={4}
                  className="hover:shadow-[0_2px_8px_rgba(255,255,246,0.2)] w-full bg-white/5 border text-xl border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-gray-900 focus:bg-blue-300/10 font-xl"
                  placeholder="Drop a Message. . . "
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer bg-blue-500 text-center text-white px-6 py-3 rounded font-medium transition-all ease-in relative overflow-hidden hover:-translate-y-1/2 hover:shadow-[0_5px_8px_rgba(255,255,255,0.4)] border hover:border-gray-800"
              >
                DELIVER
              </button>
            </form>
          </div>
        </Revalscroll>
      </section>
    </>
  );
};
