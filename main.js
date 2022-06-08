let pizza = [
    "harina",
    "levadura",
    "agua",
    "jamon",
    "Aceite",
    "Sal",
    "Tomate",
    "Aceitunas",
    "Queso",
    "oregano",
    "Jamon",
];

function contarIngredientes(ingredientes) {
    let pares = [];
    let impares = [];

    for (i = 0; i < pizza.length; i++) {
        let count = pizza[i].length;

        if (count % 2 === 0) {
            pares.push(pizza[i]);
        } else {
            impares.push(pizza[i]);
        }
    }

    return (
        console.log(Los ingredientes PARES son ${pares}),
        console.log(Los integrantes IMPARES son ${impares})
    );
    };

contarIngredientes(pizza)