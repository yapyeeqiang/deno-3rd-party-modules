// uuid module
import { v4 } from 'https://deno.land/std@0.107.0/uuid/mod.ts';

const id = v4.generate();
console.log(id);

// fs module
import { readJson, writeJson } from 'https://deno.land/x/jsonfile/mod.ts';

// 1. read json
const users = await readJson('db.json');
console.log(users);

// 2. write json
const usersData = [
	{
		id: 1,
		name: 'User 1',
		age: 20,
		isMale: false,
	},
	{
		id: 2,
		name: 'User 2',
		age: 30,
		isMale: true,
	},
	{
		id: 3,
		name: 'User 3',
		age: 10,
		isMale: false,
	},
];

await writeJson('db.json', usersData);

// http module
import { listenAndServe } from 'https://deno.land/std@0.107.0/http/server.ts';

listenAndServe(':3000', () => new Response('Hello world'));

console.log('3000');
