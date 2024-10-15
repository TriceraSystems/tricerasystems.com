<form 
    name="test" 
    method="POST"
    data-netlify-recaptcha="true"
    data-netlify-honeypot="company"
    data-netlify="true">
    <p>
        <label>Name <input type="text" name="name" /></label>
    </p>
    <p>
        <label>Email <input type="email" name="email" /></label>
    </p>
    <p class="hidden">
        <label>
          Don’t fill this out if you’re human: <input name="company" />
        </label>
      </p>
    <p>
        <button type="submit">Send</button>
    </p>
</form>