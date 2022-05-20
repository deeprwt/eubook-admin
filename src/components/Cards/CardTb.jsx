import React,{ useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import axios from "axios";
import { Input } from "postcss";

const CardTb = () =>{
    const [search, setSeacrch] = useState("");
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const getCountries = async ()=>{
      try {
        const response = await axios.get('https://restcountries.com/v2/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    const columns = [
      {
        name:"Country Name",
        selector: row => row.name,
        sortable: true,
      },
      {
        name:"Country Native Name",
        selector: row => row.nativeName,
      },
      {
        name:"Country Capital",
        selector: row => row.capital,
      },
      {
        name:"Country Flag",
        selector: (row) => <img width={50} height={50} src={row.flag} alt="" />,
      },
      {
          name: "Action",
          cell: (row) => <button className="bg-pink-500 text-white active:bg-pink-600 uppercase text-sm px-2 py-1 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          onClick={() => alert(row.alpha2Code)}
          >
          Edit</button>
      }
    ]
  
  
    useEffect(() => {
      getCountries();
    }, [])

    useEffect(() => {
       const result = countries.filter(country => {
         return country.name.toLowerCase().match(search.toLocaleLowerCase());
       });

       setFilteredCountries(result);

    }, [search])

    return(<DataTable 
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
    )
}

export default CardTb;