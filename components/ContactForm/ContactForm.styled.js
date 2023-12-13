import { Form as TagForm, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Form = styled(TagForm)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  padding-left: 5px;
  font-size: 22px;
  color: ${p => p.theme.third};
`;

export const Input = styled(Field)`
  width: auto;
  height: 32px;
  font-size: 18px;
  padding-left: 10px;
  outline: 2px solid ${p => p.theme.second};
  caret-color: ${p => p.theme.third};

  &:focus {
    ${p => p.theme.hovAndFoc};
    font-weight: 500;
  }
`;

export const ErrorMsg1 = styled(ErrorMessage)`
  position: absolute;
  right: 0;
  top: 10px;
  font-size: 14px;
  color: ${p => p.theme.second};
  text-align: right;
  text-decoration-line: underline;
  text-underline-offset: 7px;
  text-decoration-color: ${p => p.theme.third};
`;

export const ErrorMsg2 = styled(ErrorMessage)`
  position: absolute;
  right: 0;
  top: 97px;
  font-size: 14px;
  color: ${p => p.theme.second};
  text-align: right;
  text-decoration-line: underline;
  text-underline-offset: 7px;
  text-decoration-color: ${p => p.theme.third};
`;

export const SubmitBtn = styled.button`
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  padding: 8px;
  background-color: ${p => p.theme.second};
  border: none;
  box-shadow: 3px -3px 3px -1px rgba(255, 235, 205, 0.64);
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    box-shadow: none;
    color: ${p => p.theme.hovAndFoc};
  }
`;
