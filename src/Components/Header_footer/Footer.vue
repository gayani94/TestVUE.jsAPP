<template>
   
        <footer>
           <div clas="container">
           <div>
                               <img :src="logoIcon"/>
               <div class="contact">
                   <div>call us</div>
                   <div>011-10101010</div>

               </div>
           </div>
           </div>
        </footer>
    
</template>

<script>
 import Logo from '../../assets/images/logo.png';


export default {
  data(){
    return{
                logoIcon: Logo,
     
    }
  }
}



</script>



