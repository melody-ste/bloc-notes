# Bloc-notes

This is a simple **Markdown Notes** application built with React. It allows users to create, edit, and save multiple notes with a title and Markdown content. Notes are stored in the browser's `localStorage`, so they persist even after refreshing the page.

## Features

- **Multiple Notes:** Users can create and switch between multiple notes.  
- **Markdown Support:** Write notes in Markdown and see a live preview in HTML.  
- **Save Notes:** Click the "Save" button to persist notes in `localStorage`.  
- **Responsive Layout:** Sidebar with a list of notes on the left, editor and preview on the right.  


---

## How It Works

1. **Sidebar:** Shows the list of notes with the title and the first ~15 words of the note content.  
2. **Editor:**  
   - Input field for the note title.  
   - Textarea for writing Markdown content.  
   - Save button to store the note in `localStorage`.  
3. **Preview:** Converts Markdown content to HTML using the [Showdown](https://github.com/showdownjs/showdown) library and displays it live.  

## Usage

1. Clone the repository:  
```bash
  git clone https://github.com/melody-ste/bloc-notes.git
```
2. Install dependencies:
```bash
 pnpm install
```
3. Start the development server:
```bash
  pnpm dev
```