import React from "react";

export default function Footer() {
  return (
    <div className="bg-slate-900  h-auto">
      <div className="app-container pt-36 py-8">
        <div className="grid grid-cols-4">
          <div>
            <h1 className="text-white text-4xl font-normal">Modeva</h1>
            <div className="flex flex-row gap-4 mt-4">
             <div className="flex flex-col gap-2">
               <p className="text-white text-sm">WhatApp</p>
               <p className="text-white text-sm">Email</p>
               <p className="text-white text-sm">Address</p>
             </div>
             <div className="flex flex-col gap-2">
               <p className="text-white text-sm">
               : +668549588
              </p>
               <p className="text-white text-sm">: hello@gmai.com</p>
               <p className="text-white text-sm">: Lorem Insum Street Block Jakarta,Indonasia</p>
             </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-lg font-semibold text-white">Menu</h1>
            <ul className="grid item-start gap-2">
              <li className="text-slate-100/50 text-sm">Sales</li>
              <li className="text-slate-100/50 text-sm">New Arrvial</li>
              <li className="text-slate-100/50 text-sm">Formal Men</li>
              <li className="text-slate-100/50 text-sm">Formal Women</li>
              <li className="text-slate-100/50 text-sm">Casual Men</li>
              <li className="text-slate-100/50 text-sm">Casual women</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-lg font-semibold text-white">Ge Help</h1>

            <ul className="grid item-start gap-2">
              <li className="text-slate-100/50 text-sm">FAQ</li>
              <li className="text-slate-100/50 text-sm">Customer service</li>
              <li className="text-slate-100/50 text-sm">Refound</li>
              <li className="text-slate-100/50 text-sm">Shipping</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2 ">
            <h1 className="text-lg font-semibold text-white">Account</h1>
            <ul className="grid item-start gap-2">
              <li className="text-slate-100/50 text-sm">My Account</li>
              <li className="text-slate-100/50 text-sm">My Order</li>
              <li className="text-slate-100/50 text-sm">Vouchers</li>
              <li className="text-slate-100/50 text-sm">Discount</li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-16">
          <p className="text-xs text-white"> ALL RIGHT RESERVED</p>
          <p className="text-xs text-white">
            Copywright 2023 by Modeva Fashion
          </p>
        </div>
      </div>
    </div>
  );
}
