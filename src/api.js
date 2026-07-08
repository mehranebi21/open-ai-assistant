const API_KEY = "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";


export async function askAI(message){

try {

const response = await fetch(
"https://openrouter.ai/api/v1/chat/completions",
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
