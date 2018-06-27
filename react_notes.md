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

## Handler Functions
* Use the label `Handler` to note handler methods inside of components
* DO NOT use `()` for method calls, just pass reference
* Supported events: https://reactjs.org/docs/events.html#supported-events
* If state or props changes, react will check to see if something would change on DOM, and update to reflect those changes.
    * These are the only two things that can be used to cause an update on the page
* State should only be updated in select components (containers). The rest of the smaller components should NOT change the state.

## Method References between Components
* You can pass in a method of one component to another using props
* Can use `bind` to pass in a parameter to a method
* Can also use a function call to do the update
    * Can affect perfomance, bind is recommended.

## Basic Conditionals
* Can use ternary operator to deal with conditional statements
* For example, you can write an if block in the following way:
```jsx
{ 
    this.state.showPersons ? 
        <div>
            <Person 
                name={this.state.persons[0].name} 
                age={this.state.persons[0].age}/>
            <Person 
                name={this.state.persons[1].name} 
                age={this.state.persons[1].age}
                click={this.switchNameHandler.bind(this, 'fuzzylimes')}
                changed={this.nameChangedHandler}>Hobbies: Cooking</Person>
            <Person 
                name={this.state.persons[2].name} 
                age={this.state.persons[2].age}/>
        </div> : null
}
```
* Could also use something like `this.state.showPersons === true ?...`
* The prefered alternative to this is to do it in a more javascript way, with writing a function within the render method. This will cause the function to be executed/evaluated every time that React needs to re-render the DOM.
```jsx
let persons = null;
if (this.state.showPersons) {
    persons = (
    <div>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        click={this.switchNameHandler.bind(this, 'fuzzylimes')}
        changed={this.nameChangedHandler}>Hobbies: Cooking</Person>
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age} />
    </div>
    );
}
```
* Using this syntax, you only need to include a `{persons}` in the render return.
* This method is recommended over the previous

## Handling Lists
* To ouput the contents of a list out to the dom, you can iterate through it using a normal javascript `.map()` method:
```jsx
if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            return (
              <Person
                name={person.name}
                age={person.age} />
            )
          })}
        </div>
      );
    }
```
* Key prop should be used when you're using lists, React expects to find it
    * Helps reach to do its updating
    * Will typically just use a unique identifier, like an id from the db


## Helpful links
* create-react-app: https://github.com/facebookincubator/create-react-app
* Introducing JSX: https://reactjs.org/docs/introducing-jsx.html
* Rendering Elements: https://reactjs.org/docs/rendering-elements.html
* Components & Props: https://reactjs.org/docs/components-and-props.html
* Listenable Events: https://reactjs.org/docs/events.html