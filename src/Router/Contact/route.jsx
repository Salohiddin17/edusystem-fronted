import './route.scss'
import React from 'react'

import Header from '../../Components/Header/route'
import Footer from '../../Components/Footer/route'


function Contact () {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

const Main = () => {
    return (
        <>
            <main className="main-contact">
                <div className="container">
                <h1>Contact</h1>
                    <div>
                        <span>Home</span>
                        <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 8L0 16L0 0L10 8Z" fill="#F28A4B"/>
                        </svg>
                        <span>Contact</span>
                    </div>
                </div>
            </main>
        </>
    )
}


export default Contact