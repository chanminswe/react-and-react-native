import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext("permissions");

export class PermissionProvider extends Component {
  state = {
    first: true,
    second: true,
    third: true,
  };
  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default PermissionProvider;

//state
{
  /* 
    value = ?
    
    value = state;



    state = {
    first : true,
    second : false,
    third : true,
    }


    First Second Third
    value[name];

    value[first] = true
    value[second] = false
    value[third] = true
    
    
*/
}
const PermissionConsumer = ({ name, children }) => (
  <Consumer>{(value) => value[name] && children}</Consumer>
);

export { PermissionConsumer };
