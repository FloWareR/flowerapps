function ContactSection() {
  return (
    <>
      <div className="text-center px-4">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Me</h2>
        <form className="mt-8 space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 border border-gray-300 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 border border-gray-300 rounded-lg"
          ></textarea>
          <button type="submit" className="bg-gray-900 text-white py-3 px-6 rounded-lg">
            Send
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactSection
