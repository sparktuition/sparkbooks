import React from "react";
import "./RetreatCuisine.css";

const RetreatCuisine: React.FC = () => (
  <section className="retreat-cuisine-section theme-rose parallax-bg" data-aos="fade-up" data-aos-duration="900">
    <div className="retreat-cuisine-inner">
      <h2 className="retreat-cuisine-title">Delicious and Healthy Cuisine</h2>
      <div className="retreat-cuisine-content stagger-list">
        <p>
          At the retreat, you’ll enjoy a delightful culinary experience with a variety of healthy and delicious meals. From wholesome breakfasts to energizing lunches, and from tasty snacks to nourishing dinners, every meal is crafted to keep you feeling your best.
        </p>
        <p>
          You’ll savor fresh, local ingredients and flavors that make each dining experience a pleasure. Our chefs focus on nutrition, taste, and presentation, ensuring every bite is memorable and supports your creative energy.
        </p>
        <ul className="cuisine-list">
          <li className="float-icon">Wholesome Breakfasts</li>
          <li className="float-icon">Energizing Lunches</li>
          <li className="float-icon">Tasty Snacks</li>
          <li className="float-icon">Nourishing Dinners</li>
          <li className="float-icon">Fresh Local Ingredients</li>
        </ul>
      </div>
    </div>
  </section>
);

export default RetreatCuisine;
