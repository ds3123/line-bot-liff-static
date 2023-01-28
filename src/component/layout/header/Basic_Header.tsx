/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import Account_Info from "component/layout/header/Account_Info" ; 




import { useState } from "react" ;
import { 
    SearchIcon ,
    GlobeAltIcon ,
    MenuIcon ,
    UserIcon ,
    UserCircleIcon
   } from "@heroicons/react/solid"



/*

  @ 前台含有搜尋欄的 Header

*/


  
const Basic_Header = (  ) => {


    const [ searchInput , set_SearchInput ] = useState( "" ) ;

    


    return <header className="max-w-7xl mx-auto flex items-center justify-between py-10 px-7 md:px-0">

                
                { /* Left : logo */ }
                <div className = "cursor-pointer" >

                    
                    <img loading="lazy" className="h-16 md:h-24" src = "https://i.imgur.com/8bvjeDJ.png" alt="" />
                  

                </div>
                

                { /* Right */ }  
                <div>

                    <Account_Info />

                </div>


            </header>


} ;

export default Basic_Header
       