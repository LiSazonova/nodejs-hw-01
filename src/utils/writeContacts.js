import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts';

export const writeContacts = async (data) => {
    try {
        const jsonData = JSON.stringify(data, null, 2);
        await fs.writeFile(PATH_DB, jsonData, 'utf8');
    } catch (error) {
        console.error('Error writing contacts:', error);
        throw error;
    }
};