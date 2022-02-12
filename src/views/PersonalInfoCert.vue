<template>
  <ion-content :fullscreen="true">
    <div class="bg-white flex flex-col font-sans">
      <div class="container mx-auto px-8">
        <header
          class="flex flex-col sm:flex-row items-center justify-between py-6 relative"
        >
          <img class="scale-75" src="../assets/images/tinago.png" />
          <nav class="hidden md:flex text-lg">
            <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6"
              >Home</a
            >
            <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6"
              >Requirements</a
            >
            <a href="#" class="text-gray-800 hover:text-teal-400 py-3 px-6"
              >Schedule an Appointment</a
            >
            <a
              href="#"
              class="bg-amber-500 hover:bg-teal-300 rounded-full uppercase text-white py-3 px-6"
              >Log out</a
            >
          </nav>
        </header>
      </div>
    

    <div class="flex justify-evenly">
      <ion-label class="font-bold text-amber-500 uppercase">Request Certificate</ion-label>

      <ion-label class="font-bold text-amber-500 uppercase">Personal Information</ion-label>
      
    </div>


    <!--<div class="flex gap-5 w-min ml-44">
      <div class="block mt-10  w-60"> 
        <ul class="whitespace-nowrap">
          <li class="border border-gray-400 text-amber-500">Date and Time</li>
          <li class="border border-gray-400 text-amber-500">Application Information</li>
          <li class="border border-gray-400 text-amber-500">Personal Information</li>
        </ul>
      </div>
    

       <div class="flex justify-center ml-60">
      <div class="flex bg-purple-200 rounded-full md:p-4 p-2 border-2 border-purple-300">
       
      </div>
    </div>

    <div class="grid grid-cols-1 mt-5 mx-7">
      <label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Input 1</label>
      <input class="py-2 px-3 rounded-lg border-2 border-purple-300 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Input 1" />
    </div>  
    </div> -->
    </div>

    <div class="grid bg-white rounded-lg shadow-xl w-11/12 md:w-9/12 lg:w-1/2">
    <div class="flex justify-center py-4">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 mt-5 mx-7">
      <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">First Name</ion-label>
        <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="First Name" />
      </div>
      <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Midle Name</ion-label>
        <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Middle Name" />
      </div>

      <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Last Name</ion-label>
        <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Last Name" />
      </div>

      <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Suffix</ion-label>
        <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Suffix" />

      </div>

      <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Purok</ion-label>
         <ion-select class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
        <ion-select-option>Riverside</ion-select-option>
        <ion-select-option>Option 2</ion-select-option>
        <ion-select-option>Option 3</ion-select-option>
      </ion-select>
      </div>
   

    <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Citizenship</ion-label>
        <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Citizenship" />

      </div>

      <div class="grid grid-cols-1">
        <ion-label class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold">Status</ion-label>
        <ion-input class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" type="text" placeholder="Status" />

      </div>
 </div>
    </div>
  </ion-content>
</template>
