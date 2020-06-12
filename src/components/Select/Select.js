import React from 'react';

const Select = props => {
    const onChangeHandler = (e) => {
        props.changeHandler(e, props.propertyName);
    }
    return(
    <select name={props.propertyName} id={props.propertyName} onChange={onChangeHandler}>        
        {props.property.map(prop => 
            <option value={prop} key={prop}>{prop}</option>
        )}
    </select>
    )
}

export default Select;