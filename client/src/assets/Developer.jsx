import { useState } from "react"
import Images from "./imageRender";

function Developer({avatar, name, role}){

    const [endourse, setEndourse ] = useState(0);
    function endourseCheck(x){
        if(x!=0){
            x=x-1;
        }
        return x;
    }
    function avatarSet(av){
        if(av===""){
            av=Images.default_avatar
        }else{
            av=avatar
        }
        return av;
    }

    return(
        <div>
            <img src={avatarSet(avatar)} className="block m-auto rounded-full w-35 h-35"/>
            <h1 className="text-3xl">{name}</h1>
            <p className="text-sm">{role}</p>
            <br/>

            <div className="flex flex-3 justify-center">

                <div className="mx-3 bg-slate-800 p-1 rounded-full h-min" onClick={()=> setEndourse(endourseCheck(endourse))}><img src={Images.thumb_down} /></div>                
                <div className={"px-2.5 py-1.5 bg-slate-500 rounded-full text-white"}><span className={`${endourse >= 10 ? "text-red-200":"text-white-500"}`}>Endoursement:</span> {endourse}</div>
                <div className="mx-3 bg-slate-800 p-1 rounded-full h-min" onClick={()=> setEndourse( endourse + 1 )}><img src={Images.thumb_up} /></div>

            </div>
        </div>
    )
}

export default Developer