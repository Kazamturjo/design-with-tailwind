import benner from '../assets/Banner Image.png'

const Other = () => {
    return (
      <div className="bg-banner">
        <div className="relative h-screen">
          <img
            src={benner}
            className="absolute inset-0 object-cover w-full h-full"
            alt=""
          />
          <div className="relative bg-gray-900 h-screen bg-opacity-40">
            <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
              <div class="text-center mt-10">
                  <h1 class="text-3xl font-mono tracking-tight text-white md:text-5xl lg:text-5xl">
                    <span className="font-semibold text-4xl md:text-6xl lg:text-6xl">
                      Welcome to FightMatch{' '}
                    </span>
                  </h1>
  
                  <p className="mt-5 text-3xl font-mono tracking-tight text-white md:text-5xl lg:text-5xl">
                    Your Gateway to Local Fight Connections!
                  </p>
                  <p class="mt-6 text-lg leading-8 text-white">
                    Ready to prove your skills in the ring? FightMatch connects
                    fighters in your area, making it easy to arrange local
                    matchups. Download the app now and step into the ring with
                    confidence!
                  </p>
  
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                    <div class="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                      Get started
                    </div>
                    <button class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100  font-medium rounded-md text-sm px-5 py-2.5  ">
                      Start Match
                    </button>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Other;