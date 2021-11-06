import React from 'react'
import Toggler from './Toggler'

function Menu() {

    const menu = `Trout with gruyere asparagus, Cordon Bleu with scalloped potatoes, or stuffed eggplant with spinach and feta`;
    return (
            <Toggler defaultOnValue={true} render={
                (on, toggle) => (
                    <div>
                        <button
                            onClick={toggle}
                        >menu</button>
                            {on ? menu : "show menu"}     
                    </div>
                )         
            }/>
        )
       
}

export default Menu
