import React from "react";
import ChooseGits from "./pages/01werka/chooseGits/ChooseGits";
import Contact from "./pages/01werka/Contact/Contact";
import Suggestions from "./pages/01werka/Suggestions/Suggestions";
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
