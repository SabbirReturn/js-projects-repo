// document.getElementById('rhom-btn').addEventListener('click',function(){
//     let rhomFirstInputText = document.getElementById('rhomFirstInput');
//     let rhomFirstInputTextValue = parseFloat(rhomFirstInputText.value)
    
//     let rhomSecondInputText = document.getElementById('rhomSecondText')
//     let rhomSecondInputTextValue = parseFloat(rhomSecondInputText.value)
//     let result = 0.5* rhomFirstInputTextValue * rhomSecondInputTextValue;
    
//     let rhomArea = document.getElementById('rhpm-Area');
//     rhomArea.innerText = result;
//     rhomFirstInputText.value = '';
//     rhomSecondInputText.value = '';
// })

function calculateRhombusArea(){
    let firstInput = getInputById('rhomFirstInput');
    let secondInput = getInputById('rhomSecondText');
    let result = 0.5*firstInput*secondInput;
    setInnerTextById('rhpm-Area',result);
}

function getInputById(getInput){
    let inputText = document.getElementById(getInput);
    let inputValue = inputText.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerTextById(elementId, result){
    let element = document.getElementById(elementId);
    element.innerText = result;
}