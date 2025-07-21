import React, {useState} from "react";
import '../UserCard/UserCard.css';


export default function UserCard({picture , name , email}){

    const [likes, setLikes] = useState(0);
    const [showEmail , setShowEmail] = useState(false);

    const handleLike = () => {

        setLikes(likes + 1);

    };

    const toggleEmail = () => {

        setShowEmail(!showEmail);

    };

    return (

        <div className="user-card">

            <img src={picture} alt="{`${name}'s profile`}" className="user-img"/>

            <div className="card-contents">

                <h2 className="name">{name}</h2>

                {showEmail && <p>{email}</p>}

                
                <button className="show-hide-btn" onClick={toggleEmail}>

                    {showEmail ? 'Hide Email' : 'Show Email'}

                </button>

                <button className="likes-btn" onClick={handleLike}>

                    ❤️ ({likes})

                </button>

            </div>

        </div> 


    );

}