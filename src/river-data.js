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

    chateauguay: {
        label: "Rivière Châteauguay",
        qMin: 10,
        qMax: 1000,
        djgcMax: 1100,
        djdcMax: 300,
        qBankfull: 650,
        djgcTicks: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 500 },
                { dj: 200, q: 500 },
                { dj: 100, q: 250 },
                { dj: 100, q: 80 },
                { dj: 1100, q: 80 },
            ],
            yellowRed: [
                { dj: 0, q: 650 },
                { dj: 280, q: 650 },
                { dj: 150, q: 250 },
                { dj: 150, q: 150 },
                { dj: 1100, q: 150 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 80 },
                { dj: 120, q: 80 },
                { dj: 200, q: 250 },
                { dj: 160, q: 500 },
                { dj: 300, q: 500 },
            ],
            yellowRed: [
                { dj: 0, q: 150 },
                { dj: 120, q: 150 },
                { dj: 160, q: 250 },
                { dj: 120, q: 650 },
                { dj: 300, q: 650 },
            ],
        },
    },
    matane: {
        label: "Rivière Matane",
        qMin: 1,
        qMax: 1000,
        djgcMax: 1350,
        djdcMax: 300,
        qBankfull: 400,
        djgcTicks: [0, 150, 300, 450, 600, 750, 900, 1050, 1200],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            greenYellow: [
                [
                    { dj: 0, q: 400 },
                    { dj: 200, q: 400 },
                    { dj: 100, q: 150 },
                    { dj: 100, q: 40 },
                    { dj: 1350, q: 40 },
                ],
                [
                    { dj: 0, q: 400 },
                    { dj: 1350, q: 400 },
                ]
            ],
            yellowRed: [
                [
                    { dj: 0, q: 400 },
                    { dj: 300, q: 400 },
                    { dj: 200, q: 150 },
                    { dj: 200, q: 50 },
                    { dj: 1350, q: 50 },
                ],
                [
                    { dj: 0, q: 500 },
                    { dj: 1350, q: 500 },
                ]
            ],
        },
        djdcZones: {
            greenYellow: [
                [
                    { dj: 0, q: 40 },
                    { dj: 160, q: 40 },
                    { dj: 200, q: 150 },
                    { dj: 160, q: 400 },
                    { dj: 300, q: 400 },
                ],
                [
                    { dj: 0, q: 400 },
                    { dj: 300, q: 400 },
                ],
            ],
            yellowRed: [
                [
                    { dj: 0, q: 50 },
                    { dj: 100, q: 50 },
                    { dj: 160, q: 150 },
                    { dj: 100, q: 400 },
                    { dj: 300, q: 400 },
                ],
                [
                    { dj: 0, q: 500 },
                    { dj: 300, q: 500 },
                ],
            ],
        },
    },
    matapedia: {
        label: "Rivière Matapédia",
        qMin: 1,
        qMax: 1000,
        djgcMax: 1350,
        djdcMax: 300,
        qBankfull: 500,
        djgcTicks: [0, 150, 300, 450, 600, 750, 900, 1050, 1200],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 350 },
                { dj: 200, q: 350 },
                { dj: 100, q: 200 },
                { dj: 100, q: 40 },
                { dj: 1350, q: 40 },
            ],
            yellowRed: [
                { dj: 0, q: 500 },
                { dj: 300, q: 500 },
                { dj: 200, q: 200 },
                { dj: 200, q: 80 },
                { dj: 1350, q: 80 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 40 },
                { dj: 120, q: 40 },
                { dj: 220, q: 200 },
                { dj: 180, q: 350 },
                { dj: 300, q: 350 },
            ],
            yellowRed: [
                { dj: 0, q: 80 },
                { dj: 120, q: 80 },
                { dj: 180, q: 200 },
                { dj: 120, q: 500 },
                { dj: 300, q: 500 },
            ],
        },
    },
    mistassini: {
        label: "Rivière Mistassini",
        qMin: 30,
        qMax: 3000,
        djgcMax: 1800,
        djdcMax: 400,
        qBankfull: 1800,
        djgcTicks: [0, 150, 300, 450, 600, 750, 900, 1050, 1200, 1350, 1500, 1650],
        djdcTicks: [0, 100, 200, 300, 400],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 1200 },
                { dj: 150, q: 1200 },
                { dj: 50, q: 900 },
                { dj: 50, q: 300 },
                { dj: 1800, q: 300 },
            ],
            yellowRed: [
                { dj: 0, q: 1800 },
                { dj: 225, q: 1800 },
                { dj: 150, q: 900 },
                { dj: 150, q: 600 },
                { dj: 1800, q: 600 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 300 },
                { dj: 250, q: 300 },
                { dj: 400, q: 900 },
                { dj: 360, q: 1200 },
                { dj: 400, q: 1200 },
            ],
            yellowRed: [
                { dj: 0, q: 600 },
                { dj: 300, q: 600 },
                { dj: 350, q: 900 },
                { dj: 250, q: 1800 },
                { dj: 400, q: 1800 },
            ],
        },
    },
    saintfrancois: {
        label: "Rivière Saint-François",
        qMin: 30,
        qMax: 3000,
        djgcMax: 1100,
        djdcMax: 300,
        qBankfull: 1000,
        djgcTicks: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            greenYellow: [
                { dj: 0, q: 900 },
                { dj: 110, q: 900 },
                { dj: 50, q: 750 },
                { dj: 50, q: 300 },
                { dj: 1100, q: 300 },
            ],
            yellowRed: [
                { dj: 0, q: 1200 },
                { dj: 250, q: 1200 },
                { dj: 150, q: 750 },
                { dj: 150, q: 450 },
                { dj: 1100, q: 450 },
            ],
        },
        djdcZones: {
            greenYellow: [
                { dj: 0, q: 300 },
                { dj: 100, q: 300 },
                { dj: 200, q: 750 },
                { dj: 180, q: 900 },
                { dj: 300, q: 900 },
            ],
            yellowRed: [
                { dj: 0, q: 450 },
                { dj: 100, q: 450 },
                { dj: 150, q: 750 },
                { dj: 120, q: 1200 },
                { dj: 300, q: 1200 },
            ],
        },
    },
    sainteanne: {
        label: "Rivière Sainte-Anne",
        qMin: 1,
        qMax: 1000,
        djgcMax: 1350,
        djdcMax: 300,
        qBankfull: 550,
        djgcTicks: [0, 150, 300, 450, 600, 750, 900, 1050, 1200],
        djdcTicks: [0, 100, 200, 300],
        djgcZones: {
            green: [
                [
                    { dj: 0, q: 550 },
                    { dj: 200, q: 550 },
                    { dj: 25, q: 200 },
                    { dj: 25, q: 60 },
                    { dj: 1350, q: 60 },
                    { dj: 1350, q: 1 },
                    { dj: 0, q: 1 }
                ]
            ],
            yellow: [
                [
                    { dj: 1350, q: 550 },
                    { dj: 200, q: 550 },
                    { dj: 25, q: 200 },
                    { dj: 25, q: 60 },
                    { dj: 1350, q: 60 },
                    { dj: 1350, q: 100 },
                    { dj: 50, q: 100 },
                    { dj: 50, q: 200 },
                    { dj: 200, q: 500 },
                    { dj: 1350, q: 500 }

                ],
                [
                    { dj: 0, q: 550 },
                    { dj: 1350, q: 550 },
                    { dj: 1350, q: 650 },
                    { dj: 0, q: 650 }

                ]
            ],
            red: [
                [
                    { dj: 1350, q: 500 },
                    { dj: 200, q: 500 },
                    { dj: 50, q: 200 },
                    { dj: 50, q: 100 },
                    { dj: 1350, q: 100 }
                ],
                [

                    { dj: 1350, q: 1000 },
                    { dj: 0, q: 1000 },
                    { dj: 0, q: 650 },
                    { dj: 1350, q: 650 }

                ]
            ]
        },
        djdcZones: {
            green: [
                [
                    { dj: 0, q: 1 },
                    { dj: 0, q: 60 },
                    { dj: 120, q: 60 },
                    { dj: 250, q: 200 },
                    { dj: 180, q: 550 },
                    { dj: 300, q: 550 },
                    { dj: 300, q: 1 }

                ]
            ],
            yellow: [
                [
                    { dj: 0, q: 550 },
                    { dj: 180, q: 550 },
                    { dj: 250, q: 200 },
                    { dj: 120, q: 60 },
                    { dj: 0, q: 60 },
                    { dj: 0, q: 100 },
                    { dj: 100, q: 100 },
                    { dj: 160, q: 200 },
                    { dj: 100, q: 500 },
                    { dj: 0, q: 500 }
                ],
                [
                    { dj: 0, q: 550 },
                    { dj: 300, q: 550 },
                    { dj: 300, q: 650 },
                    { dj: 0, q: 650 }

                ]
            ],
            red: [
                [
                    { dj: 0, q: 100 },
                    { dj: 100, q: 100 },
                    { dj: 160, q: 200 },
                    { dj: 100, q: 500 },
                    { dj: 0, q: 500 }
                ],
                [

                    { dj: 300, q: 1000 },
                    { dj: 0, q: 1000 },
                    { dj: 0, q: 650 },
                    { dj: 300, q: 650 }

                ]
            ]
        },
    },
    beaurivage: {
        label: "Rivière Beaurivage",
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
    becancour: {
        label: "Rivière Bécancour",
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
    eaton: {
        label: "Rivière Eaton",
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
    etchemin: {
        label: "Rivière Etchemin",
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
    saintcharles: {
        label: "Rivière Saint-Charles",
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
