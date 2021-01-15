export const COLUMNS = [
   {
      Header: () => null,
      id: 'expander',
      Cell: ({ row }) => (
         <div className="tooltip">
            <button onClick={() => {
               const el = document.createElement('textarea');
               el.value = row.original.имя;
               document.body.appendChild(el);
               el.select();
               document.execCommand('copy');
               document.body.removeChild(el);

               let elementId = "myTooltip" + row.index;
               var tooltip = document.getElementById(elementId);
               tooltip.innerHTML = 'Буфер: ' + el.value;
            }}
            
            onMouseOut={() => {
               let elementId = "myTooltip" + row.index;
               var tooltip = document.getElementById(elementId);
               tooltip.innerHTML = 'Скопировать';
            }}

            >
               <span className="tooltiptext" id={"myTooltip" + row.index}>Скопировать</span>
               ✎
            </button>
         </div>
      )
   },
   {
      Header: 'Имя Фамилия',
      accessor: 'имя'
   },
   {
      Header: 'Должность',
      accessor: 'должность'
   },
   {
      Header: 'Резидент',
      accessor: 'статусы.резидент'
   },
   {
      Header: 'Пенсионер',
      accessor: 'статусы.пенсионер'
   },
   {
      Header: 'Инвалид',
      accessor: 'статусы.инвалид'
   },
   {
      Header: 'Оклады',
      accessor: 'оклады',
      Cell: row => {
         return (
            <div style={{textAlign: 'left', padding: '2px', fontSize: '14px', cursor: 'pointer'}}>
               {
                  Object.keys(row.value).length === 0
                  ? (
                     <div style={{minWidth: '100%', minHeight: '10px'}}>
                        empty
                     </div>
                  ) : (
                     <div style={{minWidth: '100%', minHeight: '10px'}}>
                        {  
                           row.value.map((slr, index) => (
                              <div key={index}>
                                 <span>{++index}. </span>
                                 <span>[{slr['date']}]: </span>
                                 <span>{slr['value']} KZT</span>
                              </div>
                           ))
                        }
                     </div>
                  )
               }
            </div>
         )
      }
   }
]
