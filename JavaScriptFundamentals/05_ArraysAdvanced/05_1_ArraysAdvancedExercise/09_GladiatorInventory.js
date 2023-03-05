function gladiatorInventory(inventory) {
    let allEquipment = inventory.shift().split(' ');

    for (let i = 0; i < inventory.length; i++) {
        let values = inventory[i].split(' ');
        let command = values[0];
        let equipment = values[1];

        switch (command) {
            case "Buy":
                if (!allEquipment.includes(equipment)) {
                    allEquipment.push(equipment);
                }
                break;
            case "Trash":
                if (allEquipment.includes(equipment)) {
                    allEquipment.splice(allEquipment.indexOf(equipment), 1);
                }
                break;
            case "Repair":
                if (allEquipment.includes(equipment)) {
                    let elementToRepair = allEquipment.splice(allEquipment.indexOf(equipment), 1)
                    allEquipment.push(elementToRepair[0]);
                }
                break;
            case "Upgrade":
                let equipmentToUpgrade = equipment.split('-').shift();

                if (allEquipment.includes(equipmentToUpgrade)) {
                    let upgrade = equipment.split('-').pop();
                    allEquipment.splice((allEquipment.indexOf(equipmentToUpgrade) + 1), 0, `${equipmentToUpgrade}:${upgrade}`);
                }
                break;
        }
    }

    console.log(allEquipment.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);