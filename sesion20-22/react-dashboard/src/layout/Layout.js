import React from 'react'
import LayoutLeft from './LayoutLeft'
import LayoutRight from './LayoutRight'

const Layout =()=>{
    return(
        <>
            <nav className="columns">
                <div className="column is-one-fifth">
                    <LayoutLeft/>
                </div>
                <div className="column is-four-fifth">
                    <LayoutRight/>
                </div>
            </nav>
        </>
    )
}
export default Layout