import { useState } from "react";

const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const newPerson = { name: newName, number: newNumber };
    persons.some((person) => person.name === newName)
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(newPerson));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleNameChange} />
        </div>
        <div>
          number: <input onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit" onClick={handleNameSubmit}>
            add
          </button>
        </div>
      </form>
      <h2>Numbers</h2>
      {persons.map(({ name, number }) => (
        <Person key={name} name={name} number={number} />
      ))}
    </div>
  );
};

export default App;
