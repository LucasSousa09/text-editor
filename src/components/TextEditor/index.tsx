import { FormEvent, useState } from 'react'
import { createId } from '@paralleldrive/cuid2'


export function TextEditor(){
    const [text, setText] = useState('')
    const [arrayText, setArrayText] = useState<string[]>([])

    function handleSubmit(evt: FormEvent){
        evt.preventDefault()

        let textType = 'p://:'
        let textWithoutPrefix = text

        if(text.split('i:')[0] === ''){
            textType = 'i://:'
            textWithoutPrefix = text.split('i:')[1]
        }

        if(text.split('h1:')[0] === ''){
            textType = 'h1://:'
            textWithoutPrefix = text.split('h1:')[1]
        }

        setArrayText(state => [
            ...state, 
            `${textType}${textWithoutPrefix}`
        ])

        setText('')
    }

    return (
        <div className="h-full bg-slate-600 flex flex-col" >
            <header>
                Header
            </header>
            <form onSubmit={handleSubmit}>
                <input className='bg-black' value={text} onChange={e => {
                    setText(e.target.value)
                }} name="" id="" />
            </form>

            <div>
                {arrayText.map(content => {
                    const contentSnippet = content.split('://:')
                    if(contentSnippet[0] === 'p'){
                        return(
                            <p key={createId()}>
                                {contentSnippet[1]}
                            </p> 
                        )
                    }
                    if(contentSnippet[0] === 'h1'){
                        return(
                            <h1 key={createId()}>
                                {contentSnippet[1]}
                            </h1> 
                        )
                    }
                    if(contentSnippet[0] === 'i'){
                        return(
                            <img src={contentSnippet[1]} key={createId()}/> 
                        )
                    }
                })}
            </div>
        </div>
    )
}