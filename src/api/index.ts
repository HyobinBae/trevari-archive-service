import Backend from 'api/backend';
import Storage from 'api/storage';

export const storage = new Storage();
export const backend = new Backend(process.env.REACT_APP_BACKEND_GQL);
