import { createClient } from '@libsql/client';

const url = 'file:./database.db';

export const client = createClient({ url });
