function CalculoAleatorio(min, max){

    min = Math.ceil(min);
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min) + min);      
}

export default CalculoAleatorio;