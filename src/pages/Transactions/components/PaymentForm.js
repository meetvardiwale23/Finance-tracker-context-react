import { useForm } from "react-hook-form";
import React from "react";
import {
  monthYearOptions,
  allAccountsOptions,
  transactionTypeOptions,
} from "../../../utils/ConstantValues";
// import { FormFields } from "../../../components/Form Fields/FormFields";

export const PaymentForm = () => {
  const { register, handleSubmit } = useForm();
  const handleRegistration = (data) => console.log("data", data);

  console.log("register hooks", register);

  return (
    <div
      classNameName="Paymentform"
      style={{ width: "500px", justifyContent: "center", margin: "auto" }}
    >
      <form onSubmit={handleSubmit(handleRegistration)}>
        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Transaction Date
          </label>
          <input
            type="date"
            name="date"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            {...register("date")}
          />
        </div>
        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Month Year
          </label>
          <select name="monthYear" {...register("monthYear")}>
            <option selected disabled hidden>
              Select Month Year
            </option>
            {monthYearOptions.map((items, index) => (
              <option key={index} value={items}>
                {items}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            Transaction Type
          </label>
          <select name="transactionType" {...register("transactionType")}>
            <option selected disabled hidden>
              Select Transaction Type
            </option>
            {transactionTypeOptions.map((items, index) => (
              <option key={index} value={items}>
                {items}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            From Account
          </label>
          <select name="fromAccount" {...register("fromAccount")}>
            <option selected disabled hidden>
              Select From Account
            </option>
            {allAccountsOptions.map((items, index) => (
              <option key={index} value={items}>
                {items}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label for="exampleInputEmail1" className="form-label">
            To Account
          </label>
          <select name="fromAccount" {...register("fromAccount")}>
            <option selected disabled hidden>
              Select To Account
            </option>
            {allAccountsOptions.map((items, index) => (
              <option key={index} value={items}>
                {items}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
