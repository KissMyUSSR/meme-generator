import React, { useState } from 'react';
import ToolTextBar from './ToolTextBar';
import DropDownMenu from './DropDownMenu/DropDownMenu';
import ToolNavBar from './ToolNavBar';
import './ToolBar.scss';

export default function ToolSidebar({
  selectedTextBoxIndexState,
  generateMeme,
  closeEditor,
  image
}) {
  const [chosenBar, setChosenBar] = useState('nav');
  const [selectedTextBoxIndex, setSelectedTextBoxIndex] =
    selectedTextBoxIndexState;
  const [dropMenuType, setDropMenuType] = useState();

  const switchBar = {
    nav: (
      <ToolNavBar
        closeEditor={closeEditor}
        setSelectedTextBoxIndex={setSelectedTextBoxIndex}
        generateMeme={generateMeme}
        setChosenBar={setChosenBar}
      />
    ),
    image: (
      <ToolNavBar
        closeEditor={closeEditor}
        setSelectedTextBoxIndex={setSelectedTextBoxIndex}
        generateMeme={generateMeme}
        setChosenBar={setChosenBar}
      />
    ),
    text: (
      <ToolTextBar
        returnToNav={() => {
          setChosenBar('nav');
          if (dropMenuType !== undefined) setDropMenuType(undefined);
        }}
        selectedTextBoxIndexState={selectedTextBoxIndexState}
        setDropMenuType={setDropMenuType}
      />
    )
  };

  return (
    <>
      {switchBar[chosenBar]}
      {dropMenuType && (
        <DropDownMenu
          dropMenuState={[dropMenuType, setDropMenuType]}
          selectedIndex={selectedTextBoxIndex}
          image={image}
        ></DropDownMenu>
      )}
    </>
  );
}
