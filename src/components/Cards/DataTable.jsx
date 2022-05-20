import React from 'react'
import JsData from "./data";
import DataTable from "react-data-table-component";


const DataTables = () => {

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

    useEffect(() => {
      getCountries();
    }, [])

    useEffect(() => {
       const result = countries.filter(country => {
         return country.subject.toLowerCase().match(search.toLocaleLowerCase());
       });

       setFilteredCountries(result);

    }, [search])

  return (
    <DataTable
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

export default DataTables