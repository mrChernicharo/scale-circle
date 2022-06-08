import {
	initKeySelect,
	initOctaveSelect,
	initScalesSelect,
	setAppState,
} from './lib/helpers';
import './style.css';

initKeySelect();
initScalesSelect();
initOctaveSelect();

setAppState({});
