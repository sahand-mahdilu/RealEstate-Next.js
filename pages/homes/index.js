import React from 'react'
import db from "./../../data/db.json"
import HomeComponent from '@/Components/modules/HomeComponent'

export default function HomesPage() {
  return (
    <div class="home-section" id="houses">
    <div class="home-filter-search">
        <div class="home-filter">
            <select name="" id="">
                <option value="" selected>انتخاب کنید</option>
                <option value="">بر اساس قیمت</option>
                <option value="">بر اساس تعداد اتاق</option>
                <option value="">بر اساس ادرس</option>
                <option value="">بر اساس اندازه</option>
            </select>
        </div>
        <div class="home-search">
            <input type="text" placeholder="جستجو کنید" />
        </div>
    </div>
    <div class="homes">


      {
        db.homes.map(home =>{
          return(
            <HomeComponent key={home.id} {...home}/>
          )
        })
      }
   






    </div>
    <ul class="pagination__list">
        <li class="pagination__item"><a href="#" class="">  </a></li>
        <li class="pagination__item"><a href="#" class="">2</a></li>
        <li class="pagination__item active"><a href="#" class="">1</a></li>
    </ul>
</div>
  )
}
