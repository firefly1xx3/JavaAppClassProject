<template>
    <div style="overflow-y: auto">
        <div v-for="group in groups" :key="group.groupId">
            <div style="padding:1rem">
                <v-card @click="$emit('select', group.groupId)">
                    <v-card-title>{{group.name}}</v-card-title>
                </v-card>
            </div> 
        </div>
    </div>
</template>

<script>
export default {
    name: 'GroupCards',
    components: {},
    props: {
        groups: [],
    },
}
</script>