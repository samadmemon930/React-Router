import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";

const Home = () =>{
    let nav = useNavigate()


    return(
        <>
        <Navbar/>
        <h1>Home</h1>
        <button onClick={()=> nav("/About")}>About</button>
        </>
    )
}









export default Home;