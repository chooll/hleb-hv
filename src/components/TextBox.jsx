import React, {useState} from 'react';

const TextBox = ({placeholder}) => {
    const [value, setValue] = useState();

    return (
        <textarea
            className="custom-single-line-input"
            name="comment"
            placeholder={placeholder}
            value={value}
            onChange={e => setValue(e.target.value)}
        />

    );
};

export default TextBox;