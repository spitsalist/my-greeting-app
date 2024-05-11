import Greeting from "./Greeting";
import ShoppingList from "./ShoppingList";
import OrderStatus from "./OrderStatus";

function App() {
  const items = ['bread', 'milk', 'eggs'];

  const orders = [
  { orderId: 1, status: 'On my way' },
  { orderId: 2, status: ' Pending'},
  { orderId: 3, status: 'Shipped'}
];
  
  
  return (
    <div>
      <Greeting name='Wasea'/>
      <ShoppingList items={items}/>
       <h1>Order Status</h1> 
       { orders.map((order) => <OrderStatus orderId={order.orderId} status={order.status} />) }

    </div>

  );
}

export default App;
