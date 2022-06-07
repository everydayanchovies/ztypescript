import { linesForFile } from "./files";

export function columnsForRawCsvLine(line: string): Array<string> {
    const delim = line.includes(';') ? ';' : ',';
    return line.split(delim);
}

export async function headerForCsvFile(file: File): Promise<Array<string> | null> {
    const textRows = await linesForFile(file);
    if (!textRows)
        return null;

    return columnsForRawCsvLine(textRows[0]);
}

export async function rowsForCsvFile(file: File): Promise<Array<Array<string>>> {
    const textRows = await linesForFile(file);
    if (textRows.length <= 1)
        return [];

    return textRows
        .slice(1)
        .map(columnsForRawCsvLine)
}
