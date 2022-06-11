import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({event, resolve}) => {
	if (event.url.searchParams.has('_method')) {
		event.request.method = request.query.get('_method').toUpperCase();
	}

	const response = await resolve(event);
	return response;
};
