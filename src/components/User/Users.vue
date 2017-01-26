<template>
<div>
    <div class="loading" v-if="loading">
      <md-spinner md-indeterminate></md-spinner>
    </div>
<DataTable v-if="loading == false"
           title="Leden" 
       :headers="[{name : 'Voornaam'}, {name : 'Achternaam'}, {name : 'E-mailadres'}]"
       :keys="['first_name', 'last_name', 'email']"
       :data=members
       :total=total       
       @onPagination="getUsers"       
       >
</DataTable>

<md-button class="md-fab md-fab-bottom-right" id="fab">
  <md-icon>add</md-icon>
</md-button> 
</div>
</template>

<script>
    import axios from 'axios';
    import DataTable from '../Base/DataTable.vue';
    
    export default {
        components: {DataTable},
        props: ['page', 'limit'],
        data() {
            return {
                members: [],                
                total: '?',
                loading: true
            };
        },
        
        mounted() {
            var instance = axios.create({
                baseURL: 'http://crossfit.developer.lan:81/app_dev.php/api/',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer c5a67750a857a94f9f8e396c5521662a',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            instance.get('user', {
                    params: {
                        origin: "*"
                    }
                })
                .then(response => {
                    this.loading = false;
                    this.members = response.data.users, this.total = response.data.total
                })
                .catch(function (error) {
                    this.loading = false;
                    console.log(error);
                });
        },
        methods: {            
            getUsers: function (page, size) {
                var instance = axios.create({
                    baseURL: 'http://crossfit.developer.lan:81/app_dev.php/api/',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json; application/hal+json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer c5a67750a857a94f9f8e396c5521662a'
                    }
                });

                instance.get('user', {
                        params: {
                            origin: "*",
                            page: page,
                            limit: size
                        }
                    })
                    .then(response => this.members = response.data.users)
                    .catch(function (error) {
                        console.log(error);
                    });
            }            
        }
    }
    
</script>