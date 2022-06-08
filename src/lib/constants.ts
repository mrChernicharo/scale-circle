import { Note, Scale } from './types';

// prettier-ignore
export const KEYS = [
  "Ab", "A", "A#", "Bb", "B", "C", "C#", "Db", "D", "D#", "Eb", "E", "F", "F#", "Gb", "G", "G#"
];

export const OCTAVES = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// prettier-ignore
export const SEMITONE_TABLE = {
    b2: 1, 2: 2, '#2': 3, m3: 3, '3': 4, '4J': 5,
    '#4': 6, b5: 6, 5: 7, m6: 8, '6': 9, '7': 10,
    Maj7: 11, '8': 12, b9: 13, '9': 14, '#9': 15,
    '11': 17, '#11': 18, b13: 20, '13': 21,
};

export const SCALES: { [k: string]: Scale } = {
	major: ['2', '2', 'b2', '2', '2', '2', 'b2'],
	minor: ['2', 'b2', '2', '2', 'b2', '2', '2'],
	'harmonic minor': ['2', 'b2', '2', '2', 'b2', '#2', 'b2'],
	'melodic minor': ['2', 'b2', '2', '2', '2', 'b2'],
	'minor pentatonic': ['m3', '2', '2', 'm3', '2'],
	'major pentatonic': ['2', '2', 'm3', '2', 'm3'],
	dorian: ['2', 'b2', '2', '2', '2', 'b2', '2'],
};

// prettier-ignore
export const KEY_NOTES = {
	Ab:   ['Ab', 'A'  , 'Bb', 'B'  , 'C' , 'Db', 'D' , 'Eb', 'Fb' , 'F' , 'Gb', 'G '],
	A:    ['A' , 'Bb' , 'B' , 'C'  , 'C#', 'D' , 'D#', 'E' , 'F'  , 'F#', 'G' , 'G#'],
	"A#": ['A#', 'B'  , 'C' , 'C#' , 'D' , 'D#', 'E' , 'E#', 'F#' , 'G', 'G#' , 'A' ],
	Bb:   ['Bb', 'B'  , 'C' , 'Db' , 'D' , 'Eb', 'E' , 'F' , 'Gb' , 'G' , 'Ab', 'A' ],
	B:    ['B' , 'C'  , 'C#', 'D'  , 'D#', 'E' , 'F' , 'F#', 'G'  , 'G#', 'A' , 'A#'],
	C:    ['C' , 'Db' , 'D' , 'Eb' , 'E' , 'F' , 'F#', 'G' , 'Ab' , 'A' , 'Bb', 'B' ],
	"C#": ['C#', 'D'  , 'D#', 'E'  , 'E#', 'F#', 'G' , 'G#', 'A'  , 'A#', 'B' , 'C' ],
	Db:   ['Db', 'D'  , 'Eb', 'Fb' , 'F' , 'Gb', 'G' , 'Ab', 'A'  , 'Bb', 'B' , 'C '],
	D:    ['D' , 'Eb' , 'E' , 'F'  , 'F#', 'G' , 'G#', 'A' , 'Bb' , 'B' , 'C' , 'C#'],
	"D#": ['D#', 'E'  , 'E#', 'F#' , 'G' , 'G#', 'A' , 'A#', 'B'  , 'C' , 'C#', 'D' ],
	Eb:   ['Eb', 'Fb' , 'F' , 'Gb' , 'G' , 'Ab', 'A' , 'Bb', 'B'  , 'C' , 'Db', 'D' ],
	E:    ['E' , 'F'  , 'F#', 'G'  , 'G#', 'A' , 'A#', 'B' , 'C'  , 'C#', 'D' , 'D#'],
	F:    ['F' , 'Gb' , 'G' , 'Ab' , 'A' , 'Bb', 'B' , 'C' , 'Db' , 'D' , 'Eb', 'E' ],
	'F#': ['F#', 'G'  , 'G#', 'A'  , 'A#', 'B' , 'C' , 'C#', 'D'  , 'D#', 'E' , 'E#'],
	Gb:   ['Gb', 'A'  , 'Ab', 'A'  , 'Bb', 'B' , 'C' , 'Db', 'D'  , 'Eb', 'Fb', 'F' ],
	G:    ['G' , 'Ab' , 'A' , 'Bb' , 'B' , 'C' , 'C#', 'D' , 'Eb' , 'E' , 'F' , 'F#'],
	"G#": ['G#', 'A'  , 'A#', 'B'  , 'C' , 'C#', 'D' , 'D#', 'E'  , 'E#', 'F#', 'G' ],
};

