import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
        <div className="text-center">
        <div class="d-flex justify-content-center">
  <div class="spinner-border" role="status">
    <span class="visually-hidden my-3 ">Loading...</span>
  </div>
</div>

      </div>
    )
  }
}

export default Spinner