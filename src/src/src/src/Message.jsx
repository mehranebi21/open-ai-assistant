import CopyButton from "./components/CopyButton";


export default function Message({data}){


return (

<div
className={
"message "+data.role
}>


<p>
{data.content}
</p>


{

data.role==="ai"
&&

<CopyButton
text={data.content}
/>

}


</div>


)


}
