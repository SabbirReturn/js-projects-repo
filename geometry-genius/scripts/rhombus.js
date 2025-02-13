document.getElementById('rhom-btn').addEventListener('click',function(){
    let rhomFirstInputText = document.getElementById('rhomFirstInput');
    let rhomFirstInputTextValue = parseFloat(rhomFirstInputText.value)
    
    let rhomSecondInputText = document.getElementById('rhomSecondText')
    let rhomSecondInputTextValue = parseFloat(rhomSecondInputText.value)
    let result = rhomFirstInputTextValue * rhomSecondInputTextValue;
    
    let rhomArea = document.getElementById('rhpm-Area');
    rhomArea.innerText = result;
    rhomFirstInputText.value = '';
    rhomSecondInputText.value = '';
})