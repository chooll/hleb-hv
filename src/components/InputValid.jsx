import React, {useState} from 'react';

const InputValid = ({placeholder, value, setValue}) => {

    const deleteAllSymbols = (value) => {
        return value.replace(/[^а-яё\s,.]/gi, '');
    }

    const maskSymbols = (event) => {
        let symbols = deleteAllSymbols(event.target.value);
        setValue (symbols);
    }

    return (
        <input
            className={"custom-single-line-input"}
            value={value}
            onChange={(event) => maskSymbols(event)}
            type="text"
            maxLength="50"
            placeholder={placeholder}
        />
    );
};

export default InputValid;