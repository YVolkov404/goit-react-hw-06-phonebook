import { Formik } from 'formik';
import {
  Form,
  Label,
  Input,
  ErrorMsg1,
  ErrorMsg2,
  SubmitBtn,
} from './ContactForm.styled';
import * as Yup from 'yup';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name too short!')
    .max(17, 'Name too long!')
    .required('Required'),
  number: Yup.string()
    .min(10, 'Number too short!')
    .max(13, 'Number too long!')
    .required('Required'),
});

export const ContactForm = props => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={ContactFormSchema}
      onSubmit={(values, actions) => {
        props.onSubmit(values);
        actions.resetForm();
      }}
    >
      <Form autoComplete="off">
        <Label htmlFor="nameId">Name</Label>
        <Input id="nameId" type="text" name="name" />
        <ErrorMsg1 name="name" component="span" />
        <Label htmlFor="numberId">Number</Label>
        <Input id="numberId" type="tel" name="number" />
        <ErrorMsg2 name="number" component="span" />
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </Form>
    </Formik>
  );
};
