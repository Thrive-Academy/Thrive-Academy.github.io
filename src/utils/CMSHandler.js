import GSheetReader from 'g-sheets-api';

const tabs = {
    'home': 1,
    'home building blocks': 2,
    'home individual': 3,
    'about': 4,
    'team': 5,
    'getting involved': 6,
    'curriculum': 7,
    'socials': 8,
}

export async function loadResults(sheet, callback, tab = 'home') {
    const options = {
        sheetId: sheet,
        sheetNumber: tabs[tab],
        returnAllResults: false,
    }

    await GSheetReader(options, callback)
}