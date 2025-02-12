document.getElementById('Calculate-btn').addEventListener('click', function(){
    let firstNumber = document.getElementById('first-Number'); 
    let firstNumberText = firstNumber.value;
    let base = parseFloat(firstNumberText)
    let secondNumber = document.getElementById('second-Number');
    let secondNumberText = secondNumber.value
    let height = parseFloat(secondNumberText);
    let result = base* height;
    console.log(result)
   let areaResult = document.getElementById('area-value');
   areaResult.innerText  = result;

    // let areaContainerResult = document.getElementById('areaContainer');

    // let p = document.createElement('p');
    // p.innerText = 'Tra',result;
    // areaContainerResult.appendChild(p);
})
