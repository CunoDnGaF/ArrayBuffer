export default class ArrayBufferConverter {
    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        const bufferView = new Uint16Array(this.buffer);
        let outputString = '';

        for (let i = 0; i < bufferView.length; i ++) {
            outputString += String.fromCharCode(bufferView[i]);
        }
        return outputString;
    }
}