import { useState } from "react";
import GetLog from "./GetLog";



export const Logs = () => {
  const [form, setForm] = useState({});

  const sendLog = (event) => {
    event.preventDefault();



    fetch((`${process.env.REACT_APP_API_ENDPOINT}${Logs}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((data) => setForm(data))
      .catch((err) => console.error(err)))
  };

  const handleForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="add-logs">
      <h1>Add a Log</h1>
      <form className="add-log">
        <label>What were you feeling? :</label>
        <br />
        <small>Not sure which one? Check out our about page!</small>
<br />
        <select onChange={(e) => handleForm(e)} name="anxiety" id="anxiety">
          <option value="general"> General Anxiety </option>
          <option value="panic"> Panic Disorder </option>
          <option value="social"> Social Anxiety Disorder </option>
          <option value="phobia"> Specific Phobia </option>
          <option value="agoraphobia"> Agoraphobia </option>
          <option value="seperation"> Seperation Anxiety</option>
          <option value="mutism"> Selective Mutism</option>
          <option value="medication">
            Medication-induced anxiety disorder
          </option>
        </select>
<br />
        <label htmlFor="">What caused this? : </label>
        <br />
        <input
          onChange={(e) => handleForm(e)}
          type="text"
          placeholder="This incident was caused by..."
          name="what"
          id="what"
        />
<br />
        <label htmlFor="">How did you help yourself overcome : </label>
        <br />
        <input
          onChange={(e) => handleForm(e)}
          type="text"
          placeholder="Went on a walk... Talked to a friend... laid down... "
          name="solution"
          id="solution"
        />
        

        <button onClick={sendLog}>Add Log!</button>

        <GetLog />
      </form>
    </div>
  );


};


export default Logs;




