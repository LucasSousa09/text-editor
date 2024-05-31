import { HeadingOne } from "./TextEditor/HeadingOne"
import { HeadingThree } from "./TextEditor/HeadingThree"
import { HeadingTwo } from "./TextEditor/HeadingTwo"

import { ListItem } from "./TextEditor/ListItem"
import { Paragraph } from "./TextEditor/Paragraph"

export function VerifyTextContentAndAssingHTML({content}: {content: string}){
    const contentSnippet = content.split('://:')

    if(contentSnippet[0] === 'p'){
        return(
            <Paragraph text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'h1'){
        return(
            <HeadingOne text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'h2'){
        return(
            <HeadingTwo text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'h3'){
        return(
            <HeadingThree text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'i'){
        return(
            <img src={contentSnippet[1]}/> 
        )
    }
    if(contentSnippet[0] === 'li'){
        return(
            <ListItem text={contentSnippet[1]}/>
        )
    }
}