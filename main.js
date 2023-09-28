let put =  document.getElementById('put');
let btn =  document.getElementById('btn');


btn.onclick = function() {
	if(btn.getAttribute = 'data-text'  == "show") {
		put.setAttribute('type', 'text');
		btn.setAttribute('data-text', 'haid');
		btn.innerHTML = 'haid';
	}else {
		put.setAttribute('type', 'password');
		btn.setAttribute('data-text', 'show');
		btn.innerHTML = 'show';
	}
}