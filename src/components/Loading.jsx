import React from 'react'

export const Loading = () => {
    return (
        <>
            <main className="bg-black flex lg:py-24 lg:px-20 h-[100vh]  justify-center">
                <div className=" flex items-center justify-center  text-white text-4xl font-bold">
                    <div className='flex flex-col items-center justify-center gap-4'>
                        <h1 className=' text-white text-4xl font-bold'> Loading ...</h1>
                    </div>
                </div>
            </main>
        </>
    )
}
