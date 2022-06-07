import { Scale } from './interfaces';

export const SCALES: { [k: string]: Scale } = {
	major: ['2', '2', 'b2', '2', '2', '2', 'b2'],
	minor: ['2', 'b2', '2', '2', '2', 'b2', '2'],
	'harmonic minor': ['2', 'b2', '2', '2', 'b2', '#2', 'b2'],
	'melodic minor': ['2', 'b2', '2', '2', '2', 'b2'],
	'minor pentatonic': ['m3', '2', '2', 'm3', '2'],
	'major pentatonic': ['2', '2', 'm3', '2', 'm3'],
};
