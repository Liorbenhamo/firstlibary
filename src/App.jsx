import { useState } from "react";
import "./App.css";
import Calendar from "./component/calendar";

function App() {
  const [date, setDate] = useState();
  console.log(date);

  return (
    <div>
      <Calendar setDate={setDate} />
    </div>
  );
}

export default App;
