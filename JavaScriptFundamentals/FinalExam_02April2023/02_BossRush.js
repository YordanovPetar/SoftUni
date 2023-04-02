function bossRush(input) {
    let countInputs = input.shift();
    let pattern = /([|])(?<name>[A-Z]{4,})\1\:([#])(?<title>[a-zA-Z]+\s[a-zA-Z]+)\3/g;


    for (let line of input) {
        let match = pattern.exec(line);
        
        if (match !== null) {
            while (match) {
                let bossName = match.groups['name'];
                let bossTitle = match.groups['title'];
    
                console.log(`${bossName}, The ${bossTitle}\n>> Strength: ${bossName.length}\n>> Armor: ${bossTitle.length}`);
    
                match = pattern.exec(line);
            }
        } else {
            console.log(`Access denied!`);
        }
    }
}

bossRush([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);

console.log('----------------');

bossRush([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);
