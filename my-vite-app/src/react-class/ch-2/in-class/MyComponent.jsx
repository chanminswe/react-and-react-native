import { Component } from "react";
import Example from "./Example";
import { First , Second } from "./Example";


//state 
//constuctor
class MyComponent extends Component{
    render(){
        return(
            <p>My Component</p>
        )
    }
}

//state mangement 
//hooks 
//basic Hooks (useState , useContext , useEffect);
//hooks (useReducer); 
function MyFunctionalComponent(){
    return(
        <p>My Functional Component</p>
    )
}

export default MyComponent;