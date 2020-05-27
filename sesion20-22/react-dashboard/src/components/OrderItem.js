import React from 'react'

const OrderItem = (props) =>{


    return(
        <div className='level'>
            <div className='level-left'>
                <div>
                    <p className="title is-3 is">
                        <a>{props.item.orderId}</a>
                    </p>
                    <small>{props.item.dateTime} </small> por 
                    <a> {props.item.customer}</a>
                </div>
            </div>
        
            <div className='level-right'>
                <div className=''>
                    <p className='title is-6 is-marginless'>${props.item.amount}</p> 
                    <span class={'tag '+ props.item.statusClass}>{props.item.status}</span>
                </div>
            </div>
        </div>
    )
}
export default OrderItem