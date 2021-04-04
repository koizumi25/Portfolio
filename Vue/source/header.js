var hearder = new Vue({
    el: '#header',
    data: {
        header_menues: 
        [
            {url: '#intro', name: 'INTRODUCTION'},
            {url: '#vision', name: 'VISION'},
            {url: '#experience', name: 'EXPERIENCE'},
            {url: '#contact', name: 'CONTACT'}
        ]
    },
    methods: {
        onClick() {
            console.log('---ここで他の処理を行う---')
            this.$scrollTo('url')
        }

        }
    
}) 

