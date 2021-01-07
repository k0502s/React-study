import React, { Component } from 'react';
import PhoneForm from "./components/PhoneForm";
import './App.css';
import PhoneInfoList from "./components/PhoneInfoList";


class App extends Component {
id =2 
state = {
    information:[
        {
            id: 0,
            name: '김진석',
            phone: '010-0000-0000'
        },
        {
          id: 1,
            name: '김진석2',
            phone: '010-0000-0000'  
        }
    ]
}
handleCreate = (data)=>{
    const {information} = this.state;
    this.setState({
        information: information.concat({ id: this.id++, ...data })
    })
    
}
handleRemove = (id) => {
    const { information } = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    })
  }

 render() {
    const { information } = this.state;
    return (
      <div>
        <PhoneForm
          onCreate={this.handleCreate}
        />
        
        <PhoneInfoList data={this.state.information}
         onRemove={this.handleRemove}
        />
        
      </div>
    );
  }
}
export default App;