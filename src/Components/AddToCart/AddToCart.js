import './AddToCart.scss'

const AddToCart =({addToCartItem})=>{
    
        let addToCartItemResults = addToCartItem.map((item)=>{
            return(
                <div className="add-to-cart-item">
                    <img src={item.img} alt="" />
                    <h6>{item.title}</h6>  
                </div>   
            )
        })
    
        return(
            <div className="add-to-cart-wraper"> 
                <div className="cart-head">         
                    <h6><i className="fas fa-shopping-cart cart"></i>Your cart</h6>
                </div> 
                <div className="results">
                    {addToCartItemResults}    
                </div>         
            </div> 
        )
}
export default AddToCart;