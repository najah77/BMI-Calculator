function calculateBMI() {
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
  
    if (isNaN(weight) || isNaN(height)) {
      alert("Please enter valid weight and height values");
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
  
    const bmiRounded = Math.round(bmi * 10) / 10;
    const bmiCategory = getBMICategory(bmiRounded);
  
    displayBMIResult(bmiRounded, bmiCategory);
  }
  
  function getBMICategory(bmi) {
    if (bmi < 18.5) {
      return "UNDERWEIGHT";
    } else if (bmi < 25) {
      return "HEALTHY";
    } else if (bmi < 30) {
      return "OVERWEIGHT";
    } else {
      return "OBESE";
    }
  }

  function displayBMIResult(bmi, category) {
    const resultElement = document.querySelector(".text");
    let colorClass = "";
    let resultText = "";
  
    switch (category) {
      case "UNDERWEIGHT":
        resultText = `You are underweight. Consider increasing your caloric intake and incorporating strength training exercises to build muscle mass.`;
        colorClass = "text-warning"; // yellow
        break;
      case "HEALTHY":
        resultText = `You are healthy. Congratulations! Keep up the good work and maintain a balanced diet and regular exercise routine.`;
        colorClass = "text-success"; // green
        break;
      case "OVERWEIGHT":
        resultText = `You are overweight. Consider reducing your daily caloric intake and increasing your physical activity.`;
        colorClass = "text-warning"; // yellow
        break;
      case "OBESE":
        resultText = `You are obese. Consider consulting with a doctor or a registered dietitian to create a personalized weight loss plan.`;
        colorClass = "text-danger"; // red
        break;
    }
  
    resultElement.innerHTML = `
      <h3 class="text-center text-danger mb-4 fs-3 fw-bolder font-monospace">Your BMI is</h3>
      <h3 style="font-size: 60px;" class="text-center ${colorClass} mb-5 fw-bolder">${bmi}</h3>
      <h3 class="text-center ${colorClass} mb-5 fs-3 fw-bolder font-monospace">${resultText}</h3>
    `;
  
    // Text-to-speech
    const speech = new SpeechSynthesisUtterance();
    speech.lang = 'en-US';
    speech.rate = 1;
    speech.pitch = 1;
    speech.volume = 1;
  
    speech.text = resultText;
    window.speechSynthesis.speak(speech);
  }
  
  function resetButton() {
    document.getElementById("weight").value = 75;
    document.getElementById("weight-value").textContent = 75;
    document.getElementById("height").value = 150;
    document.getElementById("height-value").textContent = 150;
    document.getElementById("age").value = 50;
    document.getElementById("age-value").textContent = 50;
    document.getElementById("result").innerHTML = `
      <h3 class="text-center text-danger mb-4 fs-3 fw-bolder font-monospace">Your BMI is</h3>
      <h3 style="font-size: 60px;" class="text-center text-success mb-5 fw-bolder">0</h3>
      <h3 class="text-center text-danger mb-5 fs-3 fw-bolder font-monospace">You are _________ </h3>
    `;
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='button'][onclick='submitButton']");
    submitButton.onclick = calculateBMI;
  
    const resetButton = document.querySelector("button[type='button'][onclick='resetButton']");
    resetButton.onclick = resetButton;
  });

const weightInput = document.getElementById("weight");
const weightValueSpan = document.getElementById("weight-value");

weightInput.addEventListener("input", function() {
  weightValueSpan.textContent = weightInput.value;
});
const heightInput = document.getElementById("height");
const heightValueSpan = document.getElementById("height-value");

heightInput.addEventListener("input", function() {
    heightValueSpan.textContent = heightInput.value;
});
const ageInput = document.getElementById("age");
const ageValueSpan = document.getElementById("age-value");

ageInput.addEventListener("input", function() {
    ageValueSpan.textContent = ageInput.value;
});
