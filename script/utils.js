// Some usefull JS functions and utils

function onPageLoad(){

}

function copyToClipboard(text, element) {
    navigator.clipboard.writeText(text)
        .then()
       .catch((error) => { 
                console.log(`Could not copy '${text}' to the clipboard`);
        });
    element.title = "Copied " + text;
}