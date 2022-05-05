import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Select from 'react-select';

export default function App() {
  const options = [
    { value: 'option1', label: 'Option1' },
    { value: 'option2', label: 'Option2' },
    { value: 'option3', label: 'Option3' },
  ];

  const [selectedOption, setSelectedOption] = useState(null);
  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
