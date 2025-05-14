document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email && password) {
        window.location.href = "../admin/dashboard.html";
    } else {
        alert("Silakan isi email dan password");
    }
});
