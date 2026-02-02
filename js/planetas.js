const planets = {
    mercurio: {
        name: "Mercúrio",
        type: "Planeta Telúrico",
        dist: "57.9 mi km",
        period: "88 dias",
        diam: "4.879 km",
        moons: "0",
        temp: "167°C",
        fact: "Mercúrio é o menor e mais interno planeta do Sistema Solar. Sua órbita tem a maior excentricidade e a menor inclinação axial de todos os planetas, o que significa que ele praticamente não tem estações. A superfície é fortemente craterada, semelhante à da Lua, indicando que esteve geologicamente inativo por bilhões de anos. Apesar de estar mais próximo do Sol, não é o mais quente (Vênus detém esse título), pois Mercúrio quase não tem atmosfera para reter o calor. As temperaturas variam drasticamente: de 427°C durante o dia a -173°C à noite.",
        color: "radial-gradient(circle at 30% 30%, #bfbfbf 0%, #737373 50%, #2f2f2f 100%)"
    },
    venus: {
        name: "Vênus",
        type: "Planeta Telúrico",
        dist: "108.2 mi km",
        period: "225 dias",
        diam: "12.104 km",
        moons: "0",
        temp: "464°C",
        fact: "Vênus é frequentemente chamado de 'irmão gêmeo' da Terra devido ao seu tamanho e composição semelhantes, mas as condições são infernais. Possui a atmosfera mais densa dos quatro planetas rochosos, composta principalmente de dióxido de carbono, o que gera um efeito estufa descontrolado, elevando as temperaturas a níveis capazes de derreter chumbo. Vênus gira em sentido retrógrado (o Sol nasce no oeste) e sua rotação é tão lenta que um dia lá dura mais que um ano venusiano.",
        color: "radial-gradient(circle at 30% 30%, #ffde99 0%, #d69e2e 40%, #8c5a00 100%)"
    },
    terra: {
        name: "Terra",
        type: "Planeta Telúrico",
        dist: "149.6 mi km",
        period: "365.25 dias",
        diam: "12.742 km",
        moons: "1",
        temp: "15°C",
        fact: "A Terra é o único objeto astronômico conhecido por abrigar vida. Cerca de 71% de sua superfície é coberta por água salgada. A interação da Terra com outros objetos no espaço, especialmente o Sol e a Lua, governa o clima, as marés e as estações. O campo magnético da Terra, gerado por correntes elétricas no seu núcleo de ferro fundido, protege a superfície da radiação cósmica prejudicial e do vento solar, permitindo que a biosfera prospere.",
        color: "radial-gradient(circle at 30% 30%, #4da6ff 0%, #1a5cad 50%, #00264d 100%)"
    },
    marte: {
        name: "Marte",
        type: "Planeta Telúrico",
        dist: "227.9 mi km",
        period: "687 dias",
        diam: "6.779 km",
        moons: "2",
        temp: "-65°C",
        fact: "Marte, o 'Planeta Vermelho', deve sua cor ao óxido de ferro (ferrugem) abundante em sua superfície. É o lar do Monte Olimpo, o maior vulcão e a montanha mais alta conhecida no Sistema Solar, e do Valles Marineris, um dos maiores desfiladeiros. Marte tem calotas polares de água e dióxido de carbono gelados e evidências geológicas sugerem que o planeta já teve água líquida abundante no passado. É o principal alvo para futuras missões de colonização humana.",
        color: "radial-gradient(circle at 30% 30%, #ff6b6b 0%, #cc2929 50%, #660000 100%)"
    },
    jupiter: {
        name: "Júpiter",
        type: "Gigante Gasoso",
        dist: "778.5 mi km",
        period: "12 anos",
        diam: "139.820 km",
        moons: "95",
        temp: "-110°C",
        fact: "Júpiter é o maior planeta do Sistema Solar, com massa 2,5 vezes maior que a de todos os outros planetas juntos. É um gigante gasoso composto principalmente de hidrogênio e hélio. Sua característica mais famosa é a Grande Mancha Vermelha, uma tempestade anticiclônica maior que a Terra que dura pelo menos 300 anos. Júpiter possui um sistema de anéis tênue e uma vasta família de luas, incluindo Ganimedes, a maior lua do Sistema Solar.",
        color: "linear-gradient(135deg, #d2b48c 0%, #a0522d 25%, #deb887 50%, #8b4513 75%, #cd853f 100%)"
    },
    saturno: {
        name: "Saturno",
        type: "Gigante Gasoso",
        dist: "1.4 bi km",
        period: "29 anos",
        diam: "116.460 km",
        moons: "146",
        temp: "-140°C",
        fact: "Saturno é distinto por seu complexo sistema de anéis, o mais extenso e brilhante do Sistema Solar, composto por partículas de gelo e rocha que variam de micrômetros a metros. É o único planeta do Sistema Solar que é menos denso que a água. Sua atmosfera superior exibe bandas de nuvens e tempestades, e seu polo norte apresenta uma misteriosa corrente de jato hexagonal. Titã, sua maior lua, é a única no Sistema Solar com uma atmosfera densa.",
        color: "linear-gradient(135deg, #f4e4bc 0%, #e6cc8b 33%, #c2a059 66%, #8c7335 100%)"
    },
    urano: {
        name: "Urano",
        type: "Gigante de Gelo",
        dist: "2.8 bi km",
        period: "84 anos",
        diam: "50.724 km",
        moons: "27",
        temp: "-195°C",
        fact: "Urano é único porque gira 'de lado', com seu eixo de rotação inclinado mais de 90 graus em relação à sua órbita. Isso causa estações extremas que duram mais de 20 anos. É classificado como um gigante de gelo porque seu interior é composto principalmente por gelos de água, amônia e metano. O metano em sua atmosfera superior absorve a luz vermelha, dando a Urano sua cor azul-ciano pálida.",
        color: "radial-gradient(circle at 30% 30%, #a3d9d9 0%, #40a0a0 50%, #1a5c5c 100%)"
    },
    netuno: {
        name: "Netuno",
        type: "Gigante de Gelo",
        dist: "4.5 bi km",
        period: "165 anos",
        diam: "49.244 km",
        moons: "14",
        temp: "-200°C",
        fact: "Netuno é o planeta mais fraco e distante do Sol. Como Urano, é um gigante de gelo, mas é ligeiramente mais massivo e denso. Sua atmosfera é notável por seus padrões climáticos ativos e visíveis, impulsionados pelos ventos mais fortes de qualquer planeta no Sistema Solar, que podem chegar a 2.100 km/h. Sua cor azul vívida é, em parte, mistério, pois o metano sozinho não explica tal intensidade. Sua lua Tritão orbitra em sentido retrógrado.",
        color: "radial-gradient(circle at 30% 30%, #5c5cff 0%, #3333cc 50%, #000080 100%)"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.planet-list li');
    
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Active State
            navItems.forEach(nav => nav.classList.remove('active'));
            item.classList.add('active');
            
            // Get Data
            const key = item.getAttribute('data-planet');
            const data = planets[key];
            
            // Render
            // We could animate here out/in
            const display = document.getElementById('planet-display');
            display.style.opacity = '0.5';
            
            setTimeout(() => {
                document.querySelector('.planet-name').textContent = data.name;
                document.querySelector('.transport-label').textContent = data.type;
                document.querySelector('.planet-circle').style.background = data.color;
                
                // If Saturn, we might want to add rings visually, but for now simple gradient circle
                
                // Stats
                const stats = document.querySelectorAll('.stat-value');
                stats[0].textContent = data.dist;
                stats[1].textContent = data.period;
                stats[2].textContent = data.diam;
                stats[3].textContent = data.moons;
                stats[4].textContent = data.temp;
                
                document.querySelector('.planet-fact').textContent = data.fact;
                
                display.style.opacity = '1';
            }, 200);
        });
    });
});
