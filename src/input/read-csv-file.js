import { readFileSync } from "fs";

export function readCsvFile(path) {
    return readFileSync(path).toString();
}