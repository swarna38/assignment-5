function getInputValueById(id){
    const valueEl= parseFloat(document.getElementById(id).value);
    return valueEl;
}

function getInputById(id){
    return document.getElementById(id);
}

function getInputInnerText(id){
    return parseFloat(document.getElementById(id).innerText);
}

