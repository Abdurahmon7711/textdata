import React from "react";

import Main from "./pages/main/Main";
import Application from "./pages/Application/Application"
import AboutApp from "./pages/Application/Apllication about/AboutApp"
import Type from "./pages/Application/Type/Type"
import AdvancedSearch from "./components/templets/AdvancedSearch/AdvancedSearch";
import AboutGits from "./components/templets/AboutGits/AboutGits";
import ChooseGits from "./pages/01werka/chooseGits/ChooseGits";
import Suggestions from "./pages/01werka/Suggestions/Suggestions"
import About_platform from './pages/01werka/About_platform/About_platform'
import Contact from "./pages/01werka/Contact/Contact";
function App() {
  return (
    <div className="App">
      <ChooseGits/> 
       {/* <Main/> */}
       {/* <Application /> */}
      <br />
      <br />
      {/* <AboutApp /> */}
      <br />
      <br />
      {/* <Type /> */}
      {/* <Main /> */} 
      {/* <AdvancedSearch/> */}
      {/* <AboutGits/> */}
      {/* <Suggestions/> */}
      {/* <About_platform/> */}
      {/* <Contact/> */}
    </div>
  );
}

export default App;
