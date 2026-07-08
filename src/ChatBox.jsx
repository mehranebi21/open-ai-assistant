import {useState} from "react";
import Message from "./Message.jsx";
import {askAI} from "./api.js";


export default function ChatBox(){


const [input,setInput]=useState("");

const [messages,setMessages]=useState([]);


async function send(){


if(!input.trim()) return;


const question=input;


setMessages(prev=>[
...prev,
{
role:"user",
content:question
}
]);


setInput("");


setMessages(prev=>[
...prev,
{
role:"ai",
content:"در حال فکر کردن..."
}
]);


const answer=await askAI(question);


setMessages(prev=>{

let copy=[...prev];

copy[copy.length-1]={

role:"ai",

content:answer

};

return copy;

});


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

placeholder="سوال خود را بنویس..."

 />


<button onClick={send}>
ارسال
</button>


</div>


</div>

);


}
