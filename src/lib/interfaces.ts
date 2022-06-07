export interface AppState {
	key: string;
	scale: string;
	octave: number;
	notes: NoteFreq[];
}

// prettier-ignore
export type Interval = "b2" | "2" | "#2" 
| "m3" | "3" | "4" | "#4" | "b5" | "5" 
| "m6" | "6" | "7" | "Maj7" | "8" 
| "b9" | "9" | "#9" | "11" | "#11" | "b13" | "13";

// prettier-ignore
export type NoteName = 'Ab' | 'A' | 'A#'
| 'Bb' | 'B' | 'C' | 'C#'| 'Db' | 'D' | 'D#'
| 'Eb' | 'E' | 'F' | 'F#'| 'Gb' | 'G' | 'G#';

export type NoteFullname = `${NoteName}${number}`;

// export type Note = {
// 	name: string;
// 	fullname: string;
// 	freq: number;
// 	i: number;
// };

export type NoteFreq = {
	name: NoteName;
	fullname: NoteFullname;
	freq: number;
	i: any;
};

export type Scale = Interval[];
