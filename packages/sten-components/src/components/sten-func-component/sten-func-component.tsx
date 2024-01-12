import { FunctionalComponent, h } from '@stencil/core';

interface HelloProps {
  name: string;
}

// export const Hello: FunctionalComponent<HelloProps> = ({ name }) => <h1> Hello world, {name}</h1>;
export const StenFuncComponent: FunctionalComponent<HelloProps> = ({ name }) => <h1>Hello world you, {name}</h1>;
