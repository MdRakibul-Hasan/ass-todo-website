import { useContext, useState } from "react";
import { AuthContext } from "../Services/AuthProvider";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";


const Todo = () => {
    const {loading, user} = useContext(AuthContext);
    const [descriptionFrom, setDescriptionFrom] = useState("");
    const navigate = useNavigate();

    

const handleAddTodo = event => {
    event.preventDefault();


const form = event.target;

const email = user?.email;
const title = form.TodoName.value;
const description = descriptionFrom;
const deadline = form.deadline.value;
const priority = form.priority.value;

// const productDetails = descriptionFrom;
// const image = form.image.value;
// const OwnerEmail = form.OwnerEmail.value;
// const upvote = [{}];
// const productOwner = user?.displayName;
// const reviews = [{}];
// const type = "pending";
const timestamp = new Date();



const newTodo = {email, title, description, deadline, priority}
console.log(newTodo);

fetch('http://localhost:5000/todo', {
    method: 'POST',
    headers: {
        'content-type' : 'application/json'
    },
    body: JSON.stringify(newTodo)
})
.then(res=> res.json())
.then(data =>{
    
    if(data.insertedId){
      const notify2 = () => toast.success('List added is Successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    notify2();

    // setTimeout(() => {
    //   navigate('/dashboard/myproduct');
    // }, 3000);
    
    }
  
})

}
    return (
        
        <div className="px-20 py-14"><ToastContainer />
            <h2 className=" text-center font-bold text-2xl pb-10">My Todo List</h2>

<form onSubmit={handleAddTodo}>
{/* product name and brand name */}
<div className="md:flex">
<div className="form-control md:w-1/2">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Title</span>
  </label>
  <label className="input-group ">
    <input type="text" placeholder="Title" name="TodoName" 
    className="input input-bordered w-full" required />
  </label>
</div>
<div className="form-control md:w-1/2 ml-4">
  <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Deadline</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Deadline" name="deadline"
    className="input input-bordered w-full" required />
  </label>
</div>

</div>
{/* price and rating */}


{/* priority */}

{/* ================================= */}
<div className="md:flex justify-center items-center gap-2">
<div className="mb-1 mt-12 flex justify-left items-center
gap-2 ">
          <label className="block text-gray-700
           text-sm font-bold mb-2">
          Priority:
          </label>

          <div className="mb-2">
            <label className="inline-flex items-center">
            <select className="select select-bordered
            w-full max-w-xs" name="priority" required >
              
  <option selected>Low</option>
  <option>Moderate</option>
  <option>High</option>
  

</select>
            </label>
          </div>

        </div>
{/* Product description */}


<div className="form-control md:w-3/4">
  {/* <label className="label">
    <span className="label-text block text-gray-700 text-sm font-bold">Short Description</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="Short Description" name="description"
    className="input input-bordered w-full" required />
  </label> */}
<label className="label">
                            <span className="label-text font-bold">Description</span>
                        </label>

                        <textarea
                            className="input input-bordered w-full"
                            placeholder="Description" onChange={(e) => setDescriptionFrom(e.target.value)}
                            required rows={5}
                        />


</div>
</div>

<input type="submit" value="Add Todo List" className="btn btn-block bg-slate-300 mt-4" />



</form>


        </div>
    );
};

export default Todo;