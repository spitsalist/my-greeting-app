function ShoppingList({items}) {
    return (
        <div>
            <h2>List of items</h2>
            {items.length > 0 ? (
                <ul>
                 {items.map((items, index)=> (
                   <li key={index}>{items}</li>
                 ))}
                </ul>
            ) : (
                <p>List of items is empty</p>
            )}
        </div>
    );
}
export default ShoppingList;