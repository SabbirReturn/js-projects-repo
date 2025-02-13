document.getElementById('rec-calcu-btn').addEventListener('click' , function(){
    let firstInputText = document.getElementById('firstInput')
    let firstInputTextValue = parseFloat(firstInputText.value)
    

    let secondInputText = document.getElementById('secondInput')
    let secondInputTextValue = parseFloat(secondInputText.value)
    
    let result = firstInputTextValue * secondInputTextValue;

    let area = document.getElementById('rect_area');
    area.innerText = result;
})