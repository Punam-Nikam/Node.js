function StudentCard(props){
    return (
        <div style={{
            border:"1px solid black",
            padding:"10px",
            margin:"50px",
            marginLeft:"380px",
            width:"300px"
        }}>

            <h3>Student Details</h3>    
            <p>Name : {props.name}</p>
            <p>Roll No : {props.roll}</p>
            <p>Course : {props.course}</p>
            <p>City : {props.city}</p>
        </div>
    )
}
export default StudentCard;