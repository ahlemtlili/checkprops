import React from "react";
import PropTypes from 'prop-types';
import "../../App.css"
function Profile({ fullName, bio, profession, children,handleName }) {
  return (
    <div>
      <div>
        <h1 style={{color:"#c94c4c",fontSize:"30px",background:"linen",padding:"20px 20px",textTransform:"uppercase",marginTop:"60px",position:"absolute",left:"50%",right:"50%",transform:"translate(-50%, -80%)",fontFamily:"Arial, Helvetica, sans-serif",width:"500px",height:"50px",borderBottom:"5px solid ",overflow:"hidden"}}> <span style={{color:"#50394c",fontSize:"35px"}}>Full name :</span>{fullName}</h1>
        <div>{children}</div>
      </div>
      <h2 style={{marginTop:"30px",paddingTop:"20px",backgroundImage:"conic-gradient(white,#d5e1df,pink)",fontSize:"25px",fontWeight:"600",backgroundClip:"text"}} > <span style={{color:"#50394c",fontSize:"40px"}}>Bio :  </span>{bio}</h2>
      <h2 style={{marginTop:"30px",fontSize:"20px",fontWeight:"600",backgroundImage:"linear-gradient(to right, #d5e1df 45%, pink)",backgroundClip:"text"}}> <span style={{color:"#50394c",fontSize:"45px"}}>Profession :   </span>{profession}</h2>
      <button  className="button"onClick={()=>handleName(fullName)}> User's Name </button>
      </div>
  );
}
Profile.defaultProps = {
  fullName: "default name",
  bio:"default bio",
  profession: "default profession",
  children:"here is my img",
  handleName:()=>alert("there is no function")
};
Profile.propTypes={
  fullName:PropTypes.string,
  bio:PropTypes.string,
  profession:PropTypes.string,
  children:PropTypes.element,
  handleName:PropTypes.func 
  }
export default Profile;