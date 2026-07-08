export async function askAI(message){


let response=
await fetch(
"https://YOUR_AI_API_URL",
{

method:"POST",

headers:{
"Content-Type":
"application/json"
},


body:JSON.stringify({

message

})


});


let data=
await response.json();


return data.answer;


}
