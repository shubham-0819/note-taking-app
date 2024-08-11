import faker from 'faker';
import { Note } from '../../../src/models/index';

describe('Note Model', () => {
  // Test case for creating a new note
  test('Create a new note', async () => {
    const noteData = {
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
    };

    const note = await Note.create(noteData);

    expect(note).toBeDefined();
    expect(note._id).toBeDefined();
    expect(note.title).toBe(noteData.title);
    expect(note.body).toBe(noteData.body);
  });

  // Test case for creating a note with missing fields (edge case)
  test('Create a note with missing title', async () => {
    const noteData = {
      body: faker.lorem.paragraph(),
    };

    await expect(Note.create(noteData)).rejects.toThrow();
  });

  // Test case for getting all notes
  test('Get all notes', async () => {
    const notes = await Note.find();

    expect(notes).toBeDefined();
    expect(Array.isArray(notes)).toBe(true);
    expect(notes.length).toBeGreaterThan(0);
  });

  // Test case for getting a note by ID (edge case)
  test('Get note by non-existing ID', async () => {
    const nonExistentId = faker.datatype.uuid();
    const note = await Note.findById(nonExistentId);

    expect(note).toBeNull();
  });

  // Test case for updating a note
  test('Update a note', async () => {
    const note = await Note.findOne();
    expect(note).toBeDefined();

    const updatedNoteData = {
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
    };

    note.title = updatedNoteData.title;
    note.body = updatedNoteData.body;

    const updatedNote = await note.save();

    expect(updatedNote._id).toEqual(note._id);
    expect(updatedNote.title).toBe(updatedNoteData.title);
    expect(updatedNote.body).toBe(updatedNoteData.body);
  });

  // Test case for updating a note with invalid data (edge case)
  test('Update a note with invalid data', async () => {
    const note = await Note.findOne();
    expect(note).toBeDefined();

    note.title = '';

    await expect(note.save()).rejects.toThrow();
  });

  // Test case for deleting a note
  test('Delete a note', async () => {
    const note = await Note.findOne();
    expect(note).toBeDefined();

    await note.remove();

    const deletedNote = await Note.findById(note._id);

    expect(deletedNote).toBeNull();
  });

  // Test case for finding a note by title
  test('Find note by title', async () => {
    const note = await Note.findOne();
    expect(note).toBeDefined();

    const foundNote = await Note.findOne({ title: note.title });

    expect(foundNote).toBeDefined();
    expect(foundNote.title).toBe(note.title);
  });

  // Test case for counting total number of notes
  test('Count total number of notes', async () => {
    const count = await Note.countDocuments();

    expect(count).toBeGreaterThan(0);
  });

  // Test case for attempting to delete a non-existing note (edge case)
  test('Delete a non-existing note', async () => {
    const nonExistentId = faker.datatype.uuid();

    const deleteResult = await Note.deleteOne({ _id: nonExistentId });

    expect(deleteResult.deletedCount).toBe(0);
  });

  // Test case for finding a note by body content (additional case)
  test('Find note by body content', async () => {
    const note = await Note.findOne();
    expect(note).toBeDefined();

    const foundNote = await Note.findOne({ body: note.body });

    expect(foundNote).toBeDefined();
    expect(foundNote.body).toBe(note.body);
  });
});
