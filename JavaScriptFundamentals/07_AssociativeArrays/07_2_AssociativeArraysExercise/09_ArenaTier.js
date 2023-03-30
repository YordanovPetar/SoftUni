function arenaTier(data) {
    let gladiatorsPool = new Map();
    let index = 0;
    let command = data[index];
    index++;

    while (command !== 'Ave Cesar') {
        let action = command.split(' -> ');
        if (action.length === 3) {
            let [name, technique, skill] = action;
            if (!gladiatorsPool.has(name)) {
                gladiatorsPool.set(name, new Map());
            }

            let hasGladiatorsPoolTechnique = gladiatorsPool.get(name).has(technique);
            if (!hasGladiatorsPoolTechnique ||
                (hasGladiatorsPoolTechnique &&
                hasGladiatorsPoolTechnique < skill)) {
                    gladiatorsPool.get(name).set(technique, Number(skill));
            }
        } else {
            let [gladiatorA, gladiatorB] = command.split(' vs ');
            if (gladiatorsPool.has(gladiatorA) && gladiatorsPool.has(gladiatorB)) {
                let techGladiatorA = gladiatorsPool.get(gladiatorA);
                let techGladiatorB = gladiatorsPool.get(gladiatorB);

                let bigSkillMap = techGladiatorA.size > techGladiatorB.size ? techGladiatorA : techGladiatorB;
                let smallSkillMap = techGladiatorA.size > techGladiatorB.size ? techGladiatorB : techGladiatorA;

                for (let [techName, skill] of Array.from(bigSkillMap)) {
                    if (smallSkillMap.has(techName)) {
                        if (techGladiatorA.get(techName) > techGladiatorB.get(techName)) {
                            techGladiatorB.delete(techName);
                        } else {
                            techGladiatorA.delete(techName);
                        }
                    }
                }
            }
        }

        command = data[index];
        index++;
    }

    let gladiatorsPoints = new Map();

    for (let [gladiatorName, technique] of Array.from(gladiatorsPool)) {
        let sum = 0;
        for (let [tech, skill] of Array.from(technique)) {
            sum += skill;
        }

        if (sum !== 0) {
            gladiatorsPoints.set(gladiatorName, sum);
        }
    }

    let sortGladiatorByPoints = Array.from(gladiatorsPoints).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0]); 
    });

    for (let [name, point] of sortGladiatorByPoints) {
        console.log(`${name}: ${point} skill`);
        let tech = Array.from(gladiatorsPool.get(name)).sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0]);
        });

        for (let [techName, skillPoints] of tech) {
            console.log(`- ${techName} <!> ${skillPoints}`);
        }
    }
}

arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);