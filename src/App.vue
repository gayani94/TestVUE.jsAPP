<template>
    <div>
        <comp-header/>
    <div>
        <md-button>
           <comp-featured/>
         </md-button>   
     </div>
    <comp-footer/>
        </div>
</template>

<script>
import compHeader from './Components/Header_footer/Header';
import compFooter from './Components/Header_footer/Footer';
import compFeatured from './Components/Featured/index.vue';



export default{
    components: {
        compHeader,
        compFooter,
        compFeatured
    }
}
</script>


<style>
@import './assets/style.css';
</style>

