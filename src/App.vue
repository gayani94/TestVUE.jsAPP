<template>
    <div>
        <app-header/>
        <div class="container">
           <form>
               <div class="row">
                   <div class="col-xs-12">
                        <h1>SimpleFix</h1>
                        <hr>

                         <div class="form-group">
                            <label for="session">Session</label>
                            <select
                                class="form-control"
                                id="session"
                                v-model="formdata.session"
                            >
                               <option 
                                   v-for="(session,index) in sessions"
                                    :key="index"
                                >
                                    {{ session }}
                                </option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="msgType">Message Type</label>
                            <select
                                class="form-control"
                                id="msgType"
                                v-model="formdata.msgType"
                            >
                               <option 
                                   v-for="(msgType,index) in msgType"
                                    :key="index"
                                >
                                    {{ msgType }}
                                </option>
                            </select>
                        </div>

                        
                       

                        

                        <div class="form-group">
                            <label for="message">Order</label>
                            <textarea
                                class="form-control"
                                rows="3"
                                id="message"
                                v-model="formdata.message"
                            ></textarea>
                        
                        </div>


                        

                        
                       
                        <button 
                            class="btn btn-primary"
                            @click.prevent="submitForm"
                        >
                            Send
                        </button>

                   </div>
               </div>
           </form>
        </div>
        <app-footer/>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                sessions:[
                    'Session(TEST1)',
                    'Session(TEST2)',
                    'Session(TEST3)',
                    'Session(TEST4)'
                ],

                msgType:[
                    '35=D',
                    '35=G',
                    '35=F'

                ],
                formdata:{
                   
                    message:'Add ClOrdID, OrigClOrdID',
                    
                    session:'Session(TEST1)',

                    msgType: '35=D'
                }
            }
        },
        methods:{
            submitForm(){
                console.log(this.formdata);
                console.log(JSON.stringify(this.formdata))
            }
        }
    }
</script>


<style>
    body {
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }



</style>