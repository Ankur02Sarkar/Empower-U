import React, { useState } from 'react'

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://images.pexels.com/photos/8294558/pexels-photo-8294558.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    })
    const [activeImg, setActiveImage] = useState(images.img1)

    const handleButtonClick = (url) => {
        window.open(url, '_blank');
      };

    const [amount, setAmount] = useState(1);


    return (
        <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-100 h-6/12 aspect-square object-cover rounded-xl w-[50%] m-auto'/>
                
            </div>
            {/* ABOUT */}
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>EmpowerU .GPT</span>
                    <h1 className='text-3xl font-bold'>Fundraiser AI</h1>
                </div>
                <p className='text-white-700'>
                Ask your querie regarding the crafting your project, hosting it and raise a good amount of fund for it. Let the GPT help you over any problem you are facing on crafting your idea to real life project. Meet Fundraiser AI !
                </p>
                <div className='flex flex-row items-center gap-12'>
                    <button onClick={() => handleButtonClick("https://my-first-workers-ai.geniusabhisheksingh2000.workers.dev/")} className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>ASK AI</button>
                    
                </div>
            </div>
        </div>
    )
}

export default ProductPage