import styled from 'styled-components';

export const OrderListContainer = styled.div`
  width: 90vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  border-radius: 20px;

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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;

  h1 {
    text-align: center;
  }
`;

export const OrderTable = styled.table`
  width: 100%;
  border-collapse: collapse;
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

export const SearchInput = styled.input`
  padding: 10px;
  width: 20%;
  box-sizing: border-box;
  border: 1px solid #032958;
`;
