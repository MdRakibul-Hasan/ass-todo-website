import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";


const ProductReviewQueue = () => {
    const pendingProducts = useLoaderData();
    const [productStatusNow, setProductStatusNow] = useState(pendingProducts);

    

    const makeFeatured = (id, dataArray) => {
        console.log(id);
        // Use the find method to get the object with the provided ID
        const foundObject = dataArray.find(item => item._id === id);

        
            const productName = foundObject.productName;
            const externalLinks = foundObject.externalLinks;
            const category = "featured";
            const productDetails = foundObject.productDetails;
            const image = foundObject.image;
            const OwnerEmail = foundObject.OwnerEmail;
            const productOwner = foundObject.productOwner;
            const timestamp = new Date();
            const tags = foundObject.tags;

            const updatedProduct = {productName, externalLinks, tags,
                category,timestamp, productDetails, image, OwnerEmail, productOwner}
              console.log(updatedProduct);
           
              fetch(`https://ass12-crud-server3.vercel.app/techProduct/${id}`, {
                  method: 'PUT',
                  headers: {
                      'content-type' : 'application/json'
                  },
                  body: JSON.stringify(updatedProduct)
              })
              .then(res=> res.json())

                    const notify2 = () => toast.success('Featured product now', {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                      });
                  
                  fetch('https://ass12-crud-server3.vercel.app/techProduct')
                  .then((res) => res.json())
                  .then((updatedUserData) => {
                    setProductStatusNow(updatedUserData);
                    notify2();
                  })
                  .catch(error => {
                    console.error('Error:', error);
                    // Handle the fetch error
                  });
                  
                  }
// accept button

const makeAccept = async (id, dataArray) => {
  const foundObject = dataArray.find(item => item._id === id);

  const {
    productName,
    externalLinks,
    category,
    productDetails,
    image,
    OwnerEmail,
    productOwner,
    tags
  } = foundObject;

  const timestamp = new Date();
  const type = "accepted";

  const updatedProduct = {
    productName, externalLinks, tags, category,
    timestamp, type, productDetails, image,
    OwnerEmail, productOwner
  };

  try {
    const response = await fetch(`https://ass12-crud-server3.vercel.app/techProduct/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });

    const resData = await response.json();

    const updatedResponse = await fetch('https://ass12-crud-server3.vercel.app/techProduct');
    const updatedUserData = await updatedResponse.json();

    setProductStatusNow(updatedUserData);

    Swal.fire({
      title: "The product is Accepted",
      text: "You clicked the button!",
      icon: "success"
    });
  } catch (error) {
    console.error('Error:', error);
    // Handle fetch error
  }
};

// Make Reject
const makeReject = async (id, dataArray) => {
  try {
    const foundObject = dataArray.find(item => item._id === id);

    const {
      productName,
      externalLinks,
      category,
      productDetails,
      image,
      OwnerEmail,
      productOwner,
      tags
    } = foundObject;

    const timestamp = new Date();
    const type = "rejected";

    const updatedProduct = {
      productName,
      externalLinks,
      tags,
      category,
      timestamp,
      type,
      productDetails,
      image,
      OwnerEmail,
      productOwner
    };

    const response = await fetch(`https://ass12-crud-server3.vercel.app/techProduct/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updatedProduct)
    });

    const resData = await response.json();

    const updatedResponse = await fetch('https://ass12-crud-server3.vercel.app/techProduct');
    const updatedUserData = await updatedResponse.json();

    setProductStatusNow(updatedUserData);
    const notify2 = () => toast.warn('This product is Rejected', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  notify2();

    // Swal.fire({
    //   title: "The product is Rejected",
    //   text: "You clicked the button!",
    //   icon: "success"
    // });
  } catch (error) {
    console.error('Error:', error);
    // Handle fetch error
  }
};




// const makeReject = (id, dataArray) => {
//   console.log(id);
//   // Use the find method to get the object with the provided ID
//   const foundObject = dataArray.find(item => item._id === id);

  
//       const productName = foundObject.productName;
//       const externalLinks = foundObject.externalLinks;
//       const category = foundObject.category;
//       const productDetails = foundObject.productDetails;
//       const image = foundObject.image;
//       const OwnerEmail = foundObject.OwnerEmail;
//       const productOwner = foundObject.productOwner;
//       const timestamp = new Date();
//       const tags = foundObject.tags;
//       const type = "rejected";

//       const updatedProduct = {productName, externalLinks, tags,
//           category,timestamp, type, productDetails, image, OwnerEmail, productOwner}
//         console.log(updatedProduct);
     
//         fetch(`https://ass12-crud-server3.vercel.app/techProduct/${id}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type' : 'application/json'
//             },
//             body: JSON.stringify(updatedProduct)
//         })
//         .then(res=> res.json())

            //   const notify2 = () => toast.warn('This product is Rejected', {
            //     position: "top-right",
            //     autoClose: 3000,
            //     hideProgressBar: false,
            //     closeOnClick: true,
            //     pauseOnHover: true,
            //     draggable: true,
            //     progress: undefined,
            //     theme: "light",
            //     });
            // notify2();
//             fetch('https://ass12-crud-server3.vercel.app/techProduct')
//             .then((res) => res.json())
//             .then((updatedUserData) => {
//               setProductStatusNow(updatedUserData);
//               // console.log("checking refatch", updatedUserData);

//               Swal.fire({
//                 title: "The product is Rejected",
//                 text: "You clicked the button!",
//                 icon: "success"
//               });

//             })
//             .catch(error => {
//               console.error('Error:', error);
//               // Handle the fetch error
//             });
            
//             }
                

    
    
    
    return (
        <div><ToastContainer />
        <h2 className=" text-2xl font-bold pb-10 ml-14 py-5">Product to Review</h2>
        <table className="w-[95%] mx-auto">
  <thead className="font-bold">
    <tr>
    <th>SL.</th>
      <th>Product Name</th>
      <th>Status</th>
      <th>View</th>
      <th>Action</th>
      <th>Accept</th>
      <th>Reject</th>
    </tr>
  </thead>
  <tbody>
    {productStatusNow.map((product, index) => (
      <tr key={index} className=" hover:bg-slate-200">
        <td className="text-center">{index + 1}</td>
       
       <td className="text-center">
        <h3 className="text-center font-semibold">{product.productName}
       </h3></td> 

       <td className="text-center">{product.type}</td>
        <td className="text-center">
        <div className="flex justify-center items-center align-middle ">
        <Link to={`/techProduct/${product._id}`}><button className="bg-red-500 hover:bg-red-700 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[98%]">Details</button></Link>
          </div>
            </td>
            <td className="text-center">
          <div className="flex justify-center items-center">
          <button className="bg-red-500 hover:bg-red-700 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[70%]" onClick={() => makeFeatured(product._id, productStatusNow )}>Featured</button>
          </div>
        </td>
        
        <td className="text-center">
          {
            product.type === "accepted" ? <div className="flex justify-center items-center">
            <button className="bg-red-500 hover:bg-red-700 flex justify-center
            pointer-events-none opacity-50 disabled
            items-center align-middle px-4 py-2 rounded-md text-white
             text-sm font-medium w-[70%]"onClick={() => makeAccept(product._id, productStatusNow )} >Accept</button>
            </div>
            :
            <div className="flex justify-center items-center">
          <button className="bg-red-500 hover:bg-red-700 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[70%]"onClick={() => makeAccept(product._id, productStatusNow )} >Accept</button>
          </div>
          }
        </td>
        <td className="text-center">
          {
            product.type === "rejected" ? <div className="flex justify-center items-center">
            <button className="bg-orange-500 hover:bg-orange-600 flex justify-center
            pointer-events-none opacity-50 disabled
            items-center align-middle px-4 py-2 rounded-md text-white
             text-sm font-medium w-[95%]"onClick={() => makeReject(product._id, productStatusNow )}>Reject</button>
            </div> 
            :
            <div className="flex justify-center items-center">
          <button className="bg-orange-500 hover:bg-orange-600 flex justify-center
          items-center align-middle px-4 py-2 rounded-md text-white
           text-sm font-medium w-[95%]"onClick={() => makeReject(product._id, productStatusNow )}>Reject</button>
          </div>
          }
        </td>
      </tr>
    ))}
  </tbody>
</table>

{
productStatusNow.length == 0 ? <h2 className="pt-20 text-center font-bold">You have no product to review</h2>
: ""
}


    </div>
    );
};

export default ProductReviewQueue;