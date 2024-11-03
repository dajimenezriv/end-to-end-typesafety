import { NgModule } from '@angular/core';

import { HlmAlertDescriptionDirective } from './hlm-alert-description.directive';
import { HlmAlertIconDirective } from './hlm-alert-icon.directive';
import { HlmAlertTitleDirective } from './hlm-alert-title.directive';
import { HlmAlertDirective } from './hlm-alert.directive';

export * from './hlm-alert-description.directive';
export * from './hlm-alert-icon.directive';
export * from './hlm-alert-title.directive';
export * from './hlm-alert.directive';

export const HlmAlertImports = [
  HlmAlertDirective,
  HlmAlertTitleDirective,
  HlmAlertDescriptionDirective,
  HlmAlertIconDirective,
] as const;

@NgModule({
  imports: [...HlmAlertImports],
  exports: [...HlmAlertImports],
})
export class HlmAlertModule {}
