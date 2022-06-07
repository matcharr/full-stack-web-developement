export const enhance = (form: HTMLFormElement, { result }) => {
	const handleSumit = async (event: Event) => {
		event.preventDefault();

		try {
			const body = new FormData(form);
			const res = await fetch(form.action, {
				method: form.method,
				headers: {
					accept: 'application/json'
				},
				body
			});
			if (res.ok) {
				result(res, form);
			} else {
				console.log('Fetch erro: ', await res.text());
			}
		} catch (error) {
			console.log('Could not submit the form: ', error);
		}
	};

	form.addEventListener('submit', handleSumit);

	return {
		destroy() {
			form.removeEventListener('submit', handleSumit);
		}
	};
};
