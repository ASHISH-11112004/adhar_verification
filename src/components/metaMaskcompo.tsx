
import "./meta.css"
import ConnectBtn from './connctBtn/ConnectBtn';

const MetaMaskcompo = () => {

  return (

    <div className="md:flex px-5 md:px-20 -mt-24 justify-center items-center ">
      <div className="left_side ">
        <img className='h-72 w-72 md:h-[50rem] md:w-[50rem]' src="https://threedio-cdn.icons8.com/PzJLrXEMZ3DijWighEX9F6US-TbS6srJduLYb5qW2y0/rs:fit:1024:1024/czM6Ly90aHJlZWRp/by1wcm9kL3ByZXZp/ZXdzLzQ0NS9mYzM5/ZGJhOS1kZGFmLTQ4/NmEtOWI0OS05ZmIy/MjIzZTIwOTAucG5n.png" alt="404" />
      </div>
      <div className="right_side">
        <div className="text-4xl font-semibold mb-5 mt-10">
          Connect with MetaMask
        </div>
        <div className="text-xl mb-10 text-gray-500 font-semibold w-72 md:w-[32rem]">
          Lorem ipsum dolor sit, amet consectetur adipisicing  Et, perferendis a!
        </div>
        <ConnectBtn />
      </div>

    </div>
  )
}

export default MetaMaskcompo