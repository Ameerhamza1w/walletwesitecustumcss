import React from 'react'

const HomeContent = () => {
  return (
    <div>
      <div>
        <section className='hero' style={{backgroundImage:"url(walletbg.png)"}}>
          <div className="hero">
            <section className="hero-content">
                <h1 className="fade-in">Welcome to Wallter</h1>
                <p>Your trusted wallet platform</p>
                
                {/* Subheading */}
                <h2>Your ultimate destination for secure and seamless transactions</h2>
                
                {/* Features List */}
                <ul className="features-list">
                    <li>💼 Manage Your Digital Assets</li>
                    <li>🔒 Top-Notch Security</li>
                    <li>🚀 Fast and Reliable Transactions</li>
                    <li>🌍 Worldwide Accessibility</li>
                </ul>
                
              <button>Start Using Wallter</button>
            </section>
          </div>
        </section>
      </div>
    </div>        
  )
}

export default HomeContent
