import img1 from "../../assets/cedars.png";
export default function About() {
  return (
    <div>
      <section className="py-10 bg-white sm:py-16 lg:py-24">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="mx-auto text-left md:max-w-lg lg:max-w-2xl md:text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl lg:leading-tight">
              Our Journey: Connecting Lebanon's Beauty with the World
              <span className="relative inline-block">
                <span className="absolute inline-block w-full h-2 bg-blue-500 bottom-1.5"></span>
                <span className="relative"> solve visitors pain </span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 mt-8 md:mt-20 gap-y-6 md:grid-cols-2 gap-x-10">
            <div>
              <img className="w-full mx-auto sm:max-w-xs" src={img1} alt="" />
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Bridging the Gap between Travelers and Lebanon's Hidden Gems.
              </h3>
              <p className="mt-4 text-lg text-gray-700">
                At Book Me, our passion for Lebanon's rich cultural heritage and
                breathtaking landscapes ignited the idea for this platform.
                Fueled by our desire to showcase the hidden gems of our beloved
                country to the world, we embarked on a journey to create a
                user-friendly and comprehensive booking website. Our dedicated
                team of travel enthusiasts and tech-savvy professionals
                collaborated to develop an intuitive platform that connects
                travelers with authentic experiences and accommodations
                throughout Lebanon. We believe in promoting sustainable tourism
                while ensuring ease and convenience for both locals and visitors
                alike. Join us on this exciting adventure as we bring Lebanon's
                beauty closer to your fingertips.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-6 md:flex md:items-center md:justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
                What our clients are saying
              </h1>
              <div className="flex mx-auto mt-6">
                <span className="inline-block w-40 h-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-3 h-1 mx-1 bg-blue-500 rounded-full"></span>
                <span className="inline-block w-1 h-1 bg-blue-500 rounded-full"></span>
              </div>
            </div>
          </div>
          <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                I had planned for 1 night but extended to 2, that is how much we
                loved this place. The home cooked food was finger licking good.
                The bonfire nights and great conversations with Bhasker and his
                father...
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Omar
                  </h1>
                </div>
              </div>
            </div>
            <div className="p-8 bg-blue-500 border border-transparent rounded-lg dark:bg-blue-600">
              <p className="leading-loose text-white">
                Basker and his family were outstanding hosts! The cottages are
                pretty new, in two years in India we have not seen that clean
                and comfortable homestays. The home cooked food was also among
                the best .
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-blue-200"
                  src="https://images.unsplash.com/photo-1531590878845-12627191e687?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-white">lynn</h1>
                
                </div>
              </div>
            </div>
            <div className="p-8 border rounded-lg dark:border-gray-700">
              <p className="leading-loose text-gray-500 dark:text-gray-400">
                “Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempore quibusdam ducimus libero ad tempora doloribus expedita
                laborum saepe voluptas perferendis delectus assumenda rerum,
                culpa aperiam dolorum, obcaecati corrupti aspernatur a.”.
              </p>
              <div className="flex items-center mt-8 -mx-2">
                <img
                  className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700"
                  src="https://images.unsplash.com/photo-1488508872907-592763824245?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
                <div className="mx-2">
                  <h1 className="font-semibold text-gray-800 dark:text-white">
                    Maya Atieh
                  </h1>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Marketing Manager at Stech
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
