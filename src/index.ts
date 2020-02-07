import * as dotenv from 'dotenv';
import fs from 'fs';
import readline from 'readline';

dotenv.config();

/**
 * Get the file path in the environment variable
 * Read the file line by line and process the commands
 * @param file location of the file with all commands
 */
export const cli = (file: string = process.env.COMMANDS_FILE): boolean => {
    if (fs.existsSync(file)) {
        const rd = readline.createInterface({
            input: fs.createReadStream(file),
        });
        rd.on('line', (line: string) => {
            console.log(line);
        });
        return true;
    }
    return false;
};

cli();
