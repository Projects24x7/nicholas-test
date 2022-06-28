import '../App.css';
import { ErrorMessage, useFormik } from "formik";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import React from "react";
import * as yup from "yup";
import FormInput from './FormInput';

const schema = yup.object().shape({
  name: yup.string().required("Name Is Required"),
  date: yup.string().required("Date Is Required"),
  // img: yup.string().required("Topic Is Required"),
});

function MultiRow() {
  const formik = useFormik({
    initialValues: [
      {
        name: '',
        date: '',
        img: '',
      }
    ],
    validationSchema: schema,
    onSubmit: (value) => console.log(value),
  })
  return (
    <div>
      Multi Row
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <FormInput 
            formik={formik}
          />
        </FormGroup>
        <div style={{ display: "flex" }}>
          <Button
            type={"submit"}
          >
            Save
          </Button>
        </div>
      </Form>

    </div>
  );
}

export default MultiRow;
