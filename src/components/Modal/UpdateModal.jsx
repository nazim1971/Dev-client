import { useForm } from "react-hook-form";
import useAuth from "../Hooks/useAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { TbFidgetSpinner } from "react-icons/tb";


const UpdateModal = () => {
    const axiosPublic = useAxiosPublic();
    const {loader,setLoader} = useAuth();
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
      const image = data.image[0];
       // Initialize image_url as an empty string
      const { labelName } = data;
      try {
       
        const labelInfo = {
          labelName,
        };
        await axiosPublic.put(`/v1/label/updateLabel/${id.id}`, labelInfo).then((res) => {
            console.log(res.data);
          if (res.data.affectedRows > 0) {
            toast.success("update the label succesfully");
            document.getElementById("my_modal_2").close();
            // refetch();
            setLoader(false)
            reset()
          }
        });
      } catch (err) {
        toast.error(err.message);
      }
    };


    return (
        <>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="text-xl font-semibold text-center">
               hgf
              </div>
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">{name} </label>
                <input defaultValue={id.labelName}
                  {...register("labelName", { required: true })}
                  className="block w-full px-4 py-2   border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="text"
                />
              </div>
  
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium ">
                  Select Image
                </label>
                <div className="grid grid-cols-2 justify-items-center">
                <input 
                  placeholder="Photo Url"
                  {...register("image")}
                  className=" w-full text-center pt-5 pl-4 border rounded-lg  focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="file"
                  accept="image/*"
                />
                {
                    id?.photoUrl && <img className="h-20 w-20" src={id.photoUrl} alt="" />
                }
                </div>
              </div>
  
              <div className="mt-6">
                <button
                  type="submit"
                  className="w-full btn btn-primary px-6 py-3 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform  rounded-lg  focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                 {
                        loader ? <TbFidgetSpinner className="animate-spin m-auto" />
                        :
                        'Continue'
                      }
                </button>
              </div>
            </form>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </>
    );
};

export default UpdateModal;