import React, {useState,useRef} from "react";

function App5() {
    const inputRef = useRef(null);
    const [message, setMessage] = useState("");

    function focusInput()
    {
        inputRef.current.focus();
        setMessage("Input is focused");
    }

    //2. blurr
    function blurInput()
    {
        inputRef.current.blur();
        setMessage("Input has lost focused (is blurred)");
    }

    //3/select
    function selectText() {
        inputRef.current.select();
        setMessage("Text has been selected");
    }

    //4.click
    function clickInput() {
        inputRef.current.click();
        setMessage("Input was clicked");
    }
    //5.value
    function showValue() {
        setMessage("Input value : " + inputRef.current.value);
    }

    //6 disable
    function disableInput() {
        inputRef.current.disabled = true;
        setMessage("Input is disabled");
    }   
    function enableInput() {
        inputRef.current.disabled = false;
        setMessage("Input is enabled");
    }
    //7/placeholder
    function showPlaceholder() {
        setMessage("Input placeholder : " + inputRef.current.placeholder);
    }
    //8.type
    function showType() {
        setMessage("Input type : " + inputRef.current.type);
    }

    return (
        <div>
            <h1>UseRef() DOM methods and properties</h1>

            <input ref={inputRef}
             type="text"
             placeholder="Enter student name" 
            defaultValue="Virat" />
            <br/>
            <br/>

            <button onClick={focusInput}>Focus</button>
            <button onClick={blurInput}>Blur</button>
            <button onClick={selectText}>Select</button>
            <button onClick={clickInput}>Click</button>
            <button onClick={showValue}>Show Value</button>
            <button onClick={disableInput}>Disable</button>
            <button onClick={enableInput}>Enable</button>
            <button onClick={showPlaceholder}>Show Placeholder</button>
            <button onClick={showType}>Show Type</button>
            <h2>{message}</h2>
        </div>
    )
}
export default App5;