import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

  const handleDelete = _id => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        
        fetch(`http://localhost:3000/coffee/${_id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            }
        })

      }
    });
  }

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
            <Link to={`updateCoffee/${_id}`}>
                <button className="btn btn-warning join-item text-white">Edit</button>
            </Link>
            <button onClick={() => handleDelete(_id)} className="btn btn-error join-item text-white">X</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
