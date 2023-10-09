const NewArrival = () => {
    return (
        <section className="text-black">
            <div className="container max-w-5xl px-4 py-8 lg:py-20 mx-auto">
                <div className="grid gap-4 mx-4 sm:grid-cols-12">
                    <div className="col-span-12 sm:col-span-3 mx-auto lg:mx-0">
                        <h3 className="text-3xl font-semibold">Whats New!!!</h3>
                            <span className="text-xl text-[#fc621c] font-bold tracking-wider uppercase">
                                in Career Nook
                            </span>
                    </div>
                    <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                        <div className="text-start col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-[#fc621c]">
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#fc621c]">
                                <h3 className="text-xl text-[#fc621c] font-bold tracking-wide text-center md:text-left lg:text-left">
                                AI Career Fair
                                </h3>
                                <p className="mt-3 text-center md:text-left lg:text-left">
                                Gear up for an exceptional opportunity at our AI Career Fair! Explore an array of exciting AI roles, connect and network with industry leaders and experts, and embark on a journey to elevate your career within the dynamic world of artificial intelligence. This is your chance to unlock your full potential in this transforming and cutting-edge field, where innovation and career prospects abound.
                                </p>
                            </div>
                            <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-[#fc621c]">
                                <h3 className="text-xl font-bold text-[#fc621c] tracking-wide text-center md:text-left lg:text-left">
                                AI in the Workplace Summit
                                </h3>
                                <p className="mt-3 text-center md:text-left lg:text-left">
                                Prepare for an immersive experience at our highly anticipated AI in the Workplace Summit! Join us as we delve into the latest AI trends, connect with esteemed industry leaders, gain profound insights into the transforming impact of AI on workplaces, and elevate your understanding of the exciting future of work.
                                </p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default NewArrival;