export const NOTES_BY_PITCH = {
	0: ['C'],
	1: ['C#', 'Db'],
	2: ['D'],
	3: ['D#', 'Eb'],
	4: ['E'],
	5: ['F'],
	6: ['F#', 'Gb'],
	7: ['G'],
	8: ['Ab', 'G#'],
	9: ['A'],
	10: ['A#', 'Bb'],
	11: ['B'],
	12: ['C'],
	13: ['C#', 'Db'],
	14: ['D'],
	15: ['D#', 'Eb'],
	16: ['E'],
	17: ['F'],
	18: ['F#', 'Gb'],
	19: ['G'],
	20: ['Ab', 'G#'],
	21: ['A'],
	22: ['A#', 'Bb'],
	23: ['B'],
	24: ['C'],
	25: ['C#', 'Db'],
	26: ['D'],
	27: ['D#', 'Eb'],
	28: ['E'],
	29: ['F'],
	30: ['F#', 'Gb'],
	31: ['G'],
	32: ['Ab', 'G#'],
	33: ['A'],
	34: ['A#', 'Bb'],
	35: ['B'],
	36: ['C'],
	37: ['C#', 'Db'],
	38: ['D'],
	39: ['D#', 'Eb'],
	40: ['E'],
	41: ['F'],
	42: ['F#', 'Gb'],
	43: ['G'],
	44: ['Ab', 'G#'],
	45: ['A'],
	46: ['A#', 'Bb'],
	47: ['B'],
	48: ['C'],
	49: ['C#', 'Db'],
	50: ['D'],
	51: ['D#', 'Eb'],
	52: ['E'],
	53: ['F'],
	54: ['F#', 'Gb'],
	55: ['G'],
	56: ['Ab', 'G#'],
	57: ['A'],
	58: ['A#', 'Bb'],
	59: ['B'],
	60: ['C'],
	61: ['C#', 'Db'],
	62: ['D'],
	63: ['D#', 'Eb'],
	64: ['E'],
	65: ['F'],
	66: ['F#', 'Gb'],
	67: ['G'],
	68: ['Ab', 'G#'],
	69: ['A'],
	70: ['A#', 'Bb'],
	71: ['B'],
	72: ['C'],
	73: ['C#', 'Db'],
	74: ['D'],
	75: ['D#', 'Eb'],
	76: ['E'],
	77: ['F'],
	78: ['F#', 'Gb'],
	79: ['G'],
	80: ['Ab', 'G#'],
	81: ['A'],
	82: ['A#', 'Bb'],
	83: ['B'],
	84: ['C'],
	85: ['C#', 'Db'],
	86: ['D'],
	87: ['D#', 'Eb'],
	88: ['E'],
	89: ['F'],
	90: ['F#', 'Gb'],
	91: ['G'],
	92: ['Ab', 'G#'],
	93: ['A'],
	94: ['A#', 'Bb'],
	95: ['B'],
	96: ['C'],
	97: ['C#', 'Db'],
	98: ['D'],
	99: ['D#', 'Eb'],
	100: ['E'],
	101: ['F'],
	102: ['F#', 'Gb'],
	103: ['G'],
	104: ['Ab', 'G#'],
	105: ['A'],
	106: ['A#', 'Bb'],
	107: ['B'],
};

