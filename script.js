// ==============================================
// RONMART UGC.AI - INTERACTIVE FUNCTIONS
// ==============================================

// Scroll Animations
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in-up, .fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    fadeElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });

    // ROI Calculator Logic
    const calcForm = document.getElementById('roiCalculator');
    if (calcForm) {
        calcForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const visitors = parseFloat(document.getElementById('visitors').value);
            const aov = parseFloat(document.getElementById('aov').value);
            const conv = parseFloat(document.getElementById('conv').value) / 100;
            const packageCost = parseFloat(document.getElementById('package').value);

            // Calculations based on verified benchmarks
            const newVisitors = visitors * 1.6; // +60% organic lift
            const currentRevenue = visitors * conv * aov;
            const newRevenue = newVisitors * conv * aov;
            const extraRevenue = newRevenue - currentRevenue;
            const roi = ((extraRevenue - packageCost) / packageCost) * 100;
            const breakEven = packageCost / (extraRevenue / 180); // 6 months = 180 days

            // Display Results
            document.getElementById('newVisitors').textContent = Math.round(newVisitors).toLocaleString();
            document.getElementById('extraRevenue').textContent = '£' + Math.round(extraRevenue).toLocaleString();
            document.getElementById('breakEven').textContent = Math.round(breakEven);
            document.getElementById('roiPercent').textContent = Math.round(roi) + '%';
            
            document.querySelector('.result').style.display = 'block';
        });
    }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
});
