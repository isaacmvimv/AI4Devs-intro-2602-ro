/**
 * Referencias al DOM
 */
const inputElement = document.getElementById("textInput");
const reverseButton = document.getElementById("reverseBtn");
const resultElement = document.getElementById("result");
const errorElement = document.getElementById("errorMessage");


/**
 * Invierte una cadena
 * @param {string} text
 * @returns {string}
 */
function reverseString(text){
    return text.split("").reverse().join("");
}


/**
 * Valida el input
 * @param {string} text
 * @returns {boolean}
 */
function validateInput(text){

    if(!text || text.trim() === ""){
        showError("Input cannot be empty.");
        inputElement.classList.add("error");
        return false;
    }

    clearError();
    return true;
}


/**
 * Controla visibilidad del botón
 * Aparece solo si hay más de 3 caracteres
 */
function toggleButtonVisibility(text){

    if(text.length > 3){
        reverseButton.classList.add("visible");
    }else{
        reverseButton.classList.remove("visible");
    }

}


/**
 * Muestra resultado
 */
function showResult(text){
    resultElement.textContent = `Result: ${text}`;
}


/**
 * Muestra error
 */
function showError(message){
    errorElement.textContent = message;
}


/**
 * Limpia errores
 */
function clearError(){
    errorElement.textContent = "";
    inputElement.classList.remove("error");
}


/**
 * Evento en tiempo real
 * Se ejecuta en cada cambio del input
 */
function handleRealtimeInput(){

    const text = inputElement.value;

    toggleButtonVisibility(text);

    if(!validateInput(text)){
        resultElement.textContent = "";
        return;
    }

    const reversed = reverseString(text);
    showResult(reversed);

}


/**
 * Handler del botón
 * Mantiene funcionalidad manual
 */
function handleReverseClick(){

    const text = inputElement.value;

    if(!validateInput(text)){
        return;
    }

    const reversed = reverseString(text);
    showResult(reversed);

}


/**
 * Registro de eventos
 */

inputElement.addEventListener("input", handleRealtimeInput);

reverseButton.addEventListener("click", handleReverseClick);
