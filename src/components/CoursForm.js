import React from 'react';

const CoursForm = (props) => {

return(
<div>
    <form onSubmit={props.add}>
        <input type ="text"  placeholder="enter your cours " value={props.current}
         onChange = {props.update}/>
        <button > Add </button>
    </form>
</div>

);


 }
 export default CoursForm;
