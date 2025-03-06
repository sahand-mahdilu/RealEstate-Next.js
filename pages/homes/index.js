import React, { useEffect, useState } from "react";
import db from "./../../data/db.json";
import HomeComponent from "@/Components/modules/HomeComponent";

export default function HomesPage() {
  const [search, setSearch] = useState("");
  const [homes, setHomes] = useState([...db.homes]);
  const [sort, setSort] = useState("-1");
  const [page, setPage] = useState(1);

  useEffect(() => {
    const newHome = db.homes.filter((h) => h.title.includes(search));

    setHomes(newHome);

    console.log();
  }, [search]);

  useEffect(() => {
    switch (sort) {
      case "price":
        {
          const newHomes = [...homes].sort((a, b) => a.price - b.price);

          setHomes(newHomes);
        }
        break;
      case "roomCount":
        {
          const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);

          setHomes(newHomes);
        }
        break;
      case "meterage":
        {
          const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);

          setHomes(newHomes);
        }
        break;
      default: {
        setHomes([...db.homes]);
      }
    }
  }, [sort]);

  const paginateHandler = (event, page) => {
    event.preventDefault();

    console.log(page);

    const endIndex = 6 * page;
    const startIndex = endIndex - 6;

    const paginateHomes = db.homes.slice(startIndex, endIndex);

    setHomes(paginateHomes);
  };

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="roomCount">بر اساس تعداد اتاق</option>
            <option value="meterage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="جستجو کنید"
          />
        </div>
      </div>
      <div className="homes">
        {homes.length > 0 ? (
          homes.slice(0, 6).map((home) => {
            return <HomeComponent key={home.id} {...home} />;
          })
        ) : (
          <h1 className="font-semibold text-2xl text-red-500">
            موردی یافت نشد
          </h1>
        )}
      </div>
      <ul className="pagination__list">
        {Array.from({ length: Math.ceil(db.homes.length / 6) }).map(
          (item, index) => {
            return (
              <li
                key={index + 1}
                onClick={(event) => paginateHandler(event, index + 1)}
                className="pagination__item"
              >
                <a href="#" className="">
                  {index + 1}
                </a>
              </li>
            );
          }
        )}
      </ul>
    </div>
  );
}
