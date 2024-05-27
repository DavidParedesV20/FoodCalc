let history = [];
let totalCalories = 0;

function calculateCalories() {
    const weight = document.getElementById('weight').value;
    const calories = document.getElementById('calories').value;
    const desiredWeight = document.getElementById('desiredWeight').value;

    if (weight > 0 && calories > 0 && desiredWeight > 0) {
        const caloriesPerGram = calories / weight;
        const desiredCalories = caloriesPerGram * desiredWeight;

        const resultText = `El alimento debería tener ${desiredCalories.toFixed(2)} calorías para el peso de ${desiredWeight} gramos.`;
        document.getElementById('result').innerText = resultText;

        history.push({
            weight: parseFloat(weight),
            calories: parseFloat(calories),
            desiredWeight: parseFloat(desiredWeight),
            desiredCalories: desiredCalories
        });

        displayHistory();
    } else {
        document.getElementById('result').innerText = 'Por favor, ingrese valores válidos en todos los campos.';
    }
}

function displayHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '<h2>Historial</h2>';
    history.forEach((entry, index) => {
        historyDiv.innerHTML += `Calorías en total: ${entry.desiredCalories.toFixed(2)}cal</p>`;
    });
}

function sumCalories() {
    totalCalories = history.reduce((sum, entry) => sum + entry.desiredCalories, 0);
    document.getElementById('total').innerText = `Calorías Totales: ${totalCalories.toFixed(2)} cal`;
}

function resetCalculator() {
    history = [];
    totalCalories = 0;
    document.getElementById('result').innerText = '';
    document.getElementById('history').innerHTML = '';
    document.getElementById('total').innerText = '';
    document.getElementById('calorieForm').reset();
}
