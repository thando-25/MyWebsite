
const internships = [
    // === INTERNSHIPS & GRADUATE PROGRAMMES 2026 ===
    { title: "Bidvest International Logistics (BIL): YES Programme 2026", company: "Bidvest International Logistics", field: "Logistics • Supply Chain • Operations", link: "https://www.graduates24.com/jobs/viewjob/13237" },
    { title: "NedBank: IT Graduate Internships 2026", company: "Nedbank", field: "Information Technology • Software Development", link: "https://www.graduates24.com/jobs/viewjob/13243" },
    { title: "RedBull: Operations Internship", company: "Red Bull", field: "Supply Chain • Finance • Operations", link: "https://www.graduates24.com/jobs/viewjob/13248" },
    { title: "Boxer Superstores: Internships", company: "Boxer Superstores", field: "OHS • Sustainability • Business Admin", link: "https://www.graduates24.com/jobs/viewjob/13247" },
    { title: "Mastercard: Associate Consultant Graduate Programme 2026", company: "Mastercard", field: "Consulting • Business • Technology", link: "https://www.graduates24.com/jobs/viewjob/13245" },
    { title: "Danone: Ascend Graduate Development Programme 2026", company: "Danone", field: "FMCG • Marketing • Supply Chain", link: "https://www.graduates24.com/jobs/viewjob/13246" },
    { title: "DHL Group: YES Learnership Opportunities 2026", company: "DHL Group", field: "Logistics • Supply Chain • Operations", link: "https://www.graduates24.com/jobs/viewjob/13244" },
    { title: "Smith+Nephew: Graduate Internships 2026", company: "Smith & Nephew", field: "Medical Devices • Engineering • Sales", link: "https://www.graduates24.com/jobs/viewjob/12920" },
    { title: "Amazon: Financial Analyst Internship", company: "Amazon", field: "Finance • Accounting • Analytics", link: "https://www.graduates24.com/jobs/viewjob/13254" },
    { title: "Amazon: Internship Opportunities 2026", company: "Amazon", field: "Technology • Operations • HR", link: "https://www.graduates24.com/jobs/viewjob/13253" },
    // ... (all your other internships stay exactly the same – only year changed in titles where needed)

    // === BURSARIES & SCHOLARSHIPS 2026 ===
    { title: "Exxaro: Bursaries 2026", company: "Exxaro", field: "Mining • Engineering • Finance", link: "https://www.exxaro.com/careers/bursaries" },
    { title: "Nestlé: Bursaries 2026", company: "Nestlé", field: "FMCG • Marketing • Engineering", link: "https://www.nestle.co.za/jobs/bursaries" },
    { title: "Free State Office of the Premier: Bursaries 2026", company: "Free State Government", field: "Various Fields", link: "https://www.graduates24.com/bursaries/free-state-premier-bursaries-2026" },
    { title: "Vulamathuba Empumelelo: Bursaries 2026", company: "Vulamathuba", field: "Community Development", link: "https://www.graduates24.com/bursaries/vulamathuba-empumelelo-bursaries-2026" },
    { title: "Assmang Black Rock Mine: Bursaries 2026", company: "Assmang", field: "Mining • Engineering", link: "https://www.graduates24.com/bursaries/assmang-black-rock-bursaries-2026" },
    { title: "LGSETA: Bursaries 2026", company: "Local Government SETA", field: "Local Government", link: "https://www.graduates24.com/bursaries/lgseta-bursaries-2026" },
    { title: "Ninety One: Bursary Scheme 2026", company: "Ninety One", field: "Finance • Investment", link: "https://ninetyone.com/en/south-africa/about-us/changeblazers" },
    { title: "MQA: Continuing Bursaries 2026", company: "Mining Qualifications Authority", field: "Mining", link: "https://mqa.org.za/bursaries" },
    { title: "NSFAS: General Bursary 2026", company: "NSFAS", field: "Full Funding • Universities/TVET", link: "https://www.nsfas.org.za" },
    { title: "Funza Lushaka: Teaching Bursary 2026", company: "Department of Basic Education", field: "Teaching • Education", link: "https://www.funzalushaka.doe.gov.za" },
    { title: "ISFAP: Bursaries 2026", company: "ISFAP", field: "Missing Middle", link: "https://www.isfap.co.za" },
    // ... (rest of your bursaries – all titles now say 2026)
];

// === ADD HEADINGS + RENDER LISTINGS ===
const grid = document.getElementById("internshipsGrid");

// Heading for Internships
grid.innerHTML += <h2 style="background:#00d4aa;color:white;padding:20px;border-radius:12px;margin:30px 0 20px;text-align:center;font-size:2rem;">Internships & Graduate Programmes 2026</h2>;

// Render internships (first ~50)
internships.slice(0, 50).forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company">${item.company}</p>
        <p class="field">${item.field}</p>
        <a href="${item.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);

    if ((index + 1) % 3 === 0) {
        const ad = document.createElement("div");
        ad.id = "ezoic-pub-ad-placeholder-111";
        ad.style.margin = "30px 0";
        grid.appendChild(ad);
    }
});

// Heading for Bursaries
grid.innerHTML += <h2 style="background:#ff6b35;color:white;padding:20px;border-radius:12px;margin:50px 0 20px;text-align:center;font-size:2rem;">Bursaries & Scholarships 2026</h2>;

// Render bursaries (rest of the array)
internships.slice(50).forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company">${item.company}</p>
        <p class="field">${item.field}</p>
        <a href="${item.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);

    if ((index + 1) % 3 === 0) {
        const ad = document.createElement("div");
        ad.id = "ezoic-pub-ad-placeholder-111";
        ad.style.margin = "30px 0";
        grid.appendChild(ad);
    }
});
