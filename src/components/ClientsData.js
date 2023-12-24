import React from "react";

function ClientFun(props) {
    return(
        
                <div className="clients-container" >
                    <div className="clients-p" >
                        <p>{props.text}</p>
                    </div>
                    <img src={props.src} className="clients-img"/>   
                    <p className="h3 fw-bold mt-4 ">Client Name</p>
                    <p className="h5  mt-3"> Profession</p>
            </div>
       
    )
}

export default ClientFun