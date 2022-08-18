const initialData = {
    list: []
}

// const[list,setList] = useState([]); ahi je rite state define karta ta e redux ma state = initialData em karyu 6

const todoReducers = (state=initialData, action)=>{
    switch (action.type) {
        case "ADD_TODO":
            const {id,data} = action.payload;
            return{
              ...state, //Initial state ne get karva
              list: [   //todo ma display karvo 6 je data, eni mate aa array banayo 6
                 ...state.list,  //je pehla na todo hase eto pacha display karavana j
                 {
                    // id,   avi rite
                    // data  pan chale
                     id: id,
                     data: data
                 }
              ]
            }

            case "DELETE_TODO":
                const newList = state.list.filter((elem)=> elem.id !== action.id)  //aa command filter karse ane etla j output batavse jeni id Todo.js mathi aai hase tena sivay ni badhi todo list dekhadse...ahi e badha todo ne filter karine ek array (newList) ma lai lidhi ane pachi tene list ma pass kari...etle je todo ne target karyo to tena sivay badha todo dekhase
                return{
                  ...state,
                  list: newList
                }

            case "REMOVE_TODO":
                return{
                    ...state,
                    list: []
                    }
    
        default:
            return state;
    }
}

export default todoReducers;