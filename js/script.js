//Tworzenie textarea
var config = {
    lineNumbers: true,
    lineWrapping: false,
    mode: "xml",
    theme: "ayu-mirage",
};
function createCodeArea(id) {
    var editor = CodeMirror.fromTextArea($(`#${id}`)[0], config);
    return editor;
}