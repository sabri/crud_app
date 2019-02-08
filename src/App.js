import React, { Component } from 'react';
import CoursForm from './components/CoursForm';
import Couslist from './components/Couslist';





class App extends Component {
state = {
  cours :[ {
    name:"HTML"},
    {name: "Php"},
    {name: "J2EE"}
  ],
  current:''
}
addcourse = (e) =>{
  e.preventDefault()
  
  let current = this.state.current;
  if (current !== ""){
  let cours = this.state.cours;
  cours.push({name:current})
  this.setState({cours,current:''});

}}
  editlist = (index,value) =>{
   let cours = this.state.cours;
   let coures = cours[index];
   coures["name"] = value;
   this.setState({coures});
 }


delete = (index) =>{
  const cours = this.state.cours;
  cours.splice(index,1);
  this.setState({cours});
}

updatelist = (e) => {
  this.setState({
    current:e.target.value
  });
}

  render() {
 const {cours} = this.state;
const coursList = cours.map((res,index)=> {
return <Couslist 
 details={res.name} key={index} index ={index} delete = {this.delete} editlist={this.editlist}/>
}) 
    return (
      <div className="app">
        <h1>CRUD APP</h1>
      <CoursForm update = {this.updatelist} add = { this.addcourse} current={this.state.current}
      />
      {coursList}
      </div>
    );
  }
}

export default App;
