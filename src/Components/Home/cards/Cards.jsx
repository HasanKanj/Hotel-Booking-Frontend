import { useEffect, useState } from "react";

export default function Cards() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/hotels?featured=true&limit=4"
      );
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <section className="bg-[#F3F4F6] pt-20 pb-10 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.map((item) => (
                  <div key={item._id} className="w-full px-4 md:w-1/2 xl:w-1/3">
                    <div className="mb-10 overflow-hidden rounded-lg bg-white">
                      <img src={item.url} alt="image" className="w-full" />
                      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
                        <h3>
                          <a
                            href="javascript:void(0)"
                            className="text-dark hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]"
                          >
                            {item.name}
                            
                          </a>
                        </h3>
                        <p className="text-body-color mb-7 text-base leading-relaxed">
                          {item.city} <span >
                Starting from ${item.cheapestPrice}
              </span>
                          {item.rating && (
                            <>
                              <button>{item.rating}</button>
                              <span>Excellent</span>
                            </>
                          )}
                          
                        </p>
                        
                        <a
                          href="javascript:void(0)"
                          className="text-body-color hover:border-primary hover:bg-primary inline-block rounded-full border border-[#E5E7EB] py-2 px-7 text-base font-medium transition hover:text-white"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
