import React from "react";
import MainPage from "./pages/main/MainPage"
import Routs from "./routs/routs";

 
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
