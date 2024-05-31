export function replaceAsteriscsWithStrongs(text: string){
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

    return arrayToFormTheString
}

