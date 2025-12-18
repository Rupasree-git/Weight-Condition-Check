const height=document.getElementById("height")
const weight=document.getElementById("weight")
const form=document.querySelector("form")
const first=document.getElementById("first")
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const h1=(height.value)/100
    const w1=(weight.value)
    const bmiValue=w1/(h1*h1)
    const weightCondition=document.createElement("h2")
     if (bmiValue < 18.5) {
    weightCondition.textContent = "Under weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    weightCondition.textContent = "Normal weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    weightCondition.textContent = "Overweight";
  } else if (bmiValue >= 30) {
    weightCondition.textContent = "Obesity";
  }
  first.innerHTML = "";

first.append(weightCondition)

form.reset()

}
)