import { ChangeDetectionStrategy, Component, computed, inject, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenuItem } from '../../feature/menu/menu.data';
import { TranslatePipe, TranslateService } from '@wawjs/ngx-translate';

@Component({
	selector: 'app-menu-item',
	imports: [RouterLink, TranslatePipe],
	templateUrl: './menu-item.component.html',
	styleUrl: './menu-item.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuItemComponent {
	private readonly _translateService = inject(TranslateService);

	readonly item = input.required<MenuItem>();
	protected readonly unavailableLabel = computed(() =>
		this._translateService.translate('Unavailable')(),
	);
}
