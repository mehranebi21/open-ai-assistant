const API_KEY = "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";


export async function askAI(message){

const response = await fetch(
"https://openrouter.ai/api/v1/chat/completions",
{

method:"POST",

headers:{

"Authorization":
`Bearer ${API_KEY}`,

"Content-Type":
"application/json"

},

body:JSON.stringify({

model:
"qwen/qwen-2.5-coder-32b-instruct",

messages:[

{
role:"user",
content:message
}

]

})

}

);


const data = await response.json();


if(data.choices){

return data.choices[0].message.content;

}


return "خطا در دریافت پاسخ از مدل";

}
