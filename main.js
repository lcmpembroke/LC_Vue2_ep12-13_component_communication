window.Event = new class {
    constructor() {
        this.vue = new Vue();
    }

    fire(event, data = null) {
        this.vue.$emit(event, data);
    }

    listen(event, callback) {
        this.vue.$on(event, callback);
    }
}

Vue.component('my-coupon', {
    template: '<input placeholder="Enter coupon code" @blur="couponApplied">',

    methods: {
        couponApplied() {
            Event.fire('applied');
        }
    }    
});

new Vue({
    el: '#root',

    created() {
        Event.listen('applied', () => alert('Handling event applied'))
    }
});

