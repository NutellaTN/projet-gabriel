export const riverConfigs = {
    lassomption: {
        label: "Rivière L'Assomption",
        qMin: 5,
        qMax: 500,
        djgcMax: 1300,
        djdcMax: 300,
        qBankfull: 350,
        djgcTicks: [0, 150, 300, 450, 600, 750, 900, 1050, 1200],
        djdcTicks: [0, 50, 100, 150, 200, 250, 300],

        djgcZones: {
            greenYellow: [
                { dj: 0, q: 200 },
                { dj: 110, q: 200 },
                { dj: 50, q: 150 },
                { dj: 50, q: 50 },
                { dj: 1300, q: 50 },
            ],
            yellowRed: [
                { dj: 0, q: 250 },
                { dj: 150, q: 250 },
                { dj: 110, q: 150 },
                { dj: 110, q: 100 },
                { dj: 1300, q: 100 },
            ],
        },

        djdcZones: {
            greenYellow: [
                { dj: 0, q: 50 },
                { dj: 120, q: 50 },
                { dj: 250, q: 150 },
                { dj: 220, q: 200 },
                { dj: 300, q: 200 },
            ],
            yellowRed: [
                { dj: 0, q: 100 },
                { dj: 120, q: 100 },
                { dj: 160, q: 150 },
                { dj: 120, q: 250 },
                { dj: 300, q: 250 },
            ],
        },
    },

    montmorency: {
        label: "Rivière Montmorency",
        qMin: 1,
        qMax: 1000,
        djgcMax: 1300,
        djdcMax: 300,
        qBankfull: 600,
        djgcTicks: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 450 },
                { dj: 300, q: 450 },
                { dj: 100, q: 200 },
                { dj: 100, q: 35 },
                { dj: 1300, q: 35 },
            ],
            yellowRed: [
                { dj: 0, q: 600 },
                { dj: 580, q: 600 },
                { dj: 300, q: 200 },
                { dj: 300, q: 80 },
                { dj: 1300, q: 80 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 35 },
                { dj: 100, q: 35 },
                { dj: 200, q: 200 },
                { dj: 160, q: 450 },
                { dj: 300, q: 450 },
            ],
            yellowRed: [
                { dj: 0, q: 80 },
                { dj: 120, q: 80 },
                { dj: 160, q: 200 },
                { dj: 130, q: 600 },
                { dj: 300, q: 600 },
            ],
        },
    },

    chaudiere: {
        label: "Rivière Chaudière",
        qMin: 2,
        qMax: 2000,
        djgcMax: 1300,
        djdcMax: 300,
        qBankfull: 1000,
        djgcTicks: [0, 150, 300, 450, 600, 750, 900, 1050, 1200],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 600 },
                { dj: 150, q: 600 },
                { dj: 75, q: 100 },
                { dj: 1300, q: 100 },
            ],
            yellowRed: [
                { dj: 0, q: 1000 },
                { dj: 200, q: 1000 },
                { dj: 150, q: 160 },
                { dj: 1300, q: 160 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 100 },
                { dj: 100, q: 100 },
                { dj: 250, q: 300 },
                { dj: 200, q: 600 },
                { dj: 300, q: 600 },
            ],
            yellowRed: [
                { dj: 0, q: 160 },
                { dj: 100, q: 160 },
                { dj: 180, q: 300 },
                { dj: 100, q: 1000 },
                { dj: 300, q: 1000 },
            ],
        },
    },
};
