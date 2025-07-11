// Calculate scores when input changes
document.addEventListener("DOMContentLoaded", function () {
    const scoreInputs = document.querySelectorAll(
        "#finalEvaluationContent .score-input"
    );

    scoreInputs.forEach((input) => {
        input.addEventListener("input", function () {
            const score = parseInt(this.value) || 0;
            const weight = parseInt(this.dataset.weight);
            const component = this.dataset.component;
            const row = this.closest("tr");
            const scoreValueCell = row.querySelector(".score-value");

            // Validate score range
            if (score > 100) {
                this.value = 100;
            } else if (score < 0) {
                this.value = 0;
            }

            const nilai = (weight * score) / 100;
            scoreValueCell.textContent = nilai.toFixed(1);

            calculateComponentTotals(component);
            calculateFinalTotals();
        });
    });

    function calculateComponentTotals(component) {
        let totalScore = 0;
        let totalValue = 0;

        document
            .querySelectorAll(
                `#finalEvaluationContent .score-input[data-component="${component}"]`
            )
            .forEach((input) => {
                const score = parseInt(input.value) || 0;
                totalScore += score;
            });

        document
            .querySelectorAll(
                `#finalEvaluationContent tr[data-component="${component}"] .score-value`
            )
            .forEach((cell) => {
                const value = parseFloat(cell.textContent) || 0;
                totalValue += value;
            });

        document.querySelector(
            `#finalEvaluationContent .component-total-score[data-component="${component}"]`
        ).textContent = totalScore;
        document.querySelector(
            `#finalEvaluationContent .component-total-value[data-component="${component}"]`
        ).textContent = totalValue.toFixed(1);
    }

    function calculateFinalTotals() {
        let finalTotalScore = 0;
        let finalTotalValue = 0;

        // Calculate weighted component values
        const presentasiValue =
            parseFloat(
                document.querySelector(
                    '#finalEvaluationContent .component-total-value[data-component="presentasi"]'
                ).textContent
            ) * 0.2;
        const gagasanValue =
            parseFloat(
                document.querySelector(
                    '#finalEvaluationContent .component-total-value[data-component="gagasan"]'
                ).textContent
            ) * 0.35;
        const implementasiValue =
            parseFloat(
                document.querySelector(
                    '#finalEvaluationContent .component-total-value[data-component="implementasi"]'
                ).textContent
            ) * 0.45;

        // Calculate final totals
        finalTotalScore =
            parseFloat(
                document.querySelector(
                    '#finalEvaluationContent .component-total-score[data-component="presentasi"]'
                ).textContent
            ) *
            0.2 +
            parseFloat(
                document.querySelector(
                    '#finalEvaluationContent .component-total-score[data-component="gagasan"]'
                ).textContent
            ) *
            0.35 +
            parseFloat(
                document.querySelector(
                    '#finalEvaluationContent .component-total-score[data-component="implementasi"]'
                ).textContent
            ) *
            0.45;

        finalTotalValue = presentasiValue + gagasanValue + implementasiValue;

        document.querySelector(
            "#finalEvaluationContent .final-total-score"
        ).textContent = Math.round(finalTotalScore);
        document.querySelector(
            "#finalEvaluationContent .final-total-value"
        ).textContent = finalTotalValue.toFixed(1);
    }

    // Reset form button
    document
        .querySelector('#finalEvaluationContent button[type="button"]')
        .addEventListener("click", function () {
            document
                .querySelectorAll('#finalEvaluationContent input[type="number"]')
                .forEach((input) => {
                    input.value = "";
                });

            document
                .querySelectorAll("#finalEvaluationContent .score-value")
                .forEach((cell) => {
                    cell.textContent = "0";
                });

            document
                .querySelectorAll("#finalEvaluationContent .component-total-score")
                .forEach((cell) => {
                    cell.textContent = "0";
                });

            document
                .querySelectorAll("#finalEvaluationContent .component-total-value")
                .forEach((cell) => {
                    cell.textContent = "0";
                });

            document.querySelector(
                "#finalEvaluationContent .final-total-score"
            ).textContent = "0";
            document.querySelector(
                "#finalEvaluationContent .final-total-value"
            ).textContent = "0";

            document.querySelector("#finalEvaluationContent textarea").value = "";
            document.querySelector(
                '#finalEvaluationContent input[placeholder="Nama kota"]'
            ).value = "";
            document.querySelector(
                '#finalEvaluationContent input[placeholder="Nama juri"]'
            ).value = "";
        });
});

// Calculate scores when input changes
document.addEventListener("DOMContentLoaded", function () {
    const scoreInputs = document.querySelectorAll(
        "#videoPosterFinalContent .score-input"
    );

    scoreInputs.forEach((input) => {
        input.addEventListener("input", function () {
            const score = parseInt(this.value) || 0;
            const weight = parseInt(this.dataset.weight);
            const row = this.closest("tr");
            const scoreValueCell = row.querySelector(".score-value");

            // Validate score range
            if (score > 100) {
                this.value = 100;
            } else if (score < 0) {
                this.value = 0;
            }

            const nilai = (weight * score) / 100;
            scoreValueCell.textContent = nilai.toFixed(1);

            calculateTotals();
        });
    });

    function calculateTotals() {
        let totalScore = 0;
        let totalValue = 0;

        document
            .querySelectorAll("#videoPosterFinalContent .score-input")
            .forEach((input) => {
                const score = parseInt(input.value) || 0;
                totalScore += score;
            });

        document
            .querySelectorAll("#videoPosterFinalContent .score-value")
            .forEach((cell) => {
                const value = parseFloat(cell.textContent) || 0;
                totalValue += value;
            });

        document.querySelector(
            "#videoPosterFinalContent .total-score"
        ).textContent = totalScore;
        document.querySelector(
            "#videoPosterFinalContent .total-value"
        ).textContent = totalValue.toFixed(1);
    }

    // Reset form button
    document
        .querySelector('#videoPosterFinalContent button[type="button"]')
        .addEventListener("click", function () {
            document
                .querySelectorAll('#videoPosterFinalContent input[type="number"]')
                .forEach((input) => {
                    input.value = "";
                });

            document
                .querySelectorAll("#videoPosterFinalContent .score-value")
                .forEach((cell) => {
                    cell.textContent = "0";
                });

            document.querySelector(
                "#videoPosterFinalContent .total-score"
            ).textContent = "0";
            document.querySelector(
                "#videoPosterFinalContent .total-value"
            ).textContent = "0";

            document.querySelector("#videoPosterFinalContent textarea").value = "";
            document.querySelector(
                '#videoPosterFinalContent input[placeholder="Nama kota"]'
            ).value = "";
            document.querySelector(
                '#videoPosterFinalContent input[placeholder="Nama juri"]'
            ).value = "";
        });
});

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
        .querySelector('#videoProgressContent button[type="button"]')
        .addEventListener("click", function () {
            document
                .querySelectorAll("#videoProgressContent select")
                .forEach((select) => {
                    select.value = "0";
                });

            document
                .querySelectorAll("#videoProgressContent .score-value")
                .forEach((cell) => {
                    cell.textContent = "0";
                });

            document.querySelector(".total-score").textContent = "0";
            document.querySelector(".total-value").textContent = "0";

            document.querySelector("#videoProgressContent textarea").value = "";
            document.querySelector(
                '#videoProgressContent input[placeholder="Nama kota"]'
            ).value = "";
            document.querySelector(
                '#videoProgressContent input[placeholder="Nama juri"]'
            ).value = "";
        });
});

// Tab switching functionality
document.addEventListener("DOMContentLoaded", function () {
    // Get all tab buttons and content divs
    const deskEvaluationTab = document.getElementById("deskEvaluationTab");
    const videoProgressTab = document.getElementById("videoProgressTab");
    const videoPosterFinalTab = document.getElementById("videoPosterFinalTab");
    const finalEvaluationTab = document.getElementById("finalEvaluationTab");
    const rekapNilaiTab = document.getElementById("rekapNilaiTab");

    const deskEvaluationContent = document.getElementById(
        "deskEvaluationContent"
    );
    const videoProgressContent = document.getElementById("videoProgressContent");
    const videoPosterFinalContent = document.getElementById(
        "videoPosterFinalContent"
    );
    const finalEvaluationContent = document.getElementById(
        "finalEvaluationContent"
    );
    const rekapNilaiContent = document.getElementById("rekapNilaiContent");

    // Function to reset all tabs
    function resetTabs() {
        // Remove active class from all tabs
        deskEvaluationTab.classList.remove("border-primary", "text-primary");
        deskEvaluationTab.classList.add(
            "border-transparent",
            "text-gray-500",
            "hover:text-gray-700",
            "hover:border-gray-300"
        );

        videoProgressTab.classList.remove("border-primary", "text-primary");
        videoProgressTab.classList.add(
            "border-transparent",
            "text-gray-500",
            "hover:text-gray-700",
            "hover:border-gray-300"
        );

        videoPosterFinalTab.classList.remove("border-primary", "text-primary");
        videoPosterFinalTab.classList.add(
            "border-transparent",
            "text-gray-500",
            "hover:text-gray-700",
            "hover:border-gray-300"
        );

        finalEvaluationTab.classList.remove("border-primary", "text-primary");
        finalEvaluationTab.classList.add(
            "border-transparent",
            "text-gray-500",
            "hover:text-gray-700",
            "hover:border-gray-300"
        );

        rekapNilaiTab.classList.remove("border-primary", "text-primary");
        rekapNilaiTab.classList.add(
            "border-transparent",
            "text-gray-500",
            "hover:text-gray-700",
            "hover:border-gray-300"
        );

        // Hide all content
        deskEvaluationContent.classList.add("hidden");
        videoProgressContent.classList.add("hidden");
        videoPosterFinalContent.classList.add("hidden");
        finalEvaluationContent.classList.add("hidden");
        rekapNilaiContent.classList.add("hidden");
    }

    // Function to activate a tab
    function activateTab(tabButton, contentDiv) {
        resetTabs();

        // Add active class to clicked tab
        tabButton.classList.remove(
            "border-transparent",
            "text-gray-500",
            "hover:text-gray-700",
            "hover:border-gray-300"
        );
        tabButton.classList.add("border-primary", "text-primary");

        // Show corresponding content
        contentDiv.classList.remove("hidden");
    }

    // Add click event listeners
    deskEvaluationTab.addEventListener("click", function () {
        activateTab(deskEvaluationTab, deskEvaluationContent);
    });

    videoProgressTab.addEventListener("click", function () {
        activateTab(videoProgressTab, videoProgressContent);
    });

    videoPosterFinalTab.addEventListener("click", function () {
        activateTab(videoPosterFinalTab, videoPosterFinalContent);
    });

    finalEvaluationTab.addEventListener("click", function () {
        activateTab(finalEvaluationTab, finalEvaluationContent);
    });

    rekapNilaiTab.addEventListener("click", function () {
        activateTab(rekapNilaiTab, rekapNilaiContent);
    });

    // Initialize with Desk Evaluation tab active
    activateTab(deskEvaluationTab, deskEvaluationContent);
});
