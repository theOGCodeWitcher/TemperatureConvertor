

const calculate = () => {

    const Num = document.getElementById('inputNum').value;
    // console.log(Num);
    const inputUnit = document.getElementById('unit');
    const finalUnit = unit.options[inputUnit.selectedIndex].value;
    // console.log(finalUnit);
    let result,finalResult;
    if (finalUnit == 'cel') {
        result = Math.round((Num * 9 / 5) + 32);
        // finalResult=parseInt(result);
        document.getElementById('resultContainer').innerHTML = `=${result}°Fahrenheit`;
        // console.log(finalResult);

    } else {
        result = Math.round((Num - 32) * 5 / 9);
        // finalResult=parseInt(result);ok 

        document.getElementById('resultContainer').innerHTML = `=${result}°Celsius`;
        // console.log(finalResult);
    }

}