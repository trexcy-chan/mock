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

    <div class="flex justify-around">
      <ion-label class="font-bold text-amber-500 uppercase"
        >Request Certificate</ion-label
      >

      <ion-label class="font-bold text-amber-500 uppercase">Date</ion-label>
      <ion-label class="font-bold text-amber-500 uppercase">Time</ion-label>
    </div>

    <div class="flex gap-5 w-min ml-44">
      <div class="block mt-10  w-60">
        <ul class="whitespace-nowrap">
          <li class="border border-gray-400 text-amber-500"><a href="">Date and Time</a></li>
          <li class="border border-gray-400 text-amber-500"><a href="/applicationcert">Application Information</a></li>
          <li class="border border-gray-400 text-amber-500">Personal Information</li>
        </ul>
      </div>

        <div class="grid ml-60">
          <div class="grid-item">
            <ion-datetime value="2012-12-15T13:47:20.789"></ion-datetime>
          </div>
      </div>

      <div class="grid-item ml-52">
            <ion-datetime presentation="time"></ion-datetime>
          </div>
      
    </div>
  </ion-content>
</template>
