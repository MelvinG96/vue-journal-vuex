import { defineAsyncComponent } from 'vue';

export default  {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybook" */ '../layouts/DayBookLayout.vue'),
    children: [
        {
            path: '',
            name: 'no-entry',
            component: defineAsyncComponent( ()=> import( /* webpackChunkName: "daybook-no-entry" */ '../views/NoEntrySelected') )
        },
        {
            path: ':id',
            name: 'entry',
            component: defineAsyncComponent( () => import( /* webpackChunkName: "entry" */ '../views/EntryView' )  )
        }
    ]

}