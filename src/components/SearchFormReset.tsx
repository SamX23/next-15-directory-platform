"use client";

import Link from "next/link";

const SearchFormReset = () => {
  const handleOnClick = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

  return (
    <button type="reset" onClick={handleOnClick}>
      <Link href="/" className="search-btn text-white text-lg">
        X
      </Link>
    </button>
  );
};

export default SearchFormReset;
