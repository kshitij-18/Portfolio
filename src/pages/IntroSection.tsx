import portfolioImageUrl from '@/assets/Portfolio_Website.jpg'

const IntroSection = () => {
    return (
        <section className='flex justify-start items-center p-20 dark:text-slate-100'>
            <div className="flex flex-col md:flex-row md:gap-20 gap-6">
                <img
                    src={portfolioImageUrl}
                    alt=""
                    className='w-auto sm:h-32 lg:h-60 rounded-full'
                />
                <div className="flex flex-col justify-center gap-6">
                    <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
                        Kshitij Nath
                    </h1>
                    <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
                        MERN Stack Developer
                    </h2>
                    <p className="leading-7 md:w-1/2">
                        Experienced MERN stack developer with a passion for crafting robust and scalable web applications. Leveraging 2 years of expertise to drive innovation and deliver exceptional user experiences.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default IntroSection