import React, {useEffect, useState} from "react";
import '../UserCard/UserCard.css';

import { Link } from "react-router-dom";


export default function UserCard({user}){

    const [likes, setLikes] = useState(0);
    const [showEmail , setShowEmail] = useState(false);


    const {

        picture,
        name,
        email,
        gender,
        phone,
        location,
        dob,


    } = user;

    //
    const userKey = `${name.first} ${name.last}`;

    useEffect(() => {


        const storedLikes = localStorage.getItem(`likes-${userKey}`);

        if(storedLikes){

            setLikes(parseInt(storedLikes));

        }

    } , [userKey])


    const handleLike = () => {

        const newLikes = likes + 1;

        setLikes(newLikes);

        localStorage.setItem(`likes-${userKey}` , newLikes);

    };

    const toggleEmail = () => {

        setShowEmail(!showEmail);

    };

    return (

        <div className="user-card">

            <img src={picture.large} alt="{`${name}'s profile`}" className="user-img"/>

            <div className="card-contents">

                <h2 className="name">{name.first} {name.last}</h2>

                {showEmail && <p>{email}</p>}

                <div className="cardButtons">

                    <button className="show-hide-btn" onClick={toggleEmail}>

                        {showEmail ? 'Hide Email' : 'Show Email'}

                    </button>

                    <button className="likes-btn" onClick={handleLike}>

                        👍 ({likes})

                    </button>

                </div>

                <Link 
                
                to = {`/profile/${encodeURIComponent(`${name.first} ${name.last}`)}`}
                state={{
                    
                    picture: picture.large , 
                    email , 
                    gender , 
                    phone , 
                    city: location.city,
                    country: location.country,
                    age: dob.age,
                    name: `${name.first} ${name.last}`

                }}
                className = "show-profile-btn">
                show profile</Link>
                

            </div>

        </div> 


    );

}