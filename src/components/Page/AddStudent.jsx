import { useForm } from "react-hook-form";

const AddStudent = () => {

    const {
        register,
        handleSubmit,
        reset
      } = useForm()

      const onSubmit = (data) => {
        const {firstName, middleName,lastName,className,division,roll,address1,address2,landmark,city,pincode} = data

        const formData = {
            firstName, middleName,lastName,className,division,roll,address1,address2,landmark,city,pincode
        }
      
        console.table(formData);
        reset()
    }


  return (
    <div>
      <div className="flex justify-between my-5 border">
        <p>Add Student</p>
        <p>Data 7 july 10.22pm</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>

      <div>

<div className="grid grid-cols-3 gap-4 mb-5">
  <input
  {...register("firstName",{required: true})}
   placeholder="First Name" className=" input  input-bordered w-full" type="text" />
  <input
  {...register("middleName",{required: true})}
  placeholder="Middle Name" className=" input  input-bordered w-full" type="text" />
  <input
  {...register("lastName",{required: true})}
  placeholder="Last Name" className=" input  input-bordered w-full" type="text" />
</div>

<div className="grid grid-cols-3 gap-4 mb-5" >
  <select 
  {...register("className",{required: true})}
  className=" border rounded-lg w-full" >
    <option disabled value="" selected>
      Select Class
    </option>
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

  <select  placeholder='select'
  {...register("division",{required: true})}
  className=" border rounded-lg w-full" >
    <option disabled value="" selected>
      Select Division
    </option>
    <option value="A">A</option>
    <option value="B">B</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="E">E</option>
  </select>

  <input
  {...register("roll",{required: true,pattern: /^\d{2}$/})}
  min="10" 
  max="99"
  placeholder="Enter Roll Number in Digits" className=" input  input-bordered w-full" type="number" />
</div>

<div className="grid grid-cols-2 gap-4 mb-5">
<input
 {...register("address1",{required: true})}
placeholder="Address Line 1" className=" input  input-bordered w-full" type="text" />
<input
{...register("address2",{required: true})}
placeholder="Address Line 2" className=" input  input-bordered w-full" type="text" />
</div>

<div className="grid grid-cols-3 gap-4 mb-5">
  <input
  {...register("landmark",{required: true})}
  placeholder="Landmark" className=" input  input-bordered w-full" type="text" />
  <input
  {...register("city",{required: true})}
  placeholder="City" className=" input  input-bordered w-full" type="text" />
  <input
  {...register("pincode",{required: true,pattern: /^\d{4,6}$/ })}
  min='1000'
  max='999999'
  placeholder="Pincode" className=" input  input-bordered w-full" type="number" />
</div>
    <div>
        <button className="btn btn-wide bg-red-500 text-white">
            Add Student
        </button>
    </div>
</div>

      </form>

    </div>
  );
};

export default AddStudent;
