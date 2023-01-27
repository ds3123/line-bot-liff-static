import { useEffect , useState } from 'react';
import { useLiff } from 'react-liff';



const App = () => {

   const [ displayName , setDisplayName ]        = useState('') ;
   const { error , isLoggedIn , isReady , liff } = useLiff() ;


   // 顯示資訊
   const showDisplayName = () => {
       
      // # 錯誤
      if ( error ) return <p className="text-red-400"> 發生錯誤 </p>;
      
      // # 載入中 
      if ( !isReady ) return <p className="text-blue-400"> 載入中 ... </p>;
  
      // # 未登入
      if ( !isLoggedIn ) {
        
        return <button className="bg-green-400 p-3 rounded-md" onClick = { liff.login as any }>
                  登入 Line
               </button> ;
      }

      // # 已登入 
      return <>
                  <p> 您好 : { displayName }</p>
                  <button className="App-button" onClick = { liff.logout } >
                     登出 Line 
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



   return <div>

             <header> { showDisplayName() } </header>
             
          </div>

} ;

export default App 
       
