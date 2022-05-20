import React from "react";

export default function ProductModel() {
  const [showModal, setShowModal] = React.useState(false);

   const[firstName, setFistName] = React.useState ({
     productname:"",
     image:""
   });

   const inputForm = (e) => {

    const {value, name} = e.target;

    setFistName((preValue) => {
        return{
          ...preValue,
          [name]: value
        }
    })

   }

console.log(firstName);

  return (
    <>
        <div className="relative w-full max-w-full flex-1 text-right">
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Add
            </button>
        </div>
      {showModal ? (
        <>
           {/* model body*/}
           <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none mr-4 mt-10  "
           
          >
            <div className="relative my-6 mx-auto max-w-3xl">
              {/*content*/}
              <form action="">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col  bg-blueGray-100 outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-3 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-blueGray-400 text-sm font-bold uppercase">
                      Modal Title
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 m-4 flex-auto">
                      <div className="flex flex-wrap items-center">
                              <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="grid-password"
                                    >
                                      Product Name 
                                    </label>
                                    <input
                                      type="text"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="lucky jesse"
                                      name="productname"
                                      value={firstName.productname}
                                      onChange={inputForm}
                                    />
                                  </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="grid-password"
                                    >
                                      Class
                                    </label>
                                    <select onChange={inputForm} name="class" id=""
                                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                     
                                   >
                                          <option value="first">1</option>
                                          <option value="second">2</option>
                                          <option value="third">3</option>
                                          <option value="four">4</option>
                                          <option value="five">5</option>
                                   </select>
                                  </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="grid-password"
                                    >
                                      Subject
                                    </label>
                                    <select 
                                     onChange={inputForm}
                                    name="subject" id=""
                                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    >
                                          <option value="gk">General Knowledge</option>
                                          <option value="science">Science</option>
                                          <option value="maths">Maths</option>
                                          <option value="englis">English</option>
                                   </select>
                                  </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="grid-password"
                                    >
                                      Series
                                    </label>
                                    <select 
                                    onChange={inputForm}
                                    name="book" id=""
                                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                    >
                                          <option value="book1">book1</option>
                                          <option value="book2">book2</option>
                                          <option value="book3">book3</option>
                                          <option value="book4">book4</option>
                                   </select>
                                  </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="grid-password"
                                    >
                                      Image
                                    </label>
                                    <input
                                      type="url"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="Image Url"
                                      name="image"
                                      value={firstName.image}
                                      onChange={inputForm}
                                    />
                                  </div>
                                </div>
                              </div>

                              <hr className="mt-6 border-b-1 border-blueGray-300" />                          
                      </div>
                    
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}