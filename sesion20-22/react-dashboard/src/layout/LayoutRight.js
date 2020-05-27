import React from 'react'
import BookList from '../components/BookList'
import OrderList from '../components/OrderList'

const LayoutRight =()=>{
    return(
        <div className="columns">
            <div className="column is-one-third">
                <OrderList/>
            </div>
            <div className="column is-one-third">
                <BookList/>
            </div>
            <div className="column is-one-third">
                <OrderList/>
            </div>
        </div>
    )
}
export default LayoutRight