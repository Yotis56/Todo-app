import React, { useState } from "react";
import { Input } from "../Input/Index";
const Search = () => {
  const [search, setSearch] = useState('')

  const onChange = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div className="searchTodo">
      <Input inputValue={search} onChangeInput={onChange} />
    </div>
  )

}

export { Search }