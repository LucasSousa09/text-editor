import { replaceAsteriscsWithStrongs } from "../../utils/replaceAsteriscsWithStrongs"

export function ListItem({text}: {text: string}){
    const arrayToFormTheString = replaceAsteriscsWithStrongs(text)

    return (
        <li className="text-base mb-2 indent-4">
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
        </li>
    )
}