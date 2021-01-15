import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addNewSalary } from '../../redux/actions/addNewSalary';

const SalaryAdder = ({ rowId }) => {


   const [date, setDate] = useState('');
   const dateHandler = (e) => {
      setDate(e.target.value);
   }

   const [salaryValue, setSalaryValue] = useState('');
   const valueHandler = (e) => {
      setSalaryValue(e.target.value);
   }

   let dispatch = useDispatch();

   const submit = () => {
      if (date && salaryValue) {
         dispatch(addNewSalary({date, salaryValue, rowId}))
         setDate('');
         setSalaryValue('');
      }
   }

   return (
      <tr>
         <td>
            <input type="date" value={date} onChange={dateHandler}/>
         </td>
         <td>
            <input type="text" value={salaryValue} onChange={valueHandler}/>
         </td>
         <td>
            <button
               onClick={() => submit()}
            >
               +
            </button>
         </td>
      </tr>
   );
}

export default SalaryAdder;