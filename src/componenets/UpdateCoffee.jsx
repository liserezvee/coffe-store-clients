import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {

    const coffee = useLoaderData()
    const {_id, name, quantity, supplier, taste, catagory, details, photo } = coffee
    
    const handleUpdateCoffee = event =>{
        event.preventDefault()

        const form = event.target 
        const name = form.name.value 
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const catagory = form.catagory.value
        const details = form.details.value
        const photo = form.photo.value

        const upDatedCoffee = {name,quantity,supplier,taste,catagory,details,photo}
        console.log(upDatedCoffee);

        //send data to the server 
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: "PUT",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(upDatedCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Caffee Updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
        })
    }
    return (
        <div>
            <h3>Update some coffee:  {name}</h3>
            <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl font-extrabold">Update Your coffee: {name}</h3>
            <form onSubmit={handleUpdateCoffee} action="">
                {/*from row */}
                <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffe Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" defaultValue={name} placeholder="Coffe Name" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" defaultValue={quantity} placeholder="Available Quantity" className="w-full input input-bordered" />
                    </label>
                </div>

                </div>
                {/*from  supplier taste row */}
                <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" defaultValue={taste} placeholder="Taste" className="w-full input input-bordered" />
                    </label>
                </div>

                </div>
                {/*from catagory details row */}
                <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Catagory</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="catagory" defaultValue={catagory} placeholder="Catagory" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="w-full input input-bordered" />
                    </label>
                </div>

                </div>
                {/*from photo row */}
                <div className="mb-7">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" defaultValue={photo} placeholder="Photo URL" className="w-full input input-bordered" />
                    </label>
                </div>
                </div>
                <input type="submit" name="" id="" value="Update Coffee" className="btn btn-block"/>
            </form>
        </div>
        </div>
    );
};

export default UpdateCoffee;