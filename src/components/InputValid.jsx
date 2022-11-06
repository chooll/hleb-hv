import React, {useState} from 'react';

const InputValid = ({placeholder}) => {
    const [value, setValue] = useState("");

    return (
        <input
            className={"custom-single-line-input"}
            type="text"
            onChange={event => setValue(event.target.value)}
            maxLength="50"
            placeholder={placeholder}
        />
    );
};

export default InputValid;