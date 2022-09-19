<template>
    <div style="padding:1rem; width:100%" >
        <div v-for="event in events" :key="event"> 
            <v-alert 
                :color=event.color 
                text
                dense
            >
                {{`${new Date(event.start).toLocaleString()}: ${event.name}`}}
            </v-alert>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventAlerts", 
        props: {
            events: []
      },
    }
</script>