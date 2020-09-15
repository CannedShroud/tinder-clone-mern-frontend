import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import instance from "./axios";

function TinderCards() {
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get("/tinder/cards");
      setPeople(request.data);
    }
    fetchData();
  }, []);

  const [people, setPeople] = useState([]);
  const swiped = (direction, nameToRemove) => {
    console.log("Removing", nameToRemove);
    // setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name, "Left the screen");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(direction) => swiped(direction, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imageURL})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
