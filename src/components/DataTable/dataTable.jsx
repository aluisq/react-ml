import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
import './dataTable.css'

export default function DataTable({data}) {

  const columns = data[0] && Object.keys(data[0])

  return (
    <>
    <Table responsive bordered striped hover size="sm">
       <thead>
         <tr>
           {data[0] && columns.map((heading)=> <th>{heading }</th> )}
         </tr>
       </thead>
       <tbody>
        {data.map(row => <tr>
          {
            columns.map(column => <td id={row['id']}>{row[column]}</td>)
          }
        </tr>)}
       </tbody>
     </Table>
    {/* <span>{JSON.stringify(data)}</span> */}
    </>
  )
}
