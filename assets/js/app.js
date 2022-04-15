let oneway = document.querySelector('#radio-oneway')
let roundtrip = document.querySelector("#radio-roundtrip")
let btnoneway = document.querySelector('.oneway')
let btnroundtrip = document.querySelector('.roundtrip')
let arrivaldate = document.querySelector('#arrival-date--field')


let removeOneWay = () => {
    oneway.checked = false;
    btnoneway.textContent = 'radio_button_unchecked'
    btnoneway.classList.remove('active')
    btnoneway.classList.add('no-active')
    btnroundtrip.textContent = 'radio_button_checked'
    btnroundtrip.classList.add('active')
    btnroundtrip.classList.remove('no-active')
    arrivaldate.disabled = false;
}

let removeRoundTrip = () => {
    roundtrip.checked = false;
    btnroundtrip.textContent = 'radio_button_unchecked'
    btnroundtrip.classList.remove('active')
    btnroundtrip.classList.add('no-active')
    btnoneway.textContent = 'radio_button_checked'
    btnoneway.classList.add('active')
    btnoneway.classList.remove('no-active')
    arrivaldate.disabled = true;
}

roundtrip.addEventListener('click', removeOneWay);
oneway.addEventListener('click', removeRoundTrip);