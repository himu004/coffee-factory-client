import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleUpdateCoffee = () => {
        event.preventDefault();

        const form = event.target;
    
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
    
        const updatedCoffee = {
          name,
          quantity,
          supplier,
          taste,
          category,
          details,
          photo,
        };
    
        console.log(updatedCoffee);
    
        // send data to the server, device changed thats why port 3000
        fetch(`http://localhost:3000/coffee/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedCoffee),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if(data.modifiedCount > 1) {
              Swal.fire({
                title: "Success!",
                text: "Coffee Updated Successfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
          });
    }

    return (
        <div>
        <Link className="" to='/'>
      <button className="m-5 border-2 py-4 px-2 rounded-lg transition hover:text-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15]">Back To Home</button>
    </Link>
            <div className="w-4/5 mx-auto bg-[#F4F3F0] md:p-20 p-5 rounded-lg my-5">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-extrabold mb-8">Update/Edit Your Coffee</h2>
        </div>
        <form onSubmit={handleUpdateCoffee}>
          {/* form name and quantity row */}
          <div className="md:flex mb-8 font-bold">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Coffee Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  defaultValue={name}
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="quantity"
                  defaultValue={quantity}
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
          </div>
          {/* form supplier row */}
          <div className="md:flex mb-8 font-bold">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Supplier Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="supplier"
                  defaultValue={supplier}
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Taste</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="taste"
                  defaultValue={taste}
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
          </div>
          {/* form category and details row */}
          <div className="md:flex mb-8 font-bold">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="category"
                  defaultValue={category}
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text">Details</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="details"
                  defaultValue={details}
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
          </div>
          {/* form Photo url row */}
          <div className="mb-8 font-bold">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  defaultValue="Photo URL"
                  className="input input-bordered w-full text-red-400"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Coffee"
            className="btn btn-block text-bold transition hover:text-[#331A15] hover:bg-[#D2B48C] hover:border-[#331A15]"
          />
        </form>
      </div>
        </div>
    );
};

export default UpdateCoffee;