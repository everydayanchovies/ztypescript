"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.rowsForCsvFile = exports.headerForCsvFile = exports.columnsForRawCsvLine = exports.linesForFile = void 0;
var files_1 = require("./files");
Object.defineProperty(exports, "linesForFile", { enumerable: true, get: function () { return files_1.linesForFile; } });
function columnsForRawCsvLine(line) {
    const delim = line.includes(';') ? ';' : ',';
    return line.split(delim);
}
exports.columnsForRawCsvLine = columnsForRawCsvLine;
function headerForCsvFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const textRows = yield this.linesForFile(file);
        if (!textRows)
            return null;
        return this.columnsForRawCsvLine(textRows[0]);
    });
}
exports.headerForCsvFile = headerForCsvFile;
function rowsForCsvFile(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const textRows = yield this.linesForFile(file);
        if (textRows.length <= 1)
            return [];
        return textRows
            .slice(1)
            .map(this.columnsForRawCsvLine);
    });
}
exports.rowsForCsvFile = rowsForCsvFile;
