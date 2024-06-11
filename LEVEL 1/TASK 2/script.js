// Button that changes color when clicked
const colorButton = document.getElementById('colorButton');
colorButton.addEventListener('click', () => {
    const colors = ['#4CAF50', '#f44336', '#2196F3', '#FFEB3B'];
    const currentColor = colorButton.style.backgroundColor;
    let newColor = colors[Math.floor(Math.random() * colors.length)];
    while (newColor === currentColor) {
        newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    colorButton.style.backgroundColor = newColor;
});

// Alert box that displays a greeting message based on the current time
const greetButton = document.getElementById('greetButton');
greetButton.addEventListener('click', () => {
    const now = new Date();
    const hours = now.getHours();
    let greeting;
    if (hours < 12) {
        greeting = 'Good Morning!';
    } else if (hours < 16) {
        greeting = 'Hey,Afternoon! Had your Lunch? ';
    } else if (hours< 20) {
        greeting = 'Evening Champ!';
    } else{
        greeting = 'Subh Ratri';
    }
    
    alert(greeting);
});

// Basic calculator that adds two numbers together and displays the result
const calculateButton = document.getElementById('calculateButton');
calculateButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    if (isNaN(num1) || isNaN(num2)) {
        alert('Please enter valid numbers.');
        return;
    }
    const result = num1 + num2;
    document.getElementById('result').textContent = `Result: ${result}`;
});
