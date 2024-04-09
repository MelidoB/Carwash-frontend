import React from 'react';
import '../static/css/CategoryList.css';
import image1 from '../static/images/dealers/1.png';
import image2 from '../static/images/dealers/2.webp'
import image3 from '../static/images/dealers/3.jpg'
import image4 from '../static/images/dealers/4.jpg'
import image5 from '../static/images/dealers/5.jpg'
import image6 from '../static/images/dealers/6.jpg'
import image7 from '../static/images/dealers/7.jpg'
import image8 from '../static/images/dealers/8.jpg'


import { Link } from 'react-router-dom';

function CategoryList() {
  const categories = [
    { 
      name: 'RapidLux Detailing', 
      icon: image1,  
      linkName: '/repairservice'
    },
    { name: 
      'The Wash Club', 
      icon: image2,
      linkName: '/repairservice'
    },
    { name: 'USA Car Wash',
     icon: image3,
     linkName: '/repairservice'
    },
    { 
      name: 'Tinker Auto Detailing', 
      icon: image4,
      linkName: '/repairservice'
    },
    { name: 'David’s Auto Repair', 
    icon: image5,
    linkName: '/repairservice' 
  },
    { name: 'Sean’s Auto Spa', 
    icon: image6,
    linkName: '/repairservice'
  },
    { name: 'Ultimate Car Wash', 
    icon: image7,
    linkName: '/repairservice'
  },
    { name: 'Dash Mobile Detailing', 
    icon: image8,
    linkName: '/repairservice' 
    
  },
    ];

  return (
    <div className="category-list">
      {categories.map((category, index) => (
        <div key={index} className="card" style={{width: "18rem"}}>
          <Link to={category.linkName}> 
            <img src={category.icon} className="card-img-top" alt={`${category.name} Icon`} />
            <div className="card-body">
              <p className="card-text">{category.name}</p>
            </div>
          </Link>
          
        </div>
        
      ))}
      
      <a href="/PopularDealers" class="btn btn-primary btn-lg " tabindex="-1" role="button" aria-disabled="true">View more</a>
        

    </div>
    
  );
}

export default CategoryList;