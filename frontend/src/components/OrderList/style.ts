import styled from 'styled-components';

export const OrderListContainer = styled.div`
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;

  @media (max-width: 414px) {
    width: 100%;
    height: 100vh;
    left: 0;
    transform: none;
    box-shadow: none;
    border-radius: 0;
  }
`;

export const OrdersContent = styled.div`
  height: 90vh;
  padding: 50px;

  h1 {
    text-align: center;

  }
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #fff;
  overflow: hidden;
`;

export const TableHeader = styled.thead`
  background-color: #032958;
  color: #ffffff;
`;

export const TableHeaderCell = styled.th`
  padding: 15px;
  text-align: center;
`;