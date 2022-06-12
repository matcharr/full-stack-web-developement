import type { RequestHandler } from '@sveltejs/kit';
import { getRequest } from '@sveltejs/kit/node';
import { api } from './_api';

export const del: RequestHandler = (request, data) => {
	return api(request, data);
};

export const patch: RequestHandler<{}, FormData> = (request, data) => {
	return api(request, {
		text: request.body.get('text'),
		done: request.body.has('done') ? !!request.body.get('done') : undefined
	});
};
