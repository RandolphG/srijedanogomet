import React from "react";
import "./styles/_dashboardStyles.scss";
import { DashboardPageViewModel } from "./dashboardPageViewModel";

/**
 * Dashboard page
 */
const DashboardPage = () => {
  const { categories, products } = DashboardPageViewModel();

  const ProductRating = () => (
    <div className="product-rating">
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M239.166,97.41117A16.37036,16.37036,0,0,0,224.63477,86.044l-59.39063-4.15625L143.21289,26.41117A16.33117,16.33117,0,0,0,127.99414,15.9971h-.01562A16.324,16.324,0,0,0,112.791,26.41117L90.43164,82.208,31.36914,86.044A16.37036,16.37036,0,0,0,16.83789,97.41117a16.68222,16.68222,0,0,0,5.15625,18.0625l45.4375,38.40625L53.916,207.044a18.37492,18.37492,0,0,0,7.01562,19.51562,17.83088,17.83088,0,0,0,20.0625.625l46.875-29.69531c.0625-.04687.125-.07812.26563,0l50.4375,31.95313a16.14026,16.14026,0,0,0,18.20312-.5625,16.64744,16.64744,0,0,0,6.35938-17.67969L188.77539,153.1221l45.23438-37.64843A16.68222,16.68222,0,0,0,239.166,97.41117Z" />
      </svg>
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M239.166,97.41117A16.37036,16.37036,0,0,0,224.63477,86.044l-59.39063-4.15625L143.21289,26.41117A16.33117,16.33117,0,0,0,127.99414,15.9971h-.01562A16.324,16.324,0,0,0,112.791,26.41117L90.43164,82.208,31.36914,86.044A16.37036,16.37036,0,0,0,16.83789,97.41117a16.68222,16.68222,0,0,0,5.15625,18.0625l45.4375,38.40625L53.916,207.044a18.37492,18.37492,0,0,0,7.01562,19.51562,17.83088,17.83088,0,0,0,20.0625.625l46.875-29.69531c.0625-.04687.125-.07812.26563,0l50.4375,31.95313a16.14026,16.14026,0,0,0,18.20312-.5625,16.64744,16.64744,0,0,0,6.35938-17.67969L188.77539,153.1221l45.23438-37.64843A16.68222,16.68222,0,0,0,239.166,97.41117Z" />
      </svg>
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M239.166,97.41117A16.37036,16.37036,0,0,0,224.63477,86.044l-59.39063-4.15625L143.21289,26.41117A16.33117,16.33117,0,0,0,127.99414,15.9971h-.01562A16.324,16.324,0,0,0,112.791,26.41117L90.43164,82.208,31.36914,86.044A16.37036,16.37036,0,0,0,16.83789,97.41117a16.68222,16.68222,0,0,0,5.15625,18.0625l45.4375,38.40625L53.916,207.044a18.37492,18.37492,0,0,0,7.01562,19.51562,17.83088,17.83088,0,0,0,20.0625.625l46.875-29.69531c.0625-.04687.125-.07812.26563,0l50.4375,31.95313a16.14026,16.14026,0,0,0,18.20312-.5625,16.64744,16.64744,0,0,0,6.35938-17.67969L188.77539,153.1221l45.23438-37.64843A16.68222,16.68222,0,0,0,239.166,97.41117Z" />
      </svg>
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M239.166,97.41117A16.37036,16.37036,0,0,0,224.63477,86.044l-59.39063-4.15625L143.21289,26.41117A16.33117,16.33117,0,0,0,127.99414,15.9971h-.01562A16.324,16.324,0,0,0,112.791,26.41117L90.43164,82.208,31.36914,86.044A16.37036,16.37036,0,0,0,16.83789,97.41117a16.68222,16.68222,0,0,0,5.15625,18.0625l45.4375,38.40625L53.916,207.044a18.37492,18.37492,0,0,0,7.01562,19.51562,17.83088,17.83088,0,0,0,20.0625.625l46.875-29.69531c.0625-.04687.125-.07812.26563,0l50.4375,31.95313a16.14026,16.14026,0,0,0,18.20312-.5625,16.64744,16.64744,0,0,0,6.35938-17.67969L188.77539,153.1221l45.23438-37.64843A16.68222,16.68222,0,0,0,239.166,97.41117Z" />
      </svg>
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path d="M239.166,97.41117A16.37036,16.37036,0,0,0,224.63477,86.044l-59.39063-4.15625L143.21289,26.41117A16.33117,16.33117,0,0,0,127.99414,15.9971h-.01562A16.324,16.324,0,0,0,112.791,26.41117L90.43164,82.208,31.36914,86.044A16.37036,16.37036,0,0,0,16.83789,97.41117a16.68222,16.68222,0,0,0,5.15625,18.0625l45.4375,38.40625L53.916,207.044a18.37492,18.37492,0,0,0,7.01562,19.51562,17.83088,17.83088,0,0,0,20.0625.625l46.875-29.69531c.0625-.04687.125-.07812.26563,0l50.4375,31.95313a16.14026,16.14026,0,0,0,18.20312-.5625,16.64744,16.64744,0,0,0,6.35938-17.67969L188.77539,153.1221l45.23438-37.64843A16.68222,16.68222,0,0,0,239.166,97.41117Z" />
      </svg>
    </div>
  );

  const ProductAddButton = () => (
    <button className="product-btn product-btn--add">
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </button>
  );

  const ProductFavoritesButton = () => (
    <button className="product-btn product-btn--favorite">
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <path
          d="M133.65683,211.88227l81.0323-81.0322c19.9104-19.91038,22.84784-52.666,4.00583-73.59029a52.0026,52.0026,0,0,0-75.46451-2.02934L127.99994,70.46082,114.85007,57.3109C94.93972,37.40047,62.18409,34.463,41.25979,53.305a52.00261,52.00261,0,0,0-2.02934,75.46452l83.11268,83.11272A8,8,0,0,0,133.65683,211.88227Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </button>
  );

  const ProductInfo = ({ name, imgUrl, price }: any) => (
    <li className="product-list-item">
      <article className="product">
        <div className="product-image">
          <img alt="product" src={imgUrl} />
        </div>
        <div className="product-content">
          <h3 className="product-title">{name}</h3>
          <ProductRating />
          <div className="product-info">
            <span className="product-price">{price}</span>
            <div className="product-btn-group">
              <ProductFavoritesButton />
              <ProductAddButton />
            </div>
          </div>
        </div>
      </article>
    </li>
  );

  const ProductList = () => (
    <ul className="product-list">
      {products.map((product, idx) => (
        <ProductInfo
          key={idx}
          name={product.name}
          imgUrl={product.imgUrl}
          price={product.price}
        />
      ))}
    </ul>
  );

  const ProductCategoryList = () => (
    <ul className="category-list">
      {categories.map((category, idx) => (
        <li key={idx} className="category-list-item">
          <a href="#" className="category">
            {category.name}
          </a>
        </li>
      ))}
    </ul>
  );

  const ProductHeader = () => (
    <div className="section-header">
      <h2 className="section-title">Bestsellers</h2>
      <span className="section-icon">
        <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="144 56 216 128 144 200"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </span>
    </div>
  );

  const ProductCard = () => (
    <div className="card">
      <div className="card-content">
        <h2 className="card-title">Music column</h2>
        <span className="card-subtitle">
          New models
          <svg
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <line
              x1="40"
              y1="128"
              x2="216"
              y2="128"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <polyline
              points="144 56 216 128 144 200"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
        </span>
      </div>
    </div>
  );

  const ProductFooter = () => (
    <footer className="app-footer">
      <nav className="menu-bar">
        <a href="#" className="menu-bar-item menu-bar-item--active">
          <svg
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <path
              d="M213.3815,109.61945,133.376,36.88436a8,8,0,0,0-10.76339.00036l-79.9945,72.73477A8,8,0,0,0,40,115.53855V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V115.53887A8,8,0,0,0,213.3815,109.61945Z"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="menu-bar-item-text">Home</span>
        </a>
        <a href="#" className="menu-bar-item">
          <svg
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <circle
              cx="116"
              cy="116"
              r="84"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
            <line
              x1="175.39356"
              y1="175.40039"
              x2="223.99414"
              y2="224.00098"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="menu-bar-item-text">Search</span>
        </a>
        <a href="#" className="menu-bar-item">
          <svg
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <circle cx="80" cy="216" r="16" />
            <circle cx="184" cy="216" r="16" />
            <path
              d="M42.28575,72H221.71429l-26.39873,92.39554A16,16,0,0,1,179.93118,176H84.06882a16,16,0,0,1-15.38438-11.60446L32.51492,37.80223A8,8,0,0,0,24.82273,32H8"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="menu-bar-item-text">Cart</span>
        </a>
        <a href="#" className="menu-bar-item">
          <svg
            width="192"
            height="192"
            fill="currentColor"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none" />
            <circle
              cx="128"
              cy="96"
              r="64"
              fill="none"
              stroke="currentColor"
              stroke-miterlimit="10"
              strokeWidth="16"
            />
            <path
              d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            />
          </svg>
          <span className="menu-bar-item-text">Profile</span>
        </a>
      </nav>
    </footer>
  );

  const ProductCategoryHeader = () => (
    <div className="section-header">
      <h2 className="section-title">Categories</h2>
      <span className="section-icon">
        <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none" />
          <line
            x1="40"
            y1="128"
            x2="216"
            y2="128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
          <polyline
            points="144 56 216 128 144 200"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
          />
        </svg>
      </span>
    </div>
  );

  const ProductNotificationButton = () => (
    <button className="app-header-btn app-header-btn--notification">
      <svg width="192" height="192" fill="currentColor" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none" />
        <line
          x1="96"
          y1="224"
          x2="160"
          y2="224"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <path
          d="M56.20305,104A71.899,71.899,0,0,1,128.5484,32.002c39.58967.29432,71.25651,33.20133,71.25651,72.90185V112c0,35.81563,7.49325,56.59893,14.093,67.95814A7.999,7.999,0,0,1,207.01628,192H48.98365A7.99908,7.99908,0,0,1,42.103,179.95641c6.60328-11.35959,14.1-32.1426,14.1-67.95641Z"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </button>
  );

  return (
    <div>
      <div className="app">
        <header className="app-header">
          <button className="app-header-btn app-header-btn--active">
            <svg
              width="192"
              height="192"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <rect width="256" height="256" fill="none" />
              <line
                x1="40"
                y1="128"
                x2="216"
                y2="128"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="40"
                y1="64"
                x2="216"
                y2="64"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
              <line
                x1="40"
                y1="192"
                x2="216"
                y2="192"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="16"
              />
            </svg>
          </button>
          <ProductNotificationButton />
        </header>
        <main className="app-body">
          <section className="section">
            <ProductHeader />
            <ProductList />
          </section>
          <section className="section">
            <ProductCategoryHeader />
            <ProductCategoryList />
          </section>
          <section className="section">
            <div className="section-body">
              <ProductCard />
            </div>
          </section>
        </main>
        <ProductFooter />
      </div>
    </div>
  );
};

export default DashboardPage;
