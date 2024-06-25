import { calculateOperations } from "./calculator/calculate-operations.js";
import { getCsvInput } from "./input/get-csv-input.js";
import { logResult } from "./output/log-result.js";

function main() {
    try {
        const input = getCsvInput("./input/numbers.csv");
        const calculatedValues = calculateOperations(input, "+");
        logResult(calculatedValues, "+")

    } catch (e) {
        console.error(e);
    }
}

main();