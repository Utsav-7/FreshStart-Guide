import React from 'react';
import './button.css';
function SubmitButton(props) {
    return (
        <button type="submit" class="button-89" onClick={props.onClick}>
            {props.label}
        </button>
    );
}

export default SubmitButton;