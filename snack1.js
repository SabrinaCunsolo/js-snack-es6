// JSnack1: Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzandoo destructuring e template literal.


    // creo array di oggetti con le bici e proprietà
    const biciDaCorsa = [
        {
            nome : 'Wilier',
            peso : 3,
        },
        {
            nome : 'Vektor',
            peso : 5,
        },
        {
            nome : 'Atlas',
            peso : 7,
        },
    ];
    console.log(biciDaCorsa);


    let pesoMin = biciDaCorsa[0];

    biciDaCorsa.forEach( bici => {
        if (pesoMin === 0 || pesoMin.peso > bici.peso) {
        pesoMin = bici;
        }
    });

console.log(pesoMin);
