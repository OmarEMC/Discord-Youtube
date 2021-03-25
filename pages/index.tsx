import Video from '@/components/Video'
import Header from '@/components/Header'
import videos from 'utils/videos'

function Home() {
  return (
    <>
      <Header />
      <section className="flex h-full overflow-y-auto">

        <div className="flex-1 h-full mt-18 bg-gray-400 flex flex-col justify-center"> {/* Realmente aquí deberia buscar la manera de que el header no este "mal" pero es por que esta fixed  */}
          <div className="my-12"></div>
          <video controls src="/join-the-discord-partner-program.mp4" className="shadow-lg mx-auto rounded-lg focus:outline-none w-11/12 h-9/12"></video> {/* La verdad no trabajo mucho con videos */}
          <section className="mx-auto w-11/12 mt-4 flex">
            <h1 className="font-bold text-xl flex-1">Join the Discord Partner Program</h1>
            <div id="options" className="flex-initial">
              <div className="inline-block">
                <img src="/icons/share.svg" className="inline w-12 h-6" />
                <p className="text-gray-200 font-semibold inline">Share</p>
              </div>
              <div className="inline-block ml-2">
                <img src="/icons/save.svg" className="inline w-12 h-6" />
                <p className="text-gray-200 font-semibold inline">Save</p>
              </div>
            </div>
          </section>

          <section className="mx-auto w-11/12 mt-4 flex">
            <p className="text-gray-200 flex-1">80,804 views - Feb 24, 2021</p>
            <div id="feedback" className="flex-initial relative">
              <div className="inline-block bg-burple bg-opacity-20 px-2 py-1 rounded-lg">
                <img src="https://discord.com/assets/08c0a077780263f3df97613e58e71744.svg" className="inline w-12 h-6" />
                <p className="font-semibold inline text-burple">9429</p>
              </div>
              <div className="inline-block bg-burple bg-opacity-20 px-2 py-1 rounded-lg ml-2">
                <img src="https://discord.com/assets/08c0a077780263f3df97613e58e71744.svg" className="inline w-12 h-6" />
                <p className="font-semibold inline text-burple">303</p>
              </div>

              <div className="absolute -bottom-4 left-0 bg-yellow-300 w-full h-1 rounded-xl"></div>
            </div>
          </section>

          <div className="mx-auto mt-8 flex w-11/12">
            <hr className="bg-gray-300 opacity-20 w-full" />
          </div>
        </div>

        <div className="flex-initial h-full p-6 mt-20 bg-gray-300">
          <div className="mx-auto w-10/12">
            <img src="/nitro-ad.png" className="object-cover rounded-2xl w-96 h-72" draggable={false} />
          </div>
          <div className="my-4"></div>

          {videos.map((video) => (
            <>
              <Video
                {...video}
              />
              <div className="my-4"></div>
            </>
          ))}
        </div>
        
      </section>
    </>
  )
}

export default Home