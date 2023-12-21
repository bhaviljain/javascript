let form = document.querySelector('form')
// yeh bahar likhoge to empty value dega
// let weight= parseInt(document.querySelector('#weight').value) 

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let height = parseInt(document.querySelector('#height').value)
    let weight = parseInt(document.querySelector('#weight').value)
    let results = document.querySelector('#results')
    let weightmessage = document.querySelector('#weightmessage')

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please enter a valid height ${height}`

    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = `Please enter a valid weight ${weight}`
    }
    else {
  const bmi=  (weight /((height*height)/10000)).toFixed(2);

    results.innerHTML =`<span>${bmi}</span>`

    if (bmi < 18.6) results.innerHTML =
    `Under Weight : <span>${bmi}</span>`;

else if (bmi >= 18.6 && bmi < 24.9) 
    results.innerHTML =   `Normal :<br>${bmi}</br>`;

else results.innerHTML = `Over Weight : <span>${bmi}</span>`;
}


})