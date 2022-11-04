import React from "react";
import PropTypes from "prop-types";
const InputFilter = ({ value, onChange }) => {
    return (
        <form action="">
            <div>
                <input
                    type="text"
                    name="filter"
                    value={value}
                    onChange={onChange}
                    placeholder="Search..."
                />
            </div>
        </form>
    );
};
InputFilter.propTypes = {
    value: PropTypes.func,
    onChange: PropTypes.func
};

export default InputFilter;
