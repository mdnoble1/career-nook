const About = () => {
    return (
        <div className="my-10 lg:my-24">
        <div className="hero">
          <div className="hero-content justify-between flex-col sm:w-full lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-2xl font-bold text-[#fc621c] w-1/2 mx-auto lg:mx-0">
                O V E R V I E W 
              </h1>
              <h2 className="text-2xl lg:text-3xl font-bold mt-4 lg:mt-10">
                A Little Information About Our CAREER NOOK
              </h2>
              <p className="text-gray-600 mt-6">
              Career Nook is celebrated for empowering careers through resources and connections.
              </p>
              <div className="flex gap-10 mt-6 justify-center lg:justify-start ">
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    30<span className="text-[#fc621c]">+</span>
                  </h2>
                  <small className="text-[#fc621c]">Worldwide Branch</small>
                </div>
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold text-center">
                    1000<span className="text-[#fc621c]">+</span>
                  </h2>
                  <small className="text-[#fc621c]">Trusted Clients</small>
                </div>
  
                <div className="text-center">
                  <h2 className="text-3xl font-extrabold">
                    500<span className="text-[#fc621c] font-extrabold">+</span>
                  </h2>
                  <small className="text-[#fc621c]">Team Members</small>
                </div>
              </div>
            </div>
            <div className="card relative sm:w-1/2 h-full">
              <div className="card-body">
                <img
                data-aos="zoom-out" data-aos-duration="1500"
                className="rounded-md"
                  src="https://i.ibb.co/sJWr9Jc/about-Firm.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};


export default About;
