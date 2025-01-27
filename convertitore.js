
const form = document.querySelector('#form')
const resultDiv = document.querySelector('#result-div')
form.addEventListener('submit', function(e) {
  e.preventDefault()
  const targetForm = e.target
  const eur = targetForm.eur.value
  const usd = eur*0.98
  resultDiv.innerHTML = `<p>Today, ${eur} € are equivalent to ${usd} $!</p>`
})
    const secform = document.querySelector('#secform');
    const secresultDiv = document.querySelector('#secresult-div');
    secform.addEventListener('submit', function(k) {
    k.preventDefault()
    const targetsecForm = k.target
    const celsius = targetsecForm.celsius.value
    const fahrenheit = celsius*9/5+32
    secresultDiv.innerHTML = `<p>${celsius}° Celsius are equivalent to ${fahrenheit}° Fahrenheit!</p>`
    })
    const terform = document.querySelector('#terform');
    const terresultDiv = document.querySelector('#terresult-div');
    terform.addEventListener('submit', function(g) {
    g.preventDefault()
    const targetterForm = g.target
    const kg = targetterForm.KG.value
    const lbs = kg*2.205
    terresultDiv.innerHTML = `<p>${kg} KG are equivalent to ${lbs} LBS!</p>`
    })
