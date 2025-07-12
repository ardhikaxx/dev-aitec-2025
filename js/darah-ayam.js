// Calculate scores when select changes
document.addEventListener('DOMContentLoaded', function () {
    const scoreSelects = document.querySelectorAll('.score-select');

    scoreSelects.forEach(select => {
        select.addEventListener('change', function () {
            const score = parseInt(this.value);
            const weight = parseInt(this.dataset.weight);
            const row = this.closest('tr');
            const scoreValueCell = row.querySelector('.score-value');

            if (score > 0) {
                const nilai = (weight * score) / 100;
                scoreValueCell.textContent = nilai.toFixed(1);
            } else {
                scoreValueCell.textContent = '0';
            }

            calculateCategoryTotals();
            calculateGrandTotals();
        });
    });

    function calculateCategoryTotals() {
        // Category A
        let categoryAScore = 0;
        let categoryAValue = 0;
        document.querySelectorAll('tr:nth-child(2) .score-select, tr:nth-child(3) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            categoryAScore += score;
        });
        document.querySelectorAll('tr:nth-child(2) .score-value, tr:nth-child(3) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            categoryAValue += value;
        });
        document.querySelector('.category-a-score').textContent = categoryAScore;
        document.querySelector('.category-a-value').textContent = categoryAValue.toFixed(1);

        // Category B
        let categoryBScore = 0;
        let categoryBValue = 0;
        document.querySelectorAll('tr:nth-child(6) .score-select, tr:nth-child(7) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            categoryBScore += score;
        });
        document.querySelectorAll('tr:nth-child(6) .score-value, tr:nth-child(7) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            categoryBValue += value;
        });
        document.querySelector('.category-b-score').textContent = categoryBScore;
        document.querySelector('.category-b-value').textContent = categoryBValue.toFixed(1);

        // Category C
        let categoryCScore = 0;
        let categoryCValue = 0;
        document.querySelectorAll('tr:nth-child(11) .score-select, tr:nth-child(12) .score-select, tr:nth-child(13) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            categoryCScore += score;
        });
        document.querySelectorAll('tr:nth-child(11) .score-value, tr:nth-child(12) .score-value, tr:nth-child(13) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            categoryCValue += value;
        });
        document.querySelector('.category-c-score').textContent = categoryCScore;
        document.querySelector('.category-c-value').textContent = categoryCValue.toFixed(1);

        // Category D
        let categoryDScore = 0;
        let categoryDValue = 0;
        document.querySelectorAll('tr:nth-child(17) .score-select, tr:nth-child(18) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            categoryDScore += score;
        });
        document.querySelectorAll('tr:nth-child(17) .score-value, tr:nth-child(18) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            categoryDValue += value;
        });
        document.querySelector('.category-d-score').textContent = categoryDScore;
        document.querySelector('.category-d-value').textContent = categoryDValue.toFixed(1);
    }

    function calculateGrandTotals() {
        let totalScore = 0;
        let totalValue = 0;

        document.querySelectorAll('.score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            totalScore += score;
        });

        document.querySelectorAll('.score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            totalValue += value;
        });

        document.querySelector('.total-score').textContent = totalScore;
        document.querySelector('.total-value').textContent = totalValue.toFixed(1);
    }

    // Reset form button
    document.querySelector('button[type="button"]').addEventListener('click', function () {
        document.querySelectorAll('input[type="text"]').forEach(input => {
            input.value = '';
        });

        document.querySelectorAll('.score-select').forEach(select => {
            select.value = '0';
        });

        document.querySelectorAll('.score-value').forEach(cell => {
            cell.textContent = '0';
        });

        document.querySelectorAll('.category-a-score, .category-b-score, .category-c-score, .category-d-score, .total-score').forEach(el => {
            el.textContent = '0';
        });

        document.querySelectorAll('.category-a-value, .category-b-value, .category-c-value, .category-d-value, .total-value').forEach(el => {
            el.textContent = '0';
        });

        document.querySelector('textarea').value = '';
    });
});