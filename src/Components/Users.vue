<template>
    <div>
        <h2>List of users</h2>

        <div 
            class="user_item"
            v-for="(user,index) in users"
            :key="index"
        >
            <div><strong>Name:</strong> {{ user.name }}</div>
            <div><strong>Lastname:</strong> {{ user.lastname }} </div>
        </div>

    </div>
</template>


<script>
    export default {
        data(){
            return {
                users:''
            }
        },
        methods:{
            fetchData(){
                this.$http.get('users')
                .then( response => {
                    this.users = response.body;
                    console.log(response.body)
                })
            }
        },
        created(){
            this.fetchData();
        }
    }
</script>

<style>
    .user_item {
        box-sizing: border-box;
        border: 1px solid #f2f2f2;
        width: 250px;
        padding: 20px;
        float: left;
        margin-left: 10px;
        background: #f7f7f7;
        margin-bottom:10px;
    }
    
</style>