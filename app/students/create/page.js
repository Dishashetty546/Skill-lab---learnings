"use client";
import InputField from "@/app/components/InputField";
import React, { useState } from "react";
import { Upload } from "lucide-react";
import { supabase } from "@/app/lib/supabase";
import { useRouter } from "next/navigation";
import useStore from "@/app/stores/Studentstore";
export default function CreateStudent() {
  const { setactiveStudent } = useStore();
  const [name, setName] = useState("");
  const [usn, setusn] = useState("");
  const [age, setage] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [address, setaddress] = useState("");
  const [gender, setgender] = useState("");

  const router = useRouter();

  const handleUpload = async () => {
    if (
      usn === "" ||
      name === "" ||
      phone === "" ||
      age === "" ||
      address === ""
    ) {
      alert("USN, Name, Phone, Age, and Address are required fields.");
      return;
    }

    try {
      const { data, error } = await supabase.from("Student").insert([
        {
          Name: name,
          Email: email,
          Address: address,
          gender,
          USN: usn,
          phone,
          age: age,
        },
      ]);

      if (error) {
        console.error("Error inserting data:", error.message);
        alert("Failed to create student. Please try again.");
      } else {
        alert("Student created successfully!");
        console.log("Inserted data:", data);

        setName("");
        setemail("");
        setaddress("");
        setgender("");
        setusn("");
        setphone("");
        setage(0);

        router.push(
          `/students/details?usn=${usn}&name=${name}&phone=${phone}&age=${age}&email=${email}&address=${address}&gender=${gender}`
        );
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-10 text-black">
      <h1 className="text-3xl font-bold text-green-500 mb-5">Create Student</h1>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <h2 className="text-xl font-semibold text-black mb-2">
          Enter Student Details
        </h2>

        <label className="text-black font-semibold">Name</label>
        <InputField
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter Student Name"
        />

        <label className="text-black font-semibold">USN</label>
        <InputField
          value={usn}
          onChange={(e) => setusn(e.target.value)}
          type="text"
          placeholder="Enter USN"
        />

        <label className="text-black font-semibold">Age</label>
        <InputField
          value={age}
          onChange={(e) => setage(e.target.value)}
          type="number"
          placeholder="Enter Student Age"
        />

        <label className="text-black font-semibold">Email</label>
        <InputField
          value={email}
          onChange={(e) => setemail(e.target.value)}
          type="email"
          placeholder="Enter Student Email"
        />

        <label className="text-black font-semibold">Phone</label>
        <InputField
          value={phone}
          onChange={(e) => setphone(e.target.value)}
          type="number"
          placeholder="Enter Student Phone"
        />

        <label className="text-black font-semibold">address</label>
        <InputField
          value={address}
          onChange={(e) => setaddress(e.target.value)}
          type="text"
          placeholder="Enter Student Address"
        />

        <label className="text-black font-semibold">Gender</label>
        <InputField
          value={gender}
          onChange={(e) => setgender(e.target.value)}
          type="text"
          placeholder="Enter Gender"
        />

        {/* Shorter Upload Button */}
        <div className="flex justify-center">
          <button
            onClick={handleUpload}
            className="mt-3 flex items-center justify-center space-x-2 border border-green-500 text-green-500 font-semibold px-5 py-2 rounded-md w-2/3 hover:bg-green-500 hover:text-white transition"
          >
            <Upload className="w-5 h-5" />
            <span>Upload</span>
          </button>
        </div>
      </div>
    </div>
  );
}
