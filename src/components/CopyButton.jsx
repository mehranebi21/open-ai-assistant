export default function CopyButton({text}){


function copy(){

navigator.clipboard.writeText(text);

}



return (

<button
onClick={copy}
>

📋 Copy

</button>

)


}
