import { AnimationBuilder, IonicSafeString, SpinnerTypes } from "@ionic/angular";
import { JSXBase } from "@ionic/pwa-elements/dist/types/stencil.core";

export interface LoadingOptions {
    spinner?: SpinnerTypes | null;
    message?: string | IonicSafeString;
    cssClass?: string | string[];
    showBackdrop?: boolean;
    duration?: number;
    translucent?: boolean;
    animated?: boolean;
    backdropDismiss?: boolean;
    keyboardClose?: boolean;
    id?: string;
    htmlAttributes?: LoadingAttributes;
  
    enterAnimation?: AnimationBuilder;
    leaveAnimation?: AnimationBuilder;
  }

 interface LoadingAttributes extends JSXBase.HTMLAttributes<HTMLElement> {}