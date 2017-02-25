  
  new Vue({
  el:"#main",
  data:{
    newdeg:"rotate(0deg)",
    note:{"title":"","message":""},
    notes:[]
  },
  computed:{
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
    newNote:function(){
      //console.log(this.note);
      this.notes.unshift(this.note);
      this.note={"title":"","message":""};
    },
    updateNote:function(index){
      console.log(this.notes);
      //this.notes.splice(index,1,this.note);
      //this.notes.$set(index,this.note);
      //this.notes[index].message=this.note.message;
    },
    deleteNote:function(index){      
          //this.notes.$remove(index);
      //console.log(this.notes);
      this.notes.splice(index,1);      
    }
  }
});