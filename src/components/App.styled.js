import styled from 'styled-components';

export const Container = styled.div`
  width: 408px;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 30px;
  margin: 30px auto 0 auto;
  padding: 30px 30px 50px 30px;
  background-color: ${p => p.theme.main};
  border: 8px inset ${p => p.theme.second};
`;

export const Title = styled.h1`
  width: 100%;
  margin: 0;
  font-size: 42px;
  color: ${p => p.theme.second};
  text-align: center;
  font-variant: small-caps;
  text-shadow: 2px -2px 2px rgba(255, 235, 205, 0.64);
`;

export const SubTitle = styled.h2`
  width: 100%;
  margin: 0;
  font-size: 32px;
  color: ${p => p.theme.second};
  text-align: center;
  font-variant: small-caps;
  text-shadow: 2px -2px 2px rgba(255, 235, 205, 0.64);
`;
