import styled from 'styled-components';

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

  background-color: ${(props) => (props.active == 'true' ? '#483eff' : '#fff')};

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
    color: ${(props) => (props.active == 'true' ? '#fff' : '#032958')};
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
  }
  .price_box {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: ${(props) => (props.active == 'true' ? '#fff' : '#97989c')};
  }
`;
