

const internships = [
    // (All your original listings — unchanged)
];

// Render with original tips
const grid = document.getElementById("internshipsGrid");

// Internships Heading
grid.innerHTML += `<h2 style="background:#00d4aa;color:white;padding:20px;border-radius:12px;margin:40px 0 25px;text-align:center;font-size:2.2rem;">
    Internships & Graduate Programmes 2026
</h2>`;

// Render Internships
internships.slice(0, 70).forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company"><strong>Company:</strong> ${item.company}</p>
        <p class="field"><strong>Field:</strong> ${item.field}</p>
        <a href="${item.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);

    // Add original tip every 10 items
    if ((index + 1) % 10 === 0) {
        const tip = document.createElement("div");
        tip.style.cssText = "background:#f0f8ff;padding:20px;margin:30px 0;border-radius:12px;text-align:center;color:#006a4e;font-style:italic;";
        tip.innerHTML = "<p><strong>Application Tip:</strong> Always tailor your CV to the job description — recruiters spend only 7 seconds scanning!</p>";
        grid.appendChild(tip);
    }
});

// Bursaries Heading
grid.innerHTML += `<h2 style="background:#ff6b35;color:white;padding:20px;border-radius:12px;margin:60px 0 25px;text-align:center;font-size:2.2rem;">
    Bursaries & Scholarships 2026
</h2>`;

// Render Bursaries
internships.slice(70).forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company"><strong>Company:</strong> ${item.company}</p>
        <p class="field"><strong>Field:</strong> ${item.field}</p>
        <a href="${item.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);

    // Add original tip every 5 items
    if ((index + 1) % 5 === 0) {
        const tip = document.createElement("div");
        tip.style.cssText = "background:#fff3e0;padding:20px;margin:30px 0;border-radius:12px;text-align:center;color:#e67e22;font-style:italic;";
        tip.innerHTML = "<p><strong>Bursary Tip:</strong> Write a strong motivation letter explaining your career goals and financial need.</p>";
        grid.appendChild(tip);
    }
});
