const scientists = [
    {
        id: 'galileu',
        name: 'Galileu Galilei',
        period: '1564–1642',
        origin: 'Itália',
        quote: '“E, no entanto, ela se move.”',
        bio: 'Galileu Galilei foi um físico, matemático, astrônomo e filósofo florentino que desempenhou um papel fundamental na Revolução Científica. Frequentemente chamado de "pai da astronomia observacional", ele aprimorou significativamente o telescópio óptico e o apontou para o céu, revelando maravilhas nunca antes vistas. Entre suas descobertas mais notáveis estão as quatro maiores luas de Júpiter (hoje conhecidas como luas galileanas: Io, Europa, Ganimedes e Calisto), as fases de Vênus (que provaram que o planeta orbita o Sol), as manchas solares e o relevo acidentado da Lua, contrariando a ideia aristotélica de que os corpos celestes eram esferas perfeitas. Sua defesa do heliocentrismo de Copérnico o colocou em conflito direto com a Inquisição Romana, levando-o a passar seus últimos anos em prisão domiciliar, mas seu legado como um dos maiores cientistas da história permanece inabalável.',
        image: 'img/galilei.jpg',
        achievements: [
            'Aprimoramento do Telescópio (30x)',
            'Luas de Júpiter (Io, Europa, Ganimedes, Calisto)',
            'Fases de Vênus e Manchas Solares',
            'Defesa do Heliocentrismo'
        ]
    },
    {
        id: 'kepler',
        name: 'Johannes Kepler',
        period: '1571–1630',
        origin: 'Alemanha',
        quote: '“Mede-se a mente pela estatura do universo que ela contempla.”',
        bio: 'Johannes Kepler foi um figura chave na revolução científica do século XVII, conhecido principalmente por formular as três leis do movimento planetário que levam seu nome. Inicialmente assistente do astrônomo Tycho Brahe, Kepler herdou os dados observacionais precisos de Brahe após sua morte e os usou para demonstrar que as órbitas dos planetas não são círculos perfeitos, mas elipses, com o Sol em um dos focos. Essa descoberta rompeu com milênios de dogma astronômico e pavimentou o caminho para a Teoria da Gravitação Universal de Isaac Newton. Além da astronomia, Kepler fez contribuições fundamentais para a óptica e a matemática.',
        image: 'img/kepler.jpg',
        achievements: [
            '3 Leis do Movimento Planetário',
            'Órbitas Elípticas',
            'Tabelas Rudolfinas',
            'Óptica Moderna'
        ]
    },
    {
        id: 'newton',
        name: 'Isaac Newton',
        period: '1643–1727',
        origin: 'Inglaterra',
        quote: '“Se vi mais longe, foi por estar sobre ombros de gigantes.”',
        bio: 'Sir Isaac Newton é amplamente reconhecido como um dos cientistas mais influentes de todos os tempos. Sua obra-prima, "Principia Mathematica", estabeleceu as bases da mecânica clássica. Newton formulou a Lei da Gravitação Universal e as três Leis do Movimento, que dominaram a visão científica do universo físico pelos três séculos seguintes. Ele demonstrou que o movimento dos objetos na Terra e dos corpos celestes é governado pelas mesmas leis naturais. Além disso, inventou o telescópio refletor, desenvolveu uma teoria das cores baseada na observação de que um prisma decompõe a luz branca no espectro visível e co-inventou o cálculo infinitesimal.',
        image: 'img/newton.jpg',
        achievements: [
            'Lei da Gravitação Universal',
            '3 Leis do Movimento (Mecânica Clássica)',
            'Telescópio Refletor',
            'Cálculo Infinitesimal'
        ]
    },
    {
        id: 'herschel',
        name: 'William Herschel',
        period: '1738–1822',
        origin: 'Alemanha/Inglaterra',
        quote: '“Eu olhei além do que qualquer homem já olhou.”',
        bio: 'William Herschel foi um astrônomo e compositor britânico nascido na Alemanha. Ele ficou famoso pela descoberta do planeta Urano em 1781, a primeira descoberta de um planeta desde a antiguidade, o que dobrou o tamanho conhecido do Sistema Solar da noite para o dia. Herschel construiu telescópios gigantescos para sua época e mapeou incansavelmente a estrutura da Via Láctea, concluindo que ela tinha a forma de um disco. Ele também descobriu a radiação infravermelha, realizou observações profundas de nebulosas e aglomerados estelares, catalogando milhares de novos objetos celestes.',
        image: 'img/herschel.jpg',
        achievements: [
            'Descoberta de Urano',
            'Radiação Infravermelha',
            'Mapeamento da Via Láctea',
            'Catálogo de Nebulosas'
        ]
    },
    {
        id: 'hubble',
        name: 'Edwin Hubble',
        period: '1889–1953',
        origin: 'EUA',
        quote: '“Equipado com seus cinco sentidos, o homem explora o universo.”',
        bio: 'Edwin Hubble revolucionou a cosmologia ao provar, em 1924, que as nebulosas espirais eram, na verdade, galáxias inteiras separadas da Via Láctea, expandindo imensamente a escala conhecida do universo. Poucos anos depois, ele descobriu que o universo está se expandindo, observando que quanto mais distante uma galáxia está, mais rápido ela se afasta de nós (Lei de Hubble). Essa observação forneceu a primeira evidência observacional para a teoria do Big Bang. O Telescópio Espacial Hubble foi nomeado em sua homenagem, continuando seu legado de desvendar os mistérios do cosmos.',
        image: 'img/hubble.jpg',
        achievements: [
            'Lei de Hubble (Expansão do Universo)',
            'Classificação de Galáxias',
            'Descoberta de Galáxias além da Via Láctea',
            'Constante de Hubble'
        ]
    },
    {
        id: 'sagan',
        name: 'Carl Sagan',
        period: '1934–1996',
        origin: 'EUA',
        quote: '“Somos feitos de poeira das estrelas.”',
        bio: 'Carl Sagan foi um astrônomo, astrofísico e cosmólogo americano, mas talvez seja mais lembrado como o maior divulgador científico do século XX. Ele desempenhou um papel crucial no programa espacial americano, incluindo as missões Voyager e Viking. Sagan foi pioneiro na exobiologia (busca por vida fora da Terra) e co-fundador da Sociedade Planetária. Sua série de TV "Cosmos: A Personal Voyage" foi assistida por centenas de milhões de pessoas em todo o mundo, inspirando inúmeras carreiras científicas. Ele nos ensinou sobre o "Pálido Ponto Azul" e nossa responsabilidade de preservar nosso único lar.',
        image: 'img/sagan.jpg',
        achievements: [
            'Série Cosmos / Divulgação Científica',
            'Pálido Ponto Azul',
            'Mensagem da Voyager (Golden Record)',
            'Efeito Estufa em Vênus'
        ]
    }
];

