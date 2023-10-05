import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;

  @media (max-width: 414px) {
    padding: 50px 0;
    gap: 50px;
  }

  #arcade,
  #advanced,
  #pro {
    display: none;
  }

  .boxes {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 50px;

    @media (max-width: 414px) {
      flex-direction: column;
      width: 100%;
    }
  }
  .box-toggle {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  input[type='checkbox'] {
    appearance: none;
    border-radius: 50px;
    width: 50px;
    height: 25px;
    background-color: #032958;
    transition: all 0.6s;
    position: relative;

    &::before {
      content: '';
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background-color: white;
      position: absolute;
    }
  }

  input:checked[type='checkbox'] {
    &::before {
      content: '';
      width: 25px;
      height: 25px;
      border-radius: 25px;
      background-color: white;
      position: absolute;
      left: 25px;
    }
  }
`;
export const Box = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  padding: 20px 10px;
  box-shadow: 0px 0px 20px 4px rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  min-height: 150px;
  min-width: 125px;

  @media (max-width: 414px) {
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    min-height: 75px;
  }

  img {
    width: 40px;
    height: 40px;
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .title_box {
    color: #032958;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  .price_box {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #97989c;
  }
`;
