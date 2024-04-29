import React from 'react'
import Header from '../../components/layout/Header'

const Profile = () => {
    
    return (
        <div className="h-[100vh]">
            <Header />
            {/* Image div */}
            <div class="h-[80vh]  flex flex-wrap py-3  justify-center">
                <div class="container lg:w-full lg:mx-3 sm:w-full   bg-slate-200  shadow-lg rounded-lg  transform   duration-200 easy-in-out">
                    <div class=" h-44 overflow-hidden" >
                        <img class="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                    </div>
                    <div class="flex justify-center px-5  -mt-12">
                        <img class="h-32 w-32 bg-white p-2 rounded-full object-cover " src="https://debabratagiri.netlify.app/static/media/image1.d890f9b8ec09a7a640eb.jpg" alt="" />
                    </div>
                    <div class=" ">
                        <div class="text-center px-14">
                            <h2 class="text-gray-800 text-3xl font-bold">Debabrata Giri</h2>
                            <a class="text-gray-400 mt-2 hover:text-blue-500" href="https://www.instagram.com/_debabrata_giri/" target="BLANK()">_debabrata_giri</a>
                        </div>
                        <hr class="mt-6" />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
