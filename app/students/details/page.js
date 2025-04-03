"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
export default function StudentDetails() {
  const searchParams = useSearchParams();

  // Extract data from URL parameters
  const name = searchParams.get("name");
  const usn = searchParams.get("usn");
  const phone = searchParams.get("phone");
  const age = searchParams.get("age");
  const email = searchParams.get("email");
  const address = searchParams.get("address");
  const gender = searchParams.get("gender");

  return (
    <Suspense>
      <DetailsComponent
        name={name}
        email={email}
        phone={phone}
        gender={gender}
        age={age}
        address={address}
        usn={usn}
      />
    </Suspense>
  );
}

function DetailsComponent({ name, usn, email, address, gender, age, phone }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-10 text-black">
      <h1 className="text-3xl font-bold text-green-500 mb-5">
        Student Details
      </h1>

      <div className="bg-gray-100 p-5 rounded-lg shadow-md w-full max-w-md">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>USN:</strong> {usn}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Age:</strong> {age}
        </p>
        <p>
          <strong>Email:</strong> {email}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Gender:</strong> {gender}
        </p>
      </div>
    </div>
  );
}
