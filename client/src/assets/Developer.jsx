import { useState } from "react"
import Images from "./imageRender";

function Developer({avatar, name, role}){

    const [endourse, setEndourse ] = useState(0);

    return(
        <div className="p-4 m-4 rounded-xl bg-slate-300 w-80">
            <img src={avatar} className="block m-auto rounded-full"/>
            <h1 className="text-4xl">{name}</h1>
            <p className="text-md">{role}</p>
            <br/>

            <div className="flex flex-3 justify-center">

                <div className="mx-3 bg-slate-800 p-1.5 rounded-full" onClick={()=> setEndourse( endourse - 1 )}><img src={Images.thumb_down} /></div>                
                <div className="px-2.5 py-1.5 bg-slate-800 rounded-full text-white">Endoursement: {endourse}</div>
                <div className="mx-3 bg-slate-800 p-1.5 rounded-full" onClick={()=> setEndourse( endourse + 1 )}><img src={Images.thumb_up} /></div>

            </div>
        </div>
    )
}

export default Developer