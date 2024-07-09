import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import UpdateModal from "../Modal/UpdateModal";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import DetailsModal from "../Modal/DetailsModal";
import LoadingSpinner from "../Hooks/LoadingSpinner";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../app/userDetailsSlice";

const ManageStudent = () => {
  const {user}  = useAuth();
  const [id,setId] = useState()
  const dispatch = useDispatch();
  
  const {users: students=[], loading=false} =useSelector((state) => state.app || {})

  const axiosPublic = useAxiosPublic();

useEffect( ()=>{
  if(user?.email){
    dispatch(getUser(user.email))
  }
} ,[user?.email, dispatch ] )

   console.log(id);
  const handleShowModal = (id) => {
    document.getElementById('my_modal_2').showModal();
   setId(id)
  };
  const handleShowModal1 = (id)=>{
    document.getElementById('my_modal_1').showModal();
    setId(id)
  }

  const handleDelete = (id)=>{
    try {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
          if (result.isConfirmed) {
             await axiosPublic.delete(`/deleteStudent/${id}`);
            
  
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      } catch (error) {
        console.error("There was an error deleting the item!", error);
      }
  }
    if(loading) return <LoadingSpinner/>
    return (
        <div>

            <div className="flex justify-between my-5">
                <p>Manage Students</p>
                <div className="flex relative">
                    <FaMagnifyingGlass className="absolute left-4 top-2"/>
                <input className="border p-2 rounded-xl " type="text" name="" id="" />
                </div>
                    <button className="btn">Export</button>
                    <button className="btn">Filter</button>
                    <button className="btn">Print</button>
                <p>25 June 2024 16.10</p>
            </div>


          <div className="overflow-x-auto">
  <table className="table table-bg">
    {/* head */}
    <thead>
      <tr className="bg-red-500">
        <th></th>
        <th>Name</th>
        <th>Class</th>
        <th>Roll No.</th>
        <th>View/Edit/Delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        students.map((i,idx)=>
         <tr key={i._id}>
        <th>{idx+1} </th>
        <td> {i.firstName} {i.middleName} {i.lastName} </td>
        <td> {i.className} </td>
        <td> {i.roll}</td>
        <td className="flex gap-4 text-red-500" > 
          <BsEye onClick={()=>handleShowModal1(i._id)} />
           <BiEdit onClick={()=>handleShowModal(i._id)} />
           <FiDelete onClick={()=>handleDelete(i._id)} /> </td>
      </tr>)
      }
   
      
    </tbody>
  </table>
</div>
<UpdateModal i={id}  />
<DetailsModal id={id} />
        </div>
    );
};

export default ManageStudent;