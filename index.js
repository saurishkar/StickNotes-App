new Vue({
  el:"#main",
  data:{
    note:{"title":"","message":""},
    notes:[]
  },
  ready:function(){
    console.log("ready");
    //console.log(this.notes.length);
    /*
    if(this.notes.length<=0)
      {
        $(".empty").css("display","block");
      }
    else
      {
        $(".empty").css("display","none");
      }
      */
  },
  methods:{
    newNote:function(){
      console.log("new note");
      this.notes.push(this.note);
      this.note={"title":"","message":""};
    },
    updateNote:function(index){
      console.log("update note");
      this.notes[index].title=this.note.title;
      this.notes[index].message=this.note.message;
    },
    deleteNote:function(index){      
          //this.notes.$remove(index);
      console.log(index);
      this.notes.splice(index,1);
      
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
