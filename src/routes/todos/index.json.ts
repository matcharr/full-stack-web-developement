import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const get: RequestHandler = async ({ request }) => {
	return api(request);
};

// /** @type {import('./__types/items').RequestHandler} */
export const post: RequestHandler= async ({ request }) => {
	// const formData = await request.formData();

	return api(request, {
		uid: `${Date.now()}`, // TODO: Replace with the UID from the database
		created_at: new Date(),
		text: request.body.get('text') as string,
		done: false
	});
}
