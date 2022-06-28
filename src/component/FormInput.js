import '../App.css';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import React from "react";
import Avatar from '@mui/material/Avatar';

function FormInput(props) {
    const { formik } = props
    const imageUrl = "/images/profile-picture.jpg";
    const [ avatar, setAvatar ] = React.useState(imageUrl ? imageUrl : "")
    const [ multiRow, setMultiRow ] = React.useState(formik.initialValues)

    const changePicture = (event) => {
        const reader = new FileReader();
        const files = event.target.files;

        reader.onload = function () {
            setAvatar(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };
    const handleAddRow = () => {
        setMultiRow([
            ...multiRow,
            ...formik.initialValues
        ])
    }
    console.log(multiRow)
  return (
    <>
        <div style={{ display:'flex', justifyContent: 'center' }}>
            <FormGroup>
            <Label className="label">Name :</Label>
            <Input
                type="text"
                name="name"
                id="name"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.name}
                placeholder={'Name'}
            />
            {formik.errors.name && formik.touched.name ? (
                <div className="text-danger">*{formik.errors.name}</div>
            ) : null}
            </FormGroup>
            <FormGroup>
            <Label className="label">Date :</Label>
            <Input
                type="date"
                name="date"
                id="date"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.date}
                placeholder={'Date of Birth'}
            />
            {formik.errors.date && formik.touched.date ? (
                <div className="text-danger">*{formik.errors.date}</div>
            ) : null}
            </FormGroup>
            <FormGroup>
                <div style={{ display: 'flex' }}> 
                    <Label className="label">Image :</Label>
                    <Avatar alt="" src={avatar} />
                    <Button tag={Label}>
                        <Input
                            // hidden
                            onChange={changePicture}
                            type="file"
                            name="img"
                            id="img"
                            accept="image/*"
                        />
                    </Button>
                    {/* </Avatar> */}
                </div>
            {formik.errors.img && formik.touched.img ? (
                <div className="text-danger">*{formik.errors.img}</div>
            ) : null}
            </FormGroup>
            <Button onClick={()=>handleAddRow()}>
                AddRow
            </Button>
        </div>
    </>
  );
}

export default FormInput;
