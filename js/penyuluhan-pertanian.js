// Calculate scores when select changes
document.addEventListener("DOMContentLoaded", function () {
    const scoreSelects = document.querySelectorAll(".score-select");

    scoreSelects.forEach((select) => {
        select.addEventListener("change", function () {
            const score = parseInt(this.value);
            const weight = parseInt(this.dataset.weight);
            const row = this.closest("tr");
            const scoreValueCell = row.querySelector(".score-value");

            if (score > 0) {
                const nilai = (weight * score) / 100;
                scoreValueCell.textContent = nilai.toFixed(1);
            } else {
                scoreValueCell.textContent = "0";
            }

            calculateTotals();
        });
    });

    function calculateTotals() {
        let totalScore = 0;
        let totalValue = 0;

        document.querySelectorAll(".score-select").forEach((select) => {
            const score = parseInt(select.value) || 0;
            totalScore += score;
        });

        document.querySelectorAll(".score-value").forEach((cell) => {
            const value = parseFloat(cell.textContent) || 0;
            totalValue += value;
        });

        document.querySelector(".total-score").textContent = totalScore;
        document.querySelector(".total-value").textContent = totalValue.toFixed(1);
    }

    // Reset form button
    document
        .querySelector('button[type="button"]')
        .addEventListener("click", function () {
            document.querySelectorAll('input[type="text"]').forEach((input) => {
                input.value = "";
            });

            document.querySelectorAll(".score-select").forEach((select) => {
                select.value = "0";
            });

            document.querySelectorAll(".score-value").forEach((cell) => {
                cell.textContent = "0";
            });

            document.querySelector(".total-score").textContent = "0";
            document.querySelector(".total-value").textContent = "0";

            document.querySelector("textarea").value = "";
        });
});
