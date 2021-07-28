function form() {
	// Form
	const form = document.querySelector('form');

	const message = {
		success: 'Благодарим вас за интерес к бутику LE CORTE! Мы свяжемся с Вами совсем скоро, чтобы уточнить детали.',
		fail: 'Что-то пошло не так...'
	};

	bindPostData(form);

	const postData = async (url, data) => {
      const res = await fetch(url, {
        method: 'POST',
        body: data,
        headers: {
          'Content-type': 'application/json'
        }
      });
      return await res.json();
    };

	function bindPostData(form) {
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
			.then(data => {
	          console.log(data);
	          alert(message.success);
	        })
	        .catch(() => {
	          alert(message.fail);
	        })
	        .finally(() => {
	          form.reset();
	        })
		});
	}
}

export default form;