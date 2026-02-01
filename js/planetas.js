const planets = {
    mercurio: {
        name: "Mercúrio",
        type: "Planeta Telúrico",
        dist: "57.9 mi km",
        period: "88 dias",
        diam: "4.879 km",
        moons: "0",
        temp: "167°C",
        fact: "O menor planeta do sistema solar e também o mais próximo do Sol. Apesar disso, não é o mais quente (Vênus ganha).",
        color: "radial-gradient(circle at 30% 30%, #a5a5a5, #5e5e5e)"
    },
    venus: {
        name: "Vênus",
        type: "Planeta Telúrico",
        dist: "108.2 mi km",
        period: "225 dias",
        diam: "12.104 km",
        moons: "0",
        temp: "464°C",
        fact: "O planeta mais quente do sistema solar devido ao efeito estufa descontrolado. Um dia em Vênus é maior que seu ano.",
        color: "radial-gradient(circle at 30% 30%, #e3bb76, #c76e00)"
    },
    terra: {
        name: "Terra",
        type: "Planeta Telúrico",
        dist: "149.6 mi km",
        period: "365.25 dias",
        diam: "12.742 km",
        moons: "1",
        temp: "15°C",
        fact: "O único planeta conhecido a abrigar vida. Cerca de 70% de sua superfície é coberta por água líquida.",
        color: "radial-gradient(circle at 30% 30%, #4f97cf, #1a4f8a)"
    },
    marte: {
        name: "Marte",
        type: "Planeta Telúrico",
        dist: "227.9 mi km",
        period: "687 dias",
        diam: "6.779 km",
        moons: "2",
        temp: "-65°C",
        fact: "Conhecido como o Planeta Vermelho devido ao óxido de ferro. Abriga o maior vulcão do sistema solar, o Monte Olimpo.",
        color: "radial-gradient(circle at 30% 30%, #e27b58, #9c3a1b)"
    },
    jupiter: {
        name: "Júpiter",
        type: "Gigante Gasoso",
        dist: "778.5 mi km",
        period: "12 anos",
        diam: "139.820 km",
        moons: "95",
        temp: "-110°C",
        fact: "O maior planeta do sistema solar. Sua Grande Mancha Vermelha é uma tempestade maior que a Terra que dura séculos.",
        color: "linear-gradient(135deg, #c9b48c, #8c7853, #e3dccb)"
    },
    saturno: {
        name: "Saturno",
        type: "Gigante Gasoso",
        dist: "1.4 bi km",
        period: "29 anos",
        diam: "116.460 km",
        moons: "146",
        temp: "-140°C",
        fact: "Famoso por seus anéis complexos e brilhantes compostos principalmente de gelo e rocha. É o planeta menos denso.",
        color: "radial-gradient(circle at 30% 30%, #ead6b8, #cba87c)"
    },
    urano: {
        name: "Urano",
        type: "Gigante de Gelo",
        dist: "2.8 bi km",
        period: "84 anos",
        diam: "50.724 km",
        moons: "27",
        temp: "-195°C",
        fact: "Gira de lado, com seu eixo de rotação inclinado quase 90 graus. Tem uma cor azul-esverdeada devido ao metano.",
        color: "radial-gradient(circle at 30% 30%, #d1e7e7, #5b9bd5)"
    },
    netuno: {
        name: "Netuno",
        type: "Gigante de Gelo",
        dist: "4.5 bi km",
        period: "165 anos",
        diam: "49.244 km",
        moons: "14",
        temp: "-200°C",
        fact: "O planeta mais distante do Sol. Tem os ventos mais rápidos do sistema solar, chegando a 2.100 km/h.",
        color: "radial-gradient(circle at 30% 30%, #5b5ddf, #2e2a85)"
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
