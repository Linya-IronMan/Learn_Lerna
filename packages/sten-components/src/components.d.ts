/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface MyApp {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
    interface StenButton {
        "members": string[];
        "msg": { name: string; age: number; sex: 'man' | 'woman' };
        "name": string;
    }
}
export interface StenButtonCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLStenButtonElement;
}
declare global {
    interface HTMLMyAppElement extends Components.MyApp, HTMLStencilElement {
    }
    var HTMLMyAppElement: {
        prototype: HTMLMyAppElement;
        new (): HTMLMyAppElement;
    };
    interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {
    }
    var HTMLMyComponentElement: {
        prototype: HTMLMyComponentElement;
        new (): HTMLMyComponentElement;
    };
    interface HTMLStenButtonElementEventMap {
        "buttonClick": any;
    }
    interface HTMLStenButtonElement extends Components.StenButton, HTMLStencilElement {
        addEventListener<K extends keyof HTMLStenButtonElementEventMap>(type: K, listener: (this: HTMLStenButtonElement, ev: StenButtonCustomEvent<HTMLStenButtonElementEventMap[K]>) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof HTMLStenButtonElementEventMap>(type: K, listener: (this: HTMLStenButtonElement, ev: StenButtonCustomEvent<HTMLStenButtonElementEventMap[K]>) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }
    var HTMLStenButtonElement: {
        prototype: HTMLStenButtonElement;
        new (): HTMLStenButtonElement;
    };
    interface HTMLElementTagNameMap {
        "my-app": HTMLMyAppElement;
        "my-component": HTMLMyComponentElement;
        "sten-button": HTMLStenButtonElement;
    }
}
declare namespace LocalJSX {
    interface MyApp {
    }
    interface MyComponent {
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface StenButton {
        "members"?: string[];
        "msg"?: { name: string; age: number; sex: 'man' | 'woman' };
        "name"?: string;
        "onButtonClick"?: (event: StenButtonCustomEvent<any>) => void;
    }
    interface IntrinsicElements {
        "my-app": MyApp;
        "my-component": MyComponent;
        "sten-button": StenButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "my-app": LocalJSX.MyApp & JSXBase.HTMLAttributes<HTMLMyAppElement>;
            "my-component": LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
            "sten-button": LocalJSX.StenButton & JSXBase.HTMLAttributes<HTMLStenButtonElement>;
        }
    }
}
