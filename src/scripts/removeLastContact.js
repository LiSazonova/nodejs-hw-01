import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeLastContact = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        contacts.pop();
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('Last contact remove successfull!');
    } catch (error) {
        console.log('Failed to delete contact from the file:', error);
    }
};

removeLastContact();