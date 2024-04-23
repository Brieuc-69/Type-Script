function plusGrand(tableau) {
    let plusGrandNombre = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > plusGrandNombre) {
            plusGrandNombre = tableau[i];
        }
    }
    return plusGrandNombre;
}

console.log(plusGrand([1, 3, 5, 2])); 


function plusGrand2(tableau) {
    let plusGrandNombre = tableau[0];

    for (let i = 1; i < tableau.length; i++) {
        if (tableau[i] > plusGrandNombre) {
            plusGrandNombre = tableau[i];
        }
    }
    return plusGrandNombre;
}

console.log(plusGrand2([-1,-5, -3]));