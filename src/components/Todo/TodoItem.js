import React from 'react';

const TodoItem = ({toggle, remove, item}) => (

  <div className="columns">
    {console.log(item)}
    <div className="column is-four-fifths">
      <label className="checkbox">
        <input type="checkbox" onClick={toggle} checked={item.completed} />
        {item.text}
      </label>
    </div>
    <div className="column">
      <span className="icon has-text-danger fa fa-2x" onClick={remove}>
        <i className="fa fa-minus-circle" />
      </span>
    </div>
  </div>
);

TodoItem.propTypes = {
  toggle: PropTypes.
};

export default TodoItem