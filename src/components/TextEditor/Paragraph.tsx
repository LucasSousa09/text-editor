export function Paragraph({text}: {text: string}){

    const auxArray = text.split(new RegExp('(?=\\*\\*)|(?<=\\*\\*)', 'g')).filter(item => item === '**')

    let stringWithAsteristicsReplaced = text

    auxArray.forEach((word, idx) => {
        if(idx % 2){
            stringWithAsteristicsReplaced = stringWithAsteristicsReplaced.replace('**', ' </strong>')
        }            
        else{
            stringWithAsteristicsReplaced = stringWithAsteristicsReplaced.replace('**', '<strong> ')
        }
    })

    const arrayToFormTheString = stringWithAsteristicsReplaced.split(new RegExp('(?=</?strong>)|(?<=</?strong>)', 'g')).filter(item => item !== ' ')

    return (
        <>
            <p className="text-base">
                {
                   arrayToFormTheString.map((text, idx) => {
                    const previousText = arrayToFormTheString[idx - 1]
                    const nextText = arrayToFormTheString[idx + 1]
                  
                    if(previousText === '<strong>' && nextText === '</strong>'){
                        return <strong>{text + ' '}</strong>
                    }

                    if(text === '<strong>' || text === '</strong>'){
                        return ''
                    }

                    return `${text} `
                   }) 
                }
            </p>
        </>
    )
}