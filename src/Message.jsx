export default function Message({data}){


return (

<div className={"message "+data.role}>

{data.content}

</div>

);


}
