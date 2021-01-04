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
      mode:'TEST1',
      
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
    getReadContent(){
        var i = 0;
      while(i < this.state.contents.length){
        var data = this.state.contents[i];
        if(data.id === this.state.selected_content_id) {
         return data;
          break;
        }
        i = i + 1;
      }
    }
    getContent(){
    
    var _title, _desc, _article = null;
    if(this.state.mode ===  'TEST1'){
      _title = this.state.TEST1.title;
      _desc = this.state.TEST1.desc;
      _article = <ReadContent title={_title} desc={_desc}></ReadContent>    
    } else if(this.state.mode === 'read'){
      var _content =this.getReadContent();
    _article = <ReadContent title={_content.title} desc={_content.desc}></ReadContent>
    }
      else if(this.state.mode === 'create'){
        _article = <CreateContent onSubmit={function(_title, _desc){
            this.max_content_id = this.max_content_id+1;
            var _contents = Array.from(this.state.contents);
            _contents.push({id:this.max_content_id, title:_title, desc:_desc});
            this.setState({
                contents:_contents,
                  mode:'read',
          selected_content_id:this.max_content_id
            });
        }.bind(this)}></CreateContent>
    }
      else if(this.state.mode === 'update'){
          _content =this.getReadContent();
        _article = <UpdateContent data={_content} onSubmit={
        function(_id, _title, _desc){
          var _contents = Array.from(this.state.contents);
          var i = 0;
          while(i < _contents.length){
            if(_contents[i].id === _id) {
              _contents[i] = {id:_id, title:_title, desc:_desc};
              break;
            }
            i = i + 1;
          }
          this.setState({
            contents:_contents,
            mode:'read'
          });
        }.bind(this)}></UpdateContent>
      }  
        return _article;
    }
    
  render() {
    console.log('App render');
    
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
              mode:'read',
              selected_content_id:Number(id)
            });
          }.bind(this)} 
          data={this.state.contents}
        ></TOC>

        <Control onChangeMode={function(_mode){
            if(_mode === 'delete'){
                if(window.confirm()){
                    var _contents = Array.from(this.state.contents);
                    var i =0;
                    while(i<_contents.length){
                        if(_contents[i].id === this.state.selected_content_id){
                            _contents.splice(i,1);
                            break;
                        }
                        
                        i = i+1;
                    }
                    this.setState({
                        mode: 'TEST1',
                        contents: _contents
                    });
                }
            }else
                  this.setState({
                      mode:_mode
                  });
                 }.bind(this)}></Control>

        {this.getContent()}
      </div>
    );
  }
}
export default App;