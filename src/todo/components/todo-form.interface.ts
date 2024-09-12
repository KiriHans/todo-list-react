interface TodoElements extends HTMLFormControlsCollection {
    title: HTMLInputElement;
}

export interface TodoForm extends HTMLFormElement {
    readonly elements: TodoElements
}