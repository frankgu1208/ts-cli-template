import * as dotenv from 'dotenv';

dotenv.config();

/**
 * Get the file path in the environment variable
 * Read the file line by line and process the commands
 * @param file location of the file with all commands
 */
export const cli = (): boolean => {
  const environment = process.env.ENV;
  console.log(`This is a ${environment || 'dev'} environment`);
  return !!environment;
};

cli();
