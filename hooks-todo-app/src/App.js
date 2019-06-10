import React from "react";
import TodoApp from "./TodoApp";

// function countReducer(state, action) {
//   switch (action.type) {
//     case 'INCEREMENT':
//       return { count: state.count + action.amount };
//     case 'DECEREMENT':
//       return { count: state.count - action.amount };
//     case 'RESET':
//       return { count: 0 }
//     default:

//   }

// }

function App() {
  // const [state, dispatch] = useReducer(countReducer, { count: 0 })
  return (
    <TodoApp/>
    // <div>
    //   <h1>{state.count}</h1>
    //   <button onClick={() => dispatch({ type: 'INCEREMENT', amount: 1 })}> Add 1</button>
    //   <button onClick={() => dispatch({ type: 'INCEREMENT', amount: 5 })}> Add 5</button>

    //   <button onClick={() => dispatch({ type: 'DECEREMENT', amount: 1 })}>Subtract 1</button>
    //   <button onClick={() => dispatch({ type: 'RESET'})}>RESET</button>

    // </div>
  );
}

export default App;
