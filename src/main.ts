import { DOMSelectors } from './lib/DOMSelectors';
import { translateIntervalsIntoSemitones } from './lib/helpers';
import { ALL_KEYS } from './lib/keys';
import { noteFreqs } from './lib/noteFreqs';
import { SCALES } from './lib/scales';
import './style.css';

const { keySelect, scaleSelect } = DOMSelectors;

const keySelectMount = () => {
	const el = keySelect();
	ALL_KEYS.forEach(k => {
		const opt = document.createElement('option');
		opt.value = k;
		opt.textContent = k;
		el.append(opt);
	});

	el.value = 'C';
	el.addEventListener('change', (e: Event) =>
		console.log((e.target as HTMLSelectElement).value)
	);
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
	});
};

const getNote = (key: string, octave: number) => {
	return noteFreqs[`${key}${octave}`];
};

window['getNote'] = getNote;

keySelectMount();
scalesSelectMount();
