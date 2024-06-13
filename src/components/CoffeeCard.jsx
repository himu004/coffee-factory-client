const CoffeeCard = ({ coffee }) => {
  const { name, quantity, supplier, taste, category, details, photo } = coffee;

  return (
    <div className="md:card md:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          className="md:w-[300px] h-full mx-auto p-5"
          src={photo}
          alt="Coffee"
        />
      </figure>
      <div className="w-full md:flex justify-between items-center p-10">
        <div className="space-y-3">
            <h2 className="card-title">Name: {name}</h2>
            <p>
            <span className="font-bold">Category:</span> {category}
            </p>
            <p>
            <span className="font-bold">Quantity:</span> {quantity}
            </p>
        </div>
        <div className="md:card-actions space-x-4 md:justify-end">
          <div className="join md:join-vertical py-5 md:space-y-3">
            <button className="btn btn-primary join-item">View</button>
            <button className="btn btn-warning join-item text-white">Edit</button>
            <button className="btn btn-error join-item text-white">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
