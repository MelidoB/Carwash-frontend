
import React from 'react';
import Header from './Header';
import MainPicture from './MainPicture';
import CategoryList from './CategoryList';
import InfoSection from './InfoSection';
import Footer from './Footer';
import '../static/css/HomePage.css';

function HomePage() {
 
    return (
        <div className="home-page">
            <Header />

            <MainPicture />


            <div className="category-section">
                <h2>Services</h2>
                <CategoryList />
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;
