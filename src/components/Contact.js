import React from 'react'

function Contact() {
  const [result, setResult] = React.useState("");
  
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3d0fc0ec-47ca-4c3f-a13d-761be8495793");

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
    <div className="flex justify-center items-center min-h-screen">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-4 p-6 bg-white rounded-xl shadow-md w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-orange-300">Contact Us</h1>
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1 font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-2 rounded-md p-2 focus:outline-none focus:border-orange-300"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="mobile" className="mb-1 font-medium text-gray-700">
            Mobile:
          </label>
          <input
            type="tel"
            name="mobile"
            id="mobile"
            className="border-2 rounded-md p-2 focus:outline-none  focus:border-orange-300"
            placeholder="Enter your mobile number"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="remarks" className="mb-1 font-medium text-gray-700">
            Message:
          </label>
          <textarea
            name="remarks"
            id="remarks"
            rows="4"
            className="border-2 rounded-md p-2 focus:outline-none  focus:border-orange-300"
            placeholder="Enter your message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-orange-300 text-white rounded-full py-2 hover:bg-orange-400 transition-colors"
        >
          Submit
        </button>
      </form>
</div>
  )
}

export default Contact