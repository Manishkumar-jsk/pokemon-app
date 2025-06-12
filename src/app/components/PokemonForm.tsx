"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

//hooks
import { usePokemonTypes } from "../hooks/usePokemonTypes";

const PokemonForm = () => {
  //hooks
  const router = useRouter();
  const { data } = usePokemonTypes();
  const searchParams = useSearchParams();

  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newType = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (newType) {
      params.set("type", newType);
    } else {
      params.delete("type");
    }
    router.push(`/?${params.toString()}`);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="flex gap-4 items-center justify-center mt-16 flex-wrap">
      <select
        className="rounded-full border sm:w-48 px-4 py-2"
        onChange={handleTypeChange}
      >
        <option value="">All Types</option>
        {data?.map((item) => (
          <option key={item?.id} value={item?.name}>
            {item?.name}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search Pokemon"
        className="rounded-full border py-2 px-4"
        onChange={handleSearch}
      />
    </div>
  );
};

export default PokemonForm;
