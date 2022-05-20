import React from "react";

export default function ProductSeriesModel() {
  const [showModal, setShowModal] = React.useState(false);
   
  const[firstName, setFistName] = React.useState ({
    name:"",
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
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
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
                              <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                User Information
                              </h6>
                              <div className="flex flex-wrap w-full">
                                <div className="w-full lg:w-6/12 px-4">
                                  <div className="relative w-full mb-3">
                                    <label
                                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                      htmlFor="grid-password"
                                    >
                                      name
                                    </label>
                                    <input
                                      type="text"
                                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                      placeholder="lucky jesse"
                                      name="name"
                                      value={firstName.name}
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
                                      Status
                                    </label>
                                    <select name="status" 
                                     onChange={inputForm}
                                    id=""
                                     className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                                   >
                                          <option value="book1">Active</option>
                                          <option value="book2">Inactive</option>
                                   </select>
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