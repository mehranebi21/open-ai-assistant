import {useState} from "react";
import Message from "./Message.jsx";


export default function ChatBox(){


const [input,setInput]=useState("");

const [messages,setMessages]=useState([]);



function send(){


if(!input.trim()) return;


setMessages([

...messages,

{
role:"user",
content:input
},

{
role:"ai",
content:"سلام 👋 من دستیار هوش مصنوعی شما هستم."
}

]);


setInput("");

}



return (

<div className="chat">


<div className="messages">

{

messages.map((m,i)=>(

<Message
key={i}
data={m}
/>

))

}

</div>



<div className="input">


<input

value={input}

onChange={
e=>setInput(e.target.value)
}

onKeyDown={
e=>{
if(e.key==="Enter")
send()
}
}

placeholder="پیام خود را بنویسید..."

/>


<button onClick={send}>

ارسال

</button>


</div>


</div>

);


}
