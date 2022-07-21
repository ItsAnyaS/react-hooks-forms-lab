import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {

  const [itemName, setItemName] = React.useState('')
  const [itemCatagory, setItemCatagory] = React.useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
      console.log('form submitted')
      const newItem = {
        name: itemName,
        catagory: itemCatagory,
        id: uuid()
      }
      console.log(newItem)
      props.onItemFormSubmit(newItem);
  }
  

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={(e)=> {
          setItemName(e.target.value)
        }} />
      </label>

      <label>
        Category:
        <select name="category" onChange={(e)=> {setItemCatagory(e.target.value)}}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
