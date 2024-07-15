import {useEffect } from 'react';

import { useAnonAadhaar, LogInWithAnonAadhaar } from '@anon-aadhaar/react';
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom';
const WalletConnection = () => {
 
  const [anonAadhaar] = useAnonAadhaar();
  const navigation=useNavigate()

  // const handlenavigate=()=>{
  //   navigation("/wallet")
  // }

  // useEffect(() => {
  //   console.log('Aadhaar status: ', anonAadhaar.status);
  //   if (anonAadhaar.status === 'logged-in') {
  //     swal({
  //       title: "Verification Successful",
  //       text: "Your Aadhaar has been successfully verified!",
  //       icon: "success",
  //       button: "OK",
  //     });
  //   }
  // }, [anonAadhaar.status]);
  useEffect(() => {
    if (anonAadhaar.status === 'logged-in') {
      swal({
        title: "Verification Successful",
        text: "Your Aadhaar has been successfully verified!",
        icon: "success",
      }).then(() => {
        navigation("/wallet");
        window.location.reload()
      });
    }
  }, [anonAadhaar.status, navigation]);

  return (
    
    <div>
 

      
      {anonAadhaar.status === 'logged-in' ? (
        <></>
      )
         
       : (
        <>

{/* <div className="bg-no-repeat bg-cover  w-screen   relative"  style={{ 
    backgroundImage: `url('https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80')` 
  }}>
<div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
  <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
      <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
        <div className="self-start hidden lg:flex flex-col  text-white">
          <img src="" className="mb-3"/>
          <h1 className="mb-3 font-bold text-5xl">Hi ? Welcome Back User </h1>
          <p className="pr-3 text-xl">Please upload your adhar card qr code for verifying its authenticity</p>
        </div>
      </div>
      <div className="flex justify-center self-center z-10">
        <div className="p-12 mx-auto rounded-2xl w-100 ">
            <div className="mb-4">
            <LogInWithAnonAadhaar nullifierSeed={1234} />
            </div>
           
        </div>
      </div>
  </div>
</div> */}
   {/* <div className="w-2">

   <LogInWithAnonAadhaar nullifierSeed={1234} />
   </div> */}
       <div className="md:flex px-5 md:px-20 -mt-20 justify-center items-center gap-5 ">
      <div className=" left_side justify-end flex pr-10">
        <img className='h-72 w-72 md:h-[40rem] md:w-[40rem]' src="https://threedio-cdn.icons8.com/6eAB0DmeNvApxByxp7_9jz6z0xCcS9sxeyLFJu2-WL4/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzUxOC8wODAz/MjdhMi1kMzA1LTQ1/ZDItOWNhMS05ZmQy/ZTEyN2FkMDEucG5n.png" alt="404" />
      </div>
      <div className="right_side">
       
        <h1 className="mb-3 font-bold text-5xl m">
          <img className='h-20 w-28 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6IwoZHwdqT1fPKQ74CW2YPkWo2B-1rWeG-g&s" alt="" />
        Verify your Aadhaar</h1>
        <p className="pr-3 text-xl mb-10">Please upload your adhar card qr code for verifying its authenticity</p>
        <div className="w-28 h-auto">

        <LogInWithAnonAadhaar nullifierSeed={1234} />
        </div>
      </div>

    </div>
        </>
      )}
    </div>
  );
};

export default WalletConnection;
