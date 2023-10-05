import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;

  @media (max-width: 414px) {
    padding: 25px 0;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
  gap: 50px;
  width: 100%;

  @media (max-width: 414px) {
    flex-direction: row;
    justify-content: center;
    padding: 0;
    gap: 25px;
  }
`;

export const ListItem = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;

  &.passed {
    .number {
      background-color: white;
      color: black;
    }
  }

  .number {
    border: 1px solid white;
    color: white;
    border-radius: 50%;
    padding: 5px 10px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 414px) {
      display: none;
    }
    .step {
      color: #9a94ff;
      font-weight: 300;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.05em;
    }
    .step_name {
      color: white;
      font-weight: 700;
      font-size: 15px;
      line-height: 17px;
      letter-spacing: 0.02em;
      text-transform: uppercase;
    }
  }
`;
