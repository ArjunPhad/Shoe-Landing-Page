const HeroSection = () => {
  return (
    <main className="Hero-container">
      <div className="Hero">
        <div className="Hero-content">
          <h1> YOUR FEET DESERVE THE BEST</h1>
          <p>
            Your feet are one of the most important parts of your body. They
            support your weight, help you move, connect you to the ground and
            enable you to perform various activities.
          </p>
        </div>

        <div className="Hero-btn">
          <button>Shop Now</button>
          <button className="secoundary-btn">Category</button>
        </div>
        <div className="shoping">
          <p>Also Available On </p>
          <div className="brand-icon">
            <img src="/images/amazon.png" alt="amazon-icon" />
            <img src="/images/flipkart.png" alt="flipkart-icon" />
          </div>
        </div>
      </div>
      <div className="Hero-image">
        <img src="/images/shoe_image.png" alt="shoe-img" />
      </div>
    </main>
  );
};
export default HeroSection;
