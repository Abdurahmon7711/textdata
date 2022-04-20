 import React from "react";
import AdvancedSearch from "./pages/chooseGits/AdvancedSearch/AdvancedSearch";
import ChooseGits from "./pages/chooseGits/ChooseGits";
import Main from "./pages/main/Main";
 
 

function App() {
  return (
    <div className="App">
       <ChooseGits/>
       <Main/>
       <AdvancedSearch/>
    </div>
  );
}

export default App;
