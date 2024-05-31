import { replaceAsteriscsWithStrongs } from "../../utils/replaceAsteriscsWithStrongs"

export function Paragraph({text}: {text: string}){

    const arrayToFormTheString = replaceAsteriscsWithStrongs(text)

    return (
        <>
            <p className="text-base indent-4 mb-2">
                {
                   arrayToFormTheString.map((text, idx) => {
                    if(arrayToFormTheString.length > 1){
                        const previousText = arrayToFormTheString[idx - 1]
                        const nextText = arrayToFormTheString[idx + 1]
                      
                        if(previousText === '<strong>' && nextText === '</strong>'){
                            return <strong key={idx}>{text + ' '}</strong>
                        }
    
                        if(text === '<strong>' || text === '</strong>'){
                            return ''
                        }
                    }

                    return `${text} `
                   }) 
                }
            </p>
        </>
    )
}