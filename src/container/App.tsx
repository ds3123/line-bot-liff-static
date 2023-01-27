/* eslint-disable react/jsx-pascal-case */
import Account_Info from "component/layout/header/Account_Info"

import { useState , useEffect } from 'react' ;

import axios from 'axios' ;

// import {
//   MenuIcon ,
//   SearchIcon , 
//   ShoppingCartIcon
// } from "@heroicons/react/outline" ;



const App = () => {

  const [ data , set_Data ] = useState< any[] >( [] )  ;


  useEffect( () => {

    axios.get( "https://fakestoreapi.com/products" ).then( res => {

        set_Data( res.data )

    } )
     
  } , [] ) ;

  
   return <div>

             <Account_Info />

             <hr className="m-10" />

             基礎 dd : { data[3]?.id }

             
          </div>

} ;

export default App 
       
 