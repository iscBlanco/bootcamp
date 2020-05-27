import React from 'react'
import OrderItem from './OrderItem'
import orderData from './orderData'
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const ALL_ORDERS = gql`
{
  allOrders{
    orderId
    customer
    dateTime
    amount
    status
    statusClass
  }
}
`;

const OrderList = () => {
  const { loading, error, data } = useQuery(ALL_ORDERS)

  if (loading) return <p>Loading... ⏳</p>
  if (error) return <p>Error 😞</p>
  //if (data) return <p>{JSON.stringify(data)}</p>


  let datos = data.allOrders.map((item)=>{
      return(<OrderItem
        item={item}
      />)
      
  })

  return (
    <div className="card">
      <div className="card-content">
        <h2 className="title is-3">Ultimas ordenes</h2>
        {datos}
        <button className="button is-link is-outlined">Ver todas</button>
      </div>
    </div>
  )
}

export default OrderList