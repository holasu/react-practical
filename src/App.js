
import './App.css'
import ProductData from "./ProductData"
import Product from "./Product"


function App(){
  
      const productCommponents = ProductData.map( item => < Product  key={item.id} products={item}/>)

      return(
        <div className="App">
              {productCommponents}
        </div>
      );
}

export default App;