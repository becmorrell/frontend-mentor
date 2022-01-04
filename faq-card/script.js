
const answerCard = document.querySelectorAll(".question");

document.querySelectorAll(".question").forEach(item => {
    item.addEventListener('click', (e) => {
        console.log(e); 

        const question = e.target.closest(".question");
        console.log(question);

        if (question.classList.contains('expanded')) {
            question.classList.remove('expanded');
        }
        
        else {
            const visibleElements = document.querySelectorAll(".expanded");
            visibleElements.forEach(item => {
                item.classList.remove('expanded');
            });
        question.classList.add('expanded')   }
    
    })
}); 