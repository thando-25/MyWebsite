document.addEventListener('DOMContentLoaded', function() {
    const grid = document.getElementById('internshipsGrid');
    const search = document.getElementById('searchInput');

    function displayInternships(list) {
        grid.innerHTML = '';
        if (list.length === 0) {
            grid.innerHTML = '<p style="text-align:center; grid-column:1/-1; padding:60px; font-size:1.2rem; color:#666;">No internships found. Try another keyword!</p>';
            return;
        }

        list.forEach(int => {
            const card = `
                <div class="card">
                    <div class="card-header">${int.company}</div>
                    <div class="card-body">
                        <h3 class="card-title">${int.title}</h3>
                        <p class="field">${int.field}</p>
                        <a href="${int.link}" class="apply-btn" target="_blank" rel="noopener">Apply Now</a>
                    </div>
                </div>
            `;
            grid.innerHTML += card;
        });
    }

    displayInternships(internships);

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
