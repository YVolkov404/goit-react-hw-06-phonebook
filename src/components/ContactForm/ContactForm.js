import { Formik, useFormik } from 'formik';
// import * as Yup from 'yup';

import {
  Form,
  Label,
  Input,
  ErrorMsg1,
  ErrorMsg2,
  SubmitBtn,
} from './ContactForm.styled';

import { useDispatch, useSelector } from 'react-redux';
import { addContacts, contactsState } from 'rdx/contactsSlice';

//-------------------------------------------------------------

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  }

  if (!values.number) {
    errors.number = 'Required';
  } else if (values.number.length < 9) {
    errors.number = 'Must be 9 characters or more';
  }

  return errors;
};

//-------------------------------------------------------------

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsState);

  const submitHandler = values => {
    const hasContactName = contacts.some(
      contact => contact.name.toLowerCase() === values.name.toLowerCase()
    );
    hasContactName
      ? alert(`${values.name} already in phonebook!`)
      : dispatch(addContacts(values.name, values.number));
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validate,
    onSubmit: (values, actions) => {
      actions.resetForm();
      submitHandler(values);
    },
    handleSubmit: actions =>
      actions.resetForm(values => {
        values = { name: '', number: '' };
      }),
  });
  return (
    <Formik>
      <Form autoComplete="off" onSubmit={formik.handleSubmit}>
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />

        {formik.touched.name && formik.errors.name ? (
          <ErrorMsg1 name="name">{formik.errors.name}</ErrorMsg1>
        ) : null}

        <Label htmlFor="number">Number</Label>
        <Input
          id="number"
          type="tel"
          name="number"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.number}
        />

        {formik.touched.number && formik.errors.number ? (
          <ErrorMsg2 name="number">{formik.errors.number}</ErrorMsg2>
        ) : null}

        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};
