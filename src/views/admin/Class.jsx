import React from "react";

// components

import ClassModel from "components/Models/ClassModel";
import CardTable from "components/Cards/CardTable";
import CardTb from "components/Cards/CardTb";
import CardBasic from "components/Cards/CardBasic";
import CardUsed from "components/Cards/CardUsed";



export default function Class() {
  

  return (
    <>
     <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-2 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                        <div className="relative w-full max-w-full flex-grow flex-1">
                            <form className="mt-2 mb-2">
                              <div className="relative w-full max-w-full flex-1 mt-2">
                                <ClassModel 
                                 
                                 />
                              </div> 
                            </form>
                        </div>
                    {/* <ClassModel /> */}
                        
                    </div>
                </div>
          </div>
        </div>
        <div className="w-full mb-12 px-4">
          <CardUsed />
        </div>
      </div>
    </>
  );
}
