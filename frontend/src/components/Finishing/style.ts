import styled from 'styled-components';

export const Finishing = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0px 20px;
  margin: 35px 0;
  background: #f8f9fe;
  border-radius: 8px;
`;

export const BlockPlan = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #afafaf;
  padding: 20px 0;

  .plan {
    display: flex;
    flex-direction: column;
    gap: 5px;

    .plan_title {
      font-weight: 700;
      font-size: 16px;
      line-height: 18px;
      color: #032958;
    }

    .change {
      color: #97989c;
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const OtherService = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

  .other_title {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #97989c;
  }
  .other_price {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #032958;
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px;
  margin: 35px 0;
  background: #ffff;
`;
