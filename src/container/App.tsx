/* eslint-disable react/jsx-pascal-case */
import Account_Info from "component/layout/header/Account_Info"

import { useState , useEffect } from 'react' ;

import axios from 'axios' ;



const App = () => {

  const [ data , set_Data ] = useState< any[] >( [] )  ;


  useEffect( () => {
    

    axios.get( "http://demo04.cchouse.com.tw/backend/public/index.php/api/basics" ).then( res => {

        const data = res.data ;

        
        set_Data( [ ...data , res.data ] )



        console.log( 'bbb' , data )



    } )
     
     
  } , [] ) ;

  
   return <div>

             <Account_Info />

             <hr className="m-10" />

             { data[0]['basic_id'] }

             
          </div>

} ;

export default App 
       
 