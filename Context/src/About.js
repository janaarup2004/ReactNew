import react,{useContext,useEffect} from "react";
import NoteContext from "../context/NoteContext";

const About=()=>{
    const a=useContext(NoteContext)

    useEffect(()=>{
        a.update()

    },[])
    return(
        <>
            <h1>About</h1>
            <p>{a.state.name}</p>
            <p>{a.state.class}</p>
        </>

    )
}

export default About