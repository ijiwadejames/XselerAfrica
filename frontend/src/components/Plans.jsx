/** @format */

import React from "react";

const Plans = () => {
  return (
    <div className="container mt-5 vh-82">
      <h1 className="mb-4">Plans</h1>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header bg-primary text-white">Free Plan</div>
            <div className="card-body">
              <h5 className="card-title">$0/month</h5>
              <ul className="list-group">
                <li className="list-group-item">Basic CV Builder</li>
                <li className="list-group-item">Limited Templates</li>
                <li className="list-group-item">Email Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header bg-warning">Lite Plan</div>
            <div className="card-body">
              <h5 className="card-title">$1.99/month</h5>
              <ul className="list-group">
                <li className="list-group-item">Advanced CV Builder</li>
                <li className="list-group-item">Full Template Library</li>
                <li className="list-group-item">Priority Email Support</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-header bg-success text-white">Pro Plan</div>
            <div className="card-body">
              <h5 className="card-title">$4.99/month</h5>
              <ul className="list-group">
                <li className="list-group-item">Premium CV Builder</li>
                <li className="list-group-item">Customizable Templates</li>
                <li className="list-group-item">24/7 Priority Support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
