<template>
    <v-navigation-drawer
        absolute
        permanent
        left
        app
        clipped
        >
        <v-list dense nav>
            <v-list-item>
                <v-list-item-content>MY ACCOUNT</v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-content>
                    <router-link 
                        to="/"
                        style="text-decoration: none; color: inherit;"
                    >
                        Home
                    </router-link>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-content>
                    <router-link 
                        to="/settings"
                        style="text-decoration: none; color: inherit;"
                    >
                        Settings
                    </router-link>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
    export default {
        name: "NavDrawer"
    }
</script>