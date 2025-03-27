import React from 'react'

const Button = ({ label, onclick }) => {
    return (
        <div>
            <button onClick={onclick}>
                {label}
            </button>

        </div>
    )
}

export default Button
