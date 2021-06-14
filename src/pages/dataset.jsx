import React, {useEffect, useContext, useState, useMemo} from 'react'
import Navbar from '../components/Navbar/navbar';
import { api } from '../service/apiMl';
import { Context } from '../components/Context/AuthContext';
import DataTable from 'react-data-table-component';


export default function Dataset() {

    const {handleLogout} = useContext(Context)

    const [data,setData] = useState([])

    const [dataTable, setDataTable] = useState(false)

    const [q, setQ] = useState("")

    const [searchColumns, setSearchColumns] =  useState(["_id","data", "bairro"])

    const [searchOptions, setSearchOptions] = useState(false)

    const arrayColumns = data[0] && Object.keys(data[0])

    const columns = []

    let dt;

  if(dataTable === true){
    
    arrayColumns.map((column)=>{
      columns.push({
        name : column,
        selector : column.toLowerCase(),
        sortable : true 
      })
    })

    function search(rows){

      return rows.filter(
        row => 
        searchColumns.some(column => row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1 )
        )
    }

    dt = <DataTable className="DataTable"
          columns={columns}
          data={search(data)}
          sortFunction
          selectableRows
          pagination
          striped
          />
  } else{
    dt = <h1>Loading...</h1>
  }

  useEffect(()=>{
    
    async function getDataTransito(){

      const users = await api.get('/transito/2021')
      .then(res=>{

      setData(res.data)
      
      setDataTable(true)

      setSearchOptions(true)

      })
      .catch(e=>{
        if(e.response.status !== 200){
          handleLogout()
        } 
      })
    }
    getDataTransito()
  },[])

    return (
        <>
        <Navbar/>
        <div className="dataset">
        <div className="dataset-content">

        <input type="text" placeholder="Procurar" value={q} onChange={(e)=> setQ(e.target.value)} />

            <div className={dataTable? "dataset-search" : "null"}>
              {
                arrayColumns && arrayColumns.map((column)=> <label>
                    
                    <input type="checkbox" checked={searchColumns.includes(column)} onChange={(e)=> {
                      const checked = searchColumns.includes(column)
                      setSearchColumns((prev) => checked
                        ? prev.filter((sc) => sc !== column)
                        :[...prev, column]
                        )
                    }} />
                    {column}
                </label>)
              }
            </div>

          {dt}
        </div>
        
        </div>
        </>
    )
}
