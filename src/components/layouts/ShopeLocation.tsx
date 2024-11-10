const ShopeLocation = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-xl mt-4">Shope Location</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-4/5 mx-auto mt-6">
        <div className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          <img
            src="https://i.ibb.co.com/718ms68/360-F-169779260-VL83oh-M8o-LH2j-V4-Ai3q-XEPXbs-Kl1xrk-I.jpg"
            alt=""
            className="w-82 h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2">
              AquaSports Gear - Main Store
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">
              123 Aqua Drive, Sportstown, USA
            </p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          <img
            src="https://i.ibb.co.com/BL195Jf/1449329375.jpg"
            alt=""
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2">
              AquaSports Gear - Eastside
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">
              456 East Avenue, Sportstown, USA
            </p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          <img
            src="https://i.ibb.co.com/P9jddZY/istockphoto-1341950127-612x612.jpg"
            alt=""
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2">
              AquaSports Gear - West Mall
            </h3>
            <p className="text-gray-300 mb-4 flex-grow">
              789 West Mall, Sportstown, USA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopeLocation;
