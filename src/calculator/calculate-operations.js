export function calculateOperations(values, operation) {
    return values.reduce((previousValue, value, index) => {
        if (index === 0) return [value];

        const valueToCalculate = previousValue[index - 1];
        let result = 0;
        if (operation === "+") {
            result = value + valueToCalculate;
        } else if (operation === "*") {
            result = value * valueToCalculate;
        } else {
            throw new Error(`${operation} does not exist only use '+' or '*'`)
        }
        return [...previousValue, result];
    }, []);
}