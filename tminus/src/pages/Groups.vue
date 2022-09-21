<template>
    <v-container style="padding:2rem">
        <v-row>
            <v-col cols="9">
                <CalendarBase 
                    :events='groupEvents()' />
            </v-col>
            <v-col>
                <GroupCards 
                    :groups="groups" 
                    @select="id => this.selected=id" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import CalendarBase from '@/components/CalendarBase.vue';
import GroupCards from '@/components/GroupCards.vue'; 
import groups from '@/components/SampleGroups.json';    // stand-in for api call to retrieve user's groups
import events from '@/components/SampleEvents.json';
export default {
    name: 'AccountGroups',
    components: {
        CalendarBase,
        GroupCards
    },
    data: () => ({
        groups: groups.sort(({name:a}, {name:b}) => a-b),
        selected: null,
        events: events
                    .filter(e => e.groupId)
                    .map(e => ({...e, start: Date.parse(e.start), end: Date.parse(e.end)}))
    }),
    methods: {
        handleSelect(groupId) { 
            console.log(this.selected)
            this.selected = groupId;
        },
        groupEvents() {
            return this.selected ? this.events.filter(e => e.groupId === this.selected) : this.events
        }
    },
}
</script>