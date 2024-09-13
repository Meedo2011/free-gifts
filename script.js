document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('giftForm');
    const mainContent = document.getElementById('mainContent');
    const prankContent = document.getElementById('prankContent');
    const chaosSection = document.querySelector('.chaos');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting for real

        // Switch to prank mode
        mainContent.classList.add('hidden');
        prankContent.classList.remove('hidden');

        // Start chaos effect after a delay
        setTimeout(() => {
            chaosSection.style.display = 'block';
            startChaos();
        }, 1000); // Start chaos after 1 second
    });
});

function startChaos() {
    // Play with the background color, sounds, and text for chaos effect
    document.body.style.animation = 'chaosEffect 0.5s infinite';
    setTimeout(() => {
        alert("System Alert: Data Breach Detected!");
    }, 2000); // Show fake alert after 2 seconds
    setTimeout(() => {
        alert("Transmitting Data to Remote Server...");
    }, 4000); // Show another fake alert after 4 seconds
    // Continue chaos with more alerts or visual changes if needed
    setTimeout(() => {
        alert("Hi Ahmed Sayed. Your phone Number has been taken: +966 54 590 1108. This is your location: 21°3551.3'N 39°09''45.4 next to Quraish Street in AlBawadi");
    }, 4000); // Show another fake alert after 4 seconds
    // Continue chaos with more alerts or visual changes if needed
}
