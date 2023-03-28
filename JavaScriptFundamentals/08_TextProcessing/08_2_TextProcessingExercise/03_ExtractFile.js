function extractFile(filePath) {
    let fileExtensionStartIndex = filePath.lastIndexOf('.') + 1;
    let extension = filePath.substring(fileExtensionStartIndex);

    let fileNameStartIndex = filePath.lastIndexOf('\\') + 1;
    let fileName = filePath.substring(fileNameStartIndex, fileExtensionStartIndex - 1);

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');