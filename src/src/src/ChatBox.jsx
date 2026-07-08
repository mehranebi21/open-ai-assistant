import {useState} from "react";

import Message from "./Message";

import {askAI} from "./api";



export default function ChatBox(){


const [text,setText]=useState("");

const [messages,setMessages]=useState([]);



async function send(){


if(!text)return;



let user={

role:"user",
content:text

};



setMessages(
prev=>[
...prev,
user
]
);



setText("");



let answer=
await askAI(text);



setMessages(
prev=>[
...prev,
{
role:"ai",
content:answer
}
]
);



}



return (

<div className="box">


<div className="messages">


{

messages.map(
(m,i)=>

<Message
key={i}
data={m}
/>

)

}


</div>




<div className="input">


<input

value={text}

onChange={
e=>setText(e.target.value)
}

onKeyDown={
e=>{
if(e.key==="Enter")
send()
}
}


placeholder=
"Ask anything..."

/>


<button
onClick={send}
>

Send

</button>


</div>


</div>


)


}
