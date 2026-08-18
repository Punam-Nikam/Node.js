// function app() {
//   return (
//         <h1> Welcome to React js !</h1>
//     );
// }
// export default app;

import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import StudentForm from "./components/StudentForm";
function App() {
    const [student,setStudent] = useState({});

    function getStudent(data){
        setStudent(data);
    }

return(
    <div style={{margin:"20px"}}>
        <Header />
        <StudentForm getStudent={getStudent}/>

        <StudentCard
            name={student.name}
            roll={student.roll}
            course={student.course}
            city={student.city}
        />
        <Footer />
    </div>
);
}
export default App;