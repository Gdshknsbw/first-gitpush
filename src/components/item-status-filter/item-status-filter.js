import React from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends React.Component {
  state = {
    buttons: [
      { name: "all", label: "All" },
      { name: "active", label: "Active" },
      { name: "done", label: "Done" },
    ]
  }

  renderItem(items) {
    return items.map(({name, label}) => {
      const runFilter = () => this.props.onFilterchange(name)

      const isActive = name === this.props.filter;
      const classNames = "btn " + (isActive ? "btn-info" : "btn-outline-secondary")
    

    return (
      < button
        type="button"
        className={classNames}
        key={name}
        onClick={runFilter}
      > {label}
      </button >
    );
  });
  }

  render() {
    const buttons = this.renderItem(this.state.buttons)
    return <div className='btn-group'>{buttons}</div>
    // const copyButton = this.state.buttons.map((e) => {
    //   return(
    //     <button className='btn btn-outline-secondary' key={e.name}>{e.label}</button>
    //   )
    // })
    // return (
    //   <div className="btn-group">
    //     {copyButton}
    //   </div>
    // );
  }
}

