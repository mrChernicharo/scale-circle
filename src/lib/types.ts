export interface AppState {
	key: string;
	scale: string;
	octave: number;
	notes: Note[];
	scaleNotes: Note[];
}

export type Note = {
	id: string;
	name: string;
	fullName: string;
	freq: number;
	pitch: number;
};

export type Scale = Interval[];

// prettier-ignore
export type Interval = "b2" | "2" | "#2" 
| "m3" | "3" | "4" | "#4" | "b5" | "5" 
| "m6" | "6" | "7" | "Maj7" | "8" 
| "b9" | "9" | "#9" | "11" | "#11" | "b13" | "13";
