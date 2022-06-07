export const DOMSelectors = {
	keySelect() {
		return document.querySelector<HTMLSelectElement>('#key-select')!;
	},
	scaleSelect() {
		return document.querySelector<HTMLSelectElement>('#scale-select')!;
	},
	octaveSelect() {
		return document.querySelector<HTMLSelectElement>('#octave-select')!;
	},
};
