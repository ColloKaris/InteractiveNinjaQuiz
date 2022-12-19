const correctAnswers = ['B','B','B','B'];

const result = document.querySelector('.result');

//attach an event listener to the form to listen for when a user
//has submitted the form
const form = document.querySelector('.quiz-form'); //select form

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let score = 0;
    //create array with user provided answers
    //looks for whichever is checked
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

    //compare userAnswers to the correct answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 25;
        }
    });
    
    //scrollTo(0,0);
    scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })

    // show result on the page
    result.querySelector('span').textContent = `${score}%`;

    //remove the bootstrap class hiding the result from the page
    result.classList.remove('d-none')
})