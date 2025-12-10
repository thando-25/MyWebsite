
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
    { title: "Citi South Africa: Graduate Internship Programme 2026", company: "Citi South Africa", field: "Banking • Compliance", link: "https://www.graduates24.com/jobs/viewjob/citi-south-africa-graduate-internship-2026" },
    { title: "Standard Bank: Graduate Programme 2026", company: "Standard Bank", field: "Banking • Finance", link: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/graduate-programme" },
    { title: "Vodacom: Discover Graduate Programme 2026", company: "Vodacom", field: "Technology • Business", link: "https://www.vodacom.co.za/vodacom/careers/graduate-programme" },
    { title: "BMW Group South Africa: Graduate Programme 2026", company: "BMW", field: "Automotive • Engineering", link: "https://www.bmw.co.za/en/careers/graduate-programme.html" },
    { title: "Eskom: Graduate-in-Training Programme 2026", company: "Eskom", field: "Engineering • Energy", link: "https://www.eskom.co.za/careers" },
    { title: "Transnet: Young Professionals in Training 2026", company: "Transnet", field: "Logistics • Engineering", link: "https://www.transnet.net/Career/Pages/Graduate-Programme.aspx" },
    { title: "Sasol: Graduate Development Programme 2026", company: "Sasol", field: "Chemical • Engineering", link: "https://www.sasol.com/careers/graduate-development-programme" },
    { title: "Sanlam: Graduate Programme 2026", company: "Sanlam", field: "Finance • Actuarial", link: "https://www.sanlam.co.za/careers/graduate-programme" },
    { title: "Deloitte: Graduate Programme 2026", company: "Deloitte", field: "Auditing • Consulting", link: "https://www.deloitte.com/za/en/careers/graduates.html" },
    { title: "PwC: Graduate Programme 2026", company: "PwC", field: "Auditing • Advisory", link: "https://www.pwc.co.za/careers/graduate-programme.html" },
    { title: "KPMG: Graduate Programme 2026", company: "KPMG", field: "Auditing • Tax", link: "https://kpmg.co.za/careers/graduate-programme" },
    { title: "EY: Graduate Programme 2026", company: "EY", field: "Auditing • Consulting", link: "https://www.ey.com/en_za/careers/graduate-programme" },
    { title: "Capitec Bank: Graduate Development Programme 2026", company: "Capitec Bank", field: "Banking • Analytics", link: "https://www.capitecbank.co.za/careers/graduate-programme" },
    { title: "FNB: Graduate Programme 2026", company: "FNB", field: "Banking • Technology", link: "https://www.fnb.co.za/careers/graduate-programme" },
    { title: "Absa: Graduate Programme 2026", company: "Absa", field: "Banking • Finance", link: "https://www.absa.co.za/careers/graduate-programme" },
    { title: "Old Mutual: Graduate Programme 2026", company: "Old Mutual", field: "Finance • Actuarial", link: "https://www.oldmutual.co.za/careers/graduate-programme" },
    { title: "Discovery: Graduate Programme 2026", company: "Discovery", field: "Insurance • Health", link: "https://www.discovery.co.za/corporate/graduate-programme" },
    { title: "MTN: Graduate Development Programme 2026", company: "MTN", field: "Telecommunications", link: "https://www.mtn.co.za/careers/graduate-programme" },
    { title: "Coca-Cola Beverages SA: Graduate Programme 2026", company: "Coca-Cola", field: "FMCG • Supply Chain", link: "https://www.cocacolabeverages.com/careers/graduate-programme" },
    { title: "Unilever: Future Leaders Programme 2026", company: "Unilever", field: "FMCG • Marketing", link: "https://www.unilever.co.za/careers/graduates" },
    { title: "Nestlé: Graduate Programme 2026", company: "Nestlé", field: "FMCG • Supply Chain", link: "https://www.nestle.co.za/jobs/career-area/graduate-programme" },
    { title: "Shoprite: Graduate Programme 2026", company: "Shoprite", field: "Retail • Supply Chain", link: "https://www.shopriteholdings.co.za/careers/graduate-programme.html" },
    { title: "Pick n Pay: Graduate Programme 2026", company: "Pick n Pay", field: "Retail • Analytics", link: "https://www.pnp.co.za/careers/graduate-programme" },
    { title: "Woolworths: Graduate Programme 2026", company: "Woolworths", field: "Retail • Fashion", link: "https://www.woolworths.co.za/careers/graduate-programme" },
    { title: "Mr Price: Graduate Programme 2026", company: "Mr Price", field: "Retail • Fashion", link: "https://www.mrpricegroup.com/careers/graduate-programme" },
    { title: "Clicks Group: Graduate Programme 2026", company: "Clicks", field: "Retail • Pharmacy", link: "https://www.clicks.co.za/careers/graduate-programme" },

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
    { title: "Sasol: Bursary Programme 2026", company: "Sasol", field: "Engineering • Science", link: "https://www.sasolbursaries.com" },
    { title: "Anglo American: Bursaries 2026", company: "Anglo American", field: "Mining • Engineering", link: "https://www.angloamerican.com/careers/bursaries" },
    { title: "Glencore: Bursaries 2026", company: "Glencore", field: "Mining", link: "https://www.glencore.com/careers/bursaries" },
    { title: "Sibanye-Stillwater: Bursaries 2026", company: "Sibanye-Stillwater", field: "Mining", link: "https://www.sibanyestillwater.com/careers/bursaries" },
    { title: "Gold Fields: Bursaries 2026", company: "Gold Fields", field: "Mining", link: "https://www.goldfields.com/bursaries" },
    { title: "Harmony Gold: Bursaries 2026", company: "Harmony Gold", field: "Mining", link: "https://www.harmony.co.za/careers/bursaries" },
    { title: "Impala Platinum: Bursaries 2026", company: "Impala Platinum", field: "Mining", link: "https://www.implats.co.za/bursaries" },
    { title: "South32: Bursaries 2026", company: "South32", field: "Mining", link: "https://www.south32.net/careers/bursaries" },
    { title: "South African Reserve Bank: External Bursary 2026", company: "SARB", field: "Finance • Economics", link: "https://www.resbank.co.za/en/home/publications/publication-detail-pages/bursary/2025/external-2026" }
];

// === ADD HEADINGS + RENDER LISTINGS ===
const grid = document.getElementById("internshipsGrid");

// Big headings
grid.innerHTML += <h2 style="background:#00d4aa;color:white;padding:20px;border-radius:12px;margin:30px 0 20px;text-align:center;font-size:2rem;">Internships & Graduate Programmes 2026</h2>;

internships.slice(0, 50).forEach((item, index) => {  // First 50 = internships
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

// Bursaries heading
grid.innerHTML += <h2 style="background:#ff6b35;color:white;padding:20px;border-radius:12px;margin:50px 0 20px;text-align:center;font-size:2rem;">Bursaries & Scholarships 2026</h2>;

internships.slice(50).forEach((item, index) => {  // Rest = bursaries
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
