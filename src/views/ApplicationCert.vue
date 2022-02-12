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
    </div>

    <div class="flex justify-evenly">
      <ion-label class="font-bold text-amber-500 uppercase">Request Certificate</ion-label>

      <ion-label class="font-bold text-amber-500 uppercase">Application Information</ion-label>
      
    </div>

    <div class="flex gap-5 w-min ml-44">
      <div class="block mt-10  w-60"> 
        <ul class="whitespace-nowrap">
          <li class="border border-gray-400 text-amber-500">Date and Time</li>
          <li class="border border-gray-400 text-amber-500">Application Information</li>
          <li class="border border-gray-400 text-amber-500"><a href="/personalinfo">Personal Information</a></li>
        </ul>
      </div>


    <div class="ml-60">
       <ion-item>
            <ion-label>Certificate Type</ion-label>
            <ion-select interface="popover">
              <ion-select-option value="">BARANGAY CLEARANCE</ion-select-option>
              <ion-select-option value="n64">BUSINESS PERMIT</ion-select-option>
              <ion-select-option value="ps">CERTIFICATE OF INDIGENCY</ion-select-option>
              <ion-select-option value="genesis">CERTIFICATE OF RESIDENCY</ion-select-option>
            </ion-select>
          </ion-item>
    </div>
     
      
    </div>
  </ion-content>
</template>
