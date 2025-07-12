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
        // Category 1
        let category1Score = 0;
        let category1Value = 0;
        document.querySelectorAll('tr:nth-child(2) .score-select, tr:nth-child(3) .score-select, tr:nth-child(4) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            category1Score += score;
        });
        document.querySelectorAll('tr:nth-child(2) .score-value, tr:nth-child(3) .score-value, tr:nth-child(4) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            category1Value += value;
        });
        document.querySelector('.category-1-score').textContent = category1Score;
        document.querySelector('.category-1-value').textContent = category1Value.toFixed(1);

        // Category 2
        let category2Score = 0;
        let category2Value = 0;
        document.querySelectorAll('tr:nth-child(8) .score-select, tr:nth-child(9) .score-select, tr:nth-child(10) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            category2Score += score;
        });
        document.querySelectorAll('tr:nth-child(8) .score-value, tr:nth-child(9) .score-value, tr:nth-child(10) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            category2Value += value;
        });
        document.querySelector('.category-2-score').textContent = category2Score;
        document.querySelector('.category-2-value').textContent = category2Value.toFixed(1);

        // Category 3
        let category3Score = 0;
        let category3Value = 0;
        document.querySelectorAll('tr:nth-child(14) .score-select, tr:nth-child(15) .score-select').forEach(select => {
            const score = parseInt(select.value) || 0;
            category3Score += score;
        });
        document.querySelectorAll('tr:nth-child(14) .score-value, tr:nth-child(15) .score-value').forEach(cell => {
            const value = parseFloat(cell.textContent) || 0;
            category3Value += value;
        });
        document.querySelector('.category-3-score').textContent = category3Score;
        document.querySelector('.category-3-value').textContent = category3Value.toFixed(1);
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

        document.querySelectorAll('.category-1-score, .category-2-score, .category-3-score, .total-score').forEach(el => {
            el.textContent = '0';
        });

        document.querySelectorAll('.category-1-value, .category-2-value, .category-3-value, .total-value').forEach(el => {
            el.textContent = '0';
        });

        document.querySelector('textarea').value = '';
    });
});