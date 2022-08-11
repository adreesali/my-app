import React from "react";


function App() {
 return (
  <>
  <div className="container">
    <form>
        <input type="text" name="display" />
        <div className="buttons">
            <input type="button" id="clear" value="C" />
            <input type="button" id="delete" value="DEL" />
            <input type="button" id="divide" value="/" /><br/>
            <input type="button" id="one" value="1" />
            <input type="button" id="two" value="2" />
            <input type="button" id="three" value="3" />
            <input type="button" id="mutliply" value="*" /><br/>
            <input type="button" id="four" value="4" />
            <input type="button" id="five" value="5" />
            <input type="button" id="six" value="6" />
            <input type="button" id="plus" value="+" /><br/>
            <input type="button" id="seven" value="7" />
            <input type="button" id="eight" value="8" />
            <input type="button" id="nine" value="9" />
            <input type="button" id="divide" value="-" /><br/>
            <input type="button" id="dot" value="." />
            <input type="button" id="zero" value="0" />
            <input type="button" id="equal" value="=" />
        </div>
    </form>
  </div>
  </>
 );
}

export default App;