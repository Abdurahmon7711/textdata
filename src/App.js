import React from "react";
import MainPage from "./pages/main/MainPage"
import Routs from "./routs/routs";
import Bukhara from "./pages/ChineBlog/Bukhara";
import Xitoy from "./pages/ChineBlog/Xitoy";


function App() {
  return (
    <Routs>
      <div className="App">
        <MainPage/>

      </div>
    </Routs>
  );
}

export default App;
