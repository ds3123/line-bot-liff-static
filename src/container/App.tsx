
/* eslint-disable react/jsx-pascal-case */
import { useState , useEffect } from 'react' ;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Basic_Header from "component/layout/header/Basic_Header" ;
import axios from 'axios' ;
import { faShower } from "@fortawesome/free-solid-svg-icons";



const pets = [ 
                { name : "MoMo" , species : "長毛吉娃娃" } , 
                { name : "小白" , species : "西施" } , 
                { name : "大壯" , species : "狼狗" } , 
                { name : "小胖" , species : "柴犬" } , 
             ]



const App = () => {

  const [ data , set_Data ] = useState< any[] >( [] )  ;

  useEffect( () => {

    // axios.get( "https://fakestoreapi.com/products" ).then( res => {

    //     set_Data( res.data ) ;

    // } )
     
  } , [] ) ;

   return <div>

             <Basic_Header />  

             <main className="max-w-7xl mt-0 mx-auto md:mt-10">
  
                <div className="flex items-center px-9 md:px-5">

                  <FontAwesomeIcon className="h-10" icon = { faShower } />
                  <p className="text-4xl mx-5 font-bold"> 預約洗澡 </p>

                </div>

                <hr className="mt-5 mb-10"/>

                <div className="md:flex items-center mb-10">

                    <p className="text-2xl mx-5"> 請點選寵物 </p> 

                    <div className="md:flex items-center">

                        {
                          pets.map( ( p , i ) => <span key={ i } className="inline-block cursor-pointer mt-5 md:my-0 text-2xl mx-3 px-5 py-3 rounded-full 
                                                        bg-green-100 hover:bg-green-300"> 
                                                  { p.name } ( { p.species } )
                                   </span> )

                        }

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 border p-7 ">

                    <div className="mt-10">
                        <p className="text-2xl"> 
                          到店日期
                          <input type="text" className="ml-3 flex-grow p-3 rounded-md bg-gray-100 outline-none text-2xl text-gray-600" /> 
                        </p>  
                    </div>  

                    <div className="mt-10">
                        <p className="text-2xl"> 到店日期 :  </p>  
                    </div>  

                    <div className="mt-10">
                        <p className="text-2xl"> 到店方式 :  </p>  
                    </div>  
                  
                </div> 

             </main>

           


          </div>

} ;

export default App 
       
 