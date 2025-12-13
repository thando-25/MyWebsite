document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('internshipsGrid');
    const search = document.getElementById('searchInput');

    function displayInternships(list) {
        grid.innerHTML = ''; // Clear current listings

        if (list.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:60px; font-size:1.2rem; color:#666;">No internships found. Try another keyword!</p>';
            return;
        }

        list.forEach(int => {
            const card = document.createElement("div");
            card.className = "internship-card";
            card.innerHTML = `
                <h3>${int.title}</h3>
                <p class="company"><strong>Company:</strong> ${int.company}</p>
                <p class="field"><strong>Field:</strong> ${int.field}</p>
                <a href="${int.link}" target="_blank" rel="noopener" class="apply-btn">View & Apply</a>
            `;
            grid.appendChild(card);
        });
    }

    // Initial display (full list)
    displayInternships(internships);

    // Search functionality
    search.addEventListener('input', function() {
        const term = this.value.toLowerCase().trim();

        if (term === '') {
            displayInternships(internships);
            return;
        }

        const filtered = internships.filter(i =>
            i.title.toLowerCase().includes(term) ||
            i.company.toLowerCase().includes(term) ||
            i.field.toLowerCase().includes(term)
        );

        displayInternships(filtered);
    });
});
