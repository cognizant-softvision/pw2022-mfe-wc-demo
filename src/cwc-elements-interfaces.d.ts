import React, { HTMLAttributes } from "react";

export interface CwcLevelsElement extends HTMLElement {
  readonly _currentLevel: number;
  readonly _levels: any[];
  _setCurrentLevel(currentLevel: number): void;
  _setLevels(levelsDefinitions: { tooltip: string }[]): void;
}

export interface CwcMultiselectElement extends HTMLElement {
  readonly _state: { [key: string]: boolean };
  _buildChildrenFromJsonString(optionsAsJsonString: string);
  _buildChildrenFromJsonObject(optionDefinitions: { name: string; label: string; onChange: ({ itemElement }) => void }[]);
}

export interface CwcMultiselectItemElement extends HTMLElement {
  _getName(): string;
  _isChecked(): boolean;
}

export interface CwcStepperElement extends HTMLElement {
  readonly current: number;
}

export interface CwcStepperJsonElement extends HTMLElement {
  readonly current: number;
  readonly steps: string;
}

export interface CwcStepperItemElement extends HTMLElement {
  readonly 'is-last': boolean;
  // TODO Consider to add an enum
  status(): string;
}

export interface CwcModalElement extends HTMLElement {
  readonly open: boolean;
  showModal(): void;
  hideModal(): void;
}

// Web Component interfaces, so React knows about them and their HTML attributes
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "cwc-test": React.DetailedHTMLProps<
        CwcTestAttributes<HTMLElement>,
        HTMLElement
      >;

      "cwc-levels": React.DetailedHTMLProps<
        CwcLevelsAttributes<CwcLevelsElement>,
        CwcLevelsElement
      >;

      "cwc-multiselect": React.DetailedHTMLProps<
        CwcMultiselectAttributes<CwcMultiselectElement>,
        CwcMultiselectElement
      >;

      "cwc-multiselect-item": React.DetailedHTMLProps<
        CwcMultiselectItemAttributes<CwcMultiselectItemElement>,
        CwcMultiselectItemElement
      >;

      "cwc-stepper": React.DetailedHTMLProps<
        CwcStepperAttributes<CwcStepperElement>,
        CwcStepperElement
      >;

      "cwc-stepper-json": React.DetailedHTMLProps<
        CwcStepperJsonAttributes<CwcStepperJsonElement>,
        CwcStepperJsonElement
      >;

      "cwc-stepper-item": React.DetailedHTMLProps<
        CwcStepperItemAttributes<HTMLElement>,
        CwcStepperItemElement
      >;

      "cwc-modal": React.DetailedHTMLProps<
        CwcModalAttributes<CwcModalElement>,
        CwcModalElement
      >;

      "cwc-login": React.DetailedHTMLProps<
        CwcLoginAttributes<HTMLElement>,
        HTMLElement
      >;
      "cwc-flipcard": React.DetailedHTMLProps<
        HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }

    interface CwcTestAttributes<T> extends HTMLAttributes<T> {
      color: string;
    }

    interface CwcLevelsAttributes<T> extends HTMLAttributes<T> {
      levels?: string;
      currentlevel?: any;
    }

    interface CwcMultiselectAttributes<T> extends HTMLAttributes<T> {
      options?: string;
      required?: true | undefined;
      disabled?: true | undefined;
      nightmode?: true | undefined;
    }
    
    interface CwcMultiselectItemAttributes<T> extends HTMLAttributes<T> {
      name: string;
      nightmode?: true | undefined;
    }
    
    interface CwcStepperAttributes<T> extends HTMLAttributes<T> {
      current: number;
    }

    interface CwcStepperJsonAttributes<T> extends HTMLAttributes<T> {
      current: number;
      steps: string;
    }

    interface CwcStepperItemAttributes<T> extends HTMLAttributes<T> {
      'is-last'?: boolean;
    }

    interface CwcModalAttributes<T> extends HTMLAttributes<T> {
      title?: string;
    }

    interface CwcLoginAttributes<T> extends HTMLAttributes<T> {
      title?: string;
      description?: string;
      prompt?: string;
      buttontext?: string;
      disabled?: boolean;
    }
  }
}

export {};
