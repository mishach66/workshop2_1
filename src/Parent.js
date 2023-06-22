import React, {useState} from "react";
import Child from "./Child";
import Button from "./Button";

const Parent = () => {
    const [isUserLoggedIn, setIsUserLoggedIn ] = useState(false)

    const users = [
        {
            id: 1,
            name: 'John',
            surName: 'Smith',
            age: 25,
        },
        {
            id: 2,
            name: 'Jane',
            surName: 'Austen',
            age: 27,
        },
        {
            id: 3,
            name: 'Sam',
            surName: 'Barrow',
            age: 43,
        },
        {
            id: 4,
            name: 'Larry',
            surName: 'Coen',
            age: 35,
        },
    ]


    const loginLogout = () => {
        setIsUserLoggedIn(!isUserLoggedIn)
    }

    return (
        <>
            <h1>List of users</h1>
            <Button onClick={loginLogout} >
                {isUserLoggedIn ? 'გამოსვლა' : 'შესვლა'}
            </Button>
            <Child users={ users } isUserLoggedIn={ isUserLoggedIn }/>
        </>
    )
}

export default Parent
