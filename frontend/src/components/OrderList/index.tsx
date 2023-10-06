// pages/OrderList.js
import React, { useState } from 'react';
import * as S from './style';
import {OrderItem} from "~/components/OrderItem"

const ordersData = [
	{
		"id": 1,
		"nome": "Yuri Neves Travassos",
		"adress": "Avenida Sargento Geraldo Sant'Ana",
		"phone": "(11) 95499-3469",
		"plan": {
			"id": 4,
			"type": "advanced",
			"price": 12.0
		},
		"services": [
			{
				"name": "Online service",
				"price": 1.0
			},
			{
				"name": "Large Storage",
				"price": 2.0
			}
		],
		"total": 15.0
	},
	{
		"id": 2,
		"nome": "Yuri Neves Travassos",
		"adress": "Avenida Sargento Geraldo Sant'Ana",
		"phone": "(11) 95499-3469",
		"plan": {
			"id": 5,
			"type": "advanced",
			"price": 12.0
		},
		"services": [
			{
				"name": "Online service",
				"price": 1.0
			},
			{
				"name": "Large Storage",
				"price": 2.0
			}
		],
		"total": 15.0
	}
]

export const OrderList = () => {
	const [searchTerm, setSearchTerm] = useState<string>('');
  const filteredOrders = ordersData.filter((order) =>
    order.nome.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <S.OrderListContainer>
      <S.OrdersContent>
        <h1>Listagem de Pedidos</h1>
				<S.SearchInput
          type="text"
          placeholder="Pesquisar por nome do cliente"
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
