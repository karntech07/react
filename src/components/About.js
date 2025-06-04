import React, { useEffect } from "react";
import User from "./User";
import UserClass from "./UserClass";

export const About = () => {
    useEffect(() => {
       const timer =  setInterval(() => {
            console.log('About');
        }, 1000)

        return () => {
            console.log('This will be called while unmounting the component');
            clearInterval(timer);
        }
    }, [])
    return (
        <div>
            <h1>This is about page</h1>
            <UserClass name={"karan (class)"} location={"patna"}></UserClass>
        </div>
    )
}