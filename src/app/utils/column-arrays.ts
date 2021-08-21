//Master list
export const headersAll = [
    "LocalDate", "LocalTime", "UTCOffset",
    "AtvWpt", "Lat", "Long",
    "AltB", "BaroA", "AltMSL",
    "OAT", "IAS", "GndSpd",
    "VSpd", "Pitch", "Roll",
    "LatAc", "NormAc", "HDG",
    "TRK", "volt1", "volt2",
    "amp1", "FQtyL", "FQtyR",
    "E1FFlow", "E1OilT", "E1OilP",
    "E1MAP", "E1RPM", "E1PercentPwr",
    "E1CHT1", "E1CHT2", "E1CHT3",
    "E1CHT4", "E1CHT5", "E1CHT6",
    "E1EGT1", "E1EGT2", "E1EGT3",
    "E1EGT4", "E1EGT5", "E1EGT6",
    "E1TIT1", "E1TIT2", "AltGPS",
    "TAS", "HSIS", "CRS",
    "NAV1", "NAV2", "COM1",
    "COM2", "HCDI", "VCDI",
    "WndSpd", "WndDr", "WptDst",
    "WptBrg", "MagVar", "AfcsOn",
    "RollM", "PitchM", "RollC",
    "PitchC", "VSpdG", "GPSfix",
    "HAL", "VAL", "HPLwas",
    "HPLfd", "VPLwas"
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
