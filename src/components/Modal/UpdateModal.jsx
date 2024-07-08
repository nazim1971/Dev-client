import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const UpdateModal = ({ i,refetch }) => {
  const axiosPublic = useAxiosPublic();
  // const {loader,setLoader} = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async(data) => {
    const {firstName, middleName,lastName,className,division,roll,address1,address2,landmark,city,pincode} = data

    const formData = {
        firstName, middleName,lastName,className,division,roll,address1,address2,landmark,city,pincode
    }
   
    const res = await axiosPublic.put(`/updateStudent/${i._id}`,formData)
    console.log(res);
    if(res.data.modifiedCount >= 1){
        reset()
        refetch()
        document.getElementById("my_modal_2").close();
        toast.success('Update student data Successfully')
    }
}


  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div className="grid grid-cols-3 gap-4 mb-5">

               <div className="space-y-2">
                <label>
                    First Name
                </label>
               <input
                defaultValue={i?.firstName}
                  {...register("firstName", { required: true })}
                  placeholder="First Name"
                  className=" input  input-bordered w-full"
                  type="text"
                />
               </div>
               
               <div className="space-y-2">
                <label>
                    Middle Name
                </label>
               <input
                defaultValue={i?.middleName}
                  {...register("middleName", { required: true })}
                  placeholder="Middle Name"
                  className=" input  input-bordered w-full"
                  type="text"
                />
               </div>

                <div className="space-y-2">
                    <label>
                        Last Name
                    </label>
                <input
                defaultValue={i?.lastName}
                  {...register("lastName", { required: true })}
                  placeholder="Last Name"
                  className=" input  input-bordered w-full"
                  type="text"
                />
                </div>

              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">

               <div className="space-y-2">
               <label > 
                    Class
                </label>
                <select
                defaultValue={i?.className}
                  {...register("className", { required: true })}
                  className=" border rounded-lg w-full h-12"
                >
                  <option value="I">I</option>
                  <option value="II">II</option>
                  <option value="III">III</option>
                  <option value="IV">IV</option>
                  <option value="V">V</option>
                  <option value="VI">VI</option>
                  <option value="VII">VII</option>
                  <option value="VIII">VIII</option>
                  <option value="IX">IX</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                </select>
               </div>

             <div className="space-y-2">
                <label>
                    Division
                </label>
             <select
                defaultValue={i?.division}
                  placeholder="select"
                  {...register("division", { required: true })}
                  className=" border rounded-lg w-full h-12"
                >
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>

             </div>

               <div className="space-y-2">
                <label>
                    Roll
                </label>
               <input
                defaultValue={i?.roll}
                  {...register("roll", { required: true, pattern: /^\d{2}$/ })}
                  min="10"
                  max="99"
                  placeholder="Enter Roll Number in Digits"
                  className=" input  input-bordered w-full"
                  type="number"
                />
               </div>

              </div>

              <div className="grid grid-cols-2 gap-4 mb-5">
                
                <div className="space-y-2">
                    <label>
                        Address 1
                    </label>
                <input
                defaultValue={i?.address1}
                  {...register("address1", { required: true })}
                  placeholder="Address Line 1"
                  className=" input  input-bordered w-full"
                  type="text"
                />
                </div>

                <div className="space-y-2">
                    <label>
                        Address 2
                    </label>
                <input
                defaultValue={i?.address2}
                  {...register("address2", { required: true })}
                  placeholder="Address Line 2"
                  className=" input  input-bordered w-full"
                  type="text"
                />
                </div>

              </div>

              <div className="grid grid-cols-3 gap-4 mb-5">

                <div className="space-y-2">
                    <label>
                        Landmark
                    </label>
                <input
                defaultValue={i?.landmark}
                  {...register("landmark", { required: true })}
                  placeholder="Landmark"
                  className=" input  input-bordered w-full"
                  type="text"
                />
                </div>

                <div className="space-y-2">
                    <label>
                        City
                    </label>
                <input
                defaultValue={i?.city}
                  {...register("city", { required: true })}
                  placeholder="City"
                  className=" input  input-bordered w-full"
                  type="text"
                />
                </div>

               <div className="space-y-2">
                <label>
                    Pincode
                </label>
               <input
                defaultValue={i?.pincode}
                  {...register("pincode", {
                    required: true,
                    pattern: /^\d{4,6}$/,
                  })}
                  min="1000"
                  max="999999"
                  placeholder="Pincode"
                  className=" input  input-bordered w-full"
                  type="number"
                />
               </div>

              </div>
    
            </div>

            <div>
                <button className="btn w-full bg-green-400 text-white">Update</button>
            </div>
          </form>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-red-400 text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default UpdateModal;
