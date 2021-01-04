import React, { Component } from 'react';
import TOC from "./components/TOC";
import ReadContent from "./components/ReadContent"
import Subject from "./components/Subject"
import Control from "./components/Control"
import CreateContent from "./components/CreateContent"
import UpdateContent from "./components/UpdateContent"
import './App.css';
class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 3;  
    this.state = {
      mode:'create',
      
      selected_content_id:2,
      subject:{title:'WEB event TEST', sub:'this is test start'},
      TEST1:{title:'TEST1', desc:'this is test1'},
      contents:[
        {id:1, title:'TEST2-1', desc:'HTML is for information'},
        {id:2, title:'TEST2-2', desc:'CSS is for design'},
        {id:3, title:'TEST2-3', desc:'JavaScript is for interactive'}
      ]
    }
  }
  render() {
    console.log('App render');
    var _title, _desc, _article = null;
    if(this.state.mode ===  'TEST1'){
      _title = this.state.TEST1.title;
      _desc = this.state.TEST1.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>    
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
        _article = <ReadContent title={_title} desc={_desc}></ReadContent>
    }else if(this.state.mode === 'create'){
        _article = <CreateContent onSubmit={function(_title,_desc){
            this.max_content_id = this.max_content_id+1;
            var _contents = this.state.contents.concat(
           {id:this.max_content_id, title:_title, desc:_desc}
            )
            this.setState({
                contents: _contents
            });
            
            console.log(_title, _desc);
        }.bind(this)}></CreateContent>
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

        <Control onChangeMode={function(_mode){
                  this.setState({
                      mode:_mode
                  });
                 }.bind(this)}></Control>

        {_article}
      </div>
    );
  }
}
export default App;