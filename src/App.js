 import React from "react";

import ChooseGits from "./pages/chooseGits/ChooseGits";
import Main from "./pages/main/Main";
import Application from "./pages/Application/Application"
import AboutApp from "./pages/Application/Apllication about/AboutApp"
import Type from "./pages/Application/Type/Type"
 function App() {
  return (
    <div className="App">
       {/* <ChooseGits/>
       <Main/> */}
       <Application/>
       <br/>
       <br/>
       <AboutApp/>
       <br/>
       <br/>
       <Type/>
    </div>
  );
}

export default App;
