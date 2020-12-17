class WebFileService {
    public downloadAsTextFile(text: string, filename: string) {
        const element = document.createElement('a');

        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    public async loadJsonFromInputFile(fileInput: HTMLInputElement): Promise<object> {
        if (!fileInput.files || 0 === fileInput.files.length) {
            return Promise.reject('no file');
        }

        const file: File = fileInput.files[0];

        const reader = new FileReader();

        reader.readAsText(file, 'UTF-8');

        return new Promise((resolve, reject) => {
            reader.onload = evt => {
                if (!evt.target) {
                    reject('no event target');
                    return;
                }

                const text = evt.target.result;

                if (!text) {
                    reject('no file text');
                    return;
                }

                try {
                    resolve(JSON.parse('' + text));
                } catch (e) {
                    reject('This file is not a Json export');
                }
            };
        });
    }
}

const webFileService = new WebFileService();

export {
    WebFileService,
    webFileService,
};
