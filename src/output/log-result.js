export function logResult(results, operation) {
    results.forEach((result, index) => {
        console.log(index === 0 ? result : `${operation}${result}`)
    })
    console.log("-------")
    console.log(`total = ${results[results.length - 1]} (${operation === "+" ? "addition" : "multiplication"})`);
} 