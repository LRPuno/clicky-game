import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Score from "./components/Score";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    girlsPicked: [],
    friends,
    answer: "Play the Game",
    currentScore: 0,
    highScore: 0
  };


  removeFriend = id => {
    if (this.state.currentScore >= this.state.highScore) {
      this.setState({
        highScore: this.state.currentScore
      })
    }

    const shuffledFriends = this.state.friends.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);

    console.log("This is ID: "+ id);
    if (this.state.girlsPicked.includes(id)) {
      console.log("---------IF(WRONG ANSWER)--------")
      this.setState({
        answer: "Wrong! Click to Play Again!",
        currentScore: 0,
        friends: shuffledFriends,
        girlsPicked: []
      })
      console.log(this.state.girlsPicked);
      console.log(shuffledFriends);
      console.log(this.state.friends);
    }
    else {
      console.log("---------ELSE(RIGHT ANSWER)--------")
      let newStateArray = this.state.girlsPicked.slice();
      newStateArray.push(id);
      console.log("This is New Array: "+ newStateArray);
      this.setState({
        answer: "Nice! You Can Memorize!",
        girlsPicked: newStateArray,
        currentScore: this.state.currentScore +1,
        friends: shuffledFriends
      })
      console.log(this.state.girlsPicked);
      console.log(shuffledFriends);
      console.log(this.state.friends);
    }

    /*
    if (this.state.girlsPicked.length === 12) {
      console.log("You Win Game?....Code it Fool!")
    }
    */

  };

  // Map over this.state.friends and render a FriendCard component for each friend object 
  render() {
    return (
      <Wrapper>
        <Title>Anime Girls ❤</Title>
        <Score
          answer = {this.state.answer}
          currentScore= {this.state.currentScore}
          highScore= {this.state.highScore}
        /> 
        {this.state.friends.map(friend => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
