// import { useState } from "react";

// function Login() {
//     let[dismodal,setdismodal]=useState("modal dis-none")
//     let modal = false;
//     function handledismodal(){
//         if(modal === false){
//          modal = true;
//         setdismodal("modal dis-block")
//         }else{
//         setdismodal("modal dis-none")
//         modal = false;
//     }
// }
//     return (<div>
//         <button className="btn btn-primary me-2" onClick={handledismodal}>Login</button>
//         <div className={dismodal}>
//             <div className="modal-dialog">
//                 <div className="modal-content">
//                     <div className="modal-header">
//                         <h5 className="modal-title">Modal title</h5>
//                         <button type="button" className="btn-close" onClick={handledismodal} data-bs-dismiss="modal" aria-label="Close"></button>
//                     </div>
//                     <div className="modal-body">
//                         <p>Modal body text goes here.</p>
//                     </div>
//                     <div class="modal-footer">
//                         <button type="button" className="btn btn-secondary" onClick={handledismodal} data-bs-dismiss="modal">Close</button>
//                         <button type="button" className="btn btn-primary">Save changes</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>
//     );
// }
// export default Login;
import { useState } from "react";

function Login() {
    const [dismodal, setDismodal] = useState("modal dis-none");

    function handledismodal() {
        setDismodal((prevState) =>
            prevState === "modal dis-none" ? "modal dis-block" : "modal dis-none"
        );
    }

    return (
        <div>
            <button
                className="btn btn-primary me-2"
                onClick={handledismodal}
            >
                Login
            </button>
            <div className={dismodal}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={handledismodal}
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                onClick={handledismodal}
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
