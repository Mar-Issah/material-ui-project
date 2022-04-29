import NAMES from '../MOCK_DATA.json';
import { useState, useTransition } from 'react';

//when there are updates/heavy updates like when calcultion due to filter method
//so we find a way of telling react that some updates are heavy using useTransition hook
const UseTransition = () => {
  const [query, setQuery] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const changeHandler = (e) => {
    setInputValue(e.target.value); //when typing not heavy
    startTransition(() => setQuery(e.target.value)); //query goes through transition
  };

  //query however is heavy due to filter method and calculation so this goes through the transition and show the updating list tagg
  const filteredNames = NAMES.filter((item) => {
    return item.first_name.includes(query) || item.last_name.includes(query);
  });
  return (
    <div className='container'>
      <h1>Search Name</h1>
      <input value={inputValue} type='text' onChange={changeHandler} placeholder='Search...' />
      {isPending && <p>Updating List...</p>}
      {filteredNames.map((name) => (
        <p key={name.id}>
          {name.first_name} {name.last_name}
        </p>
      ))}
    </div>
  );
};

export default UseTransition;
