import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const removeAllContacts = async () => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        contacts.length = 0;
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('All contacts remove successfull!');
    } catch (error) {
        console.log('Failed to remove all contacts', error);
    }
};

removeAllContacts();