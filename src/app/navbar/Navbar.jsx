import React from 'react'
import Image from 'next/image'
import logo from '../../../public/assests/logo.png'

export default function Navbar() {
  return (
    <>



<div className="w-full" dir="rtl">
  <div className="bg-white shadow-2xl shadow-[#6fc9cb] p-5 flex flex-col md:flex-row gap-7 justify-center items-center">
    
    
    <div className="lg:w-4/12 md:w-full w-full flex justify-center md:justify-start">
      <div>
        <Image src={logo} />
      </div>
    </div>

    
    <div className="lg:w-4/12 md:w-full w-full">
      <div className="flex flex-col md:flex-row justify-center gap-5 items-center p-5">
        <div><p className="text-[#229799]">الرئيسيه</p></div>
        <div><p>من نحن</p></div>
        <div><p>المدونه</p></div>
        <div><p>الاسعار</p></div>
        <div><p>تواصل معنا</p></div>
      </div>
    </div>

    
    <div className="lg:w-4/12 md:w-full w-full flex justify-center md:justify-end gap-5 flex-wrap">
      <div>
        <button className="bg-white border-2 text-[#229799] border-[#229799] rounded-[8px] p-3">
          تسجيل الدخول
        </button>
      </div>
      <div>
        <button className="bg-[#229799] p-3 text-white rounded-[8px]">
          انشئ متجرك الان
        </button>
      </div>
    </div>
  </div>
</div>

    
    
    
    
    
    </>
  )
}
