import React from "react";
import Authorization from "./pages/authorization/authorization/Authorization";
import MainPage from "./pages/main/MainPage"
import Application from "./pages/Application/Application"
import AboutApp from "./pages/Application/Apllication about/AboutApp"
import Blog from "./pages/ChineBlog/Blog";
import Routs from "./routs/routs";

 
function App() {
  return (
    <Routs>
    <div className="App">
      {/* <Authorization/> */}
      <MainPage/>
      {/* <Application/> */}
      <br/>
      <br/>
      <hr/>
      <br/>
      <br/>
      {/* <AboutApp/> */}


      {/* <Blog/> */}
    </div>
    </Routs>
  );
}

export default App;
