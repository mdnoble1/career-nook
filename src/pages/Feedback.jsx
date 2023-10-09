const Feedback = () => {
  return (
    <div className="card bg-base-100 shadow-2xl rounded-md my-12 lg:my-32 px-6 py-12 w-11/12 lg:w-1/2 mx-auto">
      <form>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-green w-full rounded-lg bg-gray-100"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered w-full rounded-lg bg-gray-100"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered w-full rounded-lg bg-gray-100"
            required
          />
          <input
            name="email"
            type="text"
            placeholder="Your Email"
            className="input input-bordered w-full rounded-lg bg-gray-100"
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-32 w-full mt-4 rounded-lg bg-gray-100"
          placeholder="Your Message"
        ></textarea>
        <div className="text-center mt-6">
          <input
            className="btn font-bold text-xl text-white bg-[#fc621c] hover:bg-orange-400 hover:text-black mt-3 w-full rounded-md border-none"
            type="submit"
            value="send"
          />
        </div>
      </form>
    </div>
  );
};

export default Feedback;
