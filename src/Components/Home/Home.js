import React from 'react'
import Home_css from './Home.module.css'
import img1 from './images/Home.png'


function Home() {
    return (
        <div className={Home_css.main_div}>

            <div className={Home_css.left_div}>
                <h4 className={Home_css.left_head1}>Welcome to my portfolio website <span className={Home_css.emoji}>👋</span></h4>
                <h1 className={Home_css.left_head2}>Hey We Are Developers</h1>
                <h1 className={Home_css.left_head3}>We Are Animation</h1>
                <p className={Home_css.left_pera}>Building a successful product is a challenge. I am highly energetic in user experience design, interfaces and web development.</p>
                <button className={Home_css.btn_get}>Get Started</button>
                


























            </div>

            <div className={Home_css.right_div}>
                <img src={img1} alt="Team" className={Home_css.img1} />
            </div>

        </div>
    )
}

export default Home
