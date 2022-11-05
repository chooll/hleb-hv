import React, {useState} from 'react';

const InputMask = ({setInpValue}) => {
    const [inpValue, setInputValue] = useState();
    const maskNumberInput = (value) => {
       return value.replace(/\D/g, "");
    }

    const onPhoneInput = (e) => {
        let valueInput = maskNumberInput(e.target.value),
            formattedInputValue = "";

        if (!valueInput) {
            valueInput="";
            setInputValue("");
        }


        if (["7", "8", "9"].indexOf(valueInput[0]) > -1) {
            if (valueInput[0] == "9") { valueInput = "7" + valueInput };
            let firstSymbol = (valueInput[0] == "8") ? "8" : "+7";

            formattedInputValue = firstSymbol + " "
            if (valueInput.length > 1) {
                formattedInputValue += "(" + valueInput.substring(1, 4);
            }
            if (valueInput.length >= 5) {
                formattedInputValue += ") " + valueInput.substring(4, 7);
            }
            if (valueInput.length >= 8) {
                formattedInputValue += "-" + valueInput.substring(7, 9);
            }
            if (valueInput.length >= 10) {
                formattedInputValue += "-" + valueInput.substring(9, 11);
            }
        }
        setInputValue(formattedInputValue);
    }

    const onPhoneKeyDown = (e) => {
        if (e.keyCode === 8 && maskNumberInput(e.target.value).length == 1) {
            e.target.value = "";
        }
    }

    return (
        <input className={"custom-single-line-input"}
            type="tel"
            maxLength="18"
            value={inpValue}
            onChange={(event) => onPhoneInput(event)}
            onKeyDown={(e) => onPhoneKeyDown(e)}
            placeholder={"Номер телефона"}
        />
    );
};

export default InputMask;