// prettier-ignore
export const NOTES: { [k: string]: Note } = {
    Ab0  : { name: 'Ab', fullName: 'Ab0', freq: 25.96, pitch: 8, id: '8b' },
    Ab1  : { name: 'Ab', fullName: 'Ab1', freq: 51.91, pitch: 20, id: '20b' },
    Ab2  : { name: 'Ab', fullName: 'Ab2', freq: 103.83, pitch: 32, id: '32b' },
    Ab3  : { name: 'Ab', fullName: 'Ab3', freq: 207.65, pitch: 44, id: '44b' },
    Ab4  : { name: 'Ab', fullName: 'Ab4', freq: 415.3, pitch: 56, id: '56b' },
    Ab5  : { name: 'Ab', fullName: 'Ab5', freq: 830.61, pitch: 68, id: '68b' },
    Ab6  : { name: 'Ab', fullName: 'Ab6', freq: 1661.22, pitch: 80, id: '80b' },
    Ab7  : { name: 'Ab', fullName: 'Ab7', freq: 3322.44, pitch: 92, id: '92b' },
    Ab8  : { name: 'Ab', fullName: 'Ab8', freq: 6644.88, pitch: 104, id: '104b' },
    A0   : { name: 'A', fullName: 'A0', freq: 27.5, pitch: 9, id: '9' },
    A1   : { name: 'A', fullName: 'A1', freq: 55, pitch: 21, id: '21' },
    A2   : { name: 'A', fullName: 'A2', freq: 110, pitch: 33, id: '33' },
    A3   : { name: 'A', fullName: 'A3', freq: 220, pitch: 45, id: '45' },
    A4   : { name: 'A', fullName: 'A4', freq: 440, pitch: 57, id: '57' },
    A5   : { name: 'A', fullName: 'A5', freq: 880, pitch: 69, id: '69' },
    A6   : { name: 'A', fullName: 'A6', freq: 1760, pitch: 81, id: '81' },
    A7   : { name: 'A', fullName: 'A7', freq: 3520, pitch: 93, id: '93' },
    A8   : { name: 'A', fullName: 'A8', freq: 7040, pitch: 105, id: '105' },
    "A#0": { name: 'A#', fullName: 'A#0', freq: 29.14, pitch: 10, id: '10#' },
    "A#1": { name: 'A#', fullName: 'A#1', freq: 58.27, pitch: 22, id: '22#' },
    "A#2": { name: 'A#', fullName: 'A#2', freq: 116.54, pitch: 34, id: '34#' },
    "A#3": { name: 'A#', fullName: 'A#3', freq: 233.08, pitch: 46, id: '46#' },
    "A#4": { name: 'A#', fullName: 'A#4', freq: 466.16, pitch: 58, id: '58#' },
    "A#5": { name: 'A#', fullName: 'A#5', freq: 932.33, pitch: 70, id: '70#' },
    "A#6": { name: 'A#', fullName: 'A#6', freq: 1864.66, pitch: 82, id: '82#' },
    "A#7": { name: 'A#', fullName: 'A#7', freq: 3729.31, pitch: 94, id: '94#' },
    "A#8": { name: 'A', fullName: 'A#8', freq: 7458.62, pitch: 106, id: '106#' },
    B0   : { name: 'B', fullName: 'B0', freq: 30.87, pitch: 11, id: '11' },
    B1   : { name: 'B', fullName: 'B1', freq: 61.74, pitch: 23, id: '23' },
    B2   : { name: 'B', fullName: 'B2', freq: 123.47, pitch: 35, id: '35' },
    B3   : { name: 'B', fullName: 'B3', freq: 246.94, pitch: 47, id: '47' },
    B4   : { name: 'B', fullName: 'B4', freq: 493.88, pitch: 59, id: '59' },
    B5   : { name: 'B', fullName: 'B5', freq: 987.77, pitch: 71, id: '71' },
    B6   : { name: 'B', fullName: 'B6', freq: 1975.53, pitch: 83, id: '83' },
    B7   : { name: 'B', fullName: 'B7', freq: 3951.07, pitch: 95, id: '95' },
    B8   : { name: 'B', fullName: 'B8', freq: 7902.13, pitch: 107, id: '107' },
    Bb0  : { name: 'Bb', fullName: 'Bb0', freq: 29.14, pitch: 10, id: '10b' },
    Bb1  : { name: 'Bb', fullName: 'Bb1', freq: 58.27, pitch: 22, id: '22b' },
    Bb2  : { name: 'Bb', fullName: 'Bb2', freq: 116.54, pitch: 34, id: '34b' },
    Bb3  : { name: 'Bb', fullName: 'Bb3', freq: 233.08, pitch: 46, id: '46b' },
    Bb4  : { name: 'Bb', fullName: 'Bb4', freq: 466.16, pitch: 58, id: '58b' },
    Bb5  : { name: 'Bb', fullName: 'Bb5', freq: 932.33, pitch: 70, id: '70b' },
    Bb6  : { name: 'Bb', fullName: 'Bb6', freq: 1864.66, pitch: 82, id: '82b' },
    Bb7  : { name: 'Bb', fullName: 'Bb7', freq: 3729.31, pitch: 94, id: '94b' },
    Bb8  : { name: 'Bb', fullName: 'Bb8', freq: 7458.62, pitch: 106, id: '106b' },
    C0   : { name: 'C', fullName: 'C0', freq: 16.35, pitch: 0, id: '0' },
    C1   : { name: 'C', fullName: 'C1', freq: 32.7, pitch: 12, id: '12' },
    C2   : { name: 'C', fullName: 'C2', freq: 65.41, pitch: 24, id: '24' },
    C3   : { name: 'C', fullName: 'C3', freq: 130.81, pitch: 36, id: '36' },
    C4   : { name: 'C', fullName: 'C4', freq: 261.63, pitch: 48, id: '48' },
    C5   : { name: 'C', fullName: 'C5', freq: 523.25, pitch: 60, id: '60' },
    C6   : { name: 'C', fullName: 'C6', freq: 1046.5, pitch: 72, id: '72' },
    C7   : { name: 'C', fullName: 'C7', freq: 2093, pitch: 84, id: '84' },
    C8   : { name: 'C', fullName: 'C8', freq: 4186.01, pitch: 96, id: '96' },
    "C#0": { name: 'C#', fullName: 'C#0', freq: 17.32, pitch: 1, id: '1#' },
    "C#1": { name: 'C#', fullName: 'C#1', freq: 34.65, pitch: 13, id: '13#' },
    "C#2": { name: 'C#', fullName: 'C#2', freq: 69.3, pitch: 25, id: '25#' },
    "C#3": { name: 'C#', fullName: 'C#3', freq: 138.59, pitch: 37, id: '37#' },
    "C#4": { name: 'C#', fullName: 'C#4', freq: 277.18, pitch: 49, id: '49#' },
    "C#5": { name: 'C#', fullName: 'C#5', freq: 554.37, pitch: 61, id: '61#' },
    "C#6": { name: 'C#', fullName: 'C#6', freq: 1108.73, pitch: 73, id: '73#' },
    "C#7": { name: 'C#', fullName: 'C#7', freq: 2217.46, pitch: 85, id: '85#' },
    "C#8": { name: 'C#', fullName: 'C#8', freq: 4434.92, pitch: 97, id: '97#' },
    Db0  : { name: 'Db', fullName: 'Db0', freq: 17.32, pitch: 1, id: '1b' },
    Db1  : { name: 'Db', fullName: 'Db1', freq: 34.65, pitch: 13, id: '13b' },
    Db2  : { name: 'Db', fullName: 'Db2', freq: 69.3, pitch: 25, id: '25b' },
    Db3  : { name: 'Db', fullName: 'Db3', freq: 138.59, pitch: 37, id: '37b' },
    Db4  : { name: 'Db', fullName: 'Db4', freq: 277.18, pitch: 49, id: '49b' },
    Db5  : { name: 'Db', fullName: 'Db5', freq: 554.37, pitch: 61, id: '61b' },
    Db6  : { name: 'Db', fullName: 'Db6', freq: 1108.73, pitch: 73, id: '73b' },
    Db7  : { name: 'Db', fullName: 'Db7', freq: 2217.46, pitch: 85, id: '85b' },
    Db8  : { name: 'Db', fullName: 'Db8', freq: 4434.92, pitch: 97, id: '97b' },
    D0   : { name: 'D', fullName: 'D0', freq: 18.35, pitch: 2, id: '2' },
    D1   : { name: 'D', fullName: 'D1', freq: 36.71, pitch: 14, id: '14' },
    D2   : { name: 'D', fullName: 'D2', freq: 73.42, pitch: 26, id: '26' },
    D3   : { name: 'D', fullName: 'D3', freq: 146.83, pitch: 38, id: '38' },
    D4   : { name: 'D', fullName: 'D4', freq: 293.66, pitch: 50, id: '50' },
    D5   : { name: 'D', fullName: 'D5', freq: 587.33, pitch: 62, id: '62' },
    D6   : { name: 'D', fullName: 'D6', freq: 1174.66, pitch: 74, id: '74' },
    D7   : { name: 'D', fullName: 'D7', freq: 2349.32, pitch: 86, id: '86' },
    D8   : { name: 'D', fullName: 'D8', freq: 4698.63, pitch: 98, id: '98' },
    "D#0": { name: 'D#', fullName: 'D#0', freq: 17.32, pitch: 3, id: '3#' },
    "D#1": { name: 'D#', fullName: 'D#1', freq: 34.65, pitch: 15, id: '15#' },
    "D#2": { name: 'D#', fullName: 'D#2', freq: 69.3, pitch: 27, id: '27#' },
    "D#3": { name: 'D#', fullName: 'D#3', freq: 138.59, pitch: 39, id: '39#' },
    "D#4": { name: 'D#', fullName: 'D#4', freq: 277.18, pitch: 51, id: '51#' },
    "D#5": { name: 'D#', fullName: 'D#5', freq: 554.37, pitch: 63, id: '63#' },
    "D#6": { name: 'D#', fullName: 'D#6', freq: 1108.73, pitch: 75, id: '75#' },
    "D#7": { name: 'D#', fullName: 'D#7', freq: 2217.46, pitch: 87, id: '87#' },
    "D#8": { name: 'D#', fullName: 'D#8', freq: 4434.92, pitch: 99, id: '99#' },
    Eb0  : { name: 'Eb', fullName: 'Eb0', freq: 19.45, pitch: 3, id: '3b' },
    Eb1  : { name: 'Eb', fullName: 'Eb1', freq: 38.89, pitch: 15, id: '15b' },
    Eb2  : { name: 'Eb', fullName: 'Eb2', freq: 77.78, pitch: 27, id: '27b' },
    Eb3  : { name: 'Eb', fullName: 'Eb3', freq: 155.56, pitch: 39, id: '39b' },
    Eb4  : { name: 'Eb', fullName: 'Eb4', freq: 311.13, pitch: 51, id: '51b' },
    Eb5  : { name: 'Eb', fullName: 'Eb5', freq: 622.25, pitch: 63, id: '63b' },
    Eb6  : { name: 'Eb', fullName: 'Eb6', freq: 1244.51, pitch: 75, id: '75b' },
    Eb7  : { name: 'Eb', fullName: 'Eb7', freq: 2489.02, pitch: 87, id: '87b' },
    Eb8  : { name: 'Eb', fullName: 'Eb8', freq: 4978.03, pitch: 99, id: '99b' },
    E0   : { name: 'E', fullName: 'E0', freq: 20.6, pitch: 4, id: '4' },
    E1   : { name: 'E', fullName: 'E1', freq: 41.2, pitch: 16, id: '16' },
    E2   : { name: 'E', fullName: 'E2', freq: 82.41, pitch: 28, id: '28' },
    E3   : { name: 'E', fullName: 'E3', freq: 164.81, pitch: 40, id: '40' },
    E4   : { name: 'E', fullName: 'E4', freq: 329.63, pitch: 52, id: '52' },
    E5   : { name: 'E', fullName: 'E5', freq: 659.25, pitch: 64, id: '64' },
    E6   : { name: 'E', fullName: 'E6', freq: 1318.51, pitch: 76, id: '76' },
    E7   : { name: 'E', fullName: 'E7', freq: 2637.02, pitch: 88, id: '88' },
    E8   : { name: 'E', fullName: 'E8', freq: 5274.04, pitch: 100, id: '100' },
    F0   : { name: 'F', fullName: 'F0', freq: 21.83, pitch: 5, id: '5' },
    F1   : { name: 'F', fullName: 'F1', freq: 43.65, pitch: 17, id: '17' },
    F2   : { name: 'F', fullName: 'F2', freq: 87.31, pitch: 29, id: '29' },
    F3   : { name: 'F', fullName: 'F3', freq: 174.61, pitch: 41, id: '41' },
    F4   : { name: 'F', fullName: 'F4', freq: 349.23, pitch: 53, id: '53' },
    F5   : { name: 'F', fullName: 'F5', freq: 698.46, pitch: 65, id: '65' },
    F6   : { name: 'F', fullName: 'F6', freq: 1396.91, pitch: 77, id: '77' },
    F7   : { name: 'F', fullName: 'F7', freq: 2793.83, pitch: 89, id: '89' },
    F8   : { name: 'F', fullName: 'F8', freq: 5587.65, pitch: 101, id: '101' },
    "F#0": { name: 'F#', fullName: 'F#0', freq: 23.12, pitch: 6, id: '6#' },
    "F#1": { name: 'F#', fullName: 'F#1', freq: 46.25, pitch: 18, id: '18#' },
    "F#2": { name: 'F#', fullName: 'F#2', freq: 92.5, pitch: 30, id: '30#' },
    "F#3": { name: 'F#', fullName: 'F#3', freq: 185, pitch: 42, id: '42#' },
    "F#4": { name: 'F#', fullName: 'F#4', freq: 369.99, pitch: 54, id: '54#' },
    "F#5": { name: 'F#', fullName: 'F#5', freq: 739.99, pitch: 66, id: '66#' },
    "F#6": { name: 'F#', fullName: 'F#6', freq: 1479.98, pitch: 78, id: '78#' },
    "F#7": { name: 'F#', fullName: 'F#7', freq: 2959.96, pitch: 90, id: '90#' },
    "F#8": { name: 'F#', fullName: 'F#8', freq: 5919.91, pitch: 102, id: '102#' },
    Gb0  : { name: 'Gb', fullName: 'Gb0', freq: 23.12, pitch: 6, id: '6b' },
    Gb1  : { name: 'Gb', fullName: 'Gb1', freq: 46.25, pitch: 18, id: '18b' },
    Gb2  : { name: 'Gb', fullName: 'Gb2', freq: 92.5, pitch: 30, id: '30b' },
    Gb3  : { name: 'Gb', fullName: 'Gb3', freq: 185, pitch: 42, id: '42b' },
    Gb4  : { name: 'Gb', fullName: 'Gb4', freq: 369.99, pitch: 54, id: '54b' },
    Gb5  : { name: 'Gb', fullName: 'Gb5', freq: 739.99, pitch: 66, id: '66b' },
    Gb6  : { name: 'Gb', fullName: 'Gb6', freq: 1479.98, pitch: 78, id: '78b' },
    Gb7  : { name: 'Gb', fullName: 'Gb7', freq: 2959.96, pitch: 90, id: '90b' },
    Gb8  : { name: 'Gb', fullName: 'Gb8', freq: 5919.91, pitch: 102, id: '102b' },
    G0   : { name: 'G', fullName: 'G0', freq: 24.5, pitch: 7, id: '7' },
    G1   : { name: 'G', fullName: 'G1', freq: 49, pitch: 19, id: '19' },
    G2   : { name: 'G', fullName: 'G2', freq: 98, pitch: 31, id: '31' },
    G3   : { name: 'G', fullName: 'G3', freq: 196, pitch: 43, id: '43' },
    G4   : { name: 'G', fullName: 'G4', freq: 392, pitch: 55, id: '55' },
    G5   : { name: 'G', fullName: 'G5', freq: 783.99, pitch: 67, id: '67' },
    G6   : { name: 'G', fullName: 'G6', freq: 1567.98, pitch: 79, id: '79' },
    G7   : { name: 'G', fullName: 'G7', freq: 3135.96, pitch: 91, id: '91' },
    G8   : { name: 'G', fullName: 'G8', freq: 6271.93, pitch: 103, id: '103' },
    "G#0": { name: 'G#', fullName: 'G#0', freq: 25.96, pitch: 8, id: '8#' },
    "G#1": { name: 'G#', fullName: 'G#1', freq: 51.91, pitch: 20, id: '20#' },
    "G#2": { name: 'G#', fullName: 'G#2', freq: 103.83, pitch: 32, id: '32#' },
    "G#3": { name: 'G#', fullName: 'G#3', freq: 207.65, pitch: 44, id: '44#' },
    "G#4": { name: 'G#', fullName: 'G#4', freq: 415.3, pitch: 56, id: '56#' },
    "G#5": { name: 'G#', fullName: 'G#5', freq: 830.61, pitch: 68, id: '68#' },
    "G#6": { name: 'G#', fullName: 'G#6', freq: 1661.22, pitch: 80, id: '80#' },
    "G#7": { name: 'G#', fullName: 'G#7', freq: 3322.44, pitch: 92, id: '92#' },
    "G#8": { name: 'G#', fullName: 'G#8', freq: 6644.88, pitch: 104, id: '104#' },
};

