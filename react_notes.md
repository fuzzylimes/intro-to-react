## Tool set
* `npm` for package management
* `webpack` as our bundler
* `babel` as a compiler for the next-gen Javascript

All of this is handled through a single tool:
`npm install -g create-react-app`

## Creating a new project
`create-react-app <app-name>`
Note that this is huge: ~134MB when building a new project.

### Folder Structure
* `public`
* `src`

## Basics
* All Components MUST render/return jsx
* Best practice it to have a root component that then has many child components that write back to it
* Wrap everything into one root element inside of a component
* JSX is more or less HTML, except that it isn't. There are some reserved words that can't be used (like how class turns to className, but is changed back to class when compiled)
* Imported components should always start with a capital letter
    * All JSX elements starting with lower case are reserved for native html elements
* When creating components, there are two ways to create them:
1. __Functional Components__: are stateless, and are written as functions. Should be used as often as possible
2. __class-based components__: stateful/containers. Use the `extends Component` class syntax
* Use single `{}` brases to incude javascript inline in JSX.
* Use `props` to access arguments passed to components
* Use `props.children` to access values passed betwen component tabs (i.e. `<Person>This is a test</Person>`)
* If the state property changes, it will cause the element to be re-rendered.