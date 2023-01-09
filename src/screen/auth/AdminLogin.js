import React from "react";

function AdminLogin() {
  return (
    <div className="bg-black1 h-screen flex text justify-center items-center">
      <form className="bg-black2 p-4 w-10/12 sm:w-8/12 md:w-6/12 lg:w-3/12 rounded">
        <h3 className="mb-3 text-white text-center capitalize font-semibold text-lg ">
          Dashboard Login
        </h3>
        <div className="mb-3">
          <input
            type="email"
            name=" "
            class="w-full bg-black1 p-4 rounded outline-none text-white"
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            name=" "
            class="w-full bg-black1 p-4 rounded outline-none text-white"
            placeholder="Enter password"
          />
        </div>
        <div className="mb-3">
              <input type="submit"  value="sign in" className="bg-indigo-600 w-full rounded text-white p-4 uppercase font-semibold cursor-pointer"/>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