// prettier-ignore
// export const KEY_NOTES = {
// 	Ab:   ['Ab', 'Bbb', 'Bb', 'Cb' , 'C' , 'Db', 'D' , 'Eb', 'Fb' , 'F' , 'Gb', 'G '],
// 	A:    ['A' , 'Bb' , 'B' , 'C'  , 'C#', 'D' , 'D#', 'E' , 'F'  , 'F#', 'G' , 'G#'],
// 	"A#": ['A#', 'B'  , 'B#', 'C#' , 'Cx', 'D#', 'E' , 'E#', 'F#' , 'Fx', 'G#', 'Gx'],
// 	Bb:   ['Bb', 'Cb' , 'C' , 'Db' , 'D' , 'Eb', 'E' , 'F' , 'Gb' , 'G' , 'Ab', 'A '],
// 	B:    ['B' , 'C'  , 'C#', 'D'  , 'D#', 'E' , 'F' , 'F#', 'G'  , 'G#', 'A' , 'A#'],
// 	C:    ['C' , 'Db' , 'D' , 'Eb' , 'E' , 'F' , 'F#', 'G' , 'Ab' , 'A' , 'Bb', 'B '],
// 	"C#": ['C#', 'D'  , 'D#', 'E'  , 'E#', 'F#', 'G' , 'G#', 'A'  , 'A#', 'B' , 'Bx'],
// 	Db:   ['Db', 'Ebb', 'Eb', 'Fb' , 'F' , 'Gb', 'G' , 'Ab', 'Bbb', 'Bb', 'Cb', 'C '],
// 	D:    ['D' , 'Eb' , 'E' , 'F'  , 'F#', 'G' , 'G#', 'A' , 'Bb' , 'B' , 'C' , 'C#'],
// 	"D#": ['D#', 'E'  , 'E#', 'F#' , 'Fx', 'G#', 'Gx', 'A#', 'B'  , 'B#', 'C#', 'Cx'],
// 	Eb:   ['Eb', 'Fb' , 'F' , 'Gb' , 'G' , 'Ab', 'A' , 'Bb', 'Cb' , 'C' , 'Db', 'D '],
// 	E:    ['E' , 'F'  , 'F#', 'G'  , 'G#', 'A' , 'A#', 'B' , 'C'  , 'C#', 'D' , 'D#'],
// 	F:    ['F' , 'Gb' , 'G' , 'Ab' , 'A' , 'Bb', 'B' , 'C' , 'Db' , 'D' , 'Eb', 'E '],
// 	'F#': ['F#', 'G'  , 'G#', 'A'  , 'A#', 'B' , 'B#', 'C#', 'D'  , 'D#', 'E' , 'E#'],
// 	Gb:   ['Gb', 'A'  , 'Ab', 'Bbb', 'Bb', 'Cb', 'C' , 'Db', 'D'  , 'Eb', 'Fb', 'F '],
// 	G:    ['G' , 'Ab' , 'A' , 'Bb' , 'B' , 'C' , 'C#', 'D' , 'Eb' , 'E' , 'F' , 'F#'],
// 	"G#": ['G#', 'A'  , 'A#', 'B'  , 'B#', 'C#', 'Cx', 'D#', 'E'  , 'E#', 'F#', 'Fx'],
// };
