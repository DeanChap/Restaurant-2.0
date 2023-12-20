import React from 'react';

import './Header.css';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading 
        title='Chase the new flavour'
      />
      <h1 className='app__header-h1'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{ margin: '2rem 0'}}>
       Welcome to Gericht, where culinary excellence meets a warm, inviting ambiance.
       Our passion for exceptional food and memorable dining experiences sets us apart.
       Whether you're here for a casual meal or a special celebration, our attentive staff and stylish atmosphere create the perfect backdrop.
       Join us and savor a culinary journey that delights the senses.
      </p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>
  </div>
);

export default Header;
