"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.linesForFile = exports.filenameForFile = void 0;
function filenameForFile(file, stripExtension = true) {
    if (stripExtension && file.name.includes("."))
        return file.name
            .split('.')
            .reverse()
            .pop();
    return file.name;
}
exports.filenameForFile = filenameForFile;
function linesForFile(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = function (e) {
            let content = e.target.result;
            resolve(content.split(/\r\n|\n/));
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}
exports.linesForFile = linesForFile;
