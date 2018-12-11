import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
/*
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  constructor(private http: HttpClient) { }

  public getBook(): Observable<Book[]> {
    return this.http.get<Book[]>('http://ec2-18-212-57-121.compute-1.amazonaws.com:8080/bookstore-mvc-0.0.1-SNAPSHOT/books');
  }
  public getBookById(id: string): Observable<Book> {
    return this.http.get<Book>('http://ec2-18-212-57-121.compute-1.amazonaws.com:8080/bookstore-mvc-0.0.1-SNAPSHOT/books/' + id);
  }
  public updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(Configuration.url + '/books/' + book.id, book, this.httpOptions);
  }
  public getAuthorById(id: string): Observable<Author> {
    return this.http.get<Author>(Configuration.url + '/authors/' + id);
  }
  public updateAuthor(author: Author): Observable<Author> {
    return this.http.put<Author>(Configuration.url + '/authors/' + author.id, author, this.httpOptions);
  }

}
*/
export class LoginService {
  userList: User[] = [];

  constructor() {
    this.userList.push(new User('admin', 'password'));
  }

  public validateUser(username: string, password: string): User {
    for (const u of this.userList) {
      if (u.username.toLowerCase() === username) {
        if (u.password.toLowerCase() === password) {
          return u;
        }
      }
    }
    return null;
  }
}
