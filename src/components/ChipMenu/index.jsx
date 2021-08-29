import React from 'react';
import "./chipMenu.scss";

import ChipButton from '~components/ChipButton'
import Popover from "~components/Popover"

const ChipMenu = ({ toggle, onToggle }) => {
  return (
    <div>
        <ChipButton onClick={onToggle} label="de"/>
        {toggle && <Popover />}
    </div>
  )
}

export default ChipMenu;
