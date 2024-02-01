import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', id: 0,number:'123-456-7890' }]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');

  const handleOnInputChange = (event) => {
    setNewName(event.target.value);
  };
  const handleOnNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if(persons.find(person=>person.name.toLocaleUpperCase() === newName.toLocaleUpperCase() )!=null){
      setNewName(newName);
      alert(`${newName} is already added to phonebook`)
    }else{
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1,
      };
      setPersons(persons.concat(person));
      setNewName('');
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input onChange={handleOnInputChange} />
        </div>
        <div>
          number: <input onChange={handleOnNumberInputChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
