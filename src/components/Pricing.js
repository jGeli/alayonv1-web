import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Pricing</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
                <h3>REGULAR</h3>
                <h4>₱180</h4>
                <p>8 kilogram / Load</p>
                <ul className='pricing__container-features'>
                  <li>Pick-up in any location.</li>
                  <li>Wash Dry and Fold.</li>
                  <li>Delivery in any location in a single day.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                <h3>CUSTOM</h3>
                <h4></h4>
                <p>OPTIONS</p>
                <ul className='pricing__container-features'>
                <li>Pick-up in any location.</li>
                  <li>Customizable Laundry Options.</li>
                  <li>Delivery in any location in a single day.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Choose Plan
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                <h3>EXPRESS</h3>
                <h4>+ ₱100</h4>
                <p>Additional</p>
                <ul className='pricing__container-features'>
                <li>Pick-up in any location.</li>
                  <li>Customizable Laundry Options.</li>
                  <li><span style={{color: '#f00946'}}>Guaranted!</span> Delivered back in 3-5 hours.</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Choose Plan
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
