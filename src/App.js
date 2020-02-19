import React from 'react';
import './App.css';


class Todoapp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    item:"",
    todos:[]
  
    }
      
      }
     
      handelChange=(e)=>{
       this.setState({item:e.target.value})
      }
      handelAdd=()=>{
       
        this.setState({todos:this.state.todos.concat({text:this.state.item,class:false})})

      }
      handelDelete=(x)=>{
        this.setState({todos:this.state.todos.filter(el=>el !=x)})
      }
      handelComplete=(text)=>{
      this.setState({todos: this.state.todos.map(el=> el.text === text ? {...el,class : !el.class} : el)})
      console.log(this.state.todos.class)
      }



  render() {
    
  
    return (
      <div className="gors">
       <h3>To do app</h3>
       <h3>Ad new To-do</h3>
       <input type="text" name="item" onChange={this.handelChange} />
       <button   onClick={this.handelAdd}>Add</button>
        {this.state.todos.map((el)=><div>
        <h1 className={el.class && "barre"}>{el.text}</h1>
        <button onClick={()=>this.handelDelete(el)}>Delete</button>
        <button onClick={()=>this.handelComplete(el.text)}>{el.class? "Undo":"Complete"}</button>

        </div>)}

      </div>

    );

  }

}


function App() {
  return (
    <div className="App">

      <Todoapp />

    </div>
  );
}

export default App;
