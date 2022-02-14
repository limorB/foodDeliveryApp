import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const HeaderCartButton = (props) => {
  //now the headter will be reavlutaed when ever the context chaned
  const cartCtx = useContext(CartContext)
  const SumOfCartItems = cartCtx.items.reduce((currSum,item)=> {
    return currSum +item.amount
  }, 0)

  return (
    <button className={classes.button}onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{SumOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;