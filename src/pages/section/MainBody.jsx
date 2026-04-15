import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useFriends } from '../../contex/FriendContex'

const MainBody = () => {
    const { friends, loading } = useFriends()
    const navigate = useNavigate()

    const getStatusColor = (status) => {
        switch (status) {
            case "On-Track":
                return "bg-green-800 text-center text-white"
            case "Almost Due":
                return "bg-yellow-600 text-center text-white"
            case "Overdue":
                return "bg-red-600 text-center text-white"

        }
    }
    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <span className="loading loading-spinner loading-lg text-green-600"></span>
            </div>
        )
    }

    return (
        <div className="w-[70%] mx-auto border-t border-gray-300 pt-10 pb-20">
            <h3 className='text-6 font-semibold'>Your Friends</h3>
            <div className="grid lg:grid-cols-4 text-center items-center md:grid-cols-3 sm:grid-cols-2 gap-6">

                {friends.map(friend => (
                    <div
                        key={friend.id}
                        onClick={() => navigate(`/friend/${friend.id}`)}

                        className="cursor-pointer bg-white shadow-md rounded-xl p-4 hover:shadow-xl transition"
                    >


                        <img
                            src={friend.picture}
                            className="w-20 h-20  rounded-full mx-auto object-cover" />


                        <h2 className="text-lg font-bold mt-3">
                            {friend.name}
                        </h2>

                        <p className="text-sm text-gray-500">
                            {friend.days_since_contact}d ago
                        </p>

                        <div className="flex  justify-center flex-wrap gap-2 mt-2">
                            {friend.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="text-xs bg-green-100 px-2 py-1 rounded-full"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div
                            className={`mt-3 text-xs px-3 py-1 inline-block rounded-full font-semibold ${getStatusColor(friend.status)}`}
                        >
                            {friend.status}
                        </div>

                    </div>

                ))}



            </div>
        </div>
    )

}

export default MainBody