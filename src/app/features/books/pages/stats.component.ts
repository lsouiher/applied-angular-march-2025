import { Component, ChangeDetectionStrategy, resource, computed } from '@angular/core';
import { BookApiResponse } from './list.component';

@Component({
    selector: 'app-books-stats',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    template: `
<div class="stats stats-vertical shadow">
  <div class="stat">
    <div class="stat-title">Number of books</div>
    <div class="stat-value">{{numberOfBooks()}}  </div>
    <div class="stat-desc">The total number of books in our list</div>
  </div>

  <div class="stat">
    <div class="stat-title">Earliest year </div>
    <div class="stat-value">{{earliestYear()}}</div>
    <div class="stat-desc">The earliest year a book was published from our list</div>
  </div>

  <div class="stat">
    <div class="stat-title">recent year</div>
    <div class="stat-value">{{mostRecentYear()}}</div>
    <div class="stat-desc">The most recent year a book was published from our list.</div>
  </div>
  <div class="stat">
    <div class="stat-title">Total pages</div>
    <div class="stat-value">{{sumOfPages()}}</div>
    <div class="stat-desc">The total number of pages of all books.</div>
  </div>
  <div class="stat">
    <div class="stat-title">average pages</div>
    <div class="stat-value">{{averagePages()}}</div>
    <div class="stat-desc">The average number of pages of the books.</div>
  </div>
</div>
    `,
    styles: ``
})
export class StatsComponent {
    books = resource<BookApiResponse, unknown>({
        loader: () => fetch('/api/books').then((res) => res.json()),
      });
    numberOfBooks = computed(() => this.books.value()?.length);
    sumOfPages = computed(() => this.books.value()?.reduce((accumulator, current) => accumulator + current.pages, 0));
    averagePages = computed(() => (this.sumOfPages()?? 0) / (this.numberOfBooks()?? 1));
    
    listOfYears= computed(() => {
        const books = this.books.value();   
        if (!books) return [];
        const years = books
        .flatMap((BookApiEntity) =>  BookApiEntity.year);
        return years;
    });

    earliestYear = computed(() => Math.min(...this.listOfYears()));
    mostRecentYear  = computed(() => Math.max(...this.listOfYears()));

} 