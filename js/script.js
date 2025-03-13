document.addEventListener('DOMContentLoaded', function() {
    const fruits = [
        { id: 1, name: "Banán", fat: 0.33, fiber: 2.6, calory: 89, protein: 1.09, carbohydrate: 22.8 },
        { id: 2, name: "Alma", fat: 0.17, fiber: 1.3, calory: 52, protein: 0.26, carbohydrate: 13.8 },
        { id: 3, name: "Narancs", fat: 0.12, fiber: 2, calory: 47, protein: 0.94, carbohydrate: 11.8 }
    ];

    const fruitSelect = document.getElementById('fruit');
    const quantityInput = document.getElementById('quantity');
    const calculateButton = document.getElementById('calculate');
    const resetButton = document.getElementById('reset');
    const resultsDiv = document.getElementById('results');

    fruits.forEach(fruit => {
        const option = document.createElement('option');
        option.value = fruit.id;
        option.textContent = fruit.name;
        fruitSelect.appendChild(option);
    });

    calculateButton.addEventListener('click', function() {
        const selectedFruitId = fruitSelect.value;
        const quantity = quantityInput.value;

        if (!selectedFruitId) {
            alert('Válasszon egy gyümölcsöt a lenyíló listából!');
            return;
        }

        const selectedFruit = fruits.find(fruit => fruit.id == selectedFruitId);
        const fat = (selectedFruit.fat * quantity).toFixed(1);
        const fiber = (selectedFruit.fiber * quantity).toFixed(1);
        const calory = (selectedFruit.calory * quantity).toFixed(1);
        const protein = (selectedFruit.protein * quantity).toFixed(1);
        const carbohydrate = (selectedFruit.carbohydrate * quantity).toFixed(1);

        resultsDiv.innerHTML = `
            <div>Zsír: ${fat} g</div>
            <div>Rost: ${fiber} g</div>
            <div>Kalória: ${calory} kcal</div>
            <div>Fehérje: ${protein} g</div>
            <div>Szénhidrát: ${carbohydrate} g</div>
        `;
    });

    resetButton.addEventListener('click', function() {
        fruitSelect.value = '';
        quantityInput.value = 1;
        resultsDiv.innerHTML = '';
    });
});