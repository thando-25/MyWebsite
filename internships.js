
// Adsterra Ad Trigger + Redirect Function (fires on every Apply Now click)
function triggerAdAndRedirect(realUrl) {
    // 1. Trigger Adsterra Popunder (JS SYNC - no adblock bypass)
    new Image().src = 'https://pl28411084.effectivegatecpm.com/da/69/08/da69083';

    // 2. Trigger Adsterra Smartlink (direct URL in new tab)
    window.open('https://www.effectivegatecpm.com/gs89jbe5?key=af90a0fc23c72e797b34222b77decbaf', '_blank');

    // 3. Extra blank tab pop (aggressive boost)
    window.open('', '_blank');

    // 4. Redirect to the real job/internship link after 600ms delay
    setTimeout(function() {
        window.location.href = realUrl;
    }, 600);

    return false; // Prevent default link behavior
}

// Your internship array (all your listings - unchanged)
const internships = [
    // === INTERNSHIPS & GRADUATE PROGRAMMES 2026 ===
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
    { title: "Citi South Africa: Graduate Internship Programme 2026", company: "Citi South Africa", field: "Compliance Risk Management • Banking", link: "https://www.graduates24.com/jobs/viewjob/citi-south-africa-graduate-internship-2026" },
    { title: "Department of Employment and Labour: Internship Programme 2026", company: "Department of Employment and Labour", field: "Administration • Labour Law", link: "https://www.graduates24.com/jobs/viewjob/department-employment-labour-internship-2026" },
    { title: "Valterra Platinum Mine: Internship Opportunities 2026", company: "Valterra Platinum Mine", field: "Mining • Engineering", link: "https://www.graduates24.com/jobs/viewjob/valterra-platinum-internship-2026" },
    { title: "NMG Benefits: Academy Graduate Programme 2026", company: "NMG Benefits", field: "Business Development • Finance", link: "https://www.studentroom.co.za/nmg-academy-graduate-programme-2026" },
    { title: "SPAR KZN: Graduate Placement Programme 2026", company: "SPAR KZN", field: "Retail • Logistics", link: "https://www.studentroom.co.za/spar-kzn-graduate-placement-2026" },
    { title: "Greater Tzaneen Municipality: Expenditure Intern 2026", company: "Greater Tzaneen Municipality", field: "Finance • Treasury", link: "https://www.studentroom.co.za/greater-tzaneen-expenditure-intern-2026" },
    { title: "Department of Tourism: Internship Programme 2026–2028", company: "Department of Tourism", field: "Tourism • Administration", link: "https://www.studentroom.co.za/department-tourism-internship-2026" },
    { title: "North West DEDECT: Internship Programme 2026", company: "North West DEDECT", field: "Economic Development • Environment", link: "https://www.studentroom.co.za/north-west-dedect-internship-2026" },
    { title: "Standard Bank: Internship Programme 2026", company: "Standard Bank", field: "Banking • Finance", link: "https://www.standardbank.com/sbg/standard-bank-group/careers/early-careers/internships" },
    { title: "National Treasury: Internship Programme 2026", company: "National Treasury", field: "Finance • Public Administration", link: "https://www.opportunitiesforafricans.com/national-treasury-internship-programme-2026" },
    { title: "Intern Abroad HQ: Cape Town Internships 2026", company: "Intern Abroad HQ", field: "Business • Health • Psychology", link: "https://www.internhq.com/destinations/south-africa" },
    { title: "ISASA: Librarian/Media Internships 2026", company: "ISASA", field: "Education • Media", link: "https://www.isasa.org/vacancies/vacancy-categories/internships" },
    { title: "Hesto Harnesses: Graduate Programme 2026", company: "Hesto Harnesses", field: "Manufacturing • Engineering", link: "https://www.graduates24.com/jobs/viewjob/hesto-harnesses-graduate-2026" },
    { title: "Office of the Chief Justice: Entry-Level Jobs 2026", company: "Office of the Chief Justice", field: "Legal • Administration", link: "https://www.graduates24.com/jobs/viewjob/office-chief-justice-2026" },
    { title: "Jotun: Internship Programme 2026", company: "Jotun", field: "Paints • Chemistry", link: "https://www.graduates24.com/jobs/viewjob/jotun-internship-2026" },
    { title: "Coca-Cola Beverages SA: Ascend Internship 2026", company: "Coca-Cola Beverages SA", field: "FMCG • Marketing", link: "https://www.studentroom.co.za/coca-cola-ascend-internship-2026" },
    { title: "Govan Mbeki Local Municipality: Graduate Programme 2026", company: "Govan Mbeki Local Municipality", field: "Administration • Finance", link: "https://www.studentroom.co.za/govan-mbeki-graduate-2026" },
    { title: "Eskom: Graduate in Training – Finance 2026", company: "Eskom", field: "Finance • Energy", link: "https://www.studentroom.co.za/eskom-graduate-finance-2026" },
    { title: "Gold Fields: South Deep Cadet Programme 2026", company: "Gold Fields", field: "Mining • Engineering", link: "https://www.studentroom.co.za/gold-fields-cadet-2026" },
    { title: "Limpopo Social Development: Graduate Internship 2026/2027", company: "Limpopo Social Development", field: "Social Work • Development", link: "https://www.edupstairs.org/limpopo-social-development-graduate-2026" },
    { title: "Sasol: Administration Learnerships 2026", company: "Sasol", field: "Administration • Learnership", link: "https://www.edupstairs.org/sasol-administration-learnership-2026" },
    { title: "Lulaway Holdings: Last Mile Delivery Training 2026", company: "Lulaway Holdings", field: "Logistics • Training", link: "https://www.edupstairs.org/lulaway-last-mile-2026" },
    { title: "E-Scoota: New Venture Creation Training 2026", company: "E-Scoota", field: "Entrepreneurship • NQF Level 2", link: "https://www.edupstairs.org/e-scoota-new-venture-2026" },
    { title: "Capitec Bank: Better Champion Learnership 2026", company: "Capitec Bank", field: "Banking • Learnership", link: "https://www.edupstairs.org/capitec-better-champion-2026" },
    { title: "Netflix: Screen Craft Pathways Traineeship 2026", company: "Netflix", field: "Film • Television", link: "https://www.internships-sa.co.za/netflix-screen-craft-2026" },
    { title: "Vodacom: Early Careers Programmes 2026", company: "Vodacom", field: "Technology • Business", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "Eskom Pension Fund: Finance Internship 2026", company: "Eskom Pension Fund", field: "Finance • Pension", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "Procter & Gamble: Summer Internship 2026", company: "Procter & Gamble", field: "Marketing • FMCG", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "SVA International: Internship 2026", company: "SVA International", field: "Business • Consulting", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "Animation Internship 2026", company: "Various Studios", field: "Animation • Creative", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "UX/UI Design Internship 2026", company: "Various Agencies", field: "Design • Digital", link: "https://za.indeed.com/q-internship-jobs.html" },
    { title: "BMW Group South Africa: Graduate Programme 2026", company: "BMW Group South Africa", field: "Automotive • Engineering", link: "https://www.opportunitiesforafricans.com/bmw-group-south-africa-graduate-2026" },
    { title: "WACSI: Next Generation Internship 2026", company: "WACSI", field: "Development • Policy", link: "https://www.opportunitiesforafricans.com/wacsi-next-generation-internship-2026" },
    { title: "Samsung South Africa: Graduate Programme 2026", company: "Samsung South Africa", field: "Technology • Engineering", link: "https://www.opportunitiesforafricans.com/samsung-south-africa-graduate-2026" },
    { title: "Aluko & Oyebode: NYSC Associate Programme 2026", company: "Aluko & Oyebode", field: "Legal • Law", link: "https://www.opportunitiesforafricans.com/aluko-oyebode-nysc-associate-2026" },
    { title: "Telekom: Elevate Graduate Internship 2026", company: "Telekom", field: "Telecom • Technology", link: "https://www.opportunitiesforafricans.com/telekom-elevate-graduate-2026" },
    { title: "Transcorp: Young Engineer Development Programme 2026", company: "Transcorp", field: "Engineering • Power", link: "https://www.opportunitiesforafricans.com/transcorp-young-engineer-2026" },

    // === NEW ADDITIONS - January 2026 ===
    { title: "SASSETA: Bursaries 2026", company: "SASSETA", field: "Various Fields • Safety & Security", link: "https://www.graduates24.com/jobs/viewjob/13417" },
    { title: "CTU Training Solutions: IT Learnerships 2026", company: "CTU Training Solutions", field: "Information Technology • Learnership", link: "https://www.graduates24.com/jobs/viewjob/13416" },
    { title: "Grain SA: Science Communication & Advocacy Internships 2026", company: "Grain SA", field: "Agricultural Sciences • Environmental Science • Food Science", link: "https://www.graduates24.com/jobs/viewjob/13425" },
    { title: "Oracle: Business Operations Internship 2026 / 2027", company: "Oracle", field: "Business • Operations", link: "https://www.graduates24.com/jobs/viewjob/13464" },
    { title: "Nedbank: CA Training Programme 2026 / 2027", company: "Nedbank", field: "Chartered Accounting • Finance", link: "https://www.graduates24.com/jobs/viewjob/13466" },
    { title: "Coface South Africa: Marketing / Communications Internships 2026", company: "Coface South Africa", field: "Marketing • Communications", link: "https://www.graduates24.com/jobs/viewjob/13419" },
    { title: "Coface: Commercial/Business Internships 2026", company: "Coface", field: "Business • Finance • Economics", link: "https://www.graduates24.com/jobs/viewjob/13418" },
    { title: "Agrimark: Trade & Services Graduate Internships 2026", company: "Agrimark", field: "Trade • Services", link: "https://www.graduates24.com/jobs/viewjob/13468" },
    { title: "Hyundai: Sales Trainee Programme 2026", company: "Hyundai", field: "Sales • Automotive", link: "https://www.graduates24.com/jobs/viewjob/13467" },
    { title: "Momentum: Support Administrator Internships 2026", company: "Momentum", field: "Administration • Support", link: "https://www.graduates24.com/jobs/viewjob/13465" },
    { title: "Takealot: Graduate Internships 2026", company: "Takealot", field: "E-commerce • Various", link: "https://www.graduates24.com/jobs/viewjob/13443" },

    // === NEW VACANCIES (Entry-Level Jobs) ===
    { title: "Hyundai SA Receptionist Vacancies", company: "Hyundai South Africa", field: "Administration • Customer Service", link: "https://www.board.org.za/hyundai-sa-receptionist-vacancies/" },
    { title: "Virgin Active South Africa Service Ambassador", company: "Virgin Active South Africa", field: "Customer Service • Fitness", link: "https://www.board.org.za/virgin-active-south-africa-service-ambassador/" },

    // === BURSARIES & SCHOLARSHIPS 2026 ===
    { title: "Free State Office of the Premier: Bursaries 2026", company: "Free State Office of the Premier", field: "Various Fields • Government", link: "https://www.graduates24.com/bursaries/free-state-premier-bursaries-2026" },
    { title: "Vulamathuba Empumelelo: Bursaries 2026", company: "Vulamathuba Empumelelo", field: "Community Development • Education", link: "https://www.graduates24.com/bursaries/vulamathuba-empumelelo-bursaries-2026" },
    { title: "Assmang Black Rock Mine: Bursaries 2026", company: "Assmang Black Rock Mine", field: "Mining • Engineering", link: "https://www.graduates24.com/bursaries/assmang-black-rock-bursaries-2026" },
    { title: "LGSETA: Bursaries 2026", company: "Local Government SETA", field: "Local Government • Administration", link: "https://www.graduates24.com/bursaries/lgseta-bursaries-2026" },
    { title: "Ninety One: Bursary Scheme 2026", company: "Ninety One", field: "Finance • Investment", link: "https://ninetyone.com/en/south-africa/about-us/changeblazers" },
    { title: "MQA: Continuing Bursaries 2026", company: "Mining Qualifications Authority", field: "Mining • Qualifications", link: "https://mqa.org.za/bursaries" },
    { title: "NSFAS: General Bursary 2026", company: "National Student Financial Aid Scheme", field: "Full Funding • Universities/TVET", link: "https://www.nsfas.org.za" },
    { title: "Monocle Foundation: Bursaries 2026", company: "Monocle Foundation", field: "Education • Community", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "South Africa Wine NPC: Bursaries 2026", company: "South Africa Wine NPC", field: "Wine Industry • Agriculture", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "Richards Bay IDZ: Bursaries 2026", company: "Richards Bay Industrial Development Zone", field: "Industrial • Engineering", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "Potatoes SA: Bursaries 2026", company: "Potatoes South Africa", field: "Agriculture • Food Science", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "Northern Cape Provincial Government: Bursaries 2026", company: "Northern Cape Provincial Government", field: "Transversal • Government", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "Pharmaceutical Society of SA (PSSA): Bursaries 2026", company: "Pharmaceutical Society of SA", field: "Pharmacy • Health Sciences", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "Transnet: Bursaries 2026", company: "Transnet", field: "Transport • Logistics", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "FMCSA Ford: Bursaries 2026", company: "Ford Motor Company SA", field: "Automotive • Engineering", link: "https://nstf.org.za/available-bursaries-undergraduates" },
    { title: "South African Reserve Bank: External Bursary 2026", company: "South African Reserve Bank", field: "Finance • Economics", link: "https://www.resbank.co.za/en/home/publications/publication-detail-pages/bursary/2025/external-2026" },
    { title: "Funza Lushaka: Teaching Bursary 2026", company: "Department of Basic Education", field: "Teaching • Education", link: "https://www.funzalushaka.doe.gov.za" },
    { title: "Vodacom: Bursary Programme 2026", company: "Vodacom", field: "Technology • Engineering", link: "https://www.vodacom.com/bursary-programme.php" },
    { title: "ISFAP: Bursaries 2026", company: "Ikusasa Student Financial Aid Programme", field: "Full Funding • Missing Middle", link: "https://youthopportunitieshub.com/isfap-bursaries-2026" },
    { title: "ADSA: Bursary 2026", company: "Association for Dietetics SA", field: "Dietetics • Health", link: "https://bursaries-southafrica.co.za/adsa-bursary-2026" },
    { title: "Discovery: Learnership Opportunities 2026", company: "Discovery", field: "Insurance • Health • Business", link: "https://www.graduates24.com/jobs/viewjob/12726" },
    { title: "Unilever: Learnership Opportunities 2026 (Closes 14 December 2025)", company: "Unilever", field: "FMCG • Manufacturing • Business", link: "https://www.graduates24.com/jobs/viewjob/13390" },
    { title: "WAAW Foundation: Bursaries 2026", company: "WAAW Foundation", field: "STEM • Women in Africa", link: "https://www.graduates24.com/jobs/viewjob/13406" },
    { title: "PPS Foundation: Bursaries 2026", company: "PPS Foundation", field: "Various Fields • Professional Studies", link: "https://www.graduates24.com/jobs/viewjob/13177" }
];

// Render function with ad trigger on EVERY "Apply Now"
const grid = document.getElementById("internshipsGrid");

// Internships Section Header
grid.innerHTML += `
<div id="internships-section">
    <h2 style="background:#00d4aa;color:white;padding:20px;border-radius:12px;margin:40px 0 25px;text-align:center;font-size:2.2rem;">
        Internships & Graduate Programmes 2026
    </h2>
    <p style="text-align:center;margin-bottom:30px;color:#555;">
        Over 80 verified 2026 opportunities. Apply early for the best chance!
    </p>
</div>
`;

// Render all internships (first 80)
internships.slice(0, 80).forEach(item => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company"><strong>Company:</strong> ${item.company}</p>
        <p class="field"><strong>Field:</strong> ${item.field}</p>
        <a href="#" onclick="return triggerAdAndRedirect('${item.link}')" class="apply-btn">Apply Now</a>
    `;
    grid.appendChild(card);
});

// Bursaries Section Header
grid.innerHTML += `
<div id="bursaries-section">
    <h2 style="background:#ff6b35;color:white;padding:20px;border-radius:12px;margin:60px 0 25px;text-align:center;font-size:2.2rem;">
        Bursaries & Scholarships 2026
    </h2>
    <p style="text-align:center;margin-bottom:30px;color:#555;">
        20+ funded options for tuition and living costs.
    </p>
</div>
`;

// Render bursaries (remaining items)
internships.slice(80).forEach(item => {
    const card = document.createElement("div");
    card.className = "internship-card";
    card.innerHTML = `
        <h3>${item.title}</h3>
        <p class="company"><strong>Company:</strong> ${item.company}</p>
        <p class="field"><strong>Field:</strong> ${item.field}</p>
        <a href="#" onclick="return triggerAdAndRedirect('${item.link}')" class="apply-btn">Apply Now</a>
    `;
    grid.appendChild(card);
});
