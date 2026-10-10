
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useMemo,
  useCallback,
  createContext
} from "react";


// ------------------------------------------------
// useContext
// ------------------------------------------------


const ThemeContext = createContext();


// ------------------------------------------------
// Student Details Component
// ------------------------------------------------


function StudentDetails(props) {


  const theme = useContext(ThemeContext);


  return (
    <div>


      <h2>Student Details</h2>


      <p>Name: {props.name}</p>


      <p>Theme: {theme}</p>


    </div>
  );
}


// ------------------------------------------------
// Main App Component
// ------------------------------------------------


function App() {


  // ------------------------------------------------
  // 1. useState
  // ------------------------------------------------


  const [name, stname] = useState("");


  const [students, ststud] = useState([
    "Asha",
    "Riya",
    "Neha",
    "nutan"
  ]);


  const [search, setSearch] = useState("");


  const [theme, setTheme] = useState("Light");


  // ------------------------------------------------
  // 2. useRef
  // ------------------------------------------------


  const inputRef = useRef(null);


  // ------------------------------------------------
  // 3. useEffect
  // ------------------------------------------------


  useEffect(function () {


    console.log("Student list changed");


  }, [students]);


  // ------------------------------------------------
  // 4. useMemo
  // ------------------------------------------------


  const filteredStudents = useMemo(function () {


    console.log("Filtering students...");


    return students.filter(function (student) {


      return student
        .toLowerCase()
        .includes(search.toLowerCase());


    });


  }, [students, search]);


  // ------------------------------------------------
  // 5. useCallback
  // ------------------------------------------------


  const addStudent = useCallback(function () {


    if (name !== "") {


      ststud(function (previousStudents) {


        return [
          ...previousStudents,
          name
        ];


      });


      stname("");


      inputRef.current.focus();
    }


  }, [name]);


  // ------------------------------------------------
  // Change Theme
  // ------------------------------------------------


  function changeTheme() {


    if (theme === "Light") {


      setTheme("Dark");


    } else {


      setTheme("Light");
    }
  }


  // ------------------------------------------------
  // JSX
  // ------------------------------------------------


  return (


    <ThemeContext.Provider value={theme}>


      <div>


        <h1>Student Management System</h1>


        {/* Student Input */}


        <h2>Add Student</h2>


        <input
          ref={inputRef}
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={function (event) {


            stname(event.target.value);


          }}
        />


        <button onClick={addStudent}>
          Add Student
        </button>


        {/* Search */}


        <h2>Search Student</h2>


        <input
          type="text"
          placeholder="Search student"
          value={search}
          onChange={function (event) {


            setSearch(event.target.value);


          }}
        />


        {/* Student List */}


        <h2>Student List</h2>


        <ul>

          {filteredStudents.map(function (student, index) {

 
            return (
              <li key={index}>
                {student}
              </li>
            );


          })}


        </ul>


        {/* Context */}


        <StudentDetails
          name={name}
        />


        {/* Theme */}


        <h2>Theme</h2>


        <button onClick={changeTheme}>
          Change Theme
        </button>

      </div>


    </ThemeContext.Provider>
  );
}


export default App;