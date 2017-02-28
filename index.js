  
  new Vue({
  el:"#main",
  data:{
    
    note:{"title":"","message":""},
    notes:[]
  },
  computed:{
    // To check whether there are any noets created 
    
    isempty :function(){
      //console.log(this.notes.length);
    if(this.notes.length>0)
    {
      //console.log(this.notes.length);
      return true;
    }
    else
      return false;
      //console.log(this.isempty);
    }
  },
  methods:{
    // The new note always comes on top of the stack
    
    newNote:function(){
      //console.log(this.note);
      this.notes.unshift(this.note);
      this.note={"title":"","message":""};
    },
    // A hidden fucntion to check the owrking of the webapp on console
    updateNote:function(index){
      console.log(this.notes);
      
    },
    deleteNote:function(index){      
          //this.notes.$remove(index);
      //console.log(this.notes);
      if(confirm("This will DELETE the note, Are you sure?"))
      this.notes.splice(index,1);      
    }
  }
});