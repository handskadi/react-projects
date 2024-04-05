import { useState } from "react";
import Alert from "./components/Alert";
import { Button } from "./components/Button";

function App() {
  let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
  let colors = ["Red", "Blue", "Green", "Yellow", "Orange"];
  // handler
  const [alertVisible, setAlertVisibly] = useState(false);
  const handleButtonClicked = () => {
    setAlertVisibly(true);
  };

  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibly(false)}>Here is My Message</Alert>
      )}
      <Button children="Submit" color="success" onClick={handleButtonClicked} />
    </div>
  );
}

export default App;
