import { Formik, useFormik } from 'formik';
// import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { addContacts, contactsState } from 'rdx/contactsSlice';
import {
  Form,
  Label,
  Input,
  ErrorMsg1,
  ErrorMsg2,
  SubmitBtn,
} from './ContactForm.styled';

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
  const contacts = useSelector(contactsState);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      number: '',
    },
    validate,
    onSubmit: (values, actions) => {
      actions.resetForm();

      console.log(formik.handleSubmit(values));
    },
    handleSubmit: values => {
      const { name, number } = values;

      const hasContactName = contacts.some(contact => {
        return contact.name.toLowerCase() === name.toLowerCase();
      });

      return hasContactName
        ? alert(`${name} is already in contacts`)
        : dispatch(addContacts(name, number));
    },
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
