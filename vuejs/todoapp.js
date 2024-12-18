new Vue({
    el:'#webtodo',
    data(){
      return{
        webtaskList:[],
        inBox:'',
        btnName:'Add',
        clickIndex:'' 
      }
     
    },
    created(){
  
    },
    methods: {
        btnclick:function(){
        if(this.btnName == "Add"){
          if(this.inBox !=''){
            this.webtaskList.push(this.inBox);
            this.inBox='';
          
          }else{
            
          }
        }else if(this.btnName== "Update"){
          if(this.inBox != ''){
            this.webtaskList[this.clickIndex]=this.inBox;
            this.inBox='';
          }
        }
        this.btnName="Add";
      },
      removeTask:function(index){
        this.webtaskList.splice(index, 1);
        this.btnName='Add';
      },
      updateTask: function(index){
        this.onetask=this.webtaskList[index];
        this.btnName='Update';
        this.clickIndex=index;
      }
  
    },
  })