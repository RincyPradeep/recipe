import React from 'react'
import './Hero.scss';

function Hero() {
    return (
        <div className="hero">
            <div className="hero-content">
                <h1>Its all about good food & taste</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda veniam ipsum corporis necessitatibus suscipit consequatur illum officia dicta!</p>
            </div>
            {/* <img src="https://images.unsplash.com/photo-1514995669114-6081e934b693?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI5fHxmb29kfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" /> */}
            <img src="/hero.jpg" alt="banner" style={{height:"80vh"}}/>
            
        </div>
    )
}

export default Hero
