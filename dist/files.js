"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filenameForFile = void 0;
function filenameForFile(file, stripExtension = true) {
    if (stripExtension && file.name.includes("."))
        return file.name
            .split('.')
            .reverse()
            .pop();
    return file.name;
}
exports.filenameForFile = filenameForFile;
