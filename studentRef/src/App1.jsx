import React , { createContext,useContext,useState} from "react";

const ThemeContext = createContext();

function StudentDetails(){
    const theme = useContext(ThemeContext);

    return (
        <div>
            <h2>Student Details</h2>
            <p>Current Theme : {theme}</p>
        </div>
    );
}

function App1() {
    const [theme,setTheme] = useState("Dark")
    return (
        <div>
            <ThemeContext.Provider value={theme}>
                <StudentDetails />

            </ThemeContext.Provider>
            <button onClick={changeTheme}>Change Theme</button>
        </div>
    );
    function changeTheme()
    {
        if(theme === "Dark"){
            setTheme("Light");
        }
        else {
            setTheme("Dark");
        }
    }
}
export default App1;