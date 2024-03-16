document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date();
    const dayOfWeek = currentDate.getDay(); // 0: Sunday, 1: Monday, ..., 6: Saturday

    // Check if it's Monday, Tuesday, or Wednesday
    if (dayOfWeek >= 1 && dayOfWeek <= 3) {
        // Create banner element
        const banner = document.createElement("div");
        banner.setAttribute("id", "meetGreetBanner");
        banner.innerHTML = `
            <p>Attend the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
            <button id="closeBanner">Close</button>
        `;
        document.body.appendChild(banner);

        // Close banner functionality
        const closeButton = document.getElementById("closeBanner");
        closeButton.addEventListener("click", function() {
            banner.style.display = "none";
        });
    }
});
