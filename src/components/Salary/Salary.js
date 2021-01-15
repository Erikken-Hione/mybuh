import React, { useState } from 'react';
import PopupContainer from '../Popup/PopupContainer';
import PopupContent from '../Popup/PopupContent';

const Salary = ({row}) => {  

   const [open, setOpen] = useState(false);

   return (
      <td>
         <button onClick={() => setOpen(true)}>E</button>

         <PopupContainer open={open} onClose={() => setOpen(false)}>
            <PopupContent id={row.id}/>  
         </PopupContainer>

      </td>
   );
}

export default Salary;
