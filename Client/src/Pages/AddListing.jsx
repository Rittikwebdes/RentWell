import axios from "axios";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function AddListing() {
  const {token} = useAuth()
 
  const [title, setTitle] = useState("");
  const [area, setArea] = useState("");

  const [description, setDescription] = useState("");

  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [address, setAddress] = useState("");
  const [furnishing, setFurnishing] = useState("");
  const [parking, setParking] = useState("");
  const [facing, setFacing] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerNumber, setOwnerNumber] = useState("");

  const [images, setImages] = useState([]);

  const handleImageChange = (e) => {
    setImages([...e.target.files]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("area", area);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("location", location);
    formData.append("address", address);
    formData.append("furnishing", furnishing);
    formData.append("parking", parking);
    formData.append("facing", facing);
    formData.append("ownerName", ownerName);
    formData.append("ownerNumber", ownerNumber);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/add/rooms",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Auth: token,

          },
        }
      );
      console.log(response);
      alert(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="h-screen bg-[url('/img4.jpeg')] bg-cover bg-center ">
        <div className="flex justify-center items-center h-screen mt-8">
          <div className="max-w-2xl mx-auto p-2  md:mt-1  mt-6 rounded-lg shadow-lg shadow-gray-900  backdrop-blur-2xl">
            <div className="my-4">
              <h1 className="text-center bg-orange-600 p-2 text-black text-2xl font-semibold rounded-lg">
                Add Your Room Here
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex justify-around gap-5">
                <div>
              
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Title..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div>
             
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Owner Name"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-around gap-5">
                <div>
             
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Owner Mobile No."
                    value={ownerNumber}
                    onChange={(e) => setOwnerNumber(e.target.value)}
                    required
                  />
                </div>
                <div>
               
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-around gap-5">
                <div>
              
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>
                <div>
              
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex justify-around gap-5">
                <div>
             
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Furnishing"
                    value={furnishing}
                    onChange={(e) => setFurnishing(e.target.value)}
                    required
                  />
                </div>
                <div>
               
                  <input
                    className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                    type="text"
                    placeholder="Parking"
                    value={parking}
                    onChange={(e) => setParking(e.target.value)}
                    required
                  />
                </div>
              </div>
           <div className="flex justify-around gap-5">
           <div>
             
                <input
                  className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                  type="text"
                  placeholder="Facing"
                  value={facing}
                  onChange={(e) => setFacing(e.target.value)}
                  required
                />
              </div>
              <div>
            
                <input
                  className="outline-none bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                  placeholder="price"
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
           </div>

              <div>
            
                <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Something more..."
                  name=""
                  id=""
                  className="outline-none w-full bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                ></textarea>
              </div>
              <div className="">
                <label>Room images:</label>
                <input
                  className="outline-none w-full bg-transparent border border-white rounded-md shadow-md shadow-black px-1 py-1 text-white"
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  required
                />
              </div>
              <div className="">
                <button
                  type="submit"
                  className="bg-orange-600 p-2 rounded-md text-black text-2xl text-semibold"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
