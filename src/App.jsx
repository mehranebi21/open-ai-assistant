import { useState } from "react";
import ChatBox from "./ChatBox.jsx";


export default function App(){

const [dark,setDark]=useState(true);


return (

<div className={dark ? "app dark" : "app"}>


<header className="header">

<h1>
🤖 Open AI Assistant
</h1>


<button
onClick={()=>setDark(!dark)}
>

{
dark ? "☀️ روشن" : "🌙 تاریک"
}

</button>


</header>


<ChatBox />


</div>

);

}
