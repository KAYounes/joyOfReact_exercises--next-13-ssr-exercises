'use client';
import React from 'react';

import DATA from './data';
import reducer from './reducer';
import StoreItem from './StoreItem';
import CheckoutFlow from './CheckoutFlow';
import './styles.css';

function CheckoutExercise() {
  const [items, dispatch] = React.useReducer(
    reducer,
    null
  );
  console.log(items)

  React.useEffect(function(){
    const cartJSON = window.localStorage.getItem('cart')
    const cart = JSON.parse(cartJSON)
    // if(cart instanceof Array) 
    dispatch({
      type: 'load-cart',
      cart
    })
  }, [])

  React.useEffect(function(){
    if(items === null) return
    
    window.localStorage.setItem('cart', JSON.stringify(items))
  }, [items])

  return (
    <>
      <h1>Neighborhood Shop</h1>

      <main>
        <div className="items">
          {DATA.map((item) => (
            <StoreItem
              key={item.id}
              item={item}
              handleAddToCart={(item) => {
                dispatch({
                  type: 'add-item',
                  item,
                });
              }}
            />
          ))}
        </div>

        <CheckoutFlow
          items={items}
          taxRate={0.15}
          handleDeleteItem={(item) =>
            dispatch({
              type: 'delete-item',
              item,
            })
          }
        />
      </main>
    </>
  );
}

export default CheckoutExercise;
