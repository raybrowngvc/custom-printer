const scriptURL = 'https://script.google.com/macros/s/AKfycbydO2u-cD-ROjh4DO9y3yETc_OyxCKTxV9NDftBRux-rGsr_5rsYRUwlJjo2mkRD5e9hg/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})