import React, { useState ,useEffect} from 'react'
import { io } from 'socket.io-client'; // first you have to install "socket.io-client"
let socket ; // you have to define socket 
const Socket = () => {

    const CON_PORT = ""; // set according to your channel port 
    const [message, setMessage] = useState("")
    const [messagelist, setMessageList] = useState([])
    const [chat , setChat] = useState([]) // for all incoming message 
    // useEffect(() => {
    //     socket = io(CON_PORT)
    //     handleJoinRoom()  // join room function
    // }, [CON_PORT])

const handleJoinRoom = ()=>{
    socket.emit("join_room", {
        room_id: "your uniqe id to join room",
        req_from: "Client"
    }
    )
    handleReceiveMessage()
}
//********************  function for Receive message ****************************************** */
const handleReceiveMessage = ()=>{
    socket.on("receive_message", function (payload) {
         // here you can get received messages payload 
        //  console.log("chat message",payload)
    })
}
//********************  function for send message ****************************************** */
const handleSendMessage = (e)=>{
    e.preventDefault()
    socket.emit("send_message", {
        room_id: "your room id",
        message: message,
        date_now: new Date()
    })
    if (message) {
        setMessageList((data) => [...data, message])
        setMessage("")
    }
}
// console.log(messagelist);
    return (
        <div>
            <h2 style={{color:"red"}}>{messagelist?.map((chat)=><ul><li>{chat}</li></ul>)}</h2>
            <form onSubmit={(e)=>{handleSendMessage(e)}}>
                <input type="text" onChange={(e)=>{setMessage(e.target.value)}} value={message} className='chatInput' />
                <button type='submit' className='chatbutton'> Send </button>
            </form>
        </div>
    )
}
export default Socket
