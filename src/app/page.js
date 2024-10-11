import Image from "next/image";
import frame from '../../public/assests/frame.png';
import user from '../../public/assests/user.png'
import shop from '../../public/assests/shop.png'
import chart from '../../public/assests/chart.png'
import style from './page.module.css'
import bg from '../../public/assests/bg1.png'
import bg1 from '../../public/assests/bg2.png'
import screen from '../../public/assests/screen.png'
import iphone from '../../public/assests/iphone.png'
import social from '../../public/assests/sochial.png'
import watsap from '../../public/assests/watsap.png'
import discord from '../../public/assests/discord.png'
import facebook from '../../public/assests/facebook.png'
import instgram from '../../public/assests/instgram.png'
import telegram from '../../public/assests/telegram.png'
import linkedin from '../../public/assests/linkedin.png'
import abstract from '../../public/assests/abstract.png'
import photo1 from '../../public/assests/photo1.png'
import photo2 from '../../public/assests/photo2.png'
import photo3 from '../../public/assests/photo3.png'
import photo4 from '../../public/assests/photo4.png'
import laptop from '../../public/assests/laptop.png'
import icon1 from '../../public/assests/icon1.png'



export default function Home() {
  return (


    <>


<div className= {` ${style.element} firstsec container p-5 mx-auto flex  flex-col  items-center justify-center`} dir="rtl">

<div className="rightimg">

  <Image src={bg} className={`${style.element1} ${style.element3}`}/>


</div>

<div className="leftimg">
  <Image src={bg1} className={`${style.element1} ${style.element2}`}/>
</div>

<div className=" ">
<div className="flex flex-col items-center gap-8 ">
<div className=" p-5 flex  flex-col items-center  ">
  <div className="text-3xl font-bold text-center text-[#229799]"><p>ابدء الآن بإنشاء موقعك الإلكتروني
    <br/>
     مع افضل منصة عربية  </p>
     </div>

     <div className=" text-center p-3 text-gray-500 font-bold">
      <p>سهولة، سرعة، ومرونة كاملة لإنشاء موقعك الإلكتروني 
        <br/>
        بدون أي معرفة برمجية</p>


     </div>




</div>
<div>
  <Image src={frame} className="w-[20vw]"/>
</div>


</div>






</div>

<div className=" m-9">
<div className=' flex gap-10 justify-evenly items-center' >

<div className="bg-white p-4 flex justify-center items-center gap-3 rounded-[10px] shadow-2xl m-5 ">
  
  <div>
      <p className="text-xl font-bold">200+</p>
      <p className="text-gray-400">مبيعات</p>
    </div>
    
    <div>
      <Image src={chart}
      width={50}
      
      />
    </div>
    


  </div>

<div className="bg-white p-4 flex justify-center items-center gap-3 rounded-[10px] shadow-2xl m-5 ">
  
  <div>
      <p className="text-xl font-bold">200+</p>
      <p className="text-gray-400">متجر الكتروني</p>
    </div>
    
    <div>
      <Image src={shop}
      width={50}
      
      />
    </div>
    


  </div>



<div className="bg-white p-4 flex justify-center items-center gap-3 rounded-[10px] shadow-2xl m-5 ">
  
<div>
    <p className="text-xl font-bold">2050+</p>
    <p className="text-gray-400">مستخدم</p>
  </div>
  
  <div>
    <Image src={user}
    width={50}
    
    />
  </div>
  


</div>



</div>




</div>



</div>






<div className="container  secondsec flex flex-col lg:flex-row gap-y-5 flex-wrap p-8 mx-auto bg-[#F7F7F8]" dir="rtl">

  
  <div className="lg:w-7/12 md:w-full">
    <div className="flex p-5 m-5 flex-col">

      <div className="font-bold text-3xl">
        <h2 className="pt-5">
          <span className="text-[#229799]">نحن هنا</span>
          لنجعل أحلامك التجارية حقيقية
        </h2>
      </div>

      <div className="">
        <div className="p-3">
          <p className="pt-5">
            نحن فريق من المبدعين والمهنيين المتخصصين في تصميم وتطوير
            <br/>
            المتاجر الإلكترونية، نهدف إلى تمكين رواد
          </p>
        </div>

        <div className="p-3">
          <p className="pt-5">
            نحن نقدم مجموعة شاملة من الخدمات التي تشمل تصميم المواقع، تحسين تجربة المستخدم، والتسويق الرقمي، مما يضمن لعملائنا الوصول إلى جمهور أوسع وزيادة مبيعاتهم.
          </p>
        </div>

        <div className="p-3">
          <p>
            بفضل خبرتنا الواسعة في هذا المجال، نعمل بتعاون وثيق مع كل عميل
            <br/>
            لفهم احتياجاته ورؤيته، مما يساعدنا على تقديم حلول مخصصة تلبي
            <br/>
            توقعاتهم وتساعدهم على النجاح في عالم التجارة الإلكترونية.
          </p>
        </div>
      </div>

      <div className="p-5">
        <button className="p-5 bg-[#229799] text-white rounded-[8px]">اكتشف المزيد</button>
      </div>

    </div>
  </div>

  
  <div className="lg:w-5/12 md:w-full">
    <div className="p-5">
      <Image src={screen} alt="Screen Image" />
    </div>
  </div>
</div>




<div className="container thirdsec mx-auto p-5 flex justify-center" dir="rtl">
<div className="flex flex-col lg:flex-row gap-20">

<div className="lg:w-6/12 md:w-full w-full">
<div className="p-5 flex justify-center">
  <Image src={iphone} alt="iPhone image" className="max-w-full h-auto" />
</div>
</div>


<div className="lg:w-6/12 md:w-full w-full flex flex-col justify-center">
<div className="text-center lg:text-right">
  <h3 className="text-2xl font-bold p-5">
    <span className="text-[#229799]">صمم موقعك الالكتروني</span> باحترافية وجذب
    <br />
    عملاءك من اللحظة الأولى
  </h3>
</div>

<div className="p-5 flex flex-col gap-6 ">
  <p>تصميم واجهة جذابة وبسيطة تجعل التنقل سلسًا</p>
  <p>سرعة تحميل عالية ومُحسنة لضمان بقاء العملاء</p>
  <p>الموقع يتكيف مع جميع الأجهزة</p>
  <p>تصميم متوافق مع معايير محركات البحث</p>
</div>

<div className="p-5 flex justify-center lg:justify-start">
  <button className="bg-[#229799] p-3 rounded-[8px] text-white">
    انشئ متجرك الان
  </button>
</div>
</div>
</div>
</div>


<div className="container fourthsec mx-auto p-5 flex justify-center" dir="rtl">
<div className="flex flex-col lg:flex-row">




<div className="lg:w-6/12 md:w-full w-full flex flex-col justify-center">
<div className="text-center lg:text-right">
  <h3 className="text-2xl font-bold p-5">
    <span className="text-[#229799]">انطلق باعمالك </span> 
    نحو النجاح مع 
    <br/>
    
    استراتيجيات التسويق الرقمي الفعالة
  
    
  </h3>
</div>

<div className="p-5 flex flex-col gap-6 ">
  <p> تحويل الزوار إلى عملاء باستخدام استراتيجيات ترويج مخصصصه</p>
  <p>رفع مستوى الوعي بالعلامة التجارية من خلال إعلانات فعالة</p>
  <p>إمكانية تعديل الاستراتيجية التسويقية</p>
  <p>الوصول إلى الفئة المستهدفة بدقة</p>
</div>

<div className="p-5 flex justify-center lg:justify-start">
  <button className="bg-[#229799] p-3 rounded-[8px] text-white">
    ابدا تجارتك الان
  </button>
</div>
</div>


<div className="lg:w-6/12 md:w-full w-full ">
<div className="p-5 flex justify-center">
  <Image src={social} alt="social image" className="max-w-full h-auto" />
</div>
</div>






</div>




</div>


<div class="bg-gray-100  container mx-auto p-5 py-12" dir="rtl">
  <div class="max-w-6xl mx-auto text-center">
    <h2 class="text-3xl font-semibold text-gray-800">
      <span className="text-teal-500" >انضم الى </span>
      مجتمع قمره

    </h2>
    <p class="text-gray-600 mt-4">تابعنا على وسائل التواصل الاجتماعي للبقاء على 
      <br/>
      اطلاع بأحدث الأخبار والفعاليات</p>
  </div>

  <div class="w-[80vw] mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-12 ">
  
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <Image
       src={watsap} alt="watsap" class="w-12 h-12 mx-auto"/>
      <p class="text-gray-800 mt-4">قناه الواتساب</p>
      <p class="text-gray-500">300 متابع</p>
      <button  class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-[8px] w-full inline-block">انضم إلينا</button>
    </div>

   
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <Image src={discord} alt="discord" class="w-12 h-12 mx-auto"/>
      <p class="text-gray-800 mt-4">ديسكورد</p>
      <p class="text-gray-500">300 متابع</p>
      <button  class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-[8px] inline-block w-full">انضم إلينا</button>
    </div>

    
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <Image src={facebook} alt="facebook" class="w-12 h-12 mx-auto"/>
      <p class="text-gray-800 mt-4">  فيسبوك </p>
      <p class="text-gray-500">300 متابع</p>
      <button class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-[8px] w-full inline-block">انضم إلينا</button>
    </div>

    
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <Image src={instgram} alt="instgram" class="w-12 h-12 mx-auto"/>
      <p class="text-gray-800 mt-4">فيسبوك</p>
      <p class="text-gray-500">300 متابع</p>
      <button class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-[8px] w-full inline-block">انضم إلينا</button>
    </div>

    
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <Image src={telegram} alt="telegram" class="w-12 h-12 mx-auto"/>
      <p class="text-gray-800 mt-4">تليجرام</p>
      <p class="text-gray-500">300 متابع</p>
      <button  class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-[8px] w-full inline-block">انضم إلينا</button>
    </div>

   
    <div class="bg-white shadow-md rounded-lg p-6 text-center">
      <Image src={linkedin} alt="linkedin" class="w-12 h-12 mx-auto"/>
      <p class="text-gray-800 mt-4">لينكدان</p>
      <p class="text-gray-500">300 متابع</p>
      <button class="mt-4 bg-teal-500 text-white px-4 py-2 rounded-[8px] w-full inline-block">انضم إلينا</button>
    </div>
  </div>
</div>



<div className={`container p-5 mx-auto   flex flex-col items-center justify-center ${style.element4}`}>

  <div className="text-center text-3xl mb-5 font-bold">
    <p>رواد النجاح</p>
  </div>

  
  <div className="flex flex-col md:flex-row justify-center items-center ">

    <div className="rightimg w-full md:w-1/2">
      <Image src={bg} className={`${style.element1} ${style.element3} w-full`} />
    </div>

    
    <div className="leftimg w-full md:w-1/2">
      <Image src={bg1} className={`${style.element1} ${style.element2} w-full`} />
    </div>
  </div>

  
  <div className=" flex flex-col md:flex-row justify-center items-center gap-28  " dir="rtl">
    <div className=" ">
      <Image src={abstract} className="" />
    </div>
    <div className="">
      <Image src={photo1} className="" />
    </div>
    <div>
      <Image src={photo2} className="" />
    </div>
    <div>
      <Image src={photo3} className="" />
    </div>
    <div>
      <Image src={photo4} className="" />
    </div>
  </div>

</div>



<div class="bg-gray-100 py-12" dir="rtl">
  <div class="container mx-auto ">

  

{/* <div class="flex justify-center  items-center relative mb-6">
  
  <div class=" p-4 rounded-full absolute inset-y-0 right-0 ">
    <Image src={icon1} class="w-8 h-8" alt="Icon" />
   
    
  </div> 
  
  <h2 class="text-3xl font-bold mb-4 text-center ">
    اختر خطتك وابدأ اليوم
  </h2>

  
  
 
  
</div> */}

 

    
    <div class="flex justify-center  space-x-4 mb-6">
      <button class="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">شراكة</button>
      <button class="bg-teal-500 text-white px-4 py-2 rounded-md">اشتراك</button>
    </div>
    
    
    <div class=" lg:flex justify-center  gap-5 md:w-full  ">
      
      
      <div class="bg-white shadow-lg rounded-[8px] m-5  p-6">
       <div className=" p-5">
        <p>خطه البدايه</p>
        <p>ابدأ مشوار نجاحك بخطوات شهرية محسوبة</p>
       </div>

       <div className="text-center p-5 font-bold text-2xl bg-[#22979921]  ">
        <p>500 جنية مصرى</p>
       </div>

       <div>
       <ul class="text-gray-600 mb-6 p-5 ">
          <li>✔️ استضافة رفع حتى 50 منتجًا</li>
          <li>✔️ دعم فني على مدار الساعة</li>
          <li>✔️ إمكانية ترويج المنتجات</li>
          <li>✔️ مساحة تخزين لرفع المنتجات</li>
        </ul>


       </div>
        
        <div className="flex justify-center">
        <button class="bg-teal-500 text-white py-2 px-6 rounded-lg">اشترك الآن</button>


        </div>
        
      </div>

      <div class="bg-[#229799BA] shadow-lg rounded-[8px] m-5  text-white p-6">
       <div className=" p-5">
        <p>خطه البدايه</p>
        <p>ابدأ مشوار نجاحك بخطوات شهرية محسوبة</p>
       </div>

       <div className="text-center p-5 font-bold text-2xl bg-[#22979921]  ">
        <p>1000 جنية مصرى</p>
       </div>

       <div>
       <ul class="text-white mb-6 p-5 ">
          <li>✔️ استضافة رفع حتى 50 منتجًا</li>
          <li>✔️ دعم فني على مدار الساعة</li>
          <li>✔️ إمكانية ترويج المنتجات</li>
          <li>✔️ مساحة تخزين لرفع المنتجات</li>
        </ul>


       </div>
        
        <div className="flex justify-center">
        <button class="bg-white text-teal-500 py-2 px-6 rounded-lg">اشترك الآن</button>


        </div>
        
      </div>

      <div class="bg-white shadow-lg rounded-[8px]  m-5 p-6">
       <div className=" p-5">
        <p>خطه البدايه</p>
        <p>ابدأ مشوار نجاحك بخطوات شهرية محسوبة</p>
       </div>

       <div className="text-center p-5 font-bold text-2xl bg-[#22979921]  ">
        <p>500 جنية مصرى</p>
       </div>

       <div>
       <ul class="text-gray-600 mb-6 p-5 ">
          <li>✔️ استضافة رفع حتى 50 منتجًا</li>
          <li>✔️ دعم فني على مدار الساعة</li>
          <li>✔️ إمكانية ترويج المنتجات</li>
          <li>✔️ مساحة تخزين لرفع المنتجات</li>
        </ul>


       </div>
        
        <div className="flex justify-center">
        <button class="bg-teal-500 text-white py-2 px-6 rounded-lg">اشترك الآن</button>


        </div>
        
      </div>
      
     
      
      
      

    </div>
  </div>
</div>









<div className="container p-5 mx-auto flex justify-center" dir="rtl">

  <div className="bg-[#2297994F] flex flex-col md:flex-row justify-center items-center rounded-[8px] border-2 border-[#229799] p-5 w-full lg:w-[70vw]">

   
    <div className="w-full md:w-7/12 p-5 m-5">
      <div className="text-2xl font-bold">
        <p>حول أفكارك إلى متجر إلكتروني ناجح في دقائق</p>
      </div>

      <div className="p-5">
        <p>
          لا تدع الأفكار تبقى على الورق! ابدأ الآن في تحويل رؤيتك إلى واقع مع منصتنا
          <br/>
          المتكاملة لإنشاء المتاجر الإلكترونية
        </p>
      </div>

      <div className="p-5">
        <button className="text-white bg-[#229799] p-5 rounded-[8px]">
          ابدأ تجارتك الان
        </button>
      </div>
    </div>

    
    <div className="w-full md:w-5/12 p-5 m-5 flex justify-center">
      <div>
        <Image src={laptop} alt="Laptop Image" />
      </div>
    </div>
  </div>
</div>














    
    
    
    
    
    
    
    
    </>
  );



}
  

   

    





  
 

  
    

  