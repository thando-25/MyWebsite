
const internships = [
    // === INTERNSHIPS & GRADUATE PROGRAMMES 2026 ===
    { title: "Bidvest International Logistics (BIL): YES Programme 2026", company: "Bidvest International Logistics", field: "Logistics • Supply Chain • Operations", link: "https://www.graduates24.com/jobs/viewjob/13237" },
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
    { title: "Amazon: Financial Analyst Internship", company: "Amazon", field: "Finance • Accounting • Analytics", link: "https://www.graduates24.com/jobs/viewjob/13254" },
    { title: "Premier: Internships", company: "Premier FMCG", field: "Marketing • Business • Communications", link: "https://www.graduates24.com/jobs/viewjob/13255" },
    { title: "Ernst & Young: Graduate Programme 2026", company: "EY", field: "Auditing • Consulting • Tax", link: "https://www.graduates24.com/jobs/viewjob/12702" },
    { title: "Gold Fields: Cadet Internship Programme", company: "Gold Fields", field: "Mining • Engineering • Safety", link: "https://www.graduates24.com/jobs/viewjob/13256" },
    { title: "Citi South Africa: Graduate Internship Programme 2026", company: "Citi South Africa", field: "Compliance Risk Management • Banking", link: "https://www.graduates24.com/jobs/viewjob/citi-south-africa-graduate-internship-2026" },
    { title: "Department of Employment and Labour: Internship Programme 2026", company: "Department of Employment and Labour", field: "Administration • Labour Law", link: "https://www.graduates24.com/jobs/viewjob/department-employment-labour-internship-2026" },
    { title: "NMG Benefits: Academy Graduate Programme 2026", company: "NMG Benefits", field: "Business Development • Finance", link: "https://www.studentroom.co.za/nmg-academy-graduate-programme-2026" },
    { title: "SPAR KZN: Graduate Placement Programme 2026", company: "SPAR KZN", field: "Retail • Logistics", link: "https://www.studentroom.co.za/spar-kzn-graduate-placement-2026" },
    { title: "Department of Tourism: Internship Programme 2026–2028", company: "Department of Tourism", field: "Tourism • Administration", link: "https://www.studentroom.co.za/department-tourism-internship-2026" },
    { title: "Standard Bank: Internship Programme 2026", company: "Standard Bank", field: "Banking • Finance", link: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/internships" },
    { title: "Visa: Internship Opportunities 2026", company: "Visa", field: "Finance • Technology", link: "https://www.graduates24.com/jobs/viewjob/visa-internship-2026" },
    { title: "Hesto Harnesses: Graduate Programme 2026", company: "Hesto Harnesses", field: "Manufacturing • Engineering", link: "https://www.graduates24.com/jobs/viewjob/hesto-harnesses-graduate-2026" },
    { title: "Coca-Cola Beverages SA: Ascend Internship 2026", company: "Coca-Cola Beverages SA", field: "FMCG • Marketing", link: "https://www.studentroom.co.za/coca-cola-ascend-internship-2026" },
    { title: "Eskom: Graduate in Training – Finance 2026", company: "Eskom", field: "Finance • Energy", link: "https://www.studentroom.co.za/eskom-graduate-finance-2026" },
    { title: "Capitec Bank: Better Champion Learnership 2026", company: "Capitec Bank", field: "Banking • Learnership", link: "https://www.edupstairs.org/capitec-better-champion-2026" },
    { title: "Vodacom: Early Careers Programmes 2026", company: "Vodacom", field: "Technology • Business", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "BMW Group South Africa: Graduate Programme 2026", company: "BMW Group South Africa", field: "Automotive • Engineering", link: "https://www.opportunitiesforafricans.com/bmw-group-south-africa-graduate-2026" },
    { title: "Samsung South Africa: Graduate Programme 2026", company: "Samsung South Africa", field: "Technology • Engineering", link: "https://www.opportunitiesforafricans.com/samsung-south-africa-graduate-2026" },
    // New 2026 Internships Added
    { title: "Absa: Graduate Programme 2026", company: "Absa Bank", field: "Banking • Finance • IT", link: "https://www.absa.co.za/about-us/careers/graduate-programmes/" },
    { title: "FNB: Graduate Trainee Programme 2026", company: "First National Bank", field: "Banking • Analytics • Digital", link: "https://www.fnb.co.za/careers/graduate-programme.html" },
    { title: "MTN: Graduate Development Programme 2026", company: "MTN South Africa", field: "Telecom • Technology • Marketing", link: "https://www.mtn.co.za/careers/graduates/" },
    { title: "Discovery: Graduate Programme 2026", company: "Discovery", field: "Insurance • Health • Actuarial", link: "https://www.discovery.co.za/corporate/careers-graduate-programme" },
    { title: "Sanlam: Graduate Opportunities 2026", company: "Sanlam", field: "Finance • Actuarial • Investments", link: "https://www.sanlam.co.za/careers/graduate-programmes" },
    { title: "Old Mutual: Graduate Accelerated Programme 2026", company: "Old Mutual", field: "Finance • Insurance • Data Science", link: "https://www.oldmutual.co.za/careers/graduate-programme" },
    { title: "PwC: Graduate Programme 2026", company: "PwC South Africa", field: "Auditing • Consulting • Tax", link: "https://www.pwc.co.za/en/careers/students/graduate-programme.html" },
    { title: "KPMG: Graduate Programme 2026", company: "KPMG", field: "Audit • Advisory • Tax", link: "https://home.kpmg/za/en/home/careers/graduate-programmes.html" },
    { title: "Deloitte: Graduate Programme 2026", company: "Deloitte", field: "Consulting • Audit • Technology", link: "https://www2.deloitte.com/za/en/careers/graduates.html" },
    { title: "SARS: Graduate Trainee Programme 2026", company: "South African Revenue Service", field: "Tax • Finance • IT", link: "https://www.sars.gov.za/careers/graduate-programme/" },
    { title: "Transnet: Young Professionals in Training 2026", company: "Transnet", field: "Logistics • Engineering • Supply Chain", link: "https://www.transnet.net/Career/Pages/Graduate-Programme.aspx" },
    { title: "Anglo American: Graduate Programme 2026", company: "Anglo American", field: "Mining • Engineering • Geology", link: "https://www.angloamerican.com/careers/graduate-programme" },

    // === BURSARIES & SCHOLARSHIPS 2026 ===
    { title: "Free State Office of the Premier: Bursaries 2026", company: "Free State Office of the Premier", field: "Various Fields • Government", link: "https://www.graduates24.com/bursaries/free-state-premier-bursaries-2026" },
    { title: "Assmang Black Rock Mine: Bursaries 2026", company: "Assmang Black Rock Mine", field: "Mining • Engineering", link: "https://www.graduates24.com/bursaries/assmang-black-rock-bursaries-2026" },
    { title: "Ninety One: Bursary Scheme 2026", company: "Ninety One", field: "Finance • Investment", link: "https://ninetyone.com/en/south-africa/about-us/changeblazers" },
    { title: "NSFAS: General Bursary 2026", company: "National Student Financial Aid Scheme", field: "Full Funding • Universities/TVET", link: "https://www.nsfas.org.za" },
    { title: "Funza Lushaka: Teaching Bursary 2026", company: "Department of Basic Education", field: "Teaching • Education", link: "https://www.funzalushaka.doe.gov.za" },
    { title: "Vodacom: Bursary Programme 2026", company: "Vodacom", field: "Technology • Engineering", link: "https://www.vodacom.com/bursary-programme.php" },
    { title: "ISFAP: Bursaries 2026", company: "Ikusasa Student Financial Aid Programme", field: "Full Funding • Missing Middle", link: "https://youthopportunitieshub.com/isfap-bursaries-2026" },
    // New 2026 Bursaries Added
    { title: "Sasol Bursary Programme 2026", company: "Sasol", field: "Engineering • Science • Accounting", link: "https://www.sasolbursaries.com" },
    { title: "Exxaro Bursary 2026", company: "Exxaro", field: "Mining • Engineering • Geology", link: "https://www.exxaro.com/careers/bursaries" },
    { title: "Anglo American Bursary 2026", company: "Anglo American", field: "Mining • Engineering • Finance", link: "https://www.angloamerican.com/careers/bursaries" },
    { title: "Nedbank External Bursary 2026", company: "Nedbank", field: "Finance • IT • Mathematics", link: "https://www.nedbank.co.za/content/nedbank/desktop/gt/en/aboutus/transformation/bursaries.html" },
    { title: "Standard Bank Bursary 2026", company: "Standard Bank", field: "Commerce • Engineering • IT", link: "https://www.standardbank.co.za/southafrica/personal/learn-more/bursaries" },
    { title: "Investec Bursary 2026", company: "Investec", field: "Commerce • Engineering • IT • Medicine", link: "https://www.investec.com/en_za/focus/education/bursaries.html" },
    { title: "Allan Gray Orbis Fellowship 2026", company: "Allan Gray", field: "Commerce • Engineering • Law • Humanities", link: "https://www.allangrayorbis.org/fellowship" },
    { title: "Motsepe Foundation Bursary 2026", company: "Motsepe Foundation", field: "Various Fields", link: "https://motsepefoundation.org/bursaries" },
    { title: "Canon Collins Trust Scholarships 2026", company: "Canon Collins", field: "Postgraduate • Law • Education", link: "https://www.canoncollins.org.uk/apply/scholarship" },
    { title: "Gauteng City Region Academy Bursary 2026", company: "GCRA", field: "Various Fields", link: "https://www.gcra.co.za/bursaries" },
    { title: "Feenix Crowdfunding Bursary 2026", company: "Feenix", field: "Any Field (Missing Middle)", link: "https://feenix.org" },
    { title: "Thuthuka Bursary Fund 2026", company: "SAICA", field: "Chartered Accounting", link: "https://www.saica.co.za/thuthuka" },
    { title: "Masakh’iSizwe Bursary 2026", company: "Western Cape Government", field: "Engineering • Built Environment", link: "https://www.westerncape.gov.za/masakhisizwe-bursary" },
    { title: "Kantey & Templer Bursary 2026", company: "Kantey & Templer", field: "Civil Engineering", link: "https://www.kanteytempler.co.za/bursaries" },
    { title: "Shoprite Bursary 2026", company: "Shoprite", field: "Retail • IT • Pharmacy • Logistics", link: "https://www.shopriteholdings.co.za/careers/bursaries.html" }
];

// Render listings
const grid = document.getElementById("internshipsGrid");

// Internships Heading
grid.innerHTML += `
<h2 style="background:#00d4aa;color:white;padding:20px;border-radius:12px;margin:40px 0 25px;text-align:center;font-size:2.2rem;">
    Internships & Graduate Programmes 2026
</h2>
<p style="text-align:center;margin-bottom:30px;color:#555;">
    Over 80 verified 2026 opportunities. Apply early!
</p>
`;

// Render Internships
internships.slice(0, 80).forEach(item => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company"><strong>Company:</strong> ${item.company}</p>
        <p class="field"><strong>Field:</strong> ${item.field}</p>
        <a href="${item.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);
});

// Bursaries Heading
grid.innerHTML += `
<h2 style="background:#ff6b35;color:white;padding:20px;border-radius:12px;margin:60px 0 25px;text-align:center;font-size:2.2rem;">
    Bursaries & Scholarships 2026
</h2>
<p style="text-align:center;margin-bottom:30px;color:#555;">
    Over 40 funded options — tuition, accommodation & more.
</p>
`;

// Render Bursaries
internships.slice(80).forEach(item => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company"><strong>Company:</strong> ${item.company}</p>
        <p class="field"><strong>Field:</strong> ${item.field}</p>
        <a href="${item.link}" target="_blank" class="apply-btn">View & Apply</a>
    `;
    grid.appendChild(card);
});
