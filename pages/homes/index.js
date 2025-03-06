import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import HomeComponent from "@/Components/modules/HomeComponent";

export default function HomesPage() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.homes]);
  const [sort, setSort] = useState("-1");

  useEffect(() => {
    const newHome = db.homes.filter((h) => h.title.includes(search));

    setHomes(newHome);

    console.log();
  }, [search]);

  useEffect(()=>{


    switch(sort){
      case "price":{

        const newHomes = [...homes].sort((a,b)=> a.price - b.price)

        setHomes(newHomes)

      }
      break;
      case "roomCount":{
        const newHomes = [...homes].sort((a,b)=> a.roomCount - b.roomCount)

        setHomes(newHomes)

      }
      break;
      case "meterage":{

        const newHomes = [...homes].sort((a,b)=> a.meterage - b.meterage)

        setHomes(newHomes)

      }
      break;
      default :{

      }
    }
   



  },[sort])

  return (
    <div class="home-section" id="houses">
      <div class="home-filter-search">
        <div class="home-filter">
          <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="-1" selected>
              انتخاب کنید
            </option>
            <option value="price">بر اساس قیمت</option>
            <option value="roomCount">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div class="home-search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div class="homes">
        {homes.length > 0 ? (
          homes.map((home) => {
            return <HomeComponent key={home.id} {...home} />;
          })
        ) : (
          <h1 className="font-semibold text-2xl text-red-500">
            موردی یافت نشد
          </h1>
        )}
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
