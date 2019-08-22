import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [lionsScore, setLionsScore] = useState(0);
  const homeTouchdown = e => {setLionsScore(lionsScore + 6)}
  const homeFieldGoal = e => {setLionsScore(lionsScore + 3)}
  const homeExtraPoint = e => {setLionsScore(lionsScore + 1)}
  const homeTwoPoint = e => {setLionsScore(lionsScore + 2)}

  const [tigersScore, setTigersScore] = useState(0);
  const awayTouchdown = e => {setTigersScore(tigersScore + 6)}
  const awayFieldGoal = e => {setTigersScore(tigersScore + 3)}
  const awayExtraPoint = e => {setTigersScore(tigersScore + 1)}
  const awayTwoPoint = e => {setTigersScore(tigersScore + 2)}



  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{lionsScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{tigersScore}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={homeTouchdown}>Home Touchdown</button>
          <button className="homeButtons__extraPoint" onClick={homeExtraPoint}>Home Extra Point</button>
          <button className="homeButtons__twoPoint" onClick={homeTwoPoint}>Home 2 Point</button>
          <button className="homeButtons__fieldGoal" onClick={homeFieldGoal}>Home Field Goal</button>
          <button className="homeButtons__safety" onClick={homeTwoPoint}>Home Safety</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={awayTouchdown}>Away Touchdown</button>
          <button className="awayButtons__extraPoint" onClick={awayExtraPoint}>Away Extra Point</button>
          <button className="awayButtons__twoPoint" onClick={awayTwoPoint}>Away 2 Point</button>
          <button className="awayButtons__fieldGoal" onClick={awayFieldGoal}>Away Field Goal</button>
          <button className="awayButtons__safety" onClick={awayTwoPoint}>Away Safety</button>
        </div>
      </section>
    </div>
  );
}

export default App;
