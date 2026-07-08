import {useState} from "react";

import ChatBox from "./ChatBox";


export default function App(){


const [dark,setDark]=useState(true);


return (

<div
className={
dark ? "app dark":"app"
}>


<header>


<h1>
🤖 Open AI Assistant
</h1>


<button
onClick={()=>
setDark(!dark)
}>

{
dark ? "☀️":"🌙"
}

</button>


</header>



<ChatBox/>


</div>

);


}
