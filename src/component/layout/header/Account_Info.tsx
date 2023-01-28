import { useEffect , useState } from 'react';
import { useLiff } from 'react-liff';


import {
    LogoutIcon ,
    LoginIcon
  } from "@heroicons/react/outline" ;
  


// @ 帳戶登入狀態
const Account_Info = () => {

    const [ displayName , setDisplayName ]        = useState('') ;
    const { error , isLoggedIn , isReady , liff } = useLiff() ;
 

    // 顯示資訊
    const showDisplayName = () => {
        
       // # 錯誤
       if ( error ) return <p className="text-red-400"> 發生錯誤 </p>;
       
       // # 載入中 
       if ( !isReady ) return <p> 載入中 ... </p>;
   
       // # 未登入
       if ( !isLoggedIn ) {
         
         return <button className = "bg-green-400 px-4 py-2 flex items-center text-white rounded-full" 
                        onClick   = { liff.login as any } >
                   <LoginIcon className="w-6"/>  
                   <p className='mx-2 text-lg'> 登入 LINE </p> 
                </button> ;
       }
 
       // # 已登入 
       return <>
                   <p> 您好 : { displayName }</p>
                   <button className = "bg-green-400 px-4 py-2 flex items-center text-white rounded-full" 
                           onClick   = { liff.logout } >
                      <LogoutIcon className="w-6"/>  
                   <p className='mx-2 text-lg'> 登出 LINE </p> 
                   </button>
              </>;
     
    } ;
   
 
    // 登入處理
    useEffect(() => {
 
      if ( !isLoggedIn ) return ;
  
      ( async () => {
 
        const profile = await liff.getProfile() ;
        setDisplayName( profile.displayName ) ;
 
      })() ;
 
    } , [ liff , isLoggedIn ] ) ;
 
 
    return <> { showDisplayName() }  </>
 

} ;

export default Account_Info
       