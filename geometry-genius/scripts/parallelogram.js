document.getElementById('paraBtn').addEventListener('click',function(){
    let firstInputText = document.getElementById('paraFirstInput');
    let firstInputTextValue = firstInputText.value
    
    let secondInputText = document.getElementById('paraSecondInput');
    let secondInputTextValue = secondInputText.value
    
    let result = firstInputTextValue * secondInputTextValue;
    
    let paraArea = document.getElementById('para-area');
    paraArea.innerText = result;
})