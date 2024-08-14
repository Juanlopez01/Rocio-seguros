import React from 'react'

type Props = {}

export default function ContactForm({}: Props) {
  return (
<div className="lg:pl-12">
        <div className="overflow-hidden bg-[#021F25] rounded-md">
          <div className="p-6 sm:p-10">
            <h3 className="text-3xl font-semibold text-white">¡Recibí atención personalizada!</h3>
            <p className="mt-4 text-base text-gray-300">
                Obtené los seguros al mejor precio del mercado.
            </p>

            <form action="#" method="POST" className="mt-4">
              <div className="space-y-6">
                <div>
                  <label htmlFor="" className="text-base font-medium text-white">
                    Nombre
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Escribe tu nombre"
                      className="block w-full px-4 py-4 text-[#04ABCB] placeholder-gray-500 transition-all duration-200 bg-transparent border border-[#04ABCB] rounded-md focus:outline-none focus:ring-[#04ABCB] focus:border-[#04ABCB] caret-[#04ABCB]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium text-white">
                    Email
                  </label>
                  <div className="mt-2.5 relative">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Escribe tu email"
                      className="block w-full px-4 py-4 text-[#04ABCB] placeholder-gray-500 transition-all duration-200 bg-transparent border border-[#04ABCB] rounded-md focus:outline-none focus:ring-[#04ABCB] focus:border-[#04ABCB] caret-[#04ABCB]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="" className="text-base font-medium text-white">
                    Consulta
                  </label>
                  <div className="mt-2.5 relative">
                    <textarea
                      name=""
                      id=""
                      placeholder="Deje su consulta"
                      className="block w-full px-4 py-4 text-[#04ABCB] placeholder-gray-500 transition-all duration-200 bg-transparent border border-[#04ABCB] rounded-md focus:outline-none focus:ring-[#04ABCB] focus:border-[#04ABCB] caret-[#04ABCB]"
                      rows={4}></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-black transition-all duration-200 bg-[#04ABCB] border border-transparent rounded-full focus:outline-none hover:bg-[#236a78f8] focus:bg-[#236a78f8]"
                  >
                    Enviar consulta
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
  )
}



//       <div className="my-[5%] flex h-full flex-col gap-[5%] bg-[#021F25] text-white py-9 px-9 rounded-2xl shadow-xl drop-shadow-xl">
//       <div className="mxa-md:text-center flex flex-col gap-2">
//           <h2 className="text-3xl font-medium max-md:text-xl">¡Recibí atención personalizada!</h2>
//           <h3 className="text-xl max-md:text-lg">Obtené los seguros al mejor precio del mercado.</h3>
//       </div>
//       <form
//       className="mt-4 flex items-center max-w-[450px] flex-col place-content-center gap-3 p-2 max-md:max-w-[350px]"
//       >
//           <div className="flex w-[350px] flex-col gap-4 max-md:w-[340px]">
//               <div className="flex flex-col gap-1">
//                   <div className="font-semibold">Name</div>
//                       <input
//                       type="text"
//                       className="bg-transparent border-[#04ABCB] rounded-xl border-solid border-2 placeholder:px-2 placeholder:py-3 focus:border-4 "
//                       required
//                       placeholder="name"
//                       />
//                   </div>
//               <div className="flex flex-col gap-1">
//                   <div className="text-gray-500">Phone</div>
//                       <input type="text" className="bg-transparent border-[#04ABCB] rounded-xl border-solid border-2 placeholder:px-2 placeholder:py-3" required placeholder="phone" />
//                   </div>
//                   <div className="flex flex-col gap-1">
//                       <div className="text-gray-500">Email</div>
//                       <input
//                           type="email"
//                           className="bg-transparent border-[#ffffff] rounded-xl border-solid border-2 placeholder:px-2 placeholder:py-3"
//                           required
//                           placeholder="email"
//                           id="email"
//                       />
//                   </div>

//                   <div className="flex w-full flex-col gap-2">
//                       <div className="text-gray-500">Enquiry</div>
//                           <textarea
//                           className="input max-h-[250px] min-h-[40px] w-full resize-y"
//                           placeholder="enquiry"></textarea>
//                       </div>
//                   </div>

//               <button
//                   type="submit"
//                   className="btn ml-auto mt-5 transition-transform duration-[0.3s] hover:translate-x-2"
//               >
//                   <span>Submit</span>
//                   <i className="bi bi-arrow-right"></i>
//               </button>
//       </form>

// </div>