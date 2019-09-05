<div id="body">
            
<div id='MainDish'className="title">
    <h1>Main Dishes</h1>
    <p>(taxes are charged seperately)</p>
    <h3>Rice plates are served with rice and beans, cabbage and sweet fried plantains.
Roti plates are served with curried potatoes.</h3>
    </div>
<div className="holds">    
    {this.getMainDish()}
</div>

<div id='Sides' className="title">
    <h1>Sides & Sauces</h1>
</div >
<div className="holds">    
    {this.getSideDish()}
</div>

    <div id='Sweets' className="title">
        <h1 >Sweets</h1>
    </div>
<div className="holds">    
    {this.getSweets()}
</div>

<div id='Drinks' className="title">
    <h1 >Drinks</h1>
</div>
<div className="holds">
    {this.getDrinks()}
</div>
</div>