import { useState } from "react";

const User = (props) => {
    const {name, location} = props;
    let [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(2);
    
    return (
        <div className="user-card">
            <h6>{count1} and {count2}</h6>
            <h3>Name: {name}</h3>
            <h4>Location: {location}</h4>
        </div>
    )
}
export default User;

