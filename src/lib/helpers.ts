import {
	KEYS,
	KEY_NOTES,
	NOTES,
	NOTES_BY_PITCH,
	OCTAVES,
	SCALES,
	SEMITONE_TABLE,
} from '../lib/constants';
import { AppState, Interval } from '../lib/types';

let appState: AppState = {
	key: 'C',
	scale: 'major',
	octave: 4,
	notes: [],
	scaleNotes: [],
};

export const setAppState = (props: Partial<AppState>) => {
	const tempState = { ...appState, ...props };
	const { key, scale: scaleName, octave } = tempState;

	tempState.notes = KEY_NOTES[key];

	const semitones = getSemitones(scaleName);

	const scaleNotes = semitonesIntoNotes(
		key,
		octave,
		semitones,
		tempState.notes
	);

	tempState.scaleNotes = scaleNotes;

	appState = tempState;
	console.log('setAppState', appState);

	updateAllNotesList();
	updateScaleNotesList();
};

// DOM actions
export const initKeySelect = () => {
	const el = document.querySelector<HTMLSelectElement>('#key-select')!;
	KEYS.forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.value = 'C';
	el.addEventListener('change', (e: Event) => {
		const selectedKey = (e.target as HTMLSelectElement).value;
		setAppState({ key: selectedKey });
	});
};

export const initScalesSelect = () => {
	const el = document.querySelector<HTMLSelectElement>('#scale-select')!;
	Object.keys(SCALES).forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.addEventListener('change', (e: Event) => {
		const selectedScale = (e.target as HTMLSelectElement).value;
		// console.log(SCALES[selectedScale]);
		// console.log(translateIntervalsIntoSemitones(SCALES[selectedScale]));

		setAppState({ scale: selectedScale });
	});
};

export const initOctaveSelect = () => {
	const el = document.querySelector<HTMLSelectElement>('#octave-select')!;

	Object.keys(OCTAVES).forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.value = '4';
	el.addEventListener('change', (e: Event) => {
		const selectedOctave = (e.target as HTMLSelectElement).value;

		setAppState({ octave: Number(selectedOctave) });
	});
};

export const updateScaleNotesList = () => {
	const ul = document.querySelector<HTMLUListElement>('#scale-notes-list')!;

	ul.innerHTML = '';
	appState.scaleNotes.forEach(note => {
		const li = document.createElement('li');
		li.textContent = note.name;
		ul.append(li);
	});
};

export const updateAllNotesList = () => {
	const ul = document.querySelector<HTMLUListElement>('#all-notes-list')!;

	ul.innerHTML = '';
	appState.notes.forEach(note => {
		const li = document.createElement('li');
		li.textContent = note;
		ul.append(li);
	});
};

// plucking notes
const getSemitones = (scaleName: string) => {
	const scale = SCALES[scaleName];

	return intervalsIntoSemitones(scale);
};

export const intervalsIntoSemitones = (intervalArr: Interval[]) => {
	return intervalArr.map(int => SEMITONE_TABLE[int]);
};

export const semitonesIntoNotes = (
	key: string,
	octave: number,
	semitones: number[],
	keyNotes: string[]
) => {
	const rootNoteName = `${key}${octave}`;
	const root = NOTES[rootNoteName];

	let currentPitch = root.pitch;
	let dynamicOctave = octave;
	let currentFreq = root.freq;

	const otherNoteNames = semitones.map(st => {
		currentPitch += st;
		const pitchNotes = NOTES_BY_PITCH[currentPitch];
		return pitchNotes.length > 1
			? pitchNotes.find(n => keyNotes.includes(n))
			: pitchNotes[0];
	});

	const otherNotes = otherNoteNames.map(noteName => {
		if (NOTES[`${noteName}${dynamicOctave}`].freq < currentFreq) {
			dynamicOctave++;
		}
		return NOTES[`${noteName}${dynamicOctave}`];
	});

	return [root, ...otherNotes];
};
