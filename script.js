
const addBtn = document.querySelector(".addBtn");
const wrapper = document.querySelector(".wrapper");

const saveNotes = () => {
    const notes = document.querySelectorAll(".write");
    const data = [];
    notes.forEach((note) => {
        data.push(note.value);
    });
    localStorage.setItem("notes", JSON.stringify(data));
}


addBtn.addEventListener("click", () => {
    addNote();
})

function addNote(text = "") {
    const note = document.createElement("div");
    note.classList.add("note");

    const toolbar = document.createElement("div");
    toolbar.classList.add("toolbar");

    const save = document.createElement("button");
    save.classList.add("save");
    save.innerHTML = `<i class="fa-solid fa-floppy-disk" style="font-size: 15px;"></i>`;

    const trash = document.createElement("button");
    trash.classList.add("trash");
    trash.innerHTML = `<i class="fa-solid fa-trash" style="font-size: 15px;"></i>`;

    const textarea = document.createElement("textarea");
    textarea.classList.add("write");
    textarea.placeholder = "Write Something";
    
    textarea.value = text;

    toolbar.appendChild(trash);
    toolbar.appendChild(save);

    note.appendChild(toolbar);
    note.appendChild(textarea);

    wrapper.appendChild(note);

    save.addEventListener("click", () => {
        
        // add storage
        saveNotes();

    })

    trash.addEventListener("click", () => {
        wrapper.removeChild(note);
        saveNotes();
    })
}


(
    function () {
        const lsnotes = JSON.parse(localStorage.getItem("notes"));
        if(lsnotes === null){
            return;
        }
        lsnotes.forEach((lsnote) => {
            addNote(lsnote);
        })
    }
)()
