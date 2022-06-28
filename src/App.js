import './App.css';
import { Button, Input, Label } from 'reactstrap';
import React from 'react';
import FormInput from './FormInput';

function App() {
  const defaultValuesRow = {
    name: '',
    date: '',
    img: ''
  }
  const [multiRowData, setMultiRowData] = React.useState([defaultValuesRow])
  const handleAddRow = () => {
    setMultiRowData([
      ...multiRowData,
      defaultValuesRow
    ])
  }
  const handleDeleteRow = (key) => {
    const temp = multiRowData
    temp.splice(key, 1);
    setMultiRowData([...temp])
  }
  const handleOnChange = (e, value) => {
    var temp = multiRowData
    if(e.target.name === 'name'){
      temp[value] = {
        ...temp[value],
        name: e.target.value
      };
    } else if(e.target.name === 'date'){
      temp[value] = {
        ...temp[value],
        date: e.target.value
      };
    } else if(e.target.name === 'img'){
      temp[value] = {
        ...temp[value],
        img: URL.createObjectURL(e.target.files[0])
      };
    }
    setMultiRowData([...temp])
  }
  const handleSaveRow = () => {
    console.log(multiRowData)
  }
  return (
    <div className="App">
     Multi Row Input
     {multiRowData.map((row, key)=>(
       <FormInput
        data={row}
        key={key}
        index={key}
        multiRowData={multiRowData}
        handleAddRow={()=>handleAddRow()}
        handleDeleteRow={(value)=>handleDeleteRow(value)}
        handleOnChange={(e, value)=>handleOnChange(e, value)}
       />
     ))}
     <Button onClick={()=>handleSaveRow()}>Save</Button>
    </div>
  );
}

export default App;
