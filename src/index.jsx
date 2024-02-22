import React from "react";
import  ReactDOM from "react-dom/client";

class App extends React.Component{

constructor(){
    super()
    this.state = {
name : "Tea",
lastname : " mamisimedi",
age : 30

    }
}

    render() { 
        return(
<React.Fragment>
{
this.state.name + " " + this.state.lastname + " " + this.state.age 


}
</React.Fragment>

            )
    }
       
}
var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App/>);