import React, {useEffect, useState} from "react";
import BottomRow from "./BottomRow";

function Score({homeScore, awayScore}) {
    // const [millisecond, setMilliseconds] = useState(0);
    const [second, setSecond] = useState(0);
    // const [secondTens, setSecondTens] = useState(0);
    const [minute, setMinute] = useState(0);
    // const [minuteTens, setMinuteTens] = useState(0);
    
    useEffect(() => {
        setTimeout(() => {
            setSecond(second + 1);
            
            if(second / 59 === 1) {
                setSecond(0);
                setMinute(minute + 1);

                if(minute / 59 === 1) {
                    setMinute(0);
                    setMinute(minute + 1);
                }
            }

        }, 1000);
        
    }, [second, minute]);

  return(
    <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>
            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{homeScore}</div>
          </div>
            <div  className="timer">{minute}:{second}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
          <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
  );
}

export default Score;