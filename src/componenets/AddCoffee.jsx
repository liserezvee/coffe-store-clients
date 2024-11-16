import Swal from 'sweetalert2'


const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault()

        const form = event.target 
        const name = form.name.value 
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const catagory = form.catagory.value
        const details = form.details.value
        const photo = form.photo.value

        const newCoffee = {name,quantity,supplier,taste,catagory,details,photo}
        console.log(newCoffee);

        //send data to the server 
        fetch('https://coffee-store-server-10vv25fdp-liserezvees-projects.vercel.app/coffee',{
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId)
                {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Caffee added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
        })
    }
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h3 className="text-3xl font-extrabold">add some coffee</h3>
            <form onSubmit={handleAddCoffee} action="">
                {/*from row */}
                <div className="md:flex mb-7">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffe Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Coffe Name" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="quantity" placeholder="Available Quantity" className="w-full input input-bordered" />
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
                        <input type="text" name="supplier" placeholder="Supplier" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="taste" placeholder="Taste" className="w-full input input-bordered" />
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
                        <input type="text" name="catagory" placeholder="Catagory" className="w-full input input-bordered" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="details" placeholder="Details" className="w-full input input-bordered" />
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
                        <input type="text" name="photo" placeholder="Photo URL" className="w-full input input-bordered" />
                    </label>
                </div>
                </div>
                <input type="submit" name="" id="" value="Add Coffee" className="btn btn-block"/>
            </form>
        </div>
    );
};

export default AddCoffee;