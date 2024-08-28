import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
    try {
        const data = await fs.readFile(PATH_DB, 'utf-8');
        const contacts = JSON.parse(data);
        for (let i = 0; i < number; i += 1) {
            contacts.push(createFakeContact());
        }
        await fs.writeFile(PATH_DB, JSON.stringify(contacts));
        console.log('File created successfull!');
    } catch (error) {
        console.log('Failed to write contacts to the file:', error);
    }
};

generateContacts(5);
