import React, { useEffect } from 'react';
import { Button, Input, Label } from 'reactstrap';

function FormInput(props){
    const { handleOnChange, handleAddRow, handleDeleteRow, data, index, multiRowData } = props
    useEffect(() => {
      },[multiRowData]);
    console.log(data)
    return(
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Label>Name: </Label>
          <Input
            name={'name'}
            type={'text'}
            onChange={(e)=>handleOnChange(e, index)}
            defaultValue={data.name}
          />
          <Label>Date: </Label>
          <Input 
            name={'date'}
            type={'date'}
            onChange={(e)=>handleOnChange(e, index)}
            defaultValue={data.date}
          />
          <Label>Image: </Label>
          <img src={data.img} style={{ verticalAlign: 'middle', width: 50, height: 50, borderRadius: '50%' }}/>
          <Input 
            name={'img'}
            type={'file'}
            accept={"image/png, image/gif, image/jpeg"}
            onChange={(e)=>handleOnChange(e, index)}
            defaultValue={data.img}
          />
          <Button onClick={()=>handleAddRow()}>Add</Button>
          {multiRowData.length !== 1 ? (
            <Button onClick={()=>handleDeleteRow(index)}>Delete</Button>
          ) : null}
        </div>
    )
}
export default FormInput;