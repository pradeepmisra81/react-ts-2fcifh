import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Select from 'react-select';

export default function App() {
  const [selectedOption, setSelectedOption] = useState('2019');

  const dropdownChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="App">
      <label>Filter by year</label>
      <select onClick={dropdownChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
        <option value="2018">2018</option>
      </select>
    </div>
  );
}
