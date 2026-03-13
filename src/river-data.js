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
        qBankfull: 240,
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

    steanne: {
        label: "Rivière Ste-Anne",
        qMin: 5,
        qMax: 400,
        djgcMax: 1000,
        djdcMax: 240,
        qBankfull: 220,
        djgcTicks: [0, 200, 400, 600, 800, 1000],
        djdcTicks: [0, 50, 100, 150, 200, 240],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 35 },
                { dj: 1000, q: 35 },
            ],
            yellowRed: [
                { dj: 0, q: 70 },
                { dj: 1000, q: 70 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 35 },
                { dj: 240, q: 60 },
            ],
            yellowRed: [
                { dj: 0, q: 100 },
                { dj: 240, q: 190 },
            ],
        },
    },
};
