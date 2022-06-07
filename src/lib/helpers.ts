import { Interval, NoteFreq, NoteName } from './interfaces';
import { noteFreqs, notesByI } from './noteFreqs';

const getNote = (key: string, octave: number) => {
	const noteFreq: NoteFreq = noteFreqs[`${key}${octave}`];
	return noteFreq;
};

export const translateIntervalsIntoSemitones = (intervalArr: Interval[]) => {
	const semitoneTable = {
		b2: 1,
		2: 2,
		'#2': 3,
		m3: 3,
		'3': 4,
		'4J': 5,
		'#4': 6,
		b5: 6,
		5: 7,
		m6: 8,
		'6': 9,
		'7': 10,
		Maj7: 11,
		'8': 12,
		b9: 13,
		'9': 14,
		'#9': 15,
		'11': 17,
		'#11': 18,
		b13: 20,
		'13': 21,
	};

	const parseSemitone = (interval: Interval) => semitoneTable[interval];

	return intervalArr.map(int => parseSemitone(int));
};

export const getIsBemolKey = (key: NoteName) =>
	['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'].includes(key);

export const translateSemitonesAndKeyIntoNotes = (
	key: string,
	semitones: number[],
	octave: number
) => {
	const isBemolKey = getIsBemolKey(key as NoteName);
	let currentI = parseInt(getNote(key, octave).i);
	const initialNote = isBemolKey
		? notesByI[currentI + 'b']
		: notesByI[currentI];

	console.log('translateSemitonesAndKeyIntoNotes', {
		isBemolKey,
		currentI,
		initialNote,
		key,
		semitones,
		notesByI,
	});

	return [
		initialNote,
		...semitones.map(st => {
			let nextNote;
			if (isBemolKey) {
				currentI += st;
				nextNote = notesByI[currentI + 'b'] || notesByI[currentI];
			} else {
				currentI += st;
				nextNote = notesByI[currentI];
			}
			return nextNote;
		}),
	];
};
