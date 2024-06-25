export function validateCsvPath(path) {
    if (path == null || !/\.csv$/.test(path)) throw new Error("You must provide a CSV file");
}