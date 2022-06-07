export declare function columnsForRawCsvLine(line: string): Array<string>;
export declare function headerForCsvFile(file: File): Promise<Array<string> | null>;
export declare function rowsForCsvFile(file: File): Promise<Array<Array<string>>>;
