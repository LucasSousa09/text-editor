import { createId } from "@paralleldrive/cuid2"

import { HeadingOne } from "../components/TextEditor/HeadingOne"
import { HeadingThree } from "../components/TextEditor/HeadingThree"
import { HeadingTwo } from "../components/TextEditor/HeadingTwo"

import { ListItem } from "../components/TextEditor/ListItem"
import { Paragraph } from "../components/TextEditor/Paragraph"

export function verifyTextContentAndAssingHTML(content: string){
    const contentSnippet = content.split('://:')

    if(contentSnippet[0] === 'p'){
        return(
            <Paragraph key={createId()} text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'h1'){
        return(
            <HeadingOne key={createId()} text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'h2'){
        return(
            <HeadingTwo key={createId()} text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'h3'){
        return(
            <HeadingThree key={createId()} text={contentSnippet[1]}/>
        )
    }
    if(contentSnippet[0] === 'i'){
        return(
            <img src={contentSnippet[1]} key={createId()}/> 
        )
    }
    if(contentSnippet[0] === 'li'){
        return(
            <ListItem key={createId()} text={contentSnippet[1]}/>
        )
    }
}