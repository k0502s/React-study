import React, { Component } from 'react';
import TOC from "./components/TOC";
import Content from "./components/Content"
import Subject from "./components/Subject"
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      mode:'TEST1',
      
      selected_content_id:2,
      subject:{title:'WEB event TEST', sub:'this is test1'},
      TEST1:{title:'TEST1', desc:'this is test2'},
      contents:[
        {id:1, title:'HTML', desc:'HTML is for information'},
        {id:2, title:'CSS', desc:'CSS is for design'},
        {id:3, title:'JavaScript', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc = null;
    if(this.state.mode ===  'TEST1'){
      _title = this.state.TEST1.title;
      _desc = this.state.TEST1.desc;
    } else if(this.state.mode === 'TEST2'){
      var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
          _title = data.title;
          _desc = data.desc;
          break;
        }
        i = i + 1;
      }
    }
    return (
      <div className="App">
        <Subject 
          title={this.state.subject.title} 
          sub={this.state.subject.sub}
          onChangePage={function(){
            this.setState({mode:'TEST1'});
          }.bind(this)}
        >
        </Subject>
        <TOC 
         
          onChangePage={function(id){
            this.setState({
              mode:'TEST2',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>
        <Content title={_title} desc={_desc}></Content>
      </div>
    );
  }
}
export default App;