import styled from 'styled-components';
import { RiDeleteBin7Fill } from 'react-icons/ri';

export const Item = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  align-items: center;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Name = styled.span`
  font-size: 19px;
  color: ${p => p.theme.second};
  flex-grow: 2;
`;

export const Number = styled.span`
  font-size: 17px;
  color: ${p => p.theme.third};
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-thickness: 2px;
  text-underline-offset: 5px;
  margin-right: 10px;
`;

export const DeleteBtn = styled.button`
  width: 19px;
  height: 19px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const Icon = styled(RiDeleteBin7Fill)`
  color: ${p => p.theme.third};
  vertical-align: baseline;
  transition: filter 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${p => p.theme.second};
    filter: drop-shadow(1px -1px 1px rgba(255, 235, 205, 0.64));
  }
`;
