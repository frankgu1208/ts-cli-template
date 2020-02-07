import * as dotenv from 'dotenv';

dotenv.config();

export const cli = (): boolean => {
  const environment = process.env.ENV;
  // eslint-disable-next-line no-console
  console.log(`This is a ${environment || 'dev'} environment`);
  return Boolean(environment);
};

cli();
