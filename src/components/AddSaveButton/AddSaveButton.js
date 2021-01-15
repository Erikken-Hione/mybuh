import React from 'react';
import { addNew } from '../../redux/actions/addNew';
import { saveState } from '../../redux/actions/saveState';
import { useDispatch } from 'react-redux';

const AddButton = () => {

   const dispatch = useDispatch();

   return (
      <div>
         <button onClick={() => dispatch(addNew())}>
            Добавить
         </button>
         <button onClick={() => dispatch(saveState())}>
            Сохранить
         </button>
      </div>
   );
}

export default AddButton;