// Toggle sidebar on mobile
document.getElementById('sidebarToggle').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('-translate-x-full');
});

// Close sidebar on mobile when clicking the chevron
document.getElementById('sidebarClose').addEventListener('click', function () {
    document.getElementById('sidebar').classList.add('-translate-x-full');
});

// Toggle user menu
document.getElementById('userMenuButton').addEventListener('click', function () {
    document.getElementById('userMenu').classList.toggle('hidden');
});

// Close user menu when clicking outside
document.addEventListener('click', function (event) {
    if (!event.target.closest('#userMenuButton') && !event.target.closest('#userMenu')) {
        document.getElementById('userMenu').classList.add('hidden');
    }
});

// Registration Chart
const registrationsCtx = document.getElementById('registrationsChart').getContext('2d');
const registrationsChart = new Chart(registrationsCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'],
        datasets: [{
            label: 'Pendaftar 2024',
            data: [45, 60, 75, 82, 78, 90, 105, 120, 135, 150, 180, 210],
            borderColor: '#F25922',
            backgroundColor: 'rgba(242, 89, 34, 0.1)',
            tension: 0.3,
            fill: true
        }, {
            label: 'Pendaftar 2025',
            data: [65, 80, 95, 110, 125, 140, 155, 170, 185, 200, 220, 240],
            borderColor: '#44AED5',
            backgroundColor: 'rgba(68, 174, 213, 0.1)',
            tension: 0.3,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// Categories Chart
const categoriesCtx = document.getElementById('categoriesChart').getContext('2d');
const categoriesChart = new Chart(categoriesCtx, {
    type: 'doughnut',
    data: {
        labels: ['Inovasi Teknologi', 'Kontes Vokasi Daring', 'Kontes Vokasi Luring'],
        datasets: [{
            data: [45, 30, 25],
            backgroundColor: [
                '#F25922',
                '#44AED5',
                '#90BF2A'
            ],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right',
            }
        }
    }
});