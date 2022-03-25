new Vue({
    el: '#app',
    data : {
        cart: [],
        premium: true
    },
    methods : {
        updateCart(id) {
            this.cart.push(id)
        }
    }
})