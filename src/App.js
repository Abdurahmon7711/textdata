import React from "react";
import MainPage from "./pages/main/MainPage"
import Routs from "./routs/routs";
import Suggestions from "./pages/01werka/Suggestions/Suggestions"
import { dividerClasses } from "@mui/material";
import ChooseGits from "./pages/01werka/chooseGits/ChooseGits";
import SimpleAccordion from "./components/component/SimpleAccordion/SimpleAccordion";


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
