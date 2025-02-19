// document.getElementById('paraBtn').addEventListener('click',function(){
//     let firstInputText = document.getElementById('paraFirstInput');
//     let firstInputTextValue = firstInputText.value
    
//     let secondInputText = document.getElementById('paraSecondInput');
//     let secondInputTextValue = secondInputText.value
    
//     let result = firstInputTextValue * secondInputTextValue;
    
//     let paraArea = document.getElementById('para-area');
//     paraArea.innerText = result;
// })


function parallelogram(){
    let base = getInputById('paraFirstInput')
    let height = getInputById('paraSecondInput');
    let area = base * height;
    // let area = document.getElementById('para-area');
    // area.innerText = result;
    setInnerTextById('para-area', area);
}

function getInputById(inputFieldId){
    let inputField = document.getElementById(inputFieldId);
    let inputText = inputField.value
    let input = parseFloat(inputText);
    return input;
}

function setInnerTextById(elementId, area){
    let element = document.getElementById(elementId);
    element.innerText = area;
}