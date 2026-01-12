"use client";

import { SearchManufacturerProps } from "@types";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@constants";

const SearchManufacturer = ({ manufacturer, setManufacturer }: SearchManufacturerProps) => {
  const [query, setQuery] = useState("");

  // Search logic: Spaces hata kar aur lowercase karke filter karna
  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="search-manufacturer">
      {/* 1. Value aur onChange ko 'string | null' ke liye handle kiya */}
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="relative w-full">
          
          {/* 2. Logo Button */}
          <ComboboxButton className="absolute top-[14px] left-4 z-10">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              alt="Car Logo"
              className="ml-1"
            />
          </ComboboxButton>

          {/* 3. Input Field */}
          <ComboboxInput
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            // Display value string hi honi chahiye, isliye fallback "" diya
            displayValue={(item: string) => item || ""}
            onChange={(e) => setQuery(e.target.value)}
          />

          {/* 4. Transition for smooth dropdown */}
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            {/* 5. FIX: 'absolute' aur 'z-[100]' lagaya taaki dropdown piche na chupe */}
            <ComboboxOptions 
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-[100]"
            >
              {filteredManufacturers.length === 0 && query !== "" ? (
                <ComboboxOption
                  value={query}
                  className="search-manufacturer__option"
                >
                  Create "{query}"
                </ComboboxOption>
              ) : (
                filteredManufacturers.map((item) => (
                  <ComboboxOption
                    key={item}
                    value={item}
                    className={({ active }) => `
                      relative search-manufacturer__option ${
                        active ? 'bg-primary-blue text-white' : 'text-gray-900'
                      }
                    `}
                  >
                    {({ selected, active }) => (
                      <>
                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>
                          {item}
                        </span>

                        {selected ? (
                          <span className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'}`}>
                            {/* Checkmark icon yahan aa sakta hai */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacturer;