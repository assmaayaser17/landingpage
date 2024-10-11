import React from 'react'
import Image from 'next/image'
import logo1 from '../../../public/assests/logo1.png'

export default function Footer() {
  return (
   <>

  

<div className="container bg-[#249597] p-5 mx-auto" dir="rtl">

<div className="p-5 flex flex-col md:flex-row justify-between gap-10">

  
  <div className="p-5">
    <div className="logo">
      <Image src={logo1} />
    </div>
    <div className="text p-5 text-white">
      <p>
        شركة متخصصة في تقديم خدمات إنشاء المتاجر الإلكترونية،
        <br />
        وتستهدف رواد الأعمال وأصحاب
        <br />
        المشاريع الصغيرة والمتوسطة.
      </p>
    </div>
  </div>

  
  <div className="p-5 text-white">
    <div className="font-bold text-white">
      <p>روابط سريعة</p>
    </div>
    <div className="text text-white p-5 space-y-2">
      <p>من نحن</p>
      <p>التصنيفات</p>
      <p>المدونه</p>
      <p>الاسعار</p>
    </div>
  </div>

  
  <div className="p-5 text-white">
    <div className="font-bold mb-4">
      <p>خدماتنا</p>
    </div>
    <div className="text space-y-2">
      <p>إنشاء المتاجر الإلكترونية</p>
      <p>تصميم قوالب احترافية</p>
      <p>تحسين محركات البحث</p>
      <p>تسويق رقمي</p>
    </div>
  </div>

 
  <div className="p-5 text-white">
    <div className="font-bold mb-4">
      <p>تواصل معنا</p>
    </div>
    <div className="flex flex-col gap-4">
      <button className="p-5 bg-[#F3FFFF54]">البريد الالكتروني</button>
      <button className="p-5 bg-[#F3FFFF54]">خدمه العملاء</button>
    </div>
  </div>
</div>

</div>




   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   </>
  )
}
