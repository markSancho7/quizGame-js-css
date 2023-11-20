
import { QUESTIONS } from "./answers";
import { containerButtons, containerElement, finalResultElement, questionQuizElement } from "./dom";
let counter = 0
const answersArray = []

// comprobar resultados
export const checkResult = ()=>{
    for(let i = 0 ; i<answersArray.length ; i++){
        const question = document.createElement('span')
        const correctAnswer = document.createElement('p')
        const playerAnswer = document.createElement('p')
        if(answersArray[i] === QUESTIONS[i].correctAnswer){
            question.textContent = QUESTIONS[i].question
            correctAnswer.textContent = QUESTIONS[i].correctAnswer + ' - '
            playerAnswer.textContent = answersArray[i]
            playerAnswer.classList.add('green')
            finalResultElement.append(question, correctAnswer, playerAnswer)
        }else{
            question.textContent = QUESTIONS[i].question
            correctAnswer.textContent = QUESTIONS[i].correctAnswer + ' - '
            playerAnswer.textContent = answersArray[i]
            playerAnswer.classList.add('red')
            finalResultElement.append(question, correctAnswer, playerAnswer)
        }
    }   

}

// nueva pregunta y respuestas
export const newQuestion = () =>{
    for(let i = 0 ; i< QUESTIONS[counter].options.length ; i++){
        containerButtons.children[i].textContent = QUESTIONS[counter].options[i]
        questionQuizElement.textContent = QUESTIONS[counter].question
    } 
}
// elegir la opcion 
export const chooseOption = (event) =>{
    if(event.target === containerButtons)return
        counter ++
        answersArray.push(event.target.textContent)
        if(counter === QUESTIONS.length){
            counter = 0
            containerElement.classList.add('show')
            finalResultElement.classList.remove('show')
            checkResult()
        }else{
            newQuestion()
        }
} 



