import { chooseOption, newQuestion } from "./demo";
import { containerButtons } from "./dom";



newQuestion()
containerButtons.addEventListener('click',chooseOption)


