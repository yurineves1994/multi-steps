// pages/OrderList.js
import React from 'react';
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
  return (
    <S.OrderListContainer>
      <S.OrdersContent>
        <h1>Listagem de Pedidos</h1>
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
            {ordersData.map((order) => (
              <OrderItem key={order.id} order={order} />
            ))}
          </tbody>
        </S.OrderTable>
      </S.OrdersContent>
    </S.OrderListContainer>
  );
};
