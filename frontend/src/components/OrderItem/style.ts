import styled from 'styled-components';

export const OrderItemContainer = styled.div`
  width: 100%;
  border-radius: 10px;
  background-color: #ffffff;

  padding: 20px;
  position: relative;
`;

export const OrderContent = styled.div`
  margin: 0 auto;
`;

export const OrderTableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const OrderTableData = styled.td`
  padding: 15px;
  text-align: center;
`;
