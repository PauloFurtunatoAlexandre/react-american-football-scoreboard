//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import Score from "./Score";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  return (
    <div className="container">
      <Score homeScore={homeScore} awayScore={awayScore}/>
      <Buttons homeScore={homeScore} awayScore={awayScore} setHomeScore={setHomeScore} setAwayScore={setAwayScore}/>
    </div>
  );
}

export default App;
