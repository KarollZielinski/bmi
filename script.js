const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){


    let height= document.querySelector('#height').value;
    let weight= document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('Please fill out the input fields!');
        return;
    }



    // bmi in kg and m
    height = height / 100

    let BMI = (weight / (height * height));

    BMI = BMI.toFixed(2);
    //console.log(BMI)

    document.querySelector('#result').innerHTML = BMI;


    let status = '';

    if(BMI < 18.5){
        status = "Underweight";
    }
    if(BMI >= 18.5 && BMI <= 25 ){
        status = "Healthy";
    }
    if(BMI > 25){
        status = "Obese";
    }
    document.querySelector('.comment').innerHTML = `you are <span id="comment">${status}</span>`

});