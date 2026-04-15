import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import Timeline from '../timeline/Timeline'
import Stats from '../stats/Stats'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:
            [
                {
                    index: true,
                    element: <HomePage />
                },
                {
                    path: "/timeline",
                    element: <Timeline />
                },
                {
                    path: "/stats",
                    element: <Stats />
                }
            ]
    }
])
