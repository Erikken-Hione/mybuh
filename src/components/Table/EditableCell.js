import React, {useState, useEffect} from 'react';
import { updateData } from '../../redux/actions/updateData';
import { useDispatch } from 'react-redux';

const EditableCell = ({value: initialValue, row: { index }, column: { id }}) => {
   
   const  dispatch = useDispatch();
   
   const [value, setValue] = useState(initialValue);

   const onChange = e => {
      setValue(e.target.value)
   }

   const onBlur = () => {
      dispatch(updateData({value, index, id}))
   }

   useEffect(() => {
      setValue(initialValue)
   }, [initialValue])

   return (
      <input value={value} onChange={onChange} onBlur={onBlur}/>
   )
}

export default EditableCell;