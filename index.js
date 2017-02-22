new Vue({
  el:"#main",
  data:{
    note:{"title":"","message":""},
    notes:[]
  },
  ready:function(){},
  methods:{
    newNote:function(){
      
      this.notes.unshift(this.note);
      this.note={"title":"","message":""};
    },
    updateNote:function(index){
      this.notes[index].title=this.note.title;
      this.notes[index].message=this.note.message;
    },
    deleteNote:function(index){
      if(confirm("Are you sure you want to delete this Note ?"))
        {
          this.notes.$remove(index);
        }
    }
  }
});
/*
function createNote(){
  var html="";
      html+="<div class='note'><button class='btn delete' v-on:click=''>X</button><div class='title'><textarea type='text' placeholder='Title goes here' v-model='note.title'></textarea></div><br><div class='message'><textarea type='text' placeholder='Your text goes here' v-model='note.message'></textarea></div>    <button class='btn save text-center' v-on:click='updateNote($index)'>Save</button></div><br/>";
      var temp=document.getElementsByClassName("view");
      temp.innerHTML=html;
}*/