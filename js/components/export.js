export function getClass(klasa){
    const classes = {
        1: "Warrior",
        2: "Paladin",
        3: "Hunter",
        4: "Rogue",
        5: "Priest",
        6: "Death Knight",
        7: "Shaman",
        8: "Mage",
        9: "Warlock",
        10: "Monk",
        11: "Druid",
        12: "Demon Hunter"
    }

    return classes[klasa];
}

export function getRace(race){
    const races = {
        1: "Human",
        2: "Orc",
        3: "Dwarf",
        4: "Night Elf",
        5: "Undead",
        6: "Tauren",
        7: "Gnome",
        8: "Troll",
        9: "Goblin",
        10: "Blood Elf",
        11: "Draenei",
        22: "Worgen",
        25: "Pandaren"
    }

    return races[race];
}
