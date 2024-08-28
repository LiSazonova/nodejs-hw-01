import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const getAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        return contacts;
    } catch (error) {
        console.log('Failed to read contacts from the file:', error);
    }
};

console.log(await getAllContacts());