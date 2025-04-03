import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState=(props)=>{

    const s1={
        "name": "Arup",
        "class": "3rd year",
    }
    const [state,setState]=useState(s1)

    const update=(()=>{
        setTimeout(()=>{
            setState({
                "name": "Virat",
                "class": "4th year"
            })
        },1000)
    })

    return(
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;