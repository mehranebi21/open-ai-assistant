const API_KEY = "https://openrouter-chat.milad22g2.workers.dev/";


export async function askAI(message){

try {

const response = await fetch(
"https://openrouter-chat.milad22g2.workers.dev/",
{

method:"POST",

headers:{

"Authorization": `Bearer ${API_KEY}`,

"Content-Type":"application/json"

},

body:JSON.stringify({

model:"qwen/qwen-2.5-7b-instruct",

messages:[

{
role:"user",
content:message
}

]

})

});


const text = await response.text();


console.log("API RESPONSE:", text);


const data = JSON.parse(text);


if(data.choices && data.choices.length){

return data.choices[0].message.content;

}


return "خطای API: " + text;


}

catch(error){

return "خطای اتصال: " + error.message;

}


}
