const fs = require("fs");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

// Create add command
yargs.command({
	command: "add",
	description: "Add a new note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string"
		},

		body: {
			describe: "Note body",
			demandOption: true,
			type: "string"
		}
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body)
	}
});

// Create remove command
yargs.command({
	command: "remove",
  description: "Remove a note",
  builder: {
    title: {
      describe: "Note title you want to remove",
      demandOption: true,
      type: "string"
    }
  },
	handler(argv) {
		notes.removeNote(argv.title)
	}
});

yargs.command({
	command: "list",
	description: "Get a list of notes",
	handler(argv) {
		notes.listNotes(argv.title)
	}
});

yargs.command({
	command: "read",
	description: "Read a note",
	builder: {
		title: {
			describe: "Note you want to show",
			demandOption: true,
			type: "string"
		}
	},
	handler(argv) {
		notes.readNote(argv.title)
	}
});

yargs.parse();
// console.log(yargs.argv);
