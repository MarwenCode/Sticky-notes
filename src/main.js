const notesContainer = document.getElementById("app");
const addNoteButton = document.querySelector(".add-note");



  addNoteButton.addEventListener("click", () => {
    addNote();
  });
  

const getNotes = () => {
  return JSON.parse(localStorage.getItem("stickyNotes") || "[] ");
};

const saveNotes = (notes) => {
  localStorage.setItem("stickyNotes", JSON.stringify(notes));
};

const createNoteElement = (id, content) => {
  const element = document.createElement("textarea");

  element.classList.add("note");

  element.value = content;
  element.placeholder = "Empty Sticky Note";

  element.addEventListener("change", () => {
    updateNote(id, element.value);
  });

  element.addEventListener("dblclick", () => {
    delete deleteNote(id,element)
  })

  return element;
};

const addNote = () => {
  const notes = getNotes();

  const noteObject = {
    id: new Date().getTime(),
    content: "",
  };

  console.log(noteObject);

  const noteElement = createNoteElement(noteObject.id, noteObject.content);
  notesContainer.insertBefore(noteElement, addNoteButton);

  notes.push(noteObject);
  saveNotes(notes);
};

getNotes().forEach((note) => {
    const noteElement = createNoteElement(note.id, note.content);
    notesContainer.insertBefore(noteElement, addNoteButton);
  });





const updateNote = (id, newContent) => {
  const notes = getNotes();
  const targetNote = notes.filter((note) => note.id == id)[0];

  targetNote.content = newContent;
  saveNotes(notes);
};

const deleteNote  = (id, element) => {
    const notes = getNotes().filter((note) => note.id != id);
    saveNotes(notes)
    notesContainer.removeChild(element);
}
