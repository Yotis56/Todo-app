import React, { useState } from "react";
import { Input } from "../Input/Index";
const Search = () => {
  const [search, setSearch] = useState('')

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  const onSubmit = event => {
    event.preventDefault();

  }

  return (
    <div className="searchTodo">
      <Input inputValue={search} onChangeInput={onChange} onSubmitInput={onSubmit}/>
    </div>
  )

}

export { Search }