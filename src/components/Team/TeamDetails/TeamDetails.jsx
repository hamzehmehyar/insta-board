import { useParams , useNavigate , useLocation } from "react-router-dom";
import '../../styles/profile.css'

export default function Profile(){


    const { name } = useParams();
    const location = useLocation();
    const navigate = useNavigate();


    const data = location.state || {};

    return(

        <div className="profilePage">


            <h2>name : {name}</h2>

            <img src = {data.picture} alt={`${data.name}'s profile`} />

            <p>Email: {data.email}</p>

            <p>gender: {data.gender}</p>

            <p>phone: {data.phone}</p>

            <p>location : {data.city} , {data.country}</p>

            <p>Age : {data.age}</p>




            <button onClick={() => navigate(-1)}>Back</button>


        </div>




    );



}