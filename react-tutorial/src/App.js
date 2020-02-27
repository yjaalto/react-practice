import React from "react";
import PhoneForm from "./PhoneForm";

const handleCreate = data => {
  console.log(data);
};

function App() {
  return (
    <div className="App">
      <PhoneForm onCreate={handleCreate}></PhoneForm>
    </div>
  );
}

export default App;
