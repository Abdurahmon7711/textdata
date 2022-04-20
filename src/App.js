import React from "react";

import Main from "./pages/main/Main";
import Application from "./pages/Application/Application"
import AboutApp from "./pages/Application/Apllication about/AboutApp"
import Type from "./pages/Application/Type/Type"
function App() {
  return (
    <div className="App">
      {/* <ChooseGits/>
       <Main/> */}
      <Application />
      <br />
      <br />
      <AboutApp />
      <br />
      <br />
      <Type />
      <Main />
    </div>
  );
}

export default App;
