import { useState } from 'react';
import { OrderItem } from '~/components/OrderItem';
import { useAuth } from '~/hooks/useAuth';
import { useHttpGetWithAuth } from '~/hooks/useFetch';
import * as S from './style';

export const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { token } = useAuth();

  const { data: orders } = useHttpGetWithAuth('http://localhost:8080/api/pedido', token);

  const filteredOrders = orders.filter((order) =>
    order.nome.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <S.OrderListContainer>
      <S.OrdersContent>
        <h1>Listagem de Pedidos</h1>
        <S.SearchInput
          type='text'
          placeholder='Pesquisar por nome do cliente'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <S.OrderTable>
          <S.TableHeader>
            <tr>
              <S.TableHeaderCell>Cliente</S.TableHeaderCell>
              <S.TableHeaderCell>Endereço</S.TableHeaderCell>
              <S.TableHeaderCell>Telefone</S.TableHeaderCell>
              <S.TableHeaderCell>Plano</S.TableHeaderCell>
              <S.TableHeaderCell>Serviços Adionais</S.TableHeaderCell>
              <S.TableHeaderCell>Valor Total</S.TableHeaderCell>
            </tr>
          </S.TableHeader>
          <tbody>
            {filteredOrders.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </tbody>
        </S.OrderTable>
      </S.OrdersContent>
    </S.OrderListContainer>
  );
};
