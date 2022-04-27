import React from "react";
import Authorization from "./pages/authorization/authorization/Authorization";
import MainPage from "./pages/main/MainPage"
import Application from "./pages/Application/Application"
import AboutApp from "./pages/Application/Apllication about/AboutApp"
import Blog from "./pages/ChineBlog/Blog";
import Routs from "./routs/routs";
import Bukhara from "./pages/ChineBlog/Bukhara";
import Xitoy from "./pages/ChineBlog/Xitoy";


function App() {
  return (



     
    <div className="App">
       
      {/* <Blog/> */}
      {<Bukhara/>}
      {<Xitoy/>}

    </div>
     
  );
}

export default App;
