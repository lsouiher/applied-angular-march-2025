import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SectionNavComponent } from '../../../shared/components/section-nav/section-nav';

@Component({
  selector: 'app-books',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionNavComponent],
  template: `
    <app-section-nav
      sectionName="Books"
      [links]="[
        { label: 'Book List', href: 'list' },
        { label: 'Stats', href: 'stats' },

        ]"
    >
    </app-section-nav>
  `,
  styles: ``,
})
export class BooksComponent {}
