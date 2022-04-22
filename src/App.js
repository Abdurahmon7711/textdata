 import React from "react";

// import AdvancedSearch from "./pages/chooseGits/AdvancedSearch/AdvancedSearch";
// import ChooseGits from "./pages/chooseGits/ChooseGits";
import Main from "./pages/main/Main";
import Application from "./pages/Application/Application"
import AboutApp from "./pages/Application/Apllication about/AboutApp"
import Type from "./pages/Application/Type/Type"
import Blog from "./pages/ChineBlog/Blog";
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

       {/* <ChooseGits/> */}
       {/* <Main/> */}
       {/* <AdvancedSearch/> */}
       <br/>
       <hr/>
       <br/>
       <Blog/>
    </div>
  );
}

export default App;
