// document.getElementById('rec-calcu-btn').addEventListener('click' , function(){
//     let firstInputText = document.getElementById('firstInput')
//     let firstInputTextValue = parseFloat(firstInputText.value)
    

//     let secondInputText = document.getElementById('secondInput')
//     let secondInputTextValue = parseFloat(secondInputText.value)
    
//     let result = firstInputTextValue * secondInputTextValue;

//     let area = document.getElementById('rect_area');
//     area.innerText = result;
// })

function triangleCalculate(){
    let base  = getInputById('first-Number');
    let height = getInputById('second-Number')
    let result = 0.5 *base * height;
    setInnerText('area-value',result);
}

function getInputById(getInput){
    let inputText = document.getElementById(getInput);
    let inputValue = inputText.value
    let input = parseFloat(inputValue);
    return input;
}

function setInnerText(elementId, result){
    let element = document.getElementById(elementId);
    element.innerText = result;
}