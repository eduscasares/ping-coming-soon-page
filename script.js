const subscribeForm = document.getElementById('subscribeForm');
const subscribeInput = document.getElementById('subscribeInput');
const submitButton = document.getElementById('submitButton');

const regExp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

const validarCorreo = (item) => {
    if (!item.value.match(regExp)) {
        subscribeInput.classList.add('invalid')
        document.getElementById('errorMessage').style.opacity = '1'
    } else {
        subscribeInput.classList.remove('invalid')
        document.getElementById('errorMessage').style.opacity = '0'
    }
}


