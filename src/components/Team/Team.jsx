import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import '/home/mehyar/insta-board/src/components/Team/Team.css'



export default function UserList(){


    const [users , setUsers] = useState([]);

    const [userCount , setUserCount] = useState("");
    

    useEffect( () => {


        fetchUsers();

    } , []);

    const fetchUsers = async () => {

        const count = userCount ? Number(userCount) : 12;

        if(count < 1 || count > 100){

            alert("Please enter a number between 1 and 100");

        }

        try {
            
            const response = await axios.get(`https://randomuser.me/api/?results=${count}`); // if you want to test the local storage for the likes just add &seed=grow to the end of the api link

            setUsers(response.data.results);

        } catch (error) {

            console.log("error happened while fetching users" , error);
            
        }


    }

    return (

    <div className='user-list-container'>

        <label>How many users do you want</label>   

        <input 
        
            type='number'
            id='userCount'
            min="1"
            max="100"
            value={userCount}
            onChange={(e) => setUserCount(e.target.value)}
        
        />

        <button onClick={fetchUsers} className='Load-btn'>Load</button>

        <div className='user-list'>

            {users.map((user , index) => (

                <UserCard 
                
                    key = {index} user= {user}                              //

                    picture = { user.picture.large }

                    name = {`${user.name.first} ${user.name.last}`}
                
                    email = {user.email}

                />


            ))}  



        </div>

            <button onClick={fetchUsers} className='load-more-btn'>Load More</button>

    </div>    

    );


}