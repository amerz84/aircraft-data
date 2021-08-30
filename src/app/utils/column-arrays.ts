//Master list
export const headersAll = [
    { name: "LocalDate", hide: false, category: "all"}, //0
    { name: "LocalTime", hide: false, category: "all"},
    { name: "UTCOffset", hide: false, category: "all"},
    { name: "AtvWpt", hide: true, category: "all"},
    { name: "Lat", hide: false, category: "all"},
    { name: "Long", hide: false, category: "all"},
    { name: "AltB", hide: false, category: "all"},
    { name: "BaroA", hide: false, category: "all"},
    { name: "AltMSL", hide: false, category: "all"},
    { name: "OAT", hide: false, category: "all"},
    { name: "IAS", hide: false, category: "all"}, //10
    { name: "GndSpd", hide: false, category: "all"},
    { name: "VSpd", hide: false, category: "all"},
    { name: "Pitch", hide: false, category: "all"},
    { name: "Roll", hide: false, category: "all"},
    { name: "LatAc", hide: false, category: "all"},
    { name: "NormAc", hide: false, category: "all"},
    { name: "HDG", hide: false, category: "all"},
    { name: "TRK", hide: false, category: "all"},
    { name: "volt1", hide: false, category: "all"},
    { name: "volt2", hide: false, category: "all"}, //20
    { name: "amp1", hide: false, category: "all"},
    { name: "FQtyL", hide: true, category: "engine"},
    { name: "FQtyR", hide: true, category: "engine"},
    { name: "E1FFlow", hide: true, category: "engine"},
    { name: "E1OilT", hide: true, category: "engine"},
    { name: "E1OilP", hide: true, category: "engine"},
    { name: "E1MAP", hide: true, category: "engine"},
    { name: "E1RPM", hide: true, category: "engine"},
    { name: "E1PercentPwr", hide: true, category: "engine"},
    { name: "E1CHT1", hide: true, category: "engine"}, //30
    { name: "E1CHT2", hide: true, category: "engine"},
    { name: "E1CHT3", hide: true, category: "engine"},
    { name: "E1CHT4", hide: true, category: "engine"},
    { name: "E1CHT5", hide: true, category: "engine"},
    { name: "E1CHT6", hide: true, category: "engine"},
    { name: "E1EGT1", hide: true, category: "engine"},
    { name: "E1EGT2", hide: true, category: "engine"},
    { name: "E1EGT3", hide: true, category: "engine"},
    { name: "E1EGT4", hide: true, category: "engine"},
    { name: "E1EGT5", hide: true, category: "engine"}, //40
    { name: "E1EGT6", hide: true, category: "engine"},
    { name: "E1TIT1", hide: true, category: "engine"},
    { name: "E1TIT2", hide: true, category: "engine"},
    { name: "AltGPS", hide: true, category: "avionics"},
    { name: "TAS", hide: true, category: "avionics"},
    { name: "HSIS", hide: true, category: "avionics"},
    { name: "CRS", hide: true, category: "avionics"},
    { name: "NAV1", hide: true, category: "avionics"},
    { name: "NAV2", hide: true, category: "avionics"},
    { name: "COM1", hide: true, category: "avionics"}, //50
    { name: "COM2", hide: true, category: "avionics"},
    { name: "HCDI", hide: true, category: "avionics"},
    { name: "VCDI", hide: true, category: "avionics"},
    { name: "WndSpd", hide: true, category: "avionics"},
    { name: "WndDr", hide: true, category: "avionics"},
    { name: "WptDst", hide: true, category: "avionics"},
    { name: "WptBrg", hide: true, category: "avionics"},
    { name: "MagVar", hide: true, category: "avionics"},
    { name: "AfcsOn", hide: true, category: "avionics"},
    { name: "RollM", hide: true, category: "avionics"}, //60
    { name: "PitchM", hide: true, category: "avionics"},
    { name: "RollC", hide: true, category: "avionics"},
    { name: "PitchC", hide: true, category: "avionics"},
    { name: "VSpdG", hide: true, category: "avionics"},
    { name: "GPSfix", hide: true, category: "avionics"},
    { name: "HAL", hide: true, category: "avionics"},
    { name: "VAL", hide: true, category: "avionics"},
    { name: "HPLwas", hide: true, category: "avionics"},
    { name: "HPLfd", hide: true, category: "avionics"},
    { name: "VPLwas", hide: true, category: "avionics"}, //70
];

//Only columns pertaining to engine/fuel
export const engineHeaders = [
    "LocalDate", "LocalTime", "UTCOffset",
    "FQtyL", "FQtyR",
    "E1FFlow", "E1OilT", "E1OilP",
    "E1MAP", "E1RPM", "E1PercentPwr",
    "E1CHT1", "E1CHT2", "E1CHT3",
    "E1CHT4", "E1CHT5", "E1CHT6",
    "E1EGT1", "E1EGT2", "E1EGT3",
    "E1EGT4", "E1EGT5", "E1EGT6",
    "E1TIT1", "E1TIT2"
]

//Remove "E1" and fuel qty headers
export const avionicsHeaders = [
    "LocalDate", "LocalTime", "UTCOffset",
    "AtvWpt", "Lat", "Long",
    "AltB", "BaroA", "AltMSL",
    "OAT", "IAS", "GndSpd",
    "VSpd", "Pitch", "Roll",
    "LatAc", "NormAc", "HDG",
    "TRK", "volt1", "volt2",
    "amp1", "AltGPS",
    "TAS", "HSIS", "CRS",
    "NAV1", "NAV2", "COM1",
    "COM2", "HCDI", "VCDI",
    "WndSpd", "WndDr", "WptDst",
    "WptBrg", "MagVar", "AfcsOn",
    "RollM", "PitchM", "RollC",
    "PitchC", "VSpdG", "GPSfix",
    "HAL", "VAL", "HPLwas",
    "HPLfd", "VPLwas"
]

//Only EGT headers to check for high values
export const egtHeaders = [
    "E1EGT1", "E1EGT2", "E1EGT3",
    "E1EGT4", "E1EGT5", "E1EGT6",
]

//Only CHT headers to check for high values
export const chtHeaders = [
    "E1CHT1", "E1CHT2", "E1CHT3",
    "E1CHT4", "E1CHT5", "E1CHT6",
]