let currentIndex = 0;

document.addEventListener('DOMContentLoaded', () => {
    const displaySection = document.querySelector('.scientist-display');
    
    // Ensure achievements list container exists
    let achievementsList = document.querySelector('.achievements-list');
    if (!achievementsList) {
        achievementsList = document.createElement('ul');
        achievementsList.className = 'achievements-list';
        // Insert after image wrapper in card visual
        const visual = document.querySelector('.card-visual');
        if (visual) {
             visual.appendChild(achievementsList);
        }
    }

    // Generate Pagination Dots
    const dotsContainer = document.querySelector('.pagination-dots');
    dotsContainer.innerHTML = '';
    scientists.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.textContent = '●';
        dot.style.cursor = 'pointer';
        dot.style.opacity = idx === 0 ? '1' : '0.3';
        dot.addEventListener('click', () => {
             currentIndex = idx;
             renderCard(currentIndex);
             updateSidebar(currentIndex);
        });
        dotsContainer.appendChild(dot);
    });

    const renderCard = (index) => {
        const scientist = scientists[index];
        const cardCtx = document.querySelector('.scientist-card');
        
        // Trigger fade out
        cardCtx.style.opacity = '0';
        cardCtx.style.transform = 'translateX(20px)';

        setTimeout(() => {
            // Update Data
            // Update Data
            document.querySelector('#galileu h1').textContent = scientist.name;
            document.querySelector('#galileu .quote').textContent = scientist.quote;
            document.querySelector('#galileu .meta-block:nth-child(1) .meta-value').textContent = scientist.period;
            document.querySelector('#galileu .meta-block:nth-child(2) .meta-value').textContent = scientist.origin;
            document.querySelector('#galileu .bio').textContent = scientist.bio;
            
            const imgElement = document.querySelector('.scientist-img');
            imgElement.src = scientist.image;
            imgElement.alt = scientist.name;
            
            // Update Achievements
            const list = document.querySelector('.achievements-list');
            list.innerHTML = ''; // Clear current
            scientist.achievements.forEach(achievement => {
                const li = document.createElement('li');
                li.textContent = achievement;
                list.appendChild(li);
            });

            document.querySelector('#galileu .label').textContent = 'Cientista e Revolucionário';
            
            // Update Dots
            const dots = document.querySelectorAll('.pagination-dots span');
            dots.forEach((d, idx) => {
                d.style.opacity = idx === index ? '1' : '0.3';
                d.style.color = idx === index ? 'var(--green-dark)' : 'var(--green-light)';
            });

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
