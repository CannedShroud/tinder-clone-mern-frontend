import { Close, Favorite, FlashOn, Replay, StarRate } from "@material-ui/icons";
import { IconButton } from "@material-ui/core";
import React from "react";
import "./SwipeButtons.css";

function SwipeButtons() {
  return (
    <div className="swipeButtons">
      <IconButton className="swipeButtons__repeat">
        <Replay fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__left">
        <Close fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__star">
        <StarRate fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__right">
        <Favorite fontSize="large" />
      </IconButton>
      <IconButton className="swipeButtons__lightening">
        <FlashOn fontSize="large" />
      </IconButton>
    </div>
  );
}

export default SwipeButtons;
