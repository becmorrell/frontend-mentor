
const answerCard = document.querySelectorAll(".question");

document.querySelectorAll(".question").forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e); 

        const question = e.target.closest(".question");
        console.log(question);

        const answer = question.querySelector(".answer");
        console.log(answer);

        if(answer.classList.contains("expanded")) {
            answer.classList.remove("expanded");

        if (question.classList.contains('expanded')) {
            question.classList.remove('expanded');
        }
        }
        else {
            const visibleElements = document.querySelectorAll(".expanded");
            visibleElements.forEach(item => {
                item.classList.remove('expanded');
            });
            answer.classList.add('expanded')
        question.classList.add('expanded')   }
    
    })
}); 