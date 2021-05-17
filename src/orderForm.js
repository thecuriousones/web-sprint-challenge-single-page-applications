import React from 'react'


export default function OrderForm(props) {
    const { 
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = (event) => {
        const { name, value, checked, type } = event.target;
        const inputValue = type === "checkbox" ? checked : value;
        change(name, inputValue);
    }




    return (
        <form id='pizza-form' onSubmit={onSubmit}>
            <div>
                <img 
                    className='form-image'
                    src='https://images.unsplash.com/photo-1542834369-f10ebf06d3e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                    alt='sharing a pizza'
                />
                <h2 className='header'>Build Your Own Pizza</h2>
            </div>

            <div className='form-container'>
                <h3>🔻START HERE🔻</h3>
                    <section id='size-dropdown'>
                        <label>Choice of size&nbsp;
                            <select
                                onChange={onChange}
                                value={values.size}
                                name='size'
                            >
                                <option value=''>- Select a size -</option>
                                <option value='Personal'>Personal</option>
                                <option value='Medium'>Medium</option>
                                <option value='Large'>Large</option>
                                <option value='Extra Large'>Extra Large</option>
                            </select>
                        </label>
                    </section>
        
                    <section className='radio-buttons'>
                        <h4>CHOOSE A SAUCE: </h4>
                        <label>Marinara Sauce
                            <input type="radio" value='marinara sauce' onChange={onChange} name="sauce" checked={values.sauce === 'marinara sauce'}/>
                        </label>

                        <label>Alfredo Sauce
                            <input type="radio" value='alfredo sauce' onChange={onChange} name="sauce" checked={values.sauce === 'alfredo sauce'}/> 
                        </label>

                        <label>Roasted Garlic Sauce
                            <input type="radio" value='roasted garlic sauce' onChange={onChange} name="sauce" checked={values.sauce === 'roasted garlic sauce'}/>
                        </label>

                        <label>BBQ Sauce
                            <input type="radio" value='bbq sauce' onChange={onChange} name="sauce" checked={values.sauce === 'bbq sauce'}/>
                        </label>
                    </section>

                    <section className='checkboxes'>
                        <h4>CHOOSE UP TO 10 TOPPINGS: </h4>
                        <label>Pepperoni
                            <input type="checkbox" checked={values.pepperoni} name='pepperoni' onChange={onChange} />
                        </label>

                        <label>Chicken
                            <input type="checkbox" checked={values.chicken} name='chicken' onChange={onChange} />
                        </label>

                        <label>Ham
                            <input type="checkbox" checked={values.ham} name='ham' onChange={onChange} />
                        </label>

                        <label>Banna Pepper
                            <input type="checkbox" checked={values.banana_pepper} name='banana_pepper' onChange={onChange} />
                        </label>

                        <label>Onions
                            <input type="checkbox" checked={values.onions} name='onions' onChange={onChange} />
                        </label>

                        <label>Green Pepper
                            <input type="checkbox" checked={values.green_pepper} name='green_pepper' onChange={onChange} />
                        </label>

                        <label>Diced Tomatoes
                            <input type="checkbox" checked={values.diced_tomatoes} name='diced_tomatoes' onChange={onChange} />
                        </label>

                        <label>Spinach
                            <input type="checkbox" checked={values.spinach} name='spinach' onChange={onChange} />
                        </label>

                        <label>Pineapple
                            <input type="checkbox" checked={values.pineapple} name='pineapple' onChange={onChange} />
                        </label>

                        <label>Black Olives
                            <input type="checkbox" checked={values.black_olives} name='black_olives' onChange={onChange} />
                        </label>
                    </section>

                    <section className='text-inputs'>
                        <label>Name&nbsp; 
                            <input 
                                value={values.name} 
                                onChange={onChange} 
                                name="name" 
                                type="text" 
                                placeholder="type here"
                            />  
                        </label><br/> <br/>

                        <label>Phone&nbsp; 
                            <input 
                                value={values.phone} 
                                onChange={onChange} 
                                name="phone" 
                                type="text" 
                                placeholder="type here"
                            />  
                        </label><br/> <br/>
                    </section>

                    <section id='special-text'>
                        <label>Special Instructions&nbsp; 
                            <input 
                                value={values.instructions} 
                                onChange={onChange} 
                                name="instructions" 
                                type="text" 
                                placeholder="type here"
                            />  
                        </label><br/> <br/>
                    </section>
                    
                    <section>
                        <button disabled={disabled} id='order-button'>ADD TO ORDER</button>
                        <div>
                            <div>{errors.size}</div>
                            <div>{errors.sauce}</div>
                            <div>{errors.instructions}</div>
                            <div>{errors.name}</div>
                            <div>{errors.phone}</div>
                        </div>
                    </section>
            </div>
        </form>
    )
}