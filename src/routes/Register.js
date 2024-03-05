import React from "react";
import "../styles/RegisterStyles.css";

const Register = () => {
    return(
        <div className="application">
            <form>
               <div className="input-boxes">
                  <label className="text-Content">First Name</label>
                  <input placeholder="Type First Name"></input>
               </div> 
            </form>
            <form>
               <label>Last Name</label> 
            </form>
            <form>
               <label>Email</label> 
            </form>
            <form>
               <label>Linkedin Profile</label> 
            </form>
            <form>
               <label>School</label> 
            </form>

        </div>
    )

}

export default Register