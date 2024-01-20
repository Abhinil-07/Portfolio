import React from "react";
import heroImage from '../assets/portfolioimage.jpg';

const Hero = () => {
    return (
        <div className="flex flex-col items-start overflow-wrap-break-word text-left mt-[50px] md:w-1/2 w-[60%]  mx-auto ">
            <div className="md:flex  w-full">
                <div className="hero w-3/4 ">
                    <p className="md:text-[56px] text-[25px] font-bold">
                        Frontend Web Developer
                        from Ohio
                    </p>
                </div>

                <div className="rounded-full mx-4 bg-cover bg-no-repeat bg-center mt-2 w-[100px] h-[100px]" style={{ backgroundImage: `url('${heroImage}')` }}></div>
            </div>

            <p className="hero-p">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut nulla molestiae repudiandae quo voluptatum tempore, vero suscipit earum aliquid odio consequuntur quasi nobis ex aut distinctio reprehenderit reiciendis, architecto unde cumque doloribus iusto accusamus harum. Vel modi voluptatum nulla iste?</p>
            <a href="https://drive.google.com/file/d/1hRYxzQZXhhx6YiO7BiZp-7NTfVeBHShv/view?usp=sharing" target="/blank">
            <button class="mb-6 mt-[30px] flex items-center gap-2 px-4 py-2 font-bold text-white rounded-full bg-[#222222] transition-transform hover:scale-105 hover:bg-[#333333]">
                <span >Resume</span>
                <span class="transform -rotate-45">&rarr;</span>
            </button>
            </a>
            
        </div>
    );
};

export default Hero;
