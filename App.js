import * as React from 'react';
import { useState } from 'react';
import './style.css';
import Select from 'react-select';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: '2022', label: '2022' },
    { value: '2021', label: '2021' },
    { value: '2020', label: '2020' },
    { value: '2019', label: '2019' },
    { value: '2018', label: '2018' },
    { value: '2017', label: '2017' },
  ];

  return (
    <div className="App">
      <label>Select the option in the below dropdown</label>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      <div class="button-area">
        <Button>Button #1</Button>
        <Button variant="secondary" className="mx-2">
          Button #2
        </Button>
        <Button variant="success">Button #3</Button>
      </div>
    </div>
  );
}
