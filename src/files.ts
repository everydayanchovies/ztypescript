export function filenameForFile(file: File, stripExtension = true): String {
    if (stripExtension && file.name.includes("."))
        return file.name
            .split('.')
            .reverse()
            .pop()!;

    return file.name;
}
