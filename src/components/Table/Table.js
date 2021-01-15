import React, { useMemo } from 'react';
import { useTable } from 'react-table';
import { useSelector } from 'react-redux';
import { COLUMNS } from '../Column/Column';
import EditableCell from './EditableCell';
import './Table.css';
import Salary from '../Salary/Salary';

const Table = () => {
   
   //gettings state from redux's state
   const DATABASE = useSelector(state => state.data);
   
   // Set our editable cell renderer as the default Cell renderer
   const defaultColumn = {
      Cell: EditableCell,
    }

   //documentation
   //render only if there are some changes
   const columns = useMemo(() => COLUMNS, []);
   const data = useMemo(() => DATABASE, [DATABASE]);

   const tableInstance = useTable({
      columns,
      data,
      defaultColumn
   });

   //getting table components
   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance;

   return (
      <table {...getTableProps()}>
         <thead>
            {
               headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {
                        headerGroup.headers.map((column) => (
                           <th {...column.getHeaderProps()}>
                              {
                                 column.render('Header')
                              }
                           </th>
                        ))
                     }
                  </tr>
               ))
            }
         </thead>
         <tbody {...getTableBodyProps()}>
            {
               rows.map((row) => {
                  prepareRow(row);
                  return (
                     <tr {...row.getRowProps()}>
                        {
                           row.cells.map( cell => (
                              <td {...cell.getCellProps()}>
                                 {
                                    cell.render('Cell')
                                 } 
                              </td>
                           ))
                        }

                        <Salary row={row}/>    
                     </tr>
                  )
               })
            }
         </tbody>
      </table>
   );
}

export default Table;