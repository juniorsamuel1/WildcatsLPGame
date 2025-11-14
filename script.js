document.addEventListener('DOMContentLoaded', () => {

    // --- 1. O CONTEÚDO (Storytelling) ---
    
    const startScreenAssets = {
        background: 'fundo-geral.jpg',
        floatingElements: '<div class="floating-item item-1"><img src="cloud.png" alt="Nuvem"></div><div class="floating-item item-2"><img src="cloud.png" alt="Nuvem"></div>',
        footerElements: '<div class="footer-item footer-item-1"><img src="mario.gif" alt="Mario"></div><div class="footer-item footer-item-2"><img src="pipe.png" alt="Cano"></div>',
        groundImage: 'cubo-1.png' 
    };
    
    const finalScreenAssets = {
        background: 'grupo-quinto-andar.png',
        floatingElements: '<div class="floating-item item-1"><img src="item-final-1.png" alt=""></div>',
        footerElements: '<div class="footer-item footer-item-1"><img src="item-final-2.png" alt=""></div>',
        groundImage: 'ground-final.svg' 
    };

    // ATUALIZADO: 'challengeText' agora contém os textos completos originais
    const scenarios = [
        {
            id: 0,
            title: "Nível 1: O atalho arriscado",
            story: "Fim de mês, o volume de diligências está altíssimo! Um colega sugere 'flexibilizar a régua de risco' para um entendimento não habitual e pessoal, mas só hoje, para bater a meta e 'fazer acontecer'. O analista diz não ver riscos naquele caso. A pressão é grande…",
            task: "O que fazer diante da sugestão de 'flexibilizar a régua'?",
            feedback: "É um equilíbrio clássico! 'Flexibilizar' nos termos propostos fere diretamente o <strong>Do what is right (lp8)</strong> e o <strong>Make it great</strong> (lp6), pois reduzimos a qualidade. Embora a intenção de <strong>Make it happen</strong> (lp5) seja boa, ela nunca deve sobrepor a ética e a qualidade da entrega. Propor uma força-tarefa ou negociar o prazo seria um caminho mais alinhado.",
            challengeText: "O 'jeitinho': Este inimigo tenta nos convencer que 'Make it happen' (lp5) significa 'fazer a qualquer custo', ignorando o 'Do what is right' (lp8).",
            image: 'cenario-1.png', 
            background: 'background-0.png', 
            analystImage: 'avatar-renata.png',
            analystName: 'Renata',
            floatingElements: '<div class="floating-item item-1"><img src="block.gif" alt="Block question"></div><div class="floating-item item-2"><img src="block.gif" alt="Block question"></div>',
            footerElements: '<div class="footer-item footer-item-1"><img src="yoshi.gif" alt="Yoshi"></div><div class="footer-item footer-item-2"><img src="pipe.png" alt="Cano"></div>',
            groundImage: 'cubo-2.png' 
        },
        {
            id: 1,
            title: "Nível 2: A trava da diligência",
            story: "Uma diligência de imóvel está travada. Faltam documentos que o time não consegue encontrar e o vendedor diz serem 'difíceis de conseguir' e ele sugere 'deixar assim' e assinar com uma ressalva. O cliente interno (Comercial) está com pressa.",
            task: "Como o time deve atuar nesse cenário de 'deixar assim'?",
            feedback: "Aqui, o <strong>Aim high</strong> (lp2) nos desafia a não aceitar o 'status quo'. Devemos usar o <strong>Dive deep</strong> (lp4) para entender por que é difícil e buscar alternativas (outras fontes). Isso tudo é para <strong>Delight Customers</strong> (lp1), entregando a segurança e confiança que eles esperam de nós, e não somente uma 'ressalva' que transfere o risco.",
            challengeText: "O 'status quo': Este inimigo aceita o 'sempre foi assim' ou o 'é muito difícil'. Ele nos impede de inovar (Aim high - lp2) e de buscar a fundo a melhor solução (Dive deep - lp4).",
            image: 'cenario-2.png',
            background: 'background-2.png',
            analystImage: 'avatar-elen.png',
            analystName: 'Elen',
            floatingElements: '<div class="floating-item item-1"><img src="boo.gif" alt="Boo"></div><div class="floating-item item-2"><img src="boo.gif" alt="Boo"></div>',
            footerElements: '<div class="footer-item footer-item-1"><img src="luigi.gif" alt="Luigi"></div><div class="footer-item footer-item-2"><img src="pipe.png" alt="Cano"></div>',
            groundImage: 'cubo-3.png' 
        },
        {
            id: 2,
            title: "Nível 3: A falha",
            story: "Um analista comete um erro numa diligência que gera reclamação pública, retrabalho interno e DSAT. Ele está visivelmente desmotivado e com receio. O time todo percebeu.",
            task: "O analista errou e está desmotivado. Qual a prioridade?",
            feedback: "Esta é uma oportunidade de ouro para o <strong>Winning team</strong> (lp3). Em vez de focar na punição, focamos em criar um espaço de aprendizado. Isso se faz com <strong>Enjoy the ride</strong> (lp7), liderando com empatia e cuidando do time. O <strong>'make it happen'</strong> (lp5) aqui é 'assumir o erro com transparência, corrigir e aprender rápido', fortalecendo a confiança.",
            challengeText: "O 'chefe rígido': Este inimigo foca na punição e não no aprendizado. Ele cria um ambiente tóxico e impede o time de se desenvolver (Winning team - lp3) e de curtir a jornada (Enjoy the ride - lp7).",
            image: 'cenario-3.png',
            background: 'background-3.png',
            analystImage: 'avatar-uriani.png',
            analystName: 'Uriani',
            floatingElements: '<div class="floating-item item-1"><img src="Koopa-Troop.gif" alt="Koopa"></div><div class="floating-item item-2"><img src="Koopa-Troop.gif" alt="Koopa"></div>',
            footerElements: '<div class="footer-item footer-item-1"><img src="princesa.gif" alt="Princesa"></div><div class="footer-item footer-item-2"><img src="pipe.png" alt="Cano"></div>',
            groundImage: 'cubo-4.png' 
        },
        {
            id: 3,
            title: "Nível 4: O detalhe ignorado",
            story: "Durante uma análise de rotina, você nota um pequeno erro formal em uma certidão emitida. Corrigir isso vai exigir contato com o time de Legal Docs e até aditivo, o que atrasará a entrega no SLA. Ninguém notou, e 'passaria batido'.",
            task: "Você gasta tempo corrigindo o pequeno erro ou entrega no prazo?",
            feedback: "Essa é a essência do <strong>Make it great</strong> (lp6). Líderes se recusam a baixar a qualidade para “tirar a tarefa da frente”. Isso só é possível quando aplicamos o <strong>Dive deep</strong> (lp4), operando nos detalhes que importam em vez de somente fazer uma análise superficial. E embora pareça pequeno e “passaria batido”, <strong>Do what is right</strong> (lp8) exige precisão, pois o “jeitinho” compromete a confiança. A melhor ação é corrigir, comunicando proativamente o atraso para alinhar as expectativas.",
            challengeText: "O 'tirador de tarefa': Este inimigo só quer 'entregar'. Ele não se orgulha da qualidade (Make it great - lp6) e acha que pequenos erros não importam, o que pode comprometer a ética (Do what is right - lp8) a longo prazo.",
            image: 'cenario-4.png', 
            background: 'background-4.png', 
            analystImage: 'avatar-maria.png',
            analystName: 'Maria',
            floatingElements: '<div class="floating-item item-1"><img src="voo.gif" alt="Voo"></div><div class="floating-item item-2"><img src="voo.gif" alt="Voo"></div>',
            footerElements: '<div class="footer-item footer-item-1"><img src="bowser.gif" alt="Bowser"></div><div class="footer-item footer-item-2"><img src="pipe.png" alt="Cano"></div>',
            groundImage: 'cubo-5.png' 
        },
        {
            id: 4,
            title: "Nível 5: O cliente atritado",
            story: "Um cliente liga para Legal Front, muito irritado. Ele não entende por que a diligência está 'acusando risco alto' e acusa o time de 'burocracia excessiva' e de tentar impedir η transação. A comunicação está difícil e ele está sendo rude.",
            task: "Como o time de atendimento deve lidar com esse cliente?",
            feedback: "Situação difícil! É a hora de <strong>Delight Customers</strong> (lp1) não com o que ele quer (alteração na régua de risco), mas com o que ele precisa (clareza e segurança). Isso exige <strong>Dive deep</strong> (lp4) para entender a real dor dele (falta de compreensão sobre os nossos alinhamentos/racionais?) e <strong>Enjoy the ride</strong> (lp7), que significa liderar com empatia e manter a energia positiva, mesmo em momentos ruins, para desarmar o conflito.",
            challengeText: "O 'reativo': Este inimigo entra na defensiva ou responde de forma robótica, replicando modelos de redação. Ele não pratica a empatia (Enjoy the ride - lp7) e falha em traduzir a complexidade para o cliente (Delight Customers - lp1).",
            image: 'cenario-5.png', 
            background: 'background-5.png', 
            analystImage: 'avatar-caroline.png',
            analystName: 'Caroline',
            floatingElements: '<div class="floating-item item-1"><img src="coin.gif" alt="Coin"></div><div class="floating-item item-2"><img src="coin.gif" alt="Coin"></div>',
            footerElements: '<div class="footer-item footer-item-1"><img src="avatar-bloopers.gif" alt="Bloopers"></div><div class="footer-item footer-item-2"><img src="pipe.png" alt="Cano"></div>',
            groundImage: 'cubo-6.png' 
        }
    ];

    const principles = [
        { id: 'lp1', name: 'Delight Customers', definition: 'Líderes entendem profundamente as necessidades dos clientes e trabalham a partir delas. Constroem produtos e serviços amados pelos clientes e não comprometem os interesses dos clientes por resultados de curto prazo.' },
        { id: 'lp2', name: 'Aim high', definition: 'Líderes estabelecem metas ambiciosas e focam em como alcançá-las. Não se limitam pelos recursos atuais ou pelo status quo. Abraçam a mudança e a inovação e não têm medo de navegar por territórios desconhecidos ou tentar novamente onde outros falharam. Ao buscarem a excelência, não se prendem em restrições ou contratempos.' },
        { id: 'lp3', name: 'Winning team', definition: 'Líderes constroem times de pessoas excepcionais, que trabalham juntas de forma eficiente. Contratam e desenvolvem as melhores pessoas, e criam um ambiente onde todos podem fazer seu melhor trabalho e se desenvolver. Abraçam a diversidade e a inclusão, garantindo a colaboração eficaz tanto dentro das equipes quanto entre elas. Constroem times vencedores e vencem como time.' },
        { id: 'lp4', name: 'Dive deep', definition: 'Líderes buscam uma compreensão profunda das coisas. Combinam bom julgamento e intuição com rigor e honestidade intelectual. Buscam dados concretos e perspectivas diversas para validar suas ideias e não têm medo de mudar de opinião diante de novas informações. Tomam decisões no tempo certo. Operam em todos os níveis, entendendo a visão macro mas também os detalhes que importam.' },
        { id: 'lp5', name: 'Make it happen', definition: 'Líderes trazem clareza sobre o que precisa ser feito e encontram uma maneira de fazer acontecer. Têm iniciativa, simplificam o complexo e geram energia promovendo ação. Se discordam de algo, expressam sua opinião. Uma vez tomada a decisão, se comprometem totalmente e fazem o que se comprometeram a fazer. Se falham ou cometem um erro, assumem a responsabilidade.' },
        { id: 'lp6', name: 'Make it great', definition: 'Líderes se orgulham da qualidade do trabalho. Se sentem motivados a aumentar constantemente o nível de excelência. Se recusam a baixar a qualidade da entrega para “tirar a tarefa da frente”. Quando constroem algo, funciona com excelência. Quando consertam algo, é de uma vez por todas.' },
        { id: 'lp7', name: 'Enjoy the ride', definition: 'Líderes criam um ambiente onde todos possam curtir. Lideram com empatia e cuidado, mantendo uma energia positiva e otimista tanto nos momentos bons quanto nos ruins. Celebram as conquistas e os aprendizados ao longo do caminho. Têm zero tolerância com desrespeito, politicagem ou comportamentos tóxicos.' },
        { id: 'lp8', name: 'Do what is right', definition: 'Líderes agem de forma ética, mesmo quando ninguém está olhando. Acreditam que os fins não justificam os meios. Embora mirem alto, querem vencer da maneira certa.' }
    ];

    // --- 2. VARIÁVEIS DO JOGO ---
    let currentScenarioIndex = 0;
    let draggedItem = null; 

    // Referências aos elementos do HTML
    const screens = document.querySelectorAll('.screen');
    const toolbox = document.getElementById('principles-toolbox');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    // Botões
    const startGameBtn = document.getElementById('start-game-btn');
    const scenarioContinueBtn = document.getElementById('scenario-continue-btn');
    const checkBtn = document.getElementById('check-answer-btn');
    const nextBtn = document.getElementById('next-scenario-btn');
    const restartBtn = document.getElementById('restart-game-btn');
    const closeModalBtn = document.getElementById('close-modal');
    
    const backToScenarioBtn = document.getElementById('back-to-scenario-btn');
    const clearDropsBtn = document.getElementById('clear-drops-btn');
    
    const principleDefinitionModal = document.getElementById('principle-definition-modal');
    const closeDefinitionModal = document.getElementById('close-definition-modal');
    const definitionModalTitle = document.getElementById('definition-modal-title');
    const definitionModalText = document.getElementById('definition-modal-text');

    // Elementos das Telas e Imagens
    const scenarioTitleEl = document.getElementById('scenario-title');
    const scenarioFullTextEl = document.getElementById('scenario-full-text');
    const gameScenarioTaskEl = document.getElementById('game-scenario-task');
    const scenarioImg = document.getElementById('scenario-img'); 

    // Elementos do Modal de Feedback
    const modal = document.getElementById('feedback-modal');
    const modalFeedbackHeader = document.getElementById('modal-feedback-header');
    const modalFeedbackText = document.getElementById('modal-feedback-text');
    const modalChallengeText = document.getElementById('modal-challenge-text');
    const analystImgDisplay = document.getElementById('analyst-img-display');
    const analystNameDisplay = document.getElementById('analyst-name-display'); 

    // Elementos de Som
    const startSound = document.getElementById('start-sound');
    const feedbackSound = document.getElementById('feedback-sound');
    const finalSound = document.getElementById('final-sound'); 
    
    // Containers de elementos de cenário
    const floatingContainer = document.getElementById('floating-container');
    const footerItemsContainer = document.getElementById('footer-items-container');
    const footerGround = document.getElementById('footer-ground');

    // --- 3. FUNÇÕES PRINCIPAIS DO JOGO ---

    function playSound(soundElement) {
        soundElement.currentTime = 0;
        soundElement.play().catch(e => console.log("Navegador bloqueou o áudio."));
    }

    function setScreenElements(floatingHtml, footerHtml) {
        floatingContainer.innerHTML = floatingHtml || '';
        footerItemsContainer.innerHTML = footerHtml || '';
    }

    function showScreen(screenId) {
        console.log("Tentando mostrar tela:", screenId); 
        
        screens.forEach(screen => {
            screen.classList.remove('active');
        });
        
        const screenToShow = document.getElementById(screenId);
        if (screenToShow) {
            screenToShow.classList.add('active'); 
            console.log("Mostrando:", screenId);
        } else {
            console.error("Erro: Tela com ID", screenId, "não encontrada.");
        }
        
        if (screenId === 'start-screen') {
            document.body.style.backgroundImage = `url('${startScreenAssets.background}')`;
            footerGround.style.backgroundImage = `url('${startScreenAssets.groundImage}')`;
            setScreenElements(startScreenAssets.floatingElements, startScreenAssets.footerElements);
        } else if (screenId === 'final-screen') {
            document.body.style.backgroundImage = `url('${finalScreenAssets.background}')`;
            footerGround.style.backgroundImage = `url('${finalScreenAssets.groundImage}')`;
            setScreenElements(finalScreenAssets.floatingElements, finalScreenAssets.footerElements);
        }
    }

    function showDefinitionModal(title, text) {
        definitionModalTitle.textContent = title;
        definitionModalText.textContent = text;
        principleDefinitionModal.style.display = 'flex';
    }

    function initializeToolbox() {
        toolbox.innerHTML = ''; 
        principles.forEach(p => {
            const card = document.createElement('div');
            card.className = 'principle-card';
            card.setAttribute('draggable', 'true');
            card.id = p.id;
            card.dataset.definition = p.definition; 
            
            const cardText = document.createElement('span');
            cardText.textContent = p.name;
            cardText.style.pointerEvents = 'none';
            card.appendChild(cardText);
            
            const infoIcon = document.createElement('i');
            infoIcon.className = 'principle-info-icon';
            infoIcon.textContent = 'i';
            infoIcon.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation(); 
                showDefinitionModal(p.name, p.definition);
            });
            infoIcon.addEventListener('touchstart', (e) => {
                e.stopPropagation();
            });
            card.appendChild(infoIcon);

            toolbox.appendChild(card);

            // --- LÓGICA DESKTOP (Mouse) ---
            card.addEventListener('dragstart', (e) => {
                if (e.target.classList.contains('principle-info-icon')) {
                    e.preventDefault();
                    return;
                }
                draggedItem = e.target;
                setTimeout(() => card.classList.add('dragging'), 0);
            });

            card.addEventListener('dragend', (e) => {
                card.classList.remove('dragging');
                draggedItem = null;
            });

            // --- LÓGICA MOBILE (Touch) ---
            let touchStartX = 0, touchStartY = 0, initialLeft = 0, initialTop = 0;

            card.addEventListener('touchstart', (e) => {
                if (e.target.classList.contains('principle-info-icon')) return;
                draggedItem = card;
                const touch = e.touches[0];
                touchStartX = touch.clientX;
                touchStartY = touch.clientY;
                const rect = card.getBoundingClientRect();
                initialLeft = rect.left;
                initialTop = rect.top;
                card.style.position = 'fixed';
                card.style.left = initialLeft + 'px';
                card.style.top = initialTop + 'px';
                card.style.zIndex = '1000';
                card.style.width = rect.width + 'px';
                card.classList.add('dragging');
            }, { passive: false });

            card.addEventListener('touchmove', (e) => {
                if (!draggedItem) return;
                e.preventDefault(); 
                const touch = e.touches[0];
                const deltaX = touch.clientX - touchStartX;
                const deltaY = touch.clientY - touchStartY;
                card.style.left = (initialLeft + deltaX) + 'px';
                card.style.top = (initialTop + deltaY) + 'px';
            }, { passive: false });

            card.addEventListener('touchend', (e) => {
                if (!draggedItem) return;
                card.classList.remove('dragging');
                card.style.zIndex = '';
                card.style.display = 'none';
                const touch = e.changedTouches[0];
                const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
                card.style.display = 'flex';
                const dropZone = elementBelow ? elementBelow.closest('.drop-zone') : null;
                card.style.position = '';
                card.style.left = '';
                card.style.top = '';
                card.style.width = '';

                if (dropZone) {
                    if (dropZone.children.length > 0 && !dropZone.children[0].classList.contains('drop-zone-text')) {
                        const existingCard = dropZone.children[0];
                        existingCard.classList.remove('dropped');
                        toolbox.appendChild(existingCard);
                    }
                    dropZone.innerHTML = ''; 
                    dropZone.appendChild(card);
                    card.classList.add('dropped');
                } else {
                    if (!card.parentElement || !card.parentElement.classList.contains('drop-zone')) {
                        card.classList.remove('dropped');
                        toolbox.appendChild(card);
                    }
                }
                draggedItem = null;
                refreshDropZonesText(); 
            });
        });
    }

    function refreshDropZonesText() {
        const dropZones = document.querySelectorAll('.drop-zone');
        const texts = ['Princípio Primário', 'Princípio Secundário', 'Princípio Terciário'];
        dropZones.forEach((zone, index) => {
            if (zone.children.length === 0) {
                const text = texts[index] || 'Slot';
                zone.innerHTML = `<span class="drop-zone-text">${text}</span>`;
            }
        });
    }

    function loadScenario(index) {
        resetDropZones();
        initializeToolbox();
        checkBtn.style.display = 'block';
        nextBtn.style.display = 'none';
        
        const scenario = scenarios[index];
        scenarioTitleEl.textContent = scenario.title;
        scenarioFullTextEl.textContent = scenario.story;
        gameScenarioTaskEl.textContent = scenario.task;
        scenarioImg.src = scenario.image;
        document.body.style.backgroundImage = `url('${scenario.background}')`;
        footerGround.style.backgroundImage = `url('${scenario.groundImage}')`;
        
        setScreenElements(scenario.floatingElements, scenario.footerElements);
        showScreen('scenario-screen');
    }

    function resetDropZones() {
        const texts = ['Princípio Primário', 'Princípio Secundário', 'Princípio Terciário'];
        dropZones.forEach((zone, index) => {
            const text = texts[index] || 'Slot';
            zone.innerHTML = `<span class="drop-zone-text">${text}</span>`;
        });
    }

    function showFeedbackModal(scenario, droppedIds) {
        const droppedNames = droppedIds.map(id => {
            const principle = principles.find(p => p.id === id);
            return principle ? principle.name : '';
        });

        let headerHtml = "Vocês escolheram: ";
        if (droppedNames.length > 0) {
            headerHtml += droppedNames.map(name => `<span>${name}</span>`).join(' ');
        } else {
            headerHtml = "Vocês não escolheram nenhum princípio. Vamos discutir!";
        }
        
        modalFeedbackHeader.innerHTML = headerHtml;
        modalFeedbackText.innerHTML = scenario.feedback;
        
        // Define o texto do desafio (agora com o texto completo)
        modalChallengeText.innerHTML = scenario.challengeText;
        
        // Define a imagem e o nome do analista
        if (scenario.analystImage) {
            analystImgDisplay.src = scenario.analystImage;
            analystImgDisplay.style.display = 'block';
        } else {
            analystImgDisplay.style.display = 'none';
        }
        
        if (scenario.analystName) {
            analystNameDisplay.textContent = scenario.analystName;
        } else {
            analystNameDisplay.textContent = ''; // Limpa se não houver nome
        }
        
        modal.style.display = 'flex';
        playSound(feedbackSound);
    }

    // --- 4. LÓGICA DE DRAG-AND-DROP (Desktop) ---
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', (e) => {
            e.preventDefault(); 
            zone.classList.add('over');
        });
        zone.addEventListener('dragleave', () => {
            zone.classList.remove('over');
        });
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('over');
            
            if (draggedItem) {
                if (zone.children.length > 0 && !zone.children[0].classList.contains('drop-zone-text')) {
                    const existingCard = zone.children[0];
                    existingCard.classList.remove('dropped');
                    existingCard.style.width = '';
                    existingCard.style.height = '';
                    toolbox.appendChild(existingCard);
                }
                
                zone.innerHTML = ''; 
                zone.appendChild(draggedItem);
                draggedItem.classList.add('dropped');
                draggedItem = null;
            }
        });
    });

    toolbox.addEventListener('dragover', (e) => {
        e.preventDefault();
    });
    
    toolbox.addEventListener('drop', (e) => {
        e.preventDefault();
        if (draggedItem && draggedItem.classList.contains('dropped')) {
            const parentZone = draggedItem.parentElement;
            
            draggedItem.classList.remove('dropped');
            draggedItem.style.width = '';
            draggedItem.style.height = '';
            
            toolbox.appendChild(draggedItem); 
            
            if (parentZone && parentZone.classList.contains('drop-zone')) {
                // Restaura o texto padrão da drop zone
                refreshDropZonesText();
            }
            draggedItem = null;
        }
    });


    // --- 5. LÓGICA DE VERIFICAÇÃO E NAVEGAÇÃO ---

    startGameBtn.addEventListener('click', () => {
        currentScenarioIndex = 0;
        loadScenario(currentScenarioIndex);
        playSound(startSound);
    });

    scenarioContinueBtn.addEventListener('click', () => {
        const scenario = scenarios[currentScenarioIndex];
        setScreenElements(scenario.floatingElements, scenario.footerElements);
        showScreen('game-screen');
    });

    checkBtn.addEventListener('click', () => {
        const scenario = scenarios[currentScenarioIndex];
        let droppedIds = [];

        dropZones.forEach(zone => {
            if (zone.children.length > 0 && zone.children[0].classList.contains('principle-card')) {
                droppedIds.push(zone.children[0].id);
            }
        });

        showFeedbackModal(scenario, droppedIds);
        
        checkBtn.style.display = 'none';
        nextBtn.style.display = 'block';

        document.querySelectorAll('.principle-card').forEach(c => c.setAttribute('draggable', 'false'));
    });

    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    backToScenarioBtn.addEventListener('click', () => {
        const scenario = scenarios[currentScenarioIndex];
        setScreenElements(scenario.floatingElements, scenario.footerElements);
        showScreen('scenario-screen');
    });
    
    clearDropsBtn.addEventListener('click', () => {
        dropZones.forEach(zone => {
            if (zone.children.length > 0 && zone.children[0].classList.contains('principle-card')) {
                const cardToReturn = zone.children[0];
                cardToReturn.classList.remove('dropped');
                cardToReturn.style.width = '';
                cardToReturn.style.height = '';
                toolbox.appendChild(cardToReturn);
            }
        });
        resetDropZones(); 
    });
    
    closeDefinitionModal.addEventListener('click', () => {
        principleDefinitionModal.style.display = 'none';
    });
    

    nextBtn.addEventListener('click', () => {
        modal.style.display = 'none'; 
        currentScenarioIndex++;
        
        if (currentScenarioIndex >= scenarios.length) {
            showScreen('final-screen');
            playSound(finalSound); 
        } else {
            loadScenario(currentScenarioIndex);
        }
    });

    restartBtn.addEventListener('click', () => {
        showScreen('start-screen');
    });

    // --- INICIA O JOGO ---
    showScreen('start-screen');
});