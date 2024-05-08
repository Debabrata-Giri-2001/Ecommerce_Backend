import React from 'react'
import Header from '../../components/layout/Header'

const Profile = () => {

    const profileData = [
        {
            'id': '1',
            'title': 'Full Name',
            'value': 'Debabrata Giri'
        },
        {
            'id': '2',
            'title': 'Mobile Number',
            'value': 7077425525
        },
        {
            'id': '3',
            'title': 'Email ID',
            'value': 'debabratagiri7077@outlook.com'
        },
        {
            'id': '4',
            'title': 'Gender',
            'value': 'MALE'
        },
        {
            'id': '5',
            'title': 'Date of Birth',
            'value': '- not added -'
        },
        {
            'id': '6',
            'title': 'Location',
            'value': '- not added -'
        },
        {
            'id': '7',
            'title': 'Alternate Mobile',
            'value': '- not added -'
        },
        {
            'id': '8',
            'title': 'Hint Name',
            'value': '- not added -'
        }
    ]

    return (
        <div className="h-[100vh]">
            <Header />
            {/* profile deiv */}
            <div className='mx-7'>
                <p className='font-extrabold font-sans text-slate-800 '>Account</p>
                <p className='font-sans text-slate-800'>Debabrata Giri</p>
            </div>
            <hr />
            {/* profile  */}
            <div className='w-[50%] flex flex-col justify-between border border-slate-300 h-[70%] items-center py-3 px-3 ml-auto mr-auto mt-2 '>
                <p className='font-Ubuntu text-2xl'>Profile Details</p>
                <div className='h-[60%]'>
                {profileData?.map(i => (
                    <div className='flex flex-row space-x-4 py-2 ml-auto mr-auto justify-between'>
                        <p className='w-1/2 font-Ubuntu text-slate-700 '>{i?.title}</p>
                        <p className='w-1/2 font-Ubuntu text-slate-700 '>{i?.value}</p>
                    </div>
                ))}
                </div>
                <button className='text-slate-50 bg-color3 p-3 w-[50%] font-bold text-lg'>Edit Profile</button>
            </div>
        </div>
    )
}

export default Profile
