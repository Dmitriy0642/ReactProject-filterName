import React from "react";

const InputFilter = ({ type, name, value }) => {
    return (
        <form action="">
            <div>
                <input type={type} name={name} value={value} />
            </div>
        </form>
    );
};

export default InputFilter;
