import React from 'react'
import Player from './player.component'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { useDispatch,useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as CartActions from '../../../../APIController/action-creators/cart.action-creators'
import { State } from '../../../../APIController/reducers/root.reducer'
import useInCart from '../../../../hooks/useInCart'

const Hero:React.FC<{image:IGatsbyImageData}> = ({image}) => {

  const { cart } = useSelector((state:State)=> state.cart)
  const { current } = useSelector((state:State)=> state.player)
  const [isInCart,setIsInCart] = useInCart(current.id)
  const dispatch = useDispatch()
  const cartActions = bindActionCreators(CartActions,dispatch)

  return (
    <div className='beats__detail-hero'>
      <Player image={image} />
      <div className="beats__detail-hero-btn-group">
        <button>
          <i className="fa fa-download"></i>
        </button>
        <button onClick={()=>cartActions.handleAddToCart(1,current,cart)}><i className="fa fa-cart"></i> {!isInCart ? 'Add To Cart' : 'In Cart'}</button>
      </div>
    </div>
  )
}

export default Hero
