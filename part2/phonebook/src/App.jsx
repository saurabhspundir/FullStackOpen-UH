import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', id: 0 }]);
  const [newName, setNewName] = useState('');

  const handleOnInputChange = (event) => {
    setNewName(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    const name = {
      name: newName,
      id: persons.length + 1,
    };
    setPersons(persons.concat(name));
    setNewName('');
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleOnSubmit}>
        <div>
          name: <input onChange={handleOnInputChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
