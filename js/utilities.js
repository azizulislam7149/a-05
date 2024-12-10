function inputValueById(id){

    console.log(23);
    const inputValue = document.getElementById(id).value ;
    const inputValueNuber = parseFloat(inputValue);
    return  inputValueNuber;
}
function textDonateId(id){
    const textdonateAmount = document.getElementById(id).innerText;
    const textdonateAmountNumber = parseFloat(textdonateAmount) ;
    return textdonateAmountNumber;
}
function showSectionById(id){
    document.getElementById('donate-history').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');

}