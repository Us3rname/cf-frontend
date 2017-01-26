<template>
  <div id="app">
    <md-toolbar>
            <h1 class="md-title">Crossfit scorebord</h1>
        </md-toolbar>

        <md-layout md-gutter>
            <md-layout md-column>
                <md-layout md-flex="20">
                    <md-list>
                        <md-subheader>Navigation</md-subheader>

                        <md-list-item>
                            <router-link to="/">
                                <md-icon>home</md-icon> <span>Home</span>
                            </router-link>
                        </md-list-item>

                        <md-list-item>
                            <router-link to="/leden">
                                <md-icon>person</md-icon> <span>Leden</span>
                            </router-link>
                        </md-list-item>

                        <md-subheader>Admin</md-subheader>
                        <md-list-item>
                            <router-link to="/affiliate">
                                <md-icon>send</md-icon> <span>Affiliates</span>
                            </router-link>
                        </md-list-item>                        
                    </md-list>
                </md-layout>
            </md-layout>

            <md-layout md-column md-align="center" md-flex="75">
                <md-layout>
                    <router-view class="md-layout md-column">
                    </router-view>
                </md-layout>
            </md-layout>
        </md-layout>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style>

</style>
