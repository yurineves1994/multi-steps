import * as S from './style';

interface Order {
  id: number;
  nome: string;
  email: string;
  phone: string;
  plan: {
    type: string;
    price: number;
  };
  services: {
    name: string;
    price: number;
  }[];
  total: number;
}

interface OrderTableRowProps {
  order: Order;
}

export const OrderItem = ({ order }: OrderTableRowProps) => {
  return (
    <S.OrderTableRow>
      <S.OrderTableData>{order.nome}</S.OrderTableData>
      <S.OrderTableData>{order.email}</S.OrderTableData>
      <S.OrderTableData>{order.phone}</S.OrderTableData>
      <S.OrderTableData>{order.plan.type}</S.OrderTableData>
      <S.OrderTableData>
        {order.services.map((service, index) => (
          <p key={index}>- {service.name}</p>
        ))}
      </S.OrderTableData>
      <S.OrderTableData>R$ {order.total}</S.OrderTableData>
    </S.OrderTableRow>
  );
};
