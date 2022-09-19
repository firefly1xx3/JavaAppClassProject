<template>
    <v-container style="padding:2rem">
        <v-row style="padding-top:1rem">
            <h4>Upcoming Today</h4>
        </v-row>
        <v-row style="height:20vh; overflow-y:auto;" >
            <EventAlerts :events='eventsToday' />
        </v-row>
        <v-row style="padding-top:1rem">
            <h4>Calendar</h4>
        </v-row>
        <v-row>
            <CalendarBase :events='events' />
        </v-row>
        
    </v-container>
</template>

<script>
const dayjs = require('dayjs')
import CalendarBase from '@/components/CalendarBase.vue';
import EventAlerts from '../components/EventAlerts.vue';
import events from '../components/SampleEvents.json';  // sample events for testing dashboard
export default {
    name: 'DashBoard',
    components: {
        CalendarBase,
        EventAlerts
    },
    data: () => ({
        events: events
                    .map(e => ({...e, start: Date.parse(e.start), end: Date.parse(e.end)}))
                    .sort(({start:a}, {start:b}) => a-b),
        eventsToday:
            events
                .filter(e => 
                    dayjs(e.start) <= dayjs().endOf('day') && 
                    dayjs(e.end) >= dayjs().startOf('day'))
                .sort(({start:a}, {start:b}) => a-b),
        }),
}
</script>