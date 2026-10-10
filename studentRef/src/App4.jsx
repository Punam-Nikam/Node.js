import React, {useState,useCallback} from "react";

function StudentList(props){
    return(
        <div>
            <h2>Student list</h2>
            <ul>
                {props.students.map(function(student,index){
                    return(
                        // <li key={index}>
                        <li>
                            {student}
                        </li>
                        // </li>
                    );
                })}
            </ul>
        
        </div>
    );
}
function App4() {

    const [name, setName] = useState("");

    const [students,setStudents]=useState([
        "Virat",
        "Punam",
        "Monica",
        "Akaay"
    ]);
    const addStudents = useCallback(function() { //useCallback memorizes entire function
        if(name === "") {
            alert("Please enter student name");
            return;
        }
        setStudents(function(previousStudents){
            return [...previousStudents, name];
        });
        setName("");
    }, [name]);
    return (
        <div>
            <h1>Student management system</h1>
            <h2>Add student</h2>
            <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={function(event){
                setName(event.target.value);
            }}
            />

            <button onClick={addStudents}>
                Add Student
            </button>

            <StudentList
            students ={students} />

        </div>
    )
}
export default App4;