import React, { useState } from 'react'
import Select from 'react-select';


const EventTypeSelect = ({
  value,
  onChange,
  options,
}) => {

  return (
    <Select
      value={value}
      onChange={onChange}
      options={options}
    />
  )
}

export default EventTypeSelect