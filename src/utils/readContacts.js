import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

export const readContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading contacts:', error);
        throw error;
    }
};

readContacts();