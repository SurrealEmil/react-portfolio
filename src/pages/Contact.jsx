import React from 'react';

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2f760c40-7ce1-4fd5-a207-ccda5d020de5"); // Update this with your access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <h2>Contact Me</h2>
        <form className="myForm" onSubmit={onSubmit}>
            <input className='name' type="text" name="name"required placeholder="Your Name"/>
            <input className='name' type="email" name="email" required placeholder="Your Email"/>
            <textarea className='name' name="message" required placeholder="Your Message"></textarea>

            <button className='name' type="submit">Submit</button>
        </form>
        <span>{result}</span>
    </div>
  );
}