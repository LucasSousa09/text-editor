import { FormEvent, useRef, useState } from 'react'

import { EditorHeader } from './EditorHeader'

import { VerifyTextContentAndAssingHTML } from '../VerifyTextContentAndAssingHTML'
import { createId } from '@paralleldrive/cuid2'

export function TextEditor(){
    const formRef = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    const [arrayText, setArrayText] = useState<string[]>([])

    function handleSubmit(evt: FormEvent){
        evt.preventDefault()

        const text = inputRef.current?.value || ""

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

        if(text.split('h2:')[0] === ''){
            textType = 'h2://:'
            textWithoutPrefix = text.split('h2:')[1]
        }

        if(text.split('h3:')[0] === ''){
            textType = 'h3://:'
            textWithoutPrefix = text.split('h3:')[1]
        }

        if(text.split('li:')[0] === ''){
            textType = 'li://:'
            textWithoutPrefix = text.split('li:')[1]
        }

        setArrayText(state => [
            ...state, 
            `${textType}${textWithoutPrefix}`
        ])

        formRef.current?.reset()
    }

    

    return (
        <div className="h-full w-full max-w-5xl bg-zinc-100 dark:bg-zinc-900 flex flex-col items-center" >
            <EditorHeader />


            <div className="mb-6">
                {
                    arrayText.map(content => {
                        return <VerifyTextContentAndAssingHTML key={createId()} content={content}/>
                    })
                }
            </div>

            <form onSubmit={handleSubmit} ref={formRef}>
                <input className='border-2 bg-zinc-50 border-zinc-400 dark:border-zinc-300 dark:bg-zinc-300 text-zinc-900 rounded h-10 w-80 px-4' type="text" ref={inputRef} />
            </form>

            <button 
                onClick={() => setArrayText([])}
                className="bg-zinc-600 text-zinc-100 dark:bg-zinc-300 dark:text-zinc-600 font-bold py-4 px-6 rounded mt-10">Limpar conteúdo</button>
        </div>
    )
}