const btn = document.querySelector('.btn');
const firstName = document.querySelector('#fname');
const lastName = document.querySelector('#lname');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const parents = document.querySelectorAll('.parent-1');
const images = document.querySelectorAll('.img-1');
const texts = document.querySelectorAll('.text');

const validationHandler = () => {
    if (
        firstName.value === '' ||
        lastName.value === '' ||
        email.value === '' ||
        password.value === ''
    ) {
        for (const text of texts) {
            text.style.display = 'block';
            text.style.color = 'red';
        }
        for (const image of images) {
            image.style.display = 'block';
        }
        for (const parent of parents) {
            parent.style.border = '1px solid red';
        }
    } else {
        for (const parent of parents) {
            parent.style.border = '2px green solid';
        }
            for (const text of texts) {
           
              text.textContent = '';
              }
              for (const image of images) {
                image.style.display = 'none';
              }
        //   }}
    }
};

btn.addEventListener('click', validationHandler);
