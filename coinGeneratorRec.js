
function generateCoinChange(
    cents,
    solutions = [],
    partial = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 }
) {
    solutions.push({
        ...partial,
        pennies: cents
    });

    if (!partial.quarters) {
        const maxQuarters = Math.floor(cents / 25);
        for (let i = 1; i <= maxQuarters; i++) {
            generateCoinChange(cents - i * 25, solutions, 
                {
                ...partial,
                quarters: i
            }
            );
        }
    }

    if (!partial.dimes) {
        const maxDimes = Math.floor(cents / 10);
        for (let i = 1; i <= maxDimes; i++) {
            generateCoinChange(cents - i * 10, solutions, {
                ...partial,
                dimes: i
            });
        }
    }

    if (!partial.nickels) {
        const maxNickels = Math.floor(cents / 5);
        for (let i = 1; i <= maxNickels; i++) {
            generateCoinChange(cents - i * 5, solutions, {
                ...partial,
                nickels: i
            });
        }
    }

    return solutions;
}

console.log(generateCoinChange(13));