Vue.component('team-intro', {
    props: ['info'],
    template: '<div><h1> Daily Standup Updates for Team {{ info.name }}</h1><h5>The team contains the following members:</h5><ul><li v-for="member in info.members"> {{member}}</li></ul></div> '
})

Vue.component('team-updates', {
    props: ['updates'],

template: '<table><thead><tr><th>Date</th><th v-for="member in listOfMembers">{{member}}</th></tr></thead><tbody><tr v-for="update, date in updates" :key="date"><td>{{date}}</td><td v-for="memberUpdate, member in update" :key="member"><ul><li v-for="task in memberUpdate" :key="task.id"> {{task.title}}</li></ul></td></tr></tbody></table>',
    computed: {
        listOfDates() {
            console.info(this.updates)
            return Object.keys(this.updates) 
        },
        listOfMembers() {
            const first = Object.keys(this.updates)[0]
            const updatesForAday = this.updates[first]
            return Object.keys(updatesForAday)
        },
    }
})

const app = new Vue({
    el: '#app',
    data: {
        teamInfo: {
            name: 'Rudder',
            members: [
                'Shreeti', 'Ram', 'Sajal', 'Eliza'
            ]
        },
        updates: {
            '5/4/2021': {
                'Shreeti': [
                    { id: 0, title: 'To learn Vue JS', complete: false },
                    { id: 1, title: 'To learn Leaflet', complete: false }
                ],
                'Ram': [
                    { id: 0, title: 'To learn Vuex', complete: false },
                    { id: 1, title: 'To learn Openlayers', complete: false }
                ],
                'Sajal': [
                    { id: 0, title: 'Solve issue', complete: false },
                    { id: 1, title: 'To learn Leaflet 2', complete: false }
                ],
                'Eliza': [
                    { id: 0, title: 'Bugfix', complete: false },
                    { id: 1, title: 'Test ticket', complete: false }
                ]
            },

            '4/4/2021': {
                'Shreeti': [
                    { id: 0, title: 'To master Vue JS', complete: false },
                    { id: 1, title: 'To learn compose', complete: false }
                ],
                'Ram': [
                    { id: 0, title: 'Backend random stuffs', complete: false },
                ],
                'Sajal': [
                    { id: 0, title: 'Optimize, Optimize, Optimize!', complete: false },
                ],
                'Eliza': [
                    { id: 0, title: 'Test! Test and Repeat', complete: false },
                    { id: 1, title: 'To learn D3', complete: false }
                ]
            }
        }
    }
})