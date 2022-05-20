
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import JsData from "./data";

const CardUsed = () => {
    
    const [search, setSeacrch] = useState("");
    const [countries, setCountries] = useState(JsData);
    const [filteredCountries, setFilteredCountries] = useState(JsData);
   

    const getCountries = async ()=>{
        try {
          
          setCountries(JsData);
          setFilteredCountries(JsData);
        } catch (error) {
          console.log(error);
        }
      };

    const columns = [
        {
          name:"Serial No",
          selector: row => row.id,
          sortable: true,
        },
        {
          name:"Class",
          selector: row => row.class,
        },
        {
          name:"Subject",
          selector: row => row.subject,
        },
        {
            name:"Status",
            selector: row => row.status,
        },
        {
            name:"Created_at",
            selector: row => row.created_at,
        },
        {
            name: "Action",
            cell: (row) => {
            return <>
            <button className="bg-pink-500 text-white active:bg-pink-600 uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => alert(row.id)}
            >
            <i class='fas fa-edit'></i></button>
            <button className="bg-pink-500 text-white active:bg-pink-600 uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => alert(row.id)}
            >
            <i class='fa fa-check-square'></i></button>
            <button className="bg-red-700 text-white active:bg-pink-600 uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            onClick={() => alert(row.id)}
            >
           <i class='fas fa-trash'></i></button>
            </> 
        }
        },
      ]


      
    useEffect(() => {
        getCountries();
      }, [])
  
      useEffect(() => {
         const result = countries.filter(country => {
           return country.subject.toLowerCase().match(search.toLocaleLowerCase());
         });
  
         setFilteredCountries(result);
  
      }, [search])

    return <DataTable
    title="Card List"
    columns={columns}
    data={filteredCountries} 
    pagination 
    selectableRows
    selectableRowsHighlight
     highlightOnHover
     subHeader
     subHeaderComponent={
         <input type="text" placeholder="Search Here"
          className=" px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none font-normal w-1/4 "
          value={search}
           onChange={(e) => setSeacrch(e.target.value)}
         />
     }
    />
}

export default CardUsed;