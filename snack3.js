// JSnack3: A partire da un array di oggetti, creare una copia dell'array e aggiungere ai singoli elementi dell'array una nuova proprietà "position" che contiene una lettera casuale.

// arrow function, map e

const classe = [
    {
        nome: 'sara',
        cognome: 'rossi',
        sesso: 'f'
    },
    {
        nome: 'mario',
        cognome: 'bianchi',
        sesso: 'm'
    },
    {
        nome: 'monica',
        cognome: 'verdi',
        sesso: 'f'
    }
]

const classeCopia = [...classe].map()
