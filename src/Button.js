import React from "react";


const Button = (props) => {

    const handlerClick = () => {
        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <>
            <div >
                <button onClick={handlerClick} >{props.children} </button>
            </div>
        </>
    )
}

export default Button
