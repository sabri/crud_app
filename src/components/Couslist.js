import React, { Component } from 'react'

export class Couslist extends Component {
 state = {
     isEdit:false
 }
   togglestate =()=>
   {
       let {isEdit} =this.state;
       this.setState({
           isEdit:!isEdit
       });
   }
 
    renderlist =() => {

        return (
           <React.Fragment>
        <ul>
          <li><span>{this.props.details}</span><button onClick={()=>this.props.delete()}>Delete</button>
          <button onClick={()=> this.togglestate()}>Edit</button>
          
          </li>
          
        </ul>
      </React.Fragment>
        );
      }

      edit =(e)=>{
          e.preventDefault();
          this.props.editlist(this.props.index, this.input.value)
          this.togglestate();
      }

      renderUpdate = () =>{

        return (
         <form onSubmit ={this.edit} >
             <input type="text" ref = {(v) => {this.input = v }} defaultValue={this.props.details}  />
             <button >Edit</button>
         </form>
        )
      }


  render() {

    return (
       <React.Fragment>
   { this.state.isEdit ? this.renderUpdate() : this.renderlist()}
  </React.Fragment>
    )
  }
}

export default Couslist
