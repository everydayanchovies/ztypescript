export declare function columnsForRawCsvLine(line: String): Array<String>;
export declare function headerForCsvFile(file: File): Promise<Array<String> | null>;
export declare function rowsForCsvFile(file: File): Promise<Array<Array<String>>>;
