const scientists = [
    {
        id: 'galileu',
        name: 'Galileu Galilei',
        period: '1564–1642',
        origin: 'Itália',
        quote: '“E, no entanto, ela se move.”',
        bio: 'O “pai da astronomia observacional”. Aperfeiçoou o telescópio e fez descobertas fundamentais: as luas de Júpiter, as fases de Vênus e as crateras lunares. Defendeu o heliocentrismo, desafiando dogmas milenares.',
        imageColor: '#4a5c53' // Placeholder color
    },
    {
        id: 'kepler',
        name: 'Johannes Kepler',
        period: '1571–1630',
        origin: 'Alemanha',
        quote: '“Mede-se a mente pela estatura do universo que ela contempla.”',
        bio: 'Matemático brilhante que decifrou as leis do movimento planetário. Descobriu que os planetas se movem em órbitas elípticas, não circulares, revolucionando a mecânica celeste.',
        imageColor: '#8a5a44'
    },
    {
        id: 'newton',
        name: 'Isaac Newton',
        period: '1643–1727',
        origin: 'Inglaterra',
        quote: '“Se vi mais longe, foi por estar sobre ombros de gigantes.”',
        bio: 'Formulou a lei da gravitação universal e as leis do movimento. Explicou por que os planetas orbitam o Sol e unificou a física terrestre com a celeste.',
        imageColor: '#2e4a3e'
    },
    {
        id: 'herschel',
        name: 'William Herschel',
        period: '1738–1822',
        origin: 'Alemanha/Inglaterra',
        quote: '“Eu olhei além do que qualquer homem já olhou.”',
        bio: 'Descobriu o planeta Urano, dobrando o tamanho conhecido do Sistema Solar. Mapeou a estrutura da Via Láctea e descobriu a radiação infravermelha.',
        imageColor: '#3d6b57'
    },
    {
        id: 'hubble',
        name: 'Edwin Hubble',
        period: '1889–1953',
        origin: 'EUA',
        quote: '“Equipado com seus cinco sentidos, o homem explora o universo.”',
        bio: 'Provou que existem galáxias além da Via Láctea e descobriu que o universo está em expansão (Lei de Hubble), a base para a teoria do Big Bang.',
        imageColor: '#5a8a72'
    },
    {
        id: 'sagan',
        name: 'Carl Sagan',
        period: '1934–1996',
        origin: 'EUA',
        quote: '“Somos feitos de poeira das estrelas.”',
        bio: 'Astrônomo e divulgador científico inigualável. Pioneiro na astrobiologia, buscou vida extraterrestre e insipirou gerações com a série Cosmos.',
        imageColor: '#c9a96e'
    }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const displaySection = document.querySelector('.scientist-display');
    const container = displaySection; // We will append/replace context here logic
    // Actually, current HTML has hardcoded Galileu. Let's build a render function.

    const renderCard = (index) => {
        const scientist = scientists[index];
        // Only one card exists in DOM in my static HTML, but I should probably just update content or replace the DOM.
        // Updating content allows smoother transitions if I handle opacity manually.
        
        // Find existing card or create wrapper logic. 
        // Simpler approach: Clear container and inject new HTML or update fields.
        
        const cardCtx = document.querySelector('.scientist-card');
        
        // Trigger fade out
        cardCtx.style.opacity = '0';
        cardCtx.style.transform = 'translateX(20px)';

        setTimeout(() => {
            // Update Data
            document.querySelector('#galileu h1').textContent = scientist.name;
            document.querySelector('#galileu .quote').textContent = scientist.quote;
            document.querySelector('#galileu .meta-block:nth-child(1) .meta-value').textContent = scientist.period;
            document.querySelector('#galileu .meta-block:nth-child(2) .meta-value').textContent = scientist.origin;
            document.querySelector('#galileu .bio').textContent = scientist.bio;
            document.querySelector('#galileu .img-placeholder').style.backgroundColor = scientist.imageColor;
            document.querySelector('#galileu .label').textContent = `Revolucionário #0${index + 1}`;
            
            // Fade in
            cardCtx.style.opacity = '1';
            cardCtx.style.transform = 'translateX(0)';
        }, 400); // Wait for fade out
    };

    // Controls
    document.querySelector('.next-btn').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % scientists.length;
        renderCard(currentIndex);
        updateSidebar(currentIndex);
    });

    document.querySelector('.prev-btn').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + scientists.length) % scientists.length;
        renderCard(currentIndex);
        updateSidebar(currentIndex);
    });

    // Sidebar interaction
    const sidebarContainer = document.querySelector('.sidebar-icons');
    // Clear and rebuild sidebar icons based on array length
    sidebarContainer.innerHTML = ''; 
    scientists.forEach((sc, idx) => {
        const div = document.createElement('div');
        div.className = `sidebar-item ${idx === 0 ? 'active' : ''}`;
        div.title = sc.name;
        // Generic Icon for now, or specific if we had SVG paths in data
        div.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/></svg>`;
        div.addEventListener('click', () => {
            currentIndex = idx;
            renderCard(currentIndex);
            updateSidebar(currentIndex);
        });
        sidebarContainer.appendChild(div);
    });
    
    function updateSidebar(index) {
        document.querySelectorAll('.sidebar-item').forEach((item, idx) => {
            if (idx === index) item.classList.add('active');
            else item.classList.remove('active');
        });
    }
});
