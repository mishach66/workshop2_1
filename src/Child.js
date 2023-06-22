import React from "react";
import User from "./User";

const Child = ({users, isUserLoggedIn}) => {
    return (
        <>
            {
                isUserLoggedIn ?  
                <div>
                    {
                        users.map(({id, name, surName, age}) => (
                            <React.Fragment key={id}>
                                <User id={id} name={name} surName={surName} age={age}  />
                            </React.Fragment>
                        ))
                    }
                </div> 
                : <div style={{color: 'red', fontWeight: 'bold', fontSize: '30px'}}>No users in the system</div>
            }
        </>
    )
}

export default Child
