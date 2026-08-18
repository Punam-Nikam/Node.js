import { useState } from "react";

function StudentForm(props){
    const [name,setName]=useState("");
    const [roll,setRoll]=useState("");
    const [course,setCourse]=useState("");
    const [city,setCity]=useState("");
    function submitData(e){
        e.preventDefault();

        props.getStudent({
            name,
            roll,
            course,
            city
        });
    }
    return (
        <form onSubmit={submitData}>
            <label>Name</label><br/>
            <input 
            type="text"
            value={name}
            onChange={function(e){
                setName(e.target.value);
            }}
            />
            <br/><br/>
            <label>Roll No</label><br/>
            <input 
            type="text"
            value={roll}
            onChange={function(e){
                setRoll(e.target.value);
            }}
            />
            <br/><br/>
            <label>Course</label><br/>
            <input 
            type="text"
            value={course}
            onChange={function(e){
                setCourse(e.target.value);
            }}
            />
            <br/><br/>
            <label>City</label><br/>
            <input 
            type="text"
            value={city}
            onChange={function(e){
                setCity(e.target.value);
            }}
            />
            <br/><br/>
            <button>Submit</button>
        </form>
    );
}
export default StudentForm;