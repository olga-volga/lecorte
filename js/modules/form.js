function form() {
	// Form
	const form = document.querySelector('form');

	const message = {
		success: 'Благодарим вас за интерес к бутику LE CORTE! Мы свяжемся с Вами совсем скоро, чтобы уточнить детали.',
		fail: 'Что-то пошло не так...'
	};

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

			let statusMessage = document.createElement('div');
			statusMessage.classList.add('status');
			statusMessage.style.cssText = 'display:none;text-align:center;color:#998431;padding-top:30px;';
			form.append(statusMessage);

			const formData = new FormData(form);

			const json = JSON.stringify(Object.fromEntries(formData.entries()));

			postData('http://localhost:3000/requests', json)
			.then(data => {
	          console.log(data);
	          statusMessage.textContent = message.success;
	          statusMessage.style.display = 'block';
	        })
	        .catch(() => {
	          statusMessage.textContent = message.fail;
	          statusMessage.style.display = 'block';
	        })
	        .finally(() => {
	          setTimeout(() => {
	          	form.reset();
	            statusMessage.remove();
	          }, 4000);
	        });
		});
	}

	bindPostData(form);
}

export default form;