<template>
<div>
    <div v-if="loading">
      <md-spinner md-indeterminate></md-spinner>
    </div>
    
    <md-table-card v-if="loading == false">
        <md-card-header>
            <div class="md-title">Lid toevoegen</div>            
        </md-card-header>
        
        <form novalidate @submit.stop.prevent="submit" >
            <md-card-content>
                <md-input-container>
                    <label>Voornaam</label>
                    <md-input v-model="user.first_name"></md-input>
                </md-input-container>    
                <md-input-container>
                    <label>Achternaam</label>
                    <md-input v-model="user.last_name"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Geslacht</label>
                    <md-input v-model="user.gender"></md-input>
                </md-input-container>
                <md-input-container>
                    <label>Emailadres</label>
                    <md-input v-model="user.email"></md-input>
                </md-input-container>       
            </md-card-content>
        
            <md-card-actions>
                <router-link tag="md-button" :to="{name: 'leden'}">Annuleren</router-link>                
                <md-button class="md-raised md-primary" v-on:click="createNewUser()">Toevoegen</md-button>
            </md-card-actions>
        </form>
    </md-table-card>
    
    
</div>

</template>

<script>
    import axios from 'axios';
    
export default {
  data () {
    return {
      loading: true,
      user: null,
      error: null
    }
  },
  methods: {
      createNewUser () {
          var instance = axios.create({
                baseURL: 'http://crossfit.developer.lan:81/app_dev.php/api/',
                headers: {
                    'Accept': 'application/json',
                    'Authorization': 'Bearer c5a67750a857a94f9f8e396c5521662a',
                    'Access-Control-Allow-Origin': '*'
                }
            });

            instance.put('user/new' + this.$route.params.id, {
                    
                        'first_name' : this.user.first_name,
                        'last_name' : this.user.last_name,
                        'email' : this.user.email
                    
                })
                .then(response => {
                    this.loading = false;                    
//                    this.user = response.data.user[0];
                })
                .catch(function (error) {
                    console.log(error);
                });
      }
  }
}
</script>

