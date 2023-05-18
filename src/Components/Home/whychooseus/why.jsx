import "../whychooseus/why.css";
export default function why() {
  return (
    <>
      <div>
        <h2 className="h2 section-titles">Why did you choose us?</h2>
      </div>
      <div className="card-container">
        <div className="card border-indigo-400 border border-dashed hover:border-double rounded py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <img src="https://cdn-icons-png.flaticon.com/128/7069/7069350.png" />
            </div>

            <div className="col-span-4">
              <p className="text-gray-700 font-bold">Fast & Easy Booking</p>
              <p className="text-gray-500 mt-4">
                Book your car online or offline. Follow the easy process to book
                your car online. Or just call us only time from anywhere.
              </p>
            </div>
          </div>
        </div>
        <div className="card border-indigo-400 border border-dashed hover:border-double rounded py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-4 text-right">
              <p className="text-gray-700 font-bold">Many Pickup Location</p>
              <p className="text-gray-500 mt-4">
                We have on extensive number of cars that will be available to
                pick you up from any location throughout the country.
              </p>
            </div>
            <div className="col-span-2">
              <img src="https://cdn-icons-png.flaticon.com/512/854/854894.png" />
            </div>
          </div>
        </div>
        <div className="card border-indigo-400 border border-dashed hover:border-double rounded py-7 px-5">
          <div className="grid grid-cols-6 gap-3">
            <div className="col-span-2">
              <img src="https://cdn-icons-png.flaticon.com/128/2651/2651001.png" />
            </div>
            <div className="col-span-4">
              <p className="text-gray-700 font-bold">Statified Customers</p>
              <p className="text-gray-500 mt-4">
                WE HAVE 20,000+ HAPPY CUSTOMERS AND ITS INCREASING. View or
                review section to get their feedback about our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
