function moyenne(nombres: number[]): number {
    const total = nombres.reduce((acc, curr) => acc + curr, 0);
    return total / nombres.length;
}

console.log(moyenne([1, 2, 3, 4, 5])); // Devrait afficher 3

function moyenne2(nombres: number[]): number {
    const total = nombres.reduce((acc, curr) => acc + curr, 0);
    return total / nombres.length;
}   
console.log(moyenne2([10, 20, 30])); // Devrait afficher 20




