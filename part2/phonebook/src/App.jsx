import { useState } from 'react';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [serachName, setSerachName] = useState('');

  
  const personsToShow=   persons.filter(person=>person.name.toLocaleUpperCase().includes(serachName.toLocaleUpperCase()))

  const handleOnInputChange = (event) => {
    setNewName(event.target.value);
  };
  const handleOnNumberInputChange = (event) => {
    setNewNumber(event.target.value);
  };

  const handleOnFilterInputChange = (event) => {
    setSerachName(event.target.value);

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
    <>
    <div>
      <h2>Phonebook</h2>
      <p>
      
          filterShownWIth: <input onChange={handleOnFilterInputChange} />
      
       </p>
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
        {personsToShow.map((person) => (
          <li key={person.id}>{person.name} {person.number}</li>
        ))}
      </ul>
    </div>
    </>
  );
};

export default App;
