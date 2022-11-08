import React from 'react'
import image from "../Images/most-common-interview-questions.webp"



let data = {fullName: 'FULL NAME,Adeoye Temitope', biograhpy: 'BIOGRAHPY, Ekiti state', profession: 'PROFESSION,Technologist'};

let {fullName} = data
let {biograhpy} = data
let {profession} = data
fullName = fullName.split(',')
profession =profession.split(',')
biograhpy = biograhpy.split(',')
console.log(data)
const Profile = () => {

    
    return (
    <div>
        <Proff fullName = {fullName } biograhpy = {biograhpy} profession = {profession}> <img src={image} alt="my" style={{width: "600px", hight: "300px"}} /> </Proff>
    </div>
    )
    
}


const handleClick = () => {
    
    return(
    
    alert(fullName[1]) )}
const Proff = (props) => {
    const {fullName, biograhpy, profession, } = props
    console.log(props)
    // const handleClick = () => {
    //     alert({fullName})
    // }
    return(
        <>
        <span style={{width: "300px", hight: "150px"}}>{props.children}</span>
        <h1 style={{color: "blue", fontFamily: "cursive" , margTop: '2px'}}>{fullName[0]}  </h1>
        <span style={{fontSize: '25px', color: 'green'}}>{fullName[1]}  </span>
        <h1 style={{color: "blue", fontFamily: "cursive"}}>{profession[0]}</h1>
        <span style={{fontSize: '25px', color: 'green'}}>{profession[1]}</span>
        <h1 style={{color: "blue", fontFamily: "cursive"}}>{biograhpy[0]}</h1>
        <span style={{fontSize: '25px', color: 'green'}}>{biograhpy[1]}</span>
        <button type='button' style={{display: 'block', padding: '10px', boxShadow: '0px 2px 2px 3px',color:'black',backgroundColor:'cyan',border: 'none',fontSize: '20px', }} onClick={handleClick} >Click here</button>
        
        
        
        
        </>
    )
}

export default Profile