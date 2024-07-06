import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
             
          </ul>
          <ul className='cards__items'>
          <CardItem
              src='images/img-11.jpg'
              text=' It is known for its stunning architecture, vibrant culture, and rich history.'
              label='Historical'
              path='/services'
            />
            <CardItem
              src='images/img-10.jpg'
              text='Taj Mahal was commissioned by Emperor Shah Jahan in memory of his beloved wife'
              label='Historical'
              path='/products'
            />
            <CardItem
              src='images/img-12.jpg'
              text='Dudhsagar Falls is situated in the Bhagwan Mahavir Wildlife Sanctuary in the Western Ghats of Goa'
              label='Adrenaline'
              path='/sign-up'
            />
            </ul>
            <ul className='cards__items'>
          <CardItem
              src='images/img-17.jpg'
              text='Maldives is a tropical paradise located in the Indian Ocean, southwest of Sri Lanka and India.'
              label='Adventures'
              path='/services'
            />
            <CardItem
              src='images/img-18.jpg'
              text='Lakshadweep, also known as the Laccadive Islands, is a group of islands in the Arabian Sea.'
              label='Historical'
              path='/products'
            />
            <CardItem
              src='images/img-16.jpg'
              text='Golden Temple is the holiest Gurdwara and the most important pilgrimage site of Sikhism.'
              label='Historical'
              path='/sign-up'
            />
            </ul>
            <ul className='cards__items'>
          <CardItem
              src='images/img-15.jpg'
              text='Himalayas attract adventurers and mountaineers from around the world seeking to conquer its peaks'
              label='Adventures'
              path='/services'
            />
            <CardItem
              src='images/img-1.jpg'
              text='Rajasthan, often referred to as the "Land of Kings" and for its rich cultural heritage, historical forts,'
              label='Historical'
              path='/products'
            />
            <CardItem
              src='images/img-20.jpg'
              text='Kashi, also known as Varanasi or Benares and Lord Shiva is referred to as the "City of Light.'
              label='Historical'
              path='/sign-up'
            />
            </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
