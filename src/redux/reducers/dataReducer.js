import DATABASE from '../../data/data';

let initialData = DATABASE; 

const dataReducer = ( state = initialData, action ) => {
   switch (action.type) {
      //ADD NEW ROW
      case 'ADD':
         const newRow = {
            имя: '',
            должность: '',
            статусы: {
                резидент: '',
                пенсионер: '',
                инвалид: '',
            },
            оклады: []
         }   
         const newState = [...state, newRow];
         return newState;
      
      //UPDATE CELL
      case 'UPDATE':
         const { value, index, id } = action.payload;
         
         const data = [...state];
         
         const [removed] = data.splice(index, 1);
         const keys = id.split('.');

         if (keys.length < 2) {
            removed[id] = value;
            data.splice(index, 0, removed);
         } else {
            removed[keys[0]][keys[1]] = value;
            data.splice(index, 0, removed);
         }
         return data;

      //IMITATE SAVING PROCESS
      case 'SAVE':
         alert('Проверьте log');
         console.log(state);
         return state;
      
      //ADD NEW SALARY
      case 'ADDSALARY':
         const { date, salaryValue, rowId } = action.payload;
         const newSalary = {
            'date': date,
            'value': salaryValue
         } 

         const dataset = [...state];
         const row = [...dataset[rowId].оклады, newSalary]
         dataset[rowId].оклады = row;

         return dataset;     

      //default case - return current state
      default:
         return state;
   }
}

export default dataReducer;