function User() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <img src="/avatar.png" className="rounded-full -mt-1 w-10 h-10" />
        <div className="rounded-full w-3 h-3 absolute bottom-0 right-0 bg-red-500"></div>
      </div>
      <div className="ml-2">
        <h1 className="font-inter font-bold text-sm -mt-2">DiscordAyuda</h1>
        <p className="text-gray-200 text-sm">#8369</p>
      </div>
    </div>
  )
}

export default User