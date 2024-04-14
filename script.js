document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('trip_form');
    const resultsContainer = document.getElementById('results');
    const formsContainer = document.querySelector('.forms');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const destination = document.getElementById('destination').value;
        const travelCost = parseFloat(document.getElementById('travel_cost').value);
        const stayingCost = parseFloat(document.getElementById('staying_cost').value);
        const transportationCost = parseFloat(document.getElementById('transportation_cost').value);
        const foodCost = parseFloat(document.getElementById('food_cost').value);
        const otherExpenses = parseFloat(document.getElementById('other_expenses').value);
        const totalBudget = parseFloat(document.getElementById('total_budget').value);

        const totalCost = travelCost + stayingCost + transportationCost + foodCost + otherExpenses;
        const remainingBudget = totalBudget - totalCost;

        let resultMessage = `Destination: ${destination}<br>`;
        resultMessage += `Total Cost: $${totalCost.toFixed(2)}<br>`;
        resultMessage += `Your Budget: $${totalBudget.toFixed(2)}<br>`;

        if (remainingBudget >= 0) {
            resultMessage += 'You have enough budget to travel.<br>';
            resultMessage += 'Remember to carry extra cash for emergencies.';
        } else {
            resultMessage += `You need $${Math.abs(remainingBudget).toFixed(2)} more to travel.<br>`;
        }

        resultsContainer.innerHTML = resultMessage;

        // Hide the form and show the results container
        formsContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
    });
});
