const foodData = {
    'banana': { calories: 89, protein: 1.1, carbs: 23, fat: 0.3 },
    'maca': { calories: 52, protein: 0.3, carbs: 14, fat: 0.2 },
    'laranja': { calories: 47, protein: 0.9, carbs: 12, fat: 0.1 },
    'manga': { calories: 60, protein: 0.8, carbs: 15, fat: 0.4 },
    'abacaxi': { calories: 50, protein: 0.5, carbs: 13, fat: 0.1 },
    'morango': { calories: 32, protein: 0.7, carbs: 7.7, fat: 0.3 },
    'pera': { calories: 57, protein: 0.4, carbs: 15, fat: 0.1 },
    'kiwi': { calories: 61, protein: 1.1, carbs: 15, fat: 0.5 },
    'uva': { calories: 69, protein: 0.7, carbs: 18, fat: 0.2 },
    'melancia': { calories: 30, protein: 0.6, carbs: 8, fat: 0.2 },
    'goiaba': { calories: 68, protein: 2.6, carbs: 14, fat: 0.6 },
    'cereja': { calories: 50, protein: 1, carbs: 12, fat: 0.3 },
    'ameixa': { calories: 46, protein: 0.7, carbs: 11, fat: 0.3 }
};

function calculate() {
    const food = document.getElementById('food').value;
    const weight = document.getElementById('weight').value;

    const resultsElement = document.getElementById('results');

    if (weight > 0 && foodData[food]) {
        const data = foodData[food];
        const multiplier = weight / 100;

        const calories = (data.calories * multiplier).toFixed(2);
        const protein = (data.protein * multiplier).toFixed(2);
        const carbs = (data.carbs * multiplier).toFixed(2);
        const fat = (data.fat * multiplier).toFixed(2);

        resultsElement.innerHTML = `
            <strong>Calorias:</strong> ${calories} kcal<br>
            <strong>Proteínas:</strong> ${protein} g<br>
            <strong>Carboidratos:</strong> ${carbs} g<br>
            <strong>Gorduras:</strong> ${fat} g
        `;

        // Adiciona animação de fade nos resultados
        resultsElement.style.animation = 'fadeInUp 1s ease';
    } else {
        resultsElement.innerHTML = 'Por favor, insira uma quantidade válida em gramas.';
        resultsElement.style.animation = 'fadeInUp 1s ease';
    }
}
