import React, { useEffect ,useState } from "react"
import "./Style/ProductMapStyle.css"
import "./styling.css"
import Judy from './assetes/Judy2.jpg';
import { Link, useParams ,useNavigate , useLocation} from 'react-router-dom';

import { Filltre } from "./filtre";
// const { id } = useParams();

  // Scroll to the top when the component mounts
  
const ProductMap=()=>{
    const [myList, setMyList] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();
    const items = [
        { id: 1, name: 'Air Freshener' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0 },
        { id: 2, name: 'Glass Cleaner' ,describtion:"Judy Cleaner really cleans everything in the house", promo:50},
        { id: 3, name: 'Vinegar'  ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'Baking soda' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'Biological detergent' ,describtion:"Judy Cleaner really cleans everything in the house", promo:20},
        { id: 3, name: 'judy'  ,describtion:"Judy Cleaner really cleans everything in the house", promo:10},
        { id: 3, name: 'judy' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'judy' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'judy' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'judy' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'judy' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
        { id: 3, name: 'judy' ,describtion:"Judy Cleaner really cleans everything in the house", promo:0},
      ];
    //   const pagination=[0,1,2,3,4]
      const nbPage=10 
    const Curent=1
    var listPage=[]
    var i
    var k=1
    const reglePagination = (win) => {
        
        if (win != 0 && listPage[listPage.length - 1] != nbPage) {
            listPage=[]
            for (let i = win + 1; i <= nbPage && k !== 4; i++) {
            listPage.push(i);
            k++;
          }
        }
        setMyList([...listPage]);
      };
    const handleNavigation = (page) => {
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', page.toString());
        const newSearch = searchParams.toString();
        const newUrl = location.pathname + '?' + newSearch;
        navigate(newUrl);
      };

    useEffect(() => {
        
    
        reglePagination(Curent)
        
      }, []);
    console.log(listPage)
    // console.log(i)
    //   const checkPromo=(p)=>{
    //     return p!==0;
    //   }
    
    return(<div className="Am">
        <div className="theImg"></div>
        <Filltre/>
        <div className="theProducts">
            <div className="theTitle">
                <div className="klem">Daily Deals</div>
                <a href="">In Uno</a>
            </div>
            <div className="Products">
            {items.map(item => (    
        // <li key={item.id}>{item.name}</li>
                <div className="TheCart">
                    <div className="ThePic">
                        <img src={Judy} alt=""/>
                        {/* <!-- <div className="offre">-10%</div> --> */}
                        {/* {checkPromo(item.promo) &&( */}
                        { item.promo!=0 &&(

                            
                            <div className="Promo">Promo <label for=""
                            //  style="color: white;"
                            >-{item.promo}%</label> </div>
                            )
                        }

                    </div>
                    <div className="Name">{item.name}</div>
                    <div className="Name UU">{item.describtion}</div>
                    <div className="Price">
                        <div>Price:</div>
                        <div>20.000 dt</div>
                        {/* <!-- <div className="Promo">Promo <label for="" style="color: white;">-10%</label> </div> --> */}
                    </div>
                    <Link to={"/Product/"+item.id}>

                <button>Buy</button>
                    </Link>

                </div>
                ))}
                
            </div>
        </div>
        <div className="Pagination">
            <div className="TheButtons">

            <button onClick={()=>{
                reglePagination(Curent-1)
            }}>{"<"}</button>
            {myList.map(item=>(

                    <button onClick={()=>{handleNavigation(item)}}>{item}</button>
            ))
        }
            <button onClick={()=>{
                reglePagination(Curent+1)
            }}>{">"}</button>
            </div>
        </div>
    </div>

    )
}
export default ProductMap;