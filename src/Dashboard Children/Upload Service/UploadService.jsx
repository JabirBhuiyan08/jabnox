import { useMutation } from "@tanstack/react-query";
import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../hooks/axiosSecure";


const UploadService = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();


  const mutation = useMutation({
    mutationFn:  (data) => axiosSecure.post('/service', data),
    onSuccess: (res) => {
      if(res.data.insertedId){
        alert('Service added successfully');
        reset();
      }
    }
  }) 

  const onSubmit = async(data) =>{
    mutation.mutate(data);
  }


  return (
    <div className="">
      <div>
        <h1 className="text-3xl font-bold">Upload Service Page</h1>
      </div>
      <from>
        <div className="flex gap-2 items-center mt-5">
          <label htmlFor="">Name: </label>
          <input
            {...register("name")}
            type="text"
            className="input input-bordered text-black"
          />
        </div>
        <div className="flex gap-2 items-center mt-5">
          <label htmlFor="">Discription: </label>
          <input
            {...register("Discription")}
            type="text"
            className="input input-bordered text-black"
          />
        </div>
        <div className="flex gap-2 items-center mt-5">
          <label htmlFor="">Badge: </label>
          <input
            {...register("badge")}
            type="text"
            className="input input-bordered text-black"
            placeholder="Ex: Free, Basic, Standard, Premium"
          />
        </div>
        {/* price */}
        <div className="grid grid-cols-3 mt-5 gap-2">
          <div className="flex gap-2 items-center">
            <label htmlFor="">Basic price: </label>
            <input
              {...register("BasicPrice")}
              type="number"
              className="input input-bordered text-black"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="">Standard price: </label>
            <input
              {...register("StandardPrice")}
              type="number"
              className="input input-bordered text-black"
            />
          </div>
          <div className="flex gap-2 items-center">
            <label htmlFor="">Premium price: </label>
            <input
              {...register("PremiumPrice")}
              type="number"
              className="input input-bordered text-black"
            />
          </div>
        </div>
        <div className="flex gap-2 items-center mt-5">
          <label htmlFor="">Add More Details for View Details</label>
          <input
            {...register("details")}
            type="text"
            className="input input-bordered text-black w-150"
            placeholder="Ex: Free Domain, Free Hosting, Free SSL, Live Support, Live Website"
          />
        </div>
        <button type="submit" className="btn mt-5" onClick={handleSubmit(onSubmit)}>Submit</button>
      </from>
    </div>
  );
};

export default UploadService;
