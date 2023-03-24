import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import{Sweet_items, KuttuPoriyal_items,Poriyal,sidedish1_items,Payasam_items
    ,Meals_items,Nonveg_items,paan_items,Pickle_items,Raita_items} from './Catering_data';
const Meals =()=>{
    return(
        <div className="" id="lunch_menu_items">
                <div id="lunch_title">
                    <h2> Lunch</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                        <div className="text-center">
                            <h4> Meals </h4>
                        </div>
                        <div>
                            <table>
                                    <tr>
                                        <th>IMAGES</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Meals_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button> Add </button></td>
                                            </tr>
                                        );
                                    })}
                            </table>
                        </div>
                </div> 
    </div>
    );
}
function Kuttu_and_Poriyal(){
    return(
        <div className="" id="lunch_menu_items">
        <div id="lunch_title">
            <h2> Lunch</h2>
        </div>
        <div className="row">
        <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                <div className="text-center">
                    <h4> Kootu {'&'} </h4>
                </div>
                <div>
                    <table>
                            <tr>
                                <th>IMAGES</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="px-4"><ShoppingCartIcon/> </th>
                            </tr>
                            {KuttuPoriyal_items.map((value,key)=>{
                                return(
                                    <tr key={key}>
                                         <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                        <td id="menu_name">{value.name}</td>
                                        <td id="menu_price">{value.price}</td>
                                        <td> <button> Add </button></td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
        </div> 
        <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                <div className="text-center">
                    <h4> Poriyal </h4>
                </div>
                <div>
                    <table>
                            <tr>
                                <th>IMAGES</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="px-4"><ShoppingCartIcon/> </th>
                            </tr>
                            {Poriyal.map((value,key)=>{
                                return(
                                    <tr key={key}>
                                     <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                        <td id="menu_name">{value.name}</td>
                                        <td id="menu_price">{value.price}</td>
                                        <td> <button> Add </button></td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
        </div> 
        </div>
</div>
    );
}
function Lunch_sidedish()
{
    return(
        <div className="" id="lunch_menu_items">
        <div id="lunch_title">
            <h2> Lunch</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                <div className="text-center">
                    <h4> SideDish </h4>
                </div>
                <div>
                    <table>
                            <tr>
                                <th>IMAGES</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="px-4"><ShoppingCartIcon/> </th>
                            </tr>
                            {sidedish1_items.map((value,key)=>{
                                return(
                                    <tr key={key}>
                                        <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                        <td id="menu_name">{value.name}</td>
                                        <td id="menu_price">{value.price}</td>
                                        <td> <button> Add </button></td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
        </div> 
</div>        
    );
}
function Payasam(){
   return(
    <div className="" id="lunch_menu_items">
    <div id="lunch_title">
        <h2> Lunch</h2>
    </div>
    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto " id="lunch_items">
            <div className="text-center">
                <h4> Payasam </h4>
            </div>
            <div>
                <table>
                        <tr>
                            <th>IMAGES</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th className="px-4"><ShoppingCartIcon/> </th>
                        </tr>
                        {Payasam_items.map((value,key)=>{
                            return(
                                <tr key={key}>
                                    <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                    <td id="menu_name">{value.name}</td>
                                    <td id="menu_price"> {value.price}</td>
                                    <td> <button> Add </button></td>
                                </tr>
                            );
                        })}
                </table>
            </div>
    </div> 
</div>
   )
}
function Paan()
{
    return(
        <div className="" id="lunch_menu_items">
        <div id="lunch_title">
            <h2> Lunch</h2>
        </div>
        <div className="col-12 col-sm-12 col-md-10 col-xl-8 mx-auto" id="lunch_items">
                <div className="text-center">
                    <h4> Paan </h4>
                </div>
                <div>
                    <table>
                            <tr>
                                <th>IMAGES</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="px-4"><ShoppingCartIcon/> </th>
                            </tr>
                            {paan_items.map((value,key)=>{
                                return(
                                    <tr key={key}>
                                        <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                        <td id="menu_name">{value.name}</td>
                                        <td id="menu_price">{value.price}</td>
                                        <td> <button> Add </button></td>
                                    </tr>
                                );
                            })}
                    </table>
                </div>
        </div> 
</div>
    )
}
function Sweet2(){
    return(
        <div className="" id="lunch_menu_items">
            <div id="lunch_title">
                <h2> Lunch</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                            <div className="text-center">
                                <h4>Sweets</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th>IMAGES</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Sweet_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
                </div>
        </div>

    )
}
function Pickle(){
    return(
        <>
           <div className="" id="lunch_menu_items">
            <div id="lunch_title">
                <h2> Lunch</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                            <div className="text-center">
                                <h4>Pickle</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th>IMAGES</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Pickle_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
                </div>
        </div>
        </>
    )
}
function Raita(){
    return(
        <>
      <div className="" id="lunch_menu_items">
            <div id="lunch_title">
                <h2> Lunch</h2>
            </div>
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-10 col-xl-6 mx-auto" id="lunch_items">
                            <div className="text-center">
                                <h4>Raita</h4>
                            </div>
                            <div>
                                <table>
                                    <tr>
                                        <th>IMAGES</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th className="px-4"><ShoppingCartIcon/> </th>
                                    </tr>
                                    {Raita_items.map((value,key)=>{
                                        return(
                                            <tr key={key}>
                                                <td> <img src={value.images} alt="" width={100} height={100}/> </td>
                                                <td id="menu_name">{value.name}</td>
                                                <td id="menu_price">{value.price}</td>
                                                <td> <button> Add </button></td>
                                            </tr>
                                        );
                                    })}
                                </table>
                            </div>
                    </div>
                </div>
        </div>
        </>
    )
}
export {Kuttu_and_Poriyal,Lunch_sidedish,Payasam,Paan,Sweet2,Pickle,Raita};
export default Meals;
