<template>
<ion-content class="bg">
<div class="grid min-h-screen place-items-center">
    <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
     <h1 class="text-xl font-semibold">Hello there 👋, <span class="font-normal">Please fill in your information to register</span></h1>
     <form class="mt-6">
         <div class="flex justify-between gap-3">
              <span class="w-1/2">
              <ion-label class="block text-xs font-semibold text-gray-600 uppercase">
                    First Name
              </ion-label>
              <ion-input class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              type="text" placeholder="First Name">

              </ion-input>
              </span>

              <span class="w-1/2">
              <ion-label class="block text-xs font-semibold text-gray-600 uppercase">Last Name</ion-label>
              <ion-input class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" type="text" placeholder="Last Name"></ion-input>
              </span>
         </div>
         <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Purok</ion-label>
         <ion-select class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
         placeholder="Purok">
           <ion-select-option value="01">Riverside</ion-select-option>
           <ion-select-option value="02">Sulondon</ion-select-option>
           <ion-select-option value="03">Seaside</ion-select-option>
         </ion-select>
         <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</ion-label>
         <ion-input class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
         type="password" placeholder="Password"></ion-input>
         
         <ion-label class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm Password</ion-label>
         <ion-input class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" 
         type="password"
         placeholder="Confirm Password"></ion-input>

         <ion-button class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
        fill="clear">Sign Up</ion-button>
         <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
        
         <a class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black"
         href="/signup-admin"> 
         Sign Up As Admin</a >
     </form>
    </div>
</div>

</ion-content>
</template>

<script lang="ts">
import { IonContent} from '@ionic/vue';
import { defineComponent } from 'vue';
import { calculator, lockClosed} from 'ionicons/icons';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent
  }, setup(){
    return{
      calculator,
      lockClosed
    }
  }
});
</script>

<style scoped>
.bg{
  --ion-background-color:#EFEFEF;
}

</style>
