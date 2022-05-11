import React from "react";
import Bukhara from "./pages/ChineBlog/Bukhara";
import Xitoy from "./pages/ChineBlog/Xitoy";
import MainPage from "./pages/main/MainPage"
import Routs from "./routs/routs";



function App() {
  return (
    // <Routs>
    //    <div className="App">
    //       {/* <MainPage/> */}
        
    //    </div>
    // </Routs>
    <div>
      <Bukhara/>
      {/* <Blog/> */}
      <Xitoy/>
    </div>
  );
}

export default App;
