var notelist,noteview,notecontroller;
notelist = new NoteList();
noteview = new ListView(notelist);
notecontroller = new NoteController(noteview);
notelist.createNewNote("first note");
notelist.createNewNote("second note");
notelist.createNewNote("third note");
notelist.createNewNote("this is the fourth and final note, and there is a lot more to this note");
notecontroller.updateHTML();
