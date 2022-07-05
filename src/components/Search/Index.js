import React from "react";
import { Input } from "../Input/Index";

const Search = ({ search, setSearch }) => {
  
  const onChange = (event) => {
    setSearch(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault();
    //realmente necesito un submit?
  }

  return (
    <div className="searchTodo">
      <Input inputValue={search} onChangeInput={onChange} onSubmitInput={onSubmit}/>
    </div>
  )

}

export { Search }