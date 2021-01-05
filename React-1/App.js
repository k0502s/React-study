import React, {Component} from 'react';
import Subject from "./component/Subject"
import TOC from "./component/TOC"
import Content from "./component/Content"
import './App.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            mode: 'TEST2',
            TEST1:{title:'TEST1', desc:'this is react test'},
            subject:{title:'WEB_event TEST', sub:'Hi my name is jin seok'},
            contents:[ 
            {id:1, title:'TEST2', desc: 'this is react test2'},
            {id:2, title:'CSS_TEST', desc: 'CSS is for design.'},
            {id:3, title:'JavaScript_TEST', desc: 'JavaScript is interactive.'}
            
            ]
        }
    }
  render (){
      var _title, _desc = null;
    if(this.state.mode === 'TEST1'){
    _title = this.state.TEST1.title;
    _desc = this.state.TEST1.desc;
} else if(this.state.mode === 'TEST2'){
     _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
    
}
return (    
    
    
    <div className="App">
    {/*<Subject title={this.state.subject.title} 
       sub={this.state.subject.sub}></Subject>*/}
     <header>
     <h1><a href='/' onClick={function(e){
    console.log(e);
    e.preventDefault();
    this.setState({
        
    mode: 'TEST1'
    });
    }.bind(this)}>
    {this.state.subject.title}</a></h1>
     {this.state.subject.sub}
    </header>   
     <TOC data={this.state.contents}></TOC>
     <Content title={_title} desc={_desc}></Content>
    
    </div>
    
  );
 }
}



export default App;
