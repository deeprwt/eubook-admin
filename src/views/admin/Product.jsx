import React from "react";

// components
import ProductMaterialModel from "components/Models/ProductMaterialModel";
import ProductModel from "components/Models/ProductModel";
import CardUsed from "components/Cards/CardUsed";

export default function Product() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="w-full xl:w-12/12 mb-12 xl:mb-0 px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-2 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      
                    </div>
                    <div className="relative w-full max-w-full flex-grow flex-1">
                       <ProductModel />
                    </div>
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