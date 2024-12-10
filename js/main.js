document.getElementById('donate-btn').addEventListener('click',function(event){
    event.preventDefault();
    const inputDonateMoney = inputValueById('input-donate');
    
    const addDonateMoney = textDonateId('add-donate');
    const minusDonateMoney = textDonateId('minus-donate');

    console.log(inputDonateMoney,addDonateMoney,minusDonateMoney);
    if(!isNaN(inputDonateMoney)){
        const totalAddDonateMoney = addDonateMoney + inputDonateMoney;
        document.getElementById('add-donate').innerText = totalAddDonateMoney;
        const minusMainBalance = minusDonateMoney - inputDonateMoney;
        document.getElementById('minus-donate').innerText = minusMainBalance;
        document.getElementById('my_modal_1').showModal();


    }
    else{
        alert('please provide right number');
    }
})