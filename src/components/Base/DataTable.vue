<template>
<md-table-card>
            <md-toolbar>
                <h1 class="md-title">{{ title }}</h1>
            </md-toolbar>
            <md-table>
                <md-table-header>
                    <md-table-row >
                        <md-table-head v-for="header in headers">{{ header.name }}</md-table-head>
                    </md-table-row>
                </md-table-header>

                <md-table-body>
                    <md-table-row v-for="row in data">
                        <md-table-cell v-for="key in keys">{{ row[key]}}</md-table-cell>
                        <router-link tag="md-icon-button" :to="{name: 'profile', params: { id: row.id }}" class="md-raised md-primary">
                            <md-icon>edit</md-icon>
                        </router-link>
                    </md-table-row>
                </md-table-body>
            </md-table>
            <md-table-pagination md-size="1" md-page="1" :md-total=total md-label="Rows" md-separator="of" :md-page-options="[5, 10, 25, 50]" @pagination="onPagination"></md-table-pagination>
        </md-table-card>
</template>

<script>
export default {
    props : ['title', 'headers', 'data', 'keys', 'total', 'to'],
        data() {
            return {
                page: 1,
                limit: 5
            };
        },
    methods: {
    onPagination: function (event) {
        console.log(event)
        this.$emit('onPagination', event.page, event.size)
    }
  }
}
</script>