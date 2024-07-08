import { BiEdit } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FiDelete } from "react-icons/fi";
import UpdateModal from "../Modal/UpdateModal";

const ManageStudent = () => {
  const handleShowModal = () => {
    document.getElementById('my_modal_2').showModal();
   
  };
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
      <tr>
        <th>1</th>
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td className="flex gap-4 text-red-500" > <BsEye/> <BiEdit onClick={handleShowModal} /> <FiDelete/> </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>2</th>
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td className="flex gap-4 text-red-500" > <BsEye/> <BiEdit/> <FiDelete/> </td>
      </tr>
      {/* row 3 */}
      <tr>
        <th>3</th>
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td className="flex gap-4 text-red-500" > <BsEye/> <BiEdit/> <FiDelete/> </td>
      </tr>
      
    </tbody>
  </table>
</div>
<UpdateModal/>
        </div>
    );
};

export default ManageStudent;