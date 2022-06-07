import { DOMSelectors } from './lib/DOMSelectors';
import {
	translateIntervalsIntoSemitones,
	translateSemitonesAndKeyIntoNotes,
} from './lib/helpers';
import { AppState } from './lib/interfaces';
import { ALL_KEYS } from './lib/keys';
import { OCTAVES } from './lib/noteFreqs';
import { SCALES } from './lib/scales';
import './style.css';

const { keySelect, scaleSelect, octaveSelect } = DOMSelectors;
const appState: AppState = {
	key: 'C',
	scale: 'major',
	octave: 4,
	notes: [],
};

const keySelectMount = () => {
	const el = keySelect();
	ALL_KEYS.forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.value = 'C';
	el.addEventListener('change', (e: Event) => {
		const selectedKey = (e.target as HTMLSelectElement).value;
		appState.key = selectedKey;

		console.log(appState);
	});
};

const scalesSelectMount = () => {
	const el = scaleSelect();
	Object.keys(SCALES).forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.addEventListener('change', (e: Event) => {
		const selectedScale = (e.target as HTMLSelectElement).value;
		console.log(SCALES[selectedScale]);
		console.log(translateIntervalsIntoSemitones(SCALES[selectedScale]));

		appState.scale = selectedScale;
		console.log(appState);
	});
};

const octaveSelectMount = () => {
	const el = octaveSelect();
	Object.keys(OCTAVES).forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.value = '4';
	el.addEventListener('change', (e: Event) => {
		const selectedOctave = (e.target as HTMLSelectElement).value;
		console.log(selectedOctave);

		appState.octave = Number(selectedOctave);
		console.log(appState);

		const semitones = translateIntervalsIntoSemitones(
			SCALES[appState.scale]
		);
		const notes = translateSemitonesAndKeyIntoNotes(
			appState.key,
			semitones,
			appState.octave
		);
		console.log(notes);
	});
};

keySelectMount();
scalesSelectMount();
octaveSelectMount();
