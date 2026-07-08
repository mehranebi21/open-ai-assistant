import ReactMarkdown from "react-markdown";
import {Prism as SyntaxHighlighter}
from "react-syntax-highlighter";
import {dark}
from "react-syntax-highlighter/dist/esm/styles/prism";

import CopyButton from "./components/CopyButton";


export default function Message({data}){


return (

<div className={"message "+data.role}>


<ReactMarkdown

components={{

code({inline,className,children}){

const match =
/language-(\w+)/.exec(className || "");


return !inline && match ? (

<div>

<SyntaxHighlighter

style={dark}

language={match[1]}

>

{children}

</SyntaxHighlighter>


<CopyButton
text={children}
/>


</div>


):

(

<code>

{children}

</code>

)

}

}}

>

{data.content}

</ReactMarkdown>


</div>


)

}
