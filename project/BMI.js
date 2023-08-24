const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height =parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML =`plz give a valid height ${height}`;
        results.style.color="red";}
    else if (weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML =`plz give a valid weight ${weight}`
        results.style.color="red";
        

    }
    else {
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
       // show the result
       
        const health = bmi < 18.6 ? 'under weight' : bmi >18.6 && bmi <24.9 ?'Healthy' :'Overweight';
        results.innerHTML =`<span>${bmi}: ${health}</span>`;
    }
    
})