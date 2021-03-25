import User from '@/components/User'

function Header() {
  return (
    <div className="flex items-center fixed p-3 bg-gray-500 w-full">
      <div className="flex-1">
        <div className="flex items-center">
          <img src="/icons/menu.svg" className="w-8 h-8 cursor-pointer mr-9" />
          <img src="/youtube-logo.png" className="w-auto h-11" />
          <img src="/discord-wordmark-white.png" className="w-auto h-9" />

          <div className="ml-14 w-full">
            <input className="w-9/12 bg-gray-600 p-3 focus:outline-none rounded-lg" placeholder="Search" />
          </div>
        </div>
      </div>
      <div className="flex-initial">
        <div className="flex">
          <img src="/icons/plus.png" alt="Friends Plus Icon" className="w-8 h-8" />
          <div className="mx-2"></div>
          <img src="/icons/nitro.png" alt="Friends Nitro Icon" className="w-8 h-8" />
          <div className="mx-2"></div>
          <img src="/icons/library.png" alt="Friends Library Icon" className="w-8 h-8" />
          <div className="mx-2"></div>
          <img src="/icons/friends.png" alt="Friends Discord Icon" className="w-8 h-8" />
          <div className="mx-4"></div>
          <User />
        </div>
      </div>
    </div>
  )
}

export default Header