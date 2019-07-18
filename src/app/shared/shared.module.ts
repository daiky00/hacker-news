import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { CardComponent } from './components/card/card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { CardContentComponent } from './components/card-content/card-content.component';
import { CardFooterComponent } from './components/card-footer/card-footer.component';
import { ChipComponent } from './components/chip/chip.component';
import { CardTitleComponent } from './components/card-title/card-title.component';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { CardSubtitleComponent } from './components/card-subtitle/card-subtitle.component';
import { CardSideComponent } from './components/card-side/card-side.component';
import { CommentCountComponent } from './components/comment-count/comment-count.component';
import { AuthorTimeComponent } from './components/author-time/author-time.component';

//Pipes
import { SearchPipe } from './pipes/search/search.pipe';
@NgModule({
	imports: [ CommonModule, ReactiveFormsModule ],
	exports: [
		AuthorTimeComponent,
		CardComponent,
		CardContentComponent,
		CardFooterComponent,
		ChipComponent,
		CardTitleComponent,
		CardHeaderComponent,
		CardSubtitleComponent,
		CardSideComponent,
		LoaderComponent,
		ReactiveFormsModule,
		LoaderComponent,
		CommentCountComponent,
		SearchPipe
	],
	declarations: [
		AuthorTimeComponent,
		CardComponent,
		CardContentComponent,
		CardFooterComponent,
		ChipComponent,
		CardTitleComponent,
		CardHeaderComponent,
		CardSubtitleComponent,
		CardSideComponent,
		LoaderComponent,
		CommentCountComponent,
		SearchPipe
	]
})
export class SharedModule {}
