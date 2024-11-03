const ContactUS = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-4 mb-4">Contact-Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-4/5 mx-auto">
        <div className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          <img
            src="https://i.ibb.co.com/b5LX42y/premium-photo-1682096259050-361e2989706d.jpg"
            alt=""
            className="w-82 h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2">John Doe</h3>
            <p className="text-gray-300 mb-4 flex-grow">johndoe@example.com</p>
            <p className="text-lg font-bold text-white mb-4">123-456-7890</p>
            <p className="text-lg font-bold text-white mb-4">New York, USA</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          <img
            src="https://i.ibb.co.com/2gDVp9b/handsome-smiling-young-man-folded-260nw-2069457431.webp"
            alt=""
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2"> Doe</h3>
            <p className="text-gray-300 mb-4 flex-grow">johndoe@example.com</p>
            <p className="text-lg font-bold text-white mb-4">123-456-7890</p>
            <p className="text-lg font-bold text-white mb-4">New York, USA</p>
          </div>
        </div>
        <div className="border rounded-lg shadow-lg overflow-hidden bg-black transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col h-full">
          <img
            src="https://i.ibb.co.com/M646pXF/depositphotos-133960224-stock-photo-smiling-young-man.webp"
            alt=""
            className="w-full h-48 object-cover transition-opacity duration-300 hover:opacity-75"
          />
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="text-xl font-semibold text-white mb-2">Rusal</h3>
            <p className="text-gray-300 mb-4 flex-grow">johndoe@example.com</p>
            <p className="text-lg font-bold text-white mb-4">123-456-7890</p>
            <p className="text-lg font-bold text-white mb-4">New York, USA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUS;
