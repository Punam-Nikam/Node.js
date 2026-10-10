import Reac, {useState,useMemo} from 'react';

function App3() {
    const [search, setSearch] = useState("");
    const [theme, setTheme] = useState("light");

    const students = [
        "Punaam",
        "Virat",
        "Monica",
        "Shubhi",
        "Mayuri"
    ];
    //useMemo remembers the previous value of the function and only re-renders when the dependency changes
    const filteredStudents = useMemo(function() {
        console.log("Filtering students...");
        return students.filter(function(student) {
            return student.
                    toLowerCase()
                    .includes(search.toLowerCase());
        });
    }, [search]);

    function changeTheme() {
        if(theme === "light") {
            setTheme("dark");
        }
        else {
            setTheme("light");
        }
}
return (
    <div>
        <h1>useMemo Hook Demonstration</h1>
        <h2>Search Students</h2>
        <input
            type="text"
            placeholder="Search students..."
            value={search}
            onChange={function(e) {
                setSearch(e.target.value)
            }}
        />
        <h2>
            Student List:
        </h2>
        {filteredStudents.map(function(student,index) {
            return (
                <li key={index}>{student}</li>
            );
        })
        }
        <h2>Theme: {theme}</h2>
        <button onClick={changeTheme}>
            Change Theme
        </button>   
    </div>
);
}
export default App3;