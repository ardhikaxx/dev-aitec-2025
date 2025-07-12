document.addEventListener('DOMContentLoaded', function() {
    initializeScoreSelects();
    
    document.querySelector('button[type="button"]').addEventListener('click', function() {
        resetForm();
    });
});

function initializeScoreSelects() {
    document.querySelectorAll('.score-select').forEach(select => {
        select.addEventListener('change', function() {
            const score = parseFloat(this.value);
            const weight = parseFloat(this.dataset.weight);
            const row = this.closest('tr');
            const scoreValueCell = row.querySelector('.score-value');

            if (score > 0) {
                const nilai = (weight * score) / 100;
                scoreValueCell.textContent = nilai.toFixed(1);
            } else {
                scoreValueCell.textContent = '0';
            }

            updateGrandTotal();
        });
    });

    document.querySelectorAll('.sub-score-select').forEach(select => {
        select.addEventListener('change', function() {
            const weight = parseFloat(this.dataset.weight);
            const score = parseFloat(this.value);
            const value = (weight * score) / 100;
            
            this.closest('tr').querySelector('.sub-score-value').textContent = value.toFixed(1);
            
            updateCategory1Total();
            
            updateGrandTotal();
        });
    });
}

function updateCategory1Total() {
    let category1Total = 0;
    document.querySelectorAll('.sub-score-select[data-category="1"]').forEach(select => {
        const weight = parseFloat(select.dataset.weight);
        const score = parseFloat(select.value) || 0;
        category1Total += (weight * score) / 100;
    });
    
    document.querySelector('.category-1-value').textContent = category1Total.toFixed(1);
}

function updateGrandTotal() {
    let totalScore = 0;
    let totalValue = 0;
    
    document.querySelectorAll('.score-select').forEach(select => {
        const score = parseFloat(select.value) || 0;
        totalScore += score;
    });

    document.querySelectorAll('.sub-score-select').forEach(select => {
        const score = parseFloat(select.value) || 0;
        totalScore += score;
    });
    
    document.querySelectorAll('.score-value, .sub-score-value, .category-1-value').forEach(cell => {
        const value = parseFloat(cell.textContent) || 0;
        if (!cell.classList.contains('category-1-value')) {
            totalValue += value;
        }
    });
    
    document.querySelector('.total-score').textContent = totalScore;
    document.querySelector('.total-value').textContent = totalValue.toFixed(1);
}

function resetForm() {
    document.querySelectorAll('input[type="text"]').forEach(input => {
        input.value = '';
    });

    document.querySelectorAll('.score-select, .sub-score-select').forEach(select => {
        select.value = '0';
    });

    document.querySelectorAll('.score-value, .sub-score-value, .category-1-value, .total-score, .total-value').forEach(cell => {
        cell.textContent = '0';
    });

    document.querySelector('textarea').value = '';
}