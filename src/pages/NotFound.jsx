import { useNavigate } from "react-router-dom";

export default function Error(){

    const navigate = useNavigate();

    return (    

        <>

            <h1>Error 404</h1>


            <button onClick={() => navigate("/")}>Go back To Home</button>

        </>  
        
    )

}



