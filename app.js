var testapp = new Vue ({
    el: '#testapp',
        data : {
            text: '',
            age:10,
            food:[],
            gender:'',
            selected:'',
            status:true
        },
        methods : {
            statuss:function()
            {
                this.status = !this.status
            }
        }
       
        
    
    
    })