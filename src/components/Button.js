import React from 'react'

const Button = ({ label, onClick, className }) => {
    return (
        <div>
            <button className={className} onClick={onClick}>
                {label}
            </button>

        </div>
    )
}

export default Button
