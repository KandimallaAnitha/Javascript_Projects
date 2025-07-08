document.getElementById("bmiform").addEventListener('submit',function(e){

    e.preventDefault();

    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const heightfeet = parseInt(document.getElementById('height-feet').value);
    const heightinches = parseInt(document.getElementById('height-inches').value);
    const weight = parseInt(document.getElementById('weight').value);

    if(gender && age && heightinches  && weight){

        const heightinmeters = ((heightfeet * 12) + heightinches) * 0.0254;
        const bmi = weight / (heightinmeters * heightinmeters);
        const resultelement = document.getElementById("result");

        let category = '';

        if(bmi < 18.5){
            category ="under weight";
        }else if(bmi >=18.5 && bmi < 24.9){
            category = "normal weight";
        }else if(bmi >= 25 && bmi < 29.9){
            category = "over weight";
        }else{
            category = "obese";
        }

        let resultmessage = "your BMI:" + bmi.toFixed(2) + '<br>';
        resultmessage += "category:" + category;

        resultelement.innerHTML = resultmessage;
    }
})