import React from "react";

// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const Score = props => (
  <div className="row">
    <div className="col-md-12">
    <p className="card-text">Answer: {props.answer}</p>
      <p className="card-text">Current Score: {props.currentScore}</p>
      <p className="card-text">High Score: {props.highScore}</p>
    </div>
  </div>
);

export default Score;
