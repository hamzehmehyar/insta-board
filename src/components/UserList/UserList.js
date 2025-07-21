import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import '../UserList/UserList.css'



export default function UserList(){


    const [users , setUsers] = useState([]);

    useEffect( () => {


        fetchUsers();

    } , []);

    const fetchUsers = async () => {

        try {
            
            const response = await axios.get("https://randomuser.me/api/?results=12");

            setUsers(prevUsers => [...prevUsers, ...response.data.results]);

        } catch (error) {

            console.log("error happened while fetching users" , error);
            
        }


    }

    return (

    <div className='user-list-container'>    

        <div className='user-list'>

            {users.map((user , index) => (

                <UserCard 
                
                    key = {index}

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