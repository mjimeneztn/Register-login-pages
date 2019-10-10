class Appform{
constructor(){
    this.form =[];
    this.step= 0;
    this.currentGroup= null;
    this.setListeners();
    this.getForm();
}
refresh=()=> {
    this.step++;

}

getForm=()=>{
    const groups= Array.from(document.getElementsByClassName("form-group"));
 
    groups.forEach(_group => {
      const children= Array.from(_group.children);
      this.form.push()
      console.log(children)  
    })
   
}

setListeners=()=>{
document.getElementById("next-button").addEventListener("click",this.refresh);
}

removeListeners=()=> {
    document.getElementById("next-button").removeEventListener("click",this.refresh);    
}

}


 new Appform();