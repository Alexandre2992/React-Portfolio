import React, { useState } from "react";

function Ex1() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({
      ...game, //first we copy all the propertis of the object game
      player: { ...game.player, name: "Alexandre" }, //we set the player player to a new object so this is independent of the object above;
    }); //...game.player copy all those properties, in this case name
    console.log(game);
  };

  return (
    <div>
      <button
        className="btn btn-primary"
        style={{ display: "block" }}
        onClick={handleClick}
      >
        Change name
      </button>
      Player name: {game.player.name}
    </div>
  );
}

export default Ex1;
