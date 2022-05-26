import React from "react";
import Bukhara from "./pages/ChineBlog/Bukhara";
import Xitoy from "./pages/ChineBlog/Xitoy";
import About_platform from "./pages/01werka/About_platform/About_platform";
import ChooseGits from "./pages/01werka/chooseGits/ChooseGits";
import Contact from "./pages/01werka/Contact/Contact";
import Suggestions from "./pages/01werka/Suggestions/Suggestions";
import MainPage from "./pages/main/MainPage"
import Routs from "./routs/routs";



function App() {
  return (
    // <Routs>
    //    <div className="App">
    //       {/* <MainPage/> */}
        
    //    </div>
    // </Routs>
 
   
    <Routs>
       <div className="App">
          <MainPage/>
       </div>
    </Routs>
    // <div>
    //   <Xitoy/>
    // </div>
   
  );
}

export default App;
