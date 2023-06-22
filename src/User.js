import React from "react";

const User = ({id, name, surName, age}) => {
    return (
        <>
            <h3>User {id}</h3>
            <div>Name - {name}</div>
            <div>Surname - {surName}</div>
            <div>Age- {age}</div>
            <hr />
        </>
    )
}

export default User
