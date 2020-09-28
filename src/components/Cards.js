import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return (
        <div className='cards'>
            <h1>Check our products!</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/p1.jpg'
                            text='Hey dont know what to writte here, so go eat an apple'
                            label='Horror'
                            path='/services'
                        />
                        <CardItem
                            src='images/p2.jpg'
                            text='Just give us your money'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                    <ul className='cards__items'>
                        <CardItem
                            src='images/p3.jpg'
                            text='Gives you powers'
                            label='Mystery'
                            path='/services'
                        />
                        <CardItem
                            src='images/p4.jpg'
                            text='it will kill you'
                            label='Fun'
                            path='/products'
                        />
                        <CardItem
                            src='images/p5.jpg'
                            text='it will make you taller'
                            label='Adrenaline'
                            path='/sign-up'
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
