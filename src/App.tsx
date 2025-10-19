import React, { useState } from "react";
import TesteLista from "./components/TesteLista";
import ButtonTest from "./components/Button/ButtonTest";
import AlertTest from "./components/AlertTest";
import Like from "./components/Like";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const toogleAlert = () => {
    setShowAlert(false);
  };
  const toogleButton = () => {
    setShowAlert(!showAlert);
  };

  return (
    <div>
      <TesteLista> Lista </TesteLista>
      <ButtonTest color="primary" onOpen={toogleButton}>
        Gil Vicente, Show facts
      </ButtonTest>
      {showAlert && (
        <AlertTest onClose={toogleAlert}>Fundado a 3 de maio de 1924</AlertTest>
      )}
      <Like />
    </div>
  );
}

export default App;

//<Buttons onClick={() => console.log("clicked")}>Button</Buttons>
//<Alert> Hello <span>World</span> </Alert>
//<Alert>My alert</Alert>
//<Buttons onClick={() => console.log("clicked")}>Button</Buttons>
/*
let items = ["New York", "Lisbon", "OPorto", "Madri"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  
<ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
*/
