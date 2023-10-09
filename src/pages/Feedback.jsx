const Feedback = () => {
    return (
        <div className='card bg-base-100 shadow-xl rounded-none my-10 p-6 w-1/2 mx-auto'>


             <form>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="firstName" type="text" placeholder="First Name" className="input input-bordered input-green w-full" />
                    <input name="lastName" type="text" placeholder="Last name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your phone" className="input input-bordered w-full" required />
                    <input name="email" type="text" placeholder="Your email" className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full mt-4" placeholder="Your Message"></textarea>
                <div className='text-center mt-6'>
                    <input className='btn bg-green-500 mt-3 w-full rounded-full border-none' type="submit" value="send" />
                </div>
            </form>
        </div>


    );
};

export default Feedback;