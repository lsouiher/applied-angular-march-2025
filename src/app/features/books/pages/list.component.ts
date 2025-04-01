import { JsonPipe } from '@angular/common';
import { Component, ChangeDetectionStrategy, resource } from '@angular/core';

export type BookApiEntity = {
  author: string;
  country: string;
  imageLink: string;
  language: string;
  link: string;
  pages: number;
  title: string;
  year: number;
  id: string;
};

export type BookApiResponse = BookApiEntity[];
@Component({
  selector: 'app-books-list',
  standalone: true,

  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [JsonPipe],
  template: `
  <div>
  <table>
    <thead>
      <th (click)="sort()">Id</th>
      <th>Title</th>
      <th>Author</th>
      <th>Year</th>
    </thead>
    <tbody>
       @for (book of books.value(); track book.id ){       
       <tr>
        <td>{{book.id}}</td>
        <td>{{book.title}}</td>
        <td>{{book.author}}</td>
        <td>{{book.year}}</td>
      </tr>
       }
    </tbody>
  </table>
</div>
  `,
  styles: `
  table {
    width: 98%;
    margin: 10px 10px 30px;
    padding-bottom: 30px;
  }
  
  th {
    background-color: #336699;
    padding: 5px;
    color: #3caa32;
    text-align: left;
  }
  
  td {
    padding: 5px;
  }
  
  tr:nth-child(even) {
    background-color: #5c7ebd;
  }
  `,
})
export class ListComponent {
sort() {
throw new Error('Method not implemented.');
}
  books = resource<BookApiResponse, unknown>({
    loader: () => fetch('/api/books').then((res) => res.json()),
  });
}
