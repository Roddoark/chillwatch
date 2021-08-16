import React from 'react';
import "./chipMenu.scss";

import ChipButton from '~components/ChipButton'
import Popover from "~components/Popover"

const ChipMenu = () => {
  return (
    <div>
        <ChipButton label="de"/>
        <Popover />
    </div>
  )
}

export default ChipMenu;
