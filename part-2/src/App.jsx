import { useEffect, useState } from "react";
import axios from "axios";

const Title = ({ text }) => <h2>{text}</h2>;

const PhoneBookFilter = ({ text, handleFilterChange }) => (
  <div>
    {text} <input onChange={handleFilterChange} />
  </div>
);

const PhoneBookProperty = ({ text, handleChange }) => (
  <div>
    {text}: <input onChange={handleChange} />
  </div>
);

const PhoneBookForm = ({ formData }) => {
  const { properties, submit } = formData;
  const { text, handleSubmit } = submit;
  return (
    <form>
      {properties.map(({ text, handleChange }) => (
        <PhoneBookProperty key={text} text={text} handleChange={handleChange} />
      ))}
      <div>
        <button type="submit" onClick={handleSubmit}>
          {text}
        </button>
      </div>
    </form>
  );
};

const Person = ({ name, number }) => (
  <p>
    {name} {number}
  </p>
);

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filterName, setFilterName] = useState("");

  const handleFilterChange = (event) => {
    setFilterName(event.target.value);
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const newPerson = {
      id: persons.length + 1,
      name: newName,
      number: newNumber,
    };
    persons.some((person) => person.name === newName)
      ? alert(`${newName} is already added to the phonebook`)
      : setPersons(persons.concat(newPerson));
  };

  const formData = {
    properties: [
      {
        text: "Name",
        handleChange: (event) => setNewName(event.target.value),
      },
      {
        text: "Number",
        handleChange: (event) => setNewNumber(event.target.value),
      },
    ],
    submit: {
      text: "Add",
      handleSubmit: handleNameSubmit,
    },
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filterName.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((response) => setPersons(response.data));
  }, []);

  return (
    <>
      <Title text={"Phonebook"} />
      <PhoneBookFilter
        text={"Filter shown with"}
        handleFilterChange={handleFilterChange}
      />
      <Title text={"Add a new person"} />
      <PhoneBookForm formData={formData} />
      <Title text={"Numbers"} />
      {personsToShow.map(({ id, name, number }) => (
        <Person key={id} name={name} number={number} />
      ))}
    </>
  );
};

export default App;
