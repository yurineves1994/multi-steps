import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 50px 0;
  gap: 50px;
  width: 100%;

  label {
    display: flex;
    flex-direction: column;
    width: 100%;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #032958;
    gap: 10px;
  }
`;

export const Input = styled.input`
  background: #ffffff;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
  border-radius: 10px;
  font-size: 16px;
`;
