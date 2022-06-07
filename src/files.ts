export function filenameForFile(file: File, stripExtension = true): string {
    if (stripExtension && file.name.includes("."))
        return file.name
            .split('.')
            .reverse()
            .pop()!;

    return file.name;
}

export function linesForFile(file: File): Promise<Array<string>> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = function (e: any) {
            let content: string = e.target.result;
            resolve(content.split(/\r\n|\n/));
        };

        reader.onerror = reject;

        reader.readAsText(file);
    });
}
