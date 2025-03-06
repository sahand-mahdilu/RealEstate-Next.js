import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import HomeComponent from "@/Components/modules/HomeComponent";

export default function HomesPage() {


  const [search,setSearch]=useState("")
  const [homes,setHomes]=useState([...db.homes])

  useEffect(()=>{

    const newHome= db.homes.filter((h)=>h.title.includes(search))

    setHomes(newHome)








  },[search])


  return (
    <div class="home-section" id="houses">
      <div class="home-filter-search">
        <div class="home-filter">
          <select name="" id="">
            <option value="" selected>
              انتخاب کنید
            </option>
            <option value="">بر اساس قیمت</option>
            <option value="">بر اساس تعداد اتاق</option>
            <option value="">بر اساس ادرس</option>
            <option value="">بر اساس اندازه</option>
          </select>
        </div>
        <div class="home-search">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="جستجو کنید" />
        </div>
      </div>
      <div class="homes">
        {homes.map((home) => {
          return <HomeComponent key={home.id} {...home} />;
        })}
      </div>
      <ul class="pagination__list">
        <li class="pagination__item">
          <a href="#" class="">
            {" "}
          </a>
        </li>
        <li class="pagination__item">
          <a href="#" class="">
            2
          </a>
        </li>
        <li class="pagination__item active">
          <a href="#" class="">
            1
          </a>
        </li>
      </ul>
    </div>
  );
}
