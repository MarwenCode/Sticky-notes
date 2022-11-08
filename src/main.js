const notesContainer = document.getElementById("app");
const addNoteButton = document.querySelector(".add-note")






const getNotes = () => {
    return JSON.parse(localStorage.getItem("stickyNotes") || "[] ");

}

const saveNotes = (notes) => {
    localStorage.setItem("stickyNotes", JSON.stringify(notes) )
}


const createNoteElement = (id, content) => {
    const element = document.createElement("textarea")

    element.classList.add("note");
    element.value = content
    element.placeholder = "Empty Sticky Note";

    element.addEventListener("change", () => {
        updateNote(id, element.value);
      });


    return element

}

const addNote = () => {
    const notes = getNotes()

    const noteObject = {
        id: new Date(),
        content:""
      
    }

    console.log(noteObject)

 
    
        const noteElement = createNoteElement(noteObject.id, noteObject.content)
        notesContainer.insertBefore(noteElement, addNoteButton);
    


 
    notes.push(noteObject);
    saveNotes(notes);
}

addNoteButton.addEventListener("click", () => {
      addNote()  
})

getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content)
    notesContainer.insertBefore(noteElement, addNoteButton);


})

const updateNote  = (id, newContent) => {
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id == id)[0];
    
    targetNote.content = newContent;
    saveNotes(notes)

}



