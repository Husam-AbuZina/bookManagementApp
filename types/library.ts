import express from 'express';

namespace Library {
    export interface Book {
      id: number,
      title: string,
      author: string,
      publicationYear: number,
    }
  
    export interface Response extends express.Response {
        send:  (body: string | {
            id: number,
            title: string,
            author: string,
            publicationYear: number, 
        }) => this;
    }
  
    export interface Request extends express.Request {
      body: {
        title: string,
        author: string,
        publicationYear: number
      }
    }
  }

  export default Library;