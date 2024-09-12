export default function Projects() {
  return (
    <>
      <h1 className="text-5xl font-bold mt-40 mb-32">Projects</h1>

      <div className="container mx-auto grid grid-cols-2 grid-flow-rows   items-center">
        <div className="flex flex-row items-center mx-8 my-10">
          <img src="https://picsum.photos/200" alt="rand" className="mx-12" />

          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-nowrap mr-10">
              CPSC database
            </h2>
            <p className="my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, nulla a pellentesque lacinia, ligula ligula malesuada
              magna, eu pulvinar massa ligula sed ante.
            </p>
            <div className="flex flex-row">
              <h3 className="flex-shrink border-2 border-black bg-gray-300 ml-0 m-1 px-2 py-0.5 rounded-2xl">
                React
              </h3>
              <h3 className="flex-shrink border-2 border-black  bg-gray-300 m-1 px-1.5 py-0.5 rounded-2xl">
                RTK
              </h3>
              <h3 className="flex-shrink border-2 border-black  bg-gray-300 m-1 px-1.5 py-0.5 rounded-2xl">
                React Router
              </h3>
              <h3 className="flex-shrink border-2 border-black  bg-gray-300 m-1 px-1.5 py-0.5 rounded-2xl">
                PostrgreSQL
              </h3>
            </div>
          </section>
        </div>

        <div className="flex flex-row items-center mx-8 my-10">
          <img src="https://picsum.photos/200" alt="rand" className="mx-12" />

          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-nowrap mr-10">
              Buoy Data Visualizer
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, nulla a pellentesque lacinia, ligula ligula malesuada
              magna, eu pulvinar massa ligula sed ante. Praesent malesuada
              ligula libero, dignissim pulvinar mi vulputate sit amet.
            </p>
          </section>
        </div>

        <div className="flex flex-row items-center mx-8 my-10">
          <img src="https://picsum.photos/200" alt="rand" className="mx-12" />

          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-nowrap mr-10">ESP32 IOT</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, nulla a pellentesque lacinia, ligula ligula malesuada
              magna, eu pulvinar massa ligula sed ante. Praesent malesuada
              ligula libero, dignissim pulvinar mi vulputate sit amet.
            </p>
          </section>
        </div>

        <div className="flex flex-row items-center mx-8 my-10">
          <img src="https://picsum.photos/200" alt="rand" className="mx-12" />

          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-nowrap mr-10">
              Fingerprint Doorlock
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, nulla a pellentesque lacinia, ligula ligula malesuada
              magna, eu pulvinar massa ligula sed ante. Praesent malesuada
              ligula libero, dignissim pulvinar mi vulputate sit amet.
            </p>
          </section>
        </div>

        <div className="flex flex-row items-center mx-8 my-10">
          <img src="https://picsum.photos/200" alt="rand" className="mx-12" />

          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-nowrap mr-10">Moped Headlight</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, nulla a pellentesque lacinia, ligula ligula malesuada
              magna, eu pulvinar massa ligula sed ante. Praesent malesuada
              ligula libero, dignissim pulvinar mi vulputate sit amet.
            </p>
          </section>
        </div>

        <div className="flex flex-row items-center mx-8 my-10">
          <img src="https://picsum.photos/200" alt="rand" className="mx-12" />

          <section className="flex flex-col">
            <h2 className="text-2xl font-bold text-nowrap mr-10">Split Keyboard</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              dictum, nulla a pellentesque lacinia, ligula ligula malesuada
              magna, eu pulvinar massa ligula sed ante. Praesent malesuada
              ligula libero, dignissim pulvinar mi vulputate sit amet.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
