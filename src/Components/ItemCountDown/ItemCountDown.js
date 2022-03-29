import React from 'react'
import './ItemCountDown.scss'
import moment, { duration } from 'moment'


const ItemCountDown = () => {


    const setCountDown = () => {

        const today = moment()
        
        const futureDate = moment(this.props.futureDate)

        const clockDuration = duration(futureDate.diff(today))


    }
 


    return (
        <>
            
        </>
    )
}

export default ItemCountDown