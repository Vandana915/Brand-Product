const HeroSection=()=>{
    return(
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE ARE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button className="secondary-btn">Category</button>
                </div>
                <div className="shopping">
                    <p>Also available On</p>
                </div>
                <div className="brand-icon">
                    <img src="./images/flipkart.png" width="50px" height="50px"></img>
                    <img src="./images/Amazon.png" width="50px" height="50px"></img>
                </div>
            </div>

            <div className="hero-imgae">
                <img src="/images/Product.jpg" alt="Image" height="500px" width="500px"></img>
            </div>
        </main>
    );
}
export default HeroSection;