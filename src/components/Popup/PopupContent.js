import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import SalaryAdder from './SalaryAdder';

const PopupContent = ({id}) => {

   const DATABASE = useSelector(state => state.data)
   const salary = DATABASE[id].оклады;

   return (
      <Fragment>
         <table>
            <thead>
               <tr>
                  <th>
                     Дата
                  </th>
                  <th>
                     Сумма
                  </th>
               </tr>
            </thead>
            <tbody>
               {  
                  salary.length
                  ? (
                     salary.map((item, index) => (
                        <tr key={index}>
                           <td>
                              <input type="date" defaultValue={item['date']}/>
                           </td>
                           <td>
                              <input type="text" defaultValue={item['value']}/>
                           </td>
                           <td>
                              KZT
                           </td>
                        </tr>
                     ))
                  ) : (
                     <tr>
                        <td>
                           empty
                        </td>
                        <td>
                           empty
                        </td>
                        <td>
                           KZT
                        </td>
                     </tr>
                  )
               }
               <SalaryAdder rowId={id} />
            </tbody>
         </table>
      </Fragment>
   );
}

export default PopupContent;