import type { RequestHandler } from '@sveltejs/kit';
import { api } from './_api';

export const get: RequestHandler = (request, data) => {
	return api(request, data);
};

export const post: RequestHandler<{}, FormData> = (request, data) => {
	return api(request, {
		created_at: new Date(),
		text: request.body.get('text'),
		done: false
	});
};
