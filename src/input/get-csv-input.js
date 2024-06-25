import { validateCsvPath } from "./validate-csv-path.js";
import { readCsvFile } from "./read-csv-file.js";
import { formatCsvContent } from "./format-csv-content.js";

export function getCsvInput(path) {
    validateCsvPath(path);
    const csvContent = readCsvFile(path);
    return formatCsvContent(csvContent);
}