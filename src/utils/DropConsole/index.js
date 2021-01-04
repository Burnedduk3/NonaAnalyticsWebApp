import {
  HIGH, LOW, MEDIUM, MESSAGE,
} from './CONSTANTS';
import {ENVIRONMENT} from '../../Config/EnviromentVariables';

const DropConsole = (level, message) => {
  if (ENVIRONMENT === 'develop') {
    if (level === HIGH) {
      // eslint-disable-next-line no-console
      console.error(`ERROR!: ${message}`);
    }

    if (level === MEDIUM) {
      // eslint-disable-next-line no-console
      console.warn(`WARNING: ${message}`);
    }

    if (level === LOW) {
      // eslint-disable-next-line no-console
      console.log(`%c LOW WARNING: ${message} `, 'background: #222; color: #bada55');
    }

    if (level === MESSAGE) {
      // eslint-disable-next-line no-console
      console.log(message);
    }
  }
};

export default DropConsole;
