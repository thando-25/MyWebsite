const internships = [
    { title: "Bidvest International Logistics (BIL): YES Programme 2026", company: "Bidvest International Logistics", field: "Logistics • Supply Chain • Operations", link: "https://www.graduates24.com/jobs/viewjob/13237" },
    { title: "Exxaro: Bursaries 2026", company: "Exxaro", field: "Mining • Engineering • Finance", link: "https://www.graduates24.com/jobs/viewjob/13232" },
    { title: "GBS Group: Internships (Finance, HR or Psychology Graduates)", company: "GBS Group", field: "Finance • HR • Psychology", link: "https://www.graduates24.com/jobs/viewjob/13242" },
    { title: "NedBank: IT Graduate Internships 2026", company: "Nedbank", field: "Information Technology • Software Development", link: "https://www.graduates24.com/jobs/viewjob/13243" },
    { title: "RedBull: Operations Internship", company: "Red Bull", field: "Supply Chain • Finance • Operations", link: "https://www.graduates24.com/jobs/viewjob/13248" },
    { title: "Boxer Superstores: Internships", company: "Boxer Superstores", field: "OHS • Sustainability • Business Admin", link: "https://www.graduates24.com/jobs/viewjob/13247" },
    { title: "Mastercard: Associate Consultant Graduate Programme 2026", company: "Mastercard", field: "Consulting • Business • Technology", link: "https://www.graduates24.com/jobs/viewjob/13245" },
    { title: "Danone: Ascend Graduate Development Programme 2026", company: "Danone", field: "FMCG • Marketing • Supply Chain", link: "https://www.graduates24.com/jobs/viewjob/13246" },
    { title: "DHL Group: YES Learnership Opportunities 2026", company: "DHL Group", field: "Logistics • Supply Chain • Operations", link: "https://www.graduates24.com/jobs/viewjob/13244" },
    { title: "National Bioproducts Institute (NBI): YES Programme 2026", company: "NBI", field: "Healthcare • Science • Administration", link: "https://www.graduates24.com/jobs/viewjob/13249" },
    { title: "Smith+Nephew: Graduate Internships 2026", company: "Smith & Nephew", field: "Medical Devices • Engineering • Sales", link: "https://www.graduates24.com/jobs/viewjob/12920" },
    { title: "Necsa Group: Learnerships 2026", company: "Necsa Group", field: "Nuclear • Engineering • Science", link: "https://www.graduates24.com/jobs/viewjob/13251" },
    { title: "Nestlé: Bursaries 2026", company: "Nestlé", field: "FMCG • Marketing • Engineering", link: "https://www.graduates24.com/jobs/viewjob/13259" },
    { title: "Amazon: Financial Analyst Internship", company: "Amazon", field: "Finance • Accounting • Analytics", link: "https://www.graduates24.com/jobs/viewjob/13254" },
    { title: "Exxaro: Graduate in Training 2026", company: "Exxaro", field: "Mining • Engineering • Geology", link: "https://www.graduates24.com/jobs/viewjob/13257" },
    { title: "Premier: Internships", company: "Premier FMCG", field: "Marketing • Business • Communications", link: "https://www.graduates24.com/jobs/viewjob/13255" },
    { title: "Ernst & Young: Graduate Programme 2026", company: "EY", field: "Auditing • Consulting • Tax", link: "https://www.graduates24.com/jobs/viewjob/12702" },
    { title: "Amazon: Internship Opportunities 2026", company: "Amazon", field: "Technology • Operations • HR", link: "https://www.graduates24.com/jobs/viewjob/13253" },
    { title: "Gold Fields: Cadet Internship Programme", company: "Gold Fields", field: "Mining • Engineering • Safety", link: "https://www.graduates24.com/jobs/viewjob/13256" },
    { title: "Grade 12 / Matric Opportunities", company: "Various Companies", field: "Entry-level • Learnerships • YES", link: "https://www.graduates24.com/grade12_jobs" }
];

// === RENDER INTERNSHIPS + EZOIC ADS EVERY 3RD CARD ===
const grid = document.getElementById("internshipsGrid");

internships.forEach((internship, index) => {
    // Create the job card
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${internship.title}</h3>
        <p class="company">${internship.company}</p>
        <p class="field">${internship.field}</p>
        <a href="${internship.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);

    // INSERT EZOIC AD (ID 111) AFTER EVERY 3RD CARD
    if ((index + 1) % 3 === 0) {
        const adDiv = document.createElement("div");
        adDiv.id = "ezoic-pub-ad-placeholder-111";
        adDiv.style.margin = "30px 0";
        grid.appendChild(adDiv);
    }
});
