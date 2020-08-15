import React, { useState, useEffect } from "react"
import Axios from "axios"

export default function Users(){

const [listOfUser,setListOfUser] = useState([])
useEffect(()=>{
async function list () {
let user = await Axios.get("https://jsonplaceholder.typicode.com/users")
console.log(user)
setListOfUser(user.data)
}
list()

},[])
return (<div style={{
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
    flexDirection:"column",
    margin:15,
    border:"2px solid black" ,
    padding:20
    
}}>
    <h1>List of users</h1>
    <div>
{listOfUser.map((el)=><div key={el.id}><p >{el.name}</p><hr/></div>)


}</div>



    
    </div>)


}