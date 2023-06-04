import imga from "../../../assets/a.png";
import imgb from "../../../assets/b.png";
import imgc from "../../../assets/c.png";

export default function Steps() {
  return (
    <div className="stepss">
      <section className="py-10 bg-blue-200 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              How does it work?
            </h2>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
              {" "}
              Keep calm & travel on
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                className="w-full"
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                alt=""
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <img src={imga} alt="My Image" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Book & relax
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Let each trip be an inspirational journey, each room a
                  peaceful space.
                </p>
              </div>

              <div>
              <div className="flex items-center justify-center w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <img src={imgb} alt="My Image" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Smart checklist
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Let each trip be an inspirational journey, each room a
                  peaceful space.
                </p>
              </div>

              <div>
              <div className="flex items-center justify-center w-40 h-40 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <img src={imgc} alt="My Image" />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Save more
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Let each trip be an inspirational journey, each room a
                  peaceful space.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
