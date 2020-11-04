// JSnack2: Creare un array di nomi e chiedere all'utente due numeri. Creare un nuovo array con i valori che si trovano in una posizione compresa tra i due numeri inseriti dall'utente.

// usiamo i nuovi metodi dell'array foreach o filter


    // array con i nomi
    const nomi = ['Maria', 'Luca', 'Laura', 'Alice', 'Marco', 'Anna', 'Carlo', 'Luigi', 'Silvia', 'Sara'];
    console.log(nomi);


    // Chiedo due volte all'utente un numero tra 0 e 10
    const numero1 = parseInt(prompt('Inserisci un numero tra 0 e 10'));
    const numero2 = parseInt(prompt('Inserisci un altro numero tra 0 e 10'));

    nomi.forEach((element, index) => {
        if (numero1 <= index && numero2 >= index) {
    }
    });
