import {ENVIRONMENT} from '../../Config/EnviromentVariables';


export enum LogLevel {
  // eslint-disable-next-line no-unused-vars
  MESSAGE,
  // eslint-disable-next-line no-unused-vars
  LOW,
  // eslint-disable-next-line no-unused-vars
  MEDIUM,
  // eslint-disable-next-line no-unused-vars
  HIGH,
}

const dropConsole = (level: LogLevel, message: string): void => {
  if (ENVIRONMENT === 'develop') {
    if (level === LogLevel.HIGH) {
      // eslint-disable-next-line no-console
      console.error(`ERROR!: ${message}`);
    }

    if (level === LogLevel.MEDIUM) {
      // eslint-disable-next-line no-console
      console.warn(`WARNING: ${message}`);
    }

    if (level === LogLevel.LOW) {
      // eslint-disable-next-line no-console
      console.log(
          `%c LOW WARNING: ${message} `,
          'background: #222; color: #bada55',
      );
    }

    if (level === LogLevel.MESSAGE) {
      // eslint-disable-next-line no-console
      console.log(message);
    }
  }
};

export default dropConsole;
