// ✅ Carbon Footprint Calculator
function calculateFootprint() {
    const electricity = document.getElementById("electricityInput").value;
    if (electricity && electricity > 0) {
        const footprint = electricity * 0.92; // Avg CO2 per kWh
        document.getElementById("footprintResult").textContent = 
            `🌱 Your estimated carbon footprint is ${footprint.toFixed(2)} kg CO₂ per month. Try reducing energy consumption to lower it!`;
    } else {
        document.getElementById("footprintResult").textContent = "⚠️ Please enter a valid number.";
    }
}

// ✅ Dark Mode Toggle (Now Saves Preference)
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

// Preserve Dark Mode Across Sessions
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// ✅ Email Subscription (Mock Functionality)
function subscribeNewsletter() {
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("subscribeMessage");
    
    if (email.includes("@") && email.includes(".")) {
        message.style.color = "green";
        message.innerHTML = "✅ Thank you for subscribing! Stay tuned for eco-friendly tips.";
    } else {
        message.style.color = "red";
        message.innerHTML = "⚠️ Please enter a valid email.";
    }
}

// ✅ Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
