import React from 'react';

import './HomeControl.css';
const HomeControl = props => {    
    console.log(props.outputType )
    return(    
    <div className="homecontrol">
        <button className={props.outputType === 'list' ? 'active' : ''}
            onClick={() => props.changeHandler('list')} >List</button>
        <button className={props.outputType === 'chart' ? 'active' : ''}
                onClick={() => props.changeHandler('chart')} >Chart</button>
    </div>

)
}

export default HomeControl;