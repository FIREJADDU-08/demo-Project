import { useEffect, useState } from "react";

function Contact(){
    const[Loading,setLoading] =useState(true)
     
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },3000)
        console.log('3');
    },[2])
    console.log(2);
    return(
        <div>Contact.screen

        <div>
           { Loading ?(
                <p>loading.......</p>
            ):(<p>data rendering.....</p>)
        }
        </div>

        </div>
    )
    
}
export default Contact;