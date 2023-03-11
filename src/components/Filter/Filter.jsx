
import PropTypes from "prop-types";
import React from "react";

const Filter = ({ filter, onChangeFilter }) => {
  
    return (
      <label>
        <span>Find contacts by name</span>
        <input
          name="filter"
          value={filter}
          onChange={onChangeFilter}
          type="text"
        />
      </label>
    )
  
}

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
  filter: PropTypes.string.isRequired
}

export { Filter };