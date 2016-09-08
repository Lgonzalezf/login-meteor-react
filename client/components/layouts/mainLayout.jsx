import React from 'react';
import Navbar from '../navbar/navbar';

export default (props)=>{
    return(
        <div>
            <Navbar/>
            {props.children}
        </div>
    )
}