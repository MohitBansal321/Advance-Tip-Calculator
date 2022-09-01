const billTotalInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotalDiv=document.getElementById('perPersonTotal')

let numberOfPeople=Number(numberOfPeopleDiv.innerText);
console.log(numberOfPeople)

const calculateBill = () => {
    const billAmount=Number(billTotalInput.value)
    const tipAmount=(Number(tipInput.value)/100)*billAmount
    const total=tipAmount+billAmount
    const perPersonTotal=total/numberOfPeople
    perPersonTotalDiv.innerText=`$${perPersonTotal.toFixed(2)}`
}

const increasePeople = () => {
    numberOfPeopleDiv.innerText=++numberOfPeople;
    calculateBill()
}

const decreasePeople = () => {
      if(numberOfPeople==1){
        return;
      }
  
    numberOfPeopleDiv.innerHTML=--numberOfPeople;
    calculateBill()
}