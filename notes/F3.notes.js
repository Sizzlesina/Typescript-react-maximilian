/** @format */

{/* prettier-ignore */}

/*
@ Advance prop component rendering using props:
++ - When we want to use a component inside another component but we want to render it conditionaly we can use this syntax:


@ In the main component:

function MainComponent() {
let componentRender = ReactNode;
if(condition){
  componentRender = <MyComponent />
}

  return (
  <>
  {componentRender}
  <h1>Hello World!</h1>  
  </>
  )
}

@ In some case we may need to accept a prop in the component but we wont pass the value to that prop everywhere so what can we do?:
++ Example:
type InfoBoxProps = {
  severity : "high" | "low" | "medium";
  mode : "mode1" | "mode2";
  children : ReactNode;
}
function InfoBox({severity,mode,children} : InfoBoxProps){
  if(mode === "mode1"){
    return (
      ...
    )
  }
  if(mode === "mode2"){
    return (
      <h1 className={`class-${severity}`}>Hello world</h1>
    )
  }
}

function MainComponent(){
  if(condition){
    return (
      <InfoBox mode="mode1">This is for the first condition</InfoBox>
    )
  }
  if(condition){
    return (
      <InfoBox mode="mdoe2" severity="high">This is for the second condition</InfoBox>
    )
  }
}
! In the first condition of the main component we dont need to pass the severity prop to the InfoBox component but in the second condition we will pass in the prop so in the fisrt one we may get an error

? So whats the solution to this problem?
++  When we create the custom type of the props inside the InfoBox we must use this syntax for the severity prop : 
type InfoBoxPorps = {
  severity?: "high" | "low" | "medium";
}
@ Or we can do this:
type InfoBoxProps = {
  severity : "high" | "low" | "medium" | undefined;
}

@ But this way is not good (So whats the best practice?):
++ Take a look at this syntax:
type FirstModeProps = {
  mode : "mode1";
  children : ReactNode;
}
type SecondModeProps = {
 mode : "mode2";
 severity : "high" | "low" | "medium";
  children : ReactNode
}
type MyComponentProps = FirstModeProps | SecondModeProps;

function MyComponent(props : MyComponentProps){
  const {children,mode} = props;
  if(mode "mode1"){
    return (
      ...
    )
  }
  const {severity} = props;
  return (
    <h1 className={`class-${severity}`}>Hello World!</h1>
  )
}
! Now we can pass in the severity prop whenever we in the mode2 and dont pass it when we in the mode1

@ How to create wrapper components (gow to pass in props in the wrapper components):
? - imagine we want to create a custome input component so we must accept props like "type" and "disabled" and so many props that we can accept for a input component.
++ Example:
type InputProps = {
  label : string;
}
function Input({label}: InputProps){
  return (
    <form>
    <label>{label}</label>
    <input />
    </form>
  )
} 
? - So now we cant accept all the props that the input accepts so we can use the {...props} syntax from vanila javascript to accept all the props
function Input({label,...props}){
return (
  <form>
  <label>{label}</label>
  <input {...props} />
  </form>
)
}
! But what about the type of this props?:
++ We can use a special type for these kind of props:
type InputProps = {
  label : string;
} & ComponentPropsWithoutRef<'input'>
function Input({label,...props}:InputProps){
  return (
    <form>
    <label>{label}</label>
    <input {...props} />
    </form>
  )
}
! We must merge the type with our own types to have both types 

!HINT: We can use any generic value inside the '' inside the <> we can check on that in the autocomplition of the vscode


@ ElementType:
- A special type that says the value must be a valid identifier of a component
!HINT: This type says is used when we want to pass in components as prop
++ Example:
@ Main Component :
import SomeComponent from "./SomeDirectory";
function MainComponent(){
  <Container as={SomeComponent} />
}

@ Container Component:
type ContainerProps = {
  as : ElementType;
}
function Container({as}:ContainerProps){
  const Component = as;
  return <Component />;
}
@ Or we could use as like this:
function Container({as : Component}:ContainerProps){
  return <Component />;
}

@ Polymorphic Components:
++ We can make an Polymorphic component like a container and the concept of this work is to apply some styling for the component that we pass to the container as a "as" prop
? So lets create the Container component step by step:
++ Step 1:
type ContainerProps ={
  as : ElementType;
  children:ReactNode;
}
function Container({as,children}:ContainerProps){
  const Component = as;
  return <Component>{children}</Component>
}
! Now the component accepts children and we can use it like this:
function MainComponent(){
  return <Container as={Button}>Click Me!</Container>
}

++ Step 2:
type ContainerProps<T extends ElementType> = {
as : T;
children : ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({as,children}:ContainerProps<C>){
  const Component = as || "div";
  return <Component className="container">{children}</Component>
};

! In this step we want to accept all the props to the custom component or the built in elements so we make an generic type and tell typescript that this generic type extends from the ElementType which then wont allow us to pass in any value and force us to just pass in components as a value

! BUT we must pass in another generic type (same as the last one ) for the component and the prop types of the component

! Then we will get another error in the JSX part of the code and then we should pass in a default value for that Component that passed in as a "as" prop

++ Step 3:
- Now lets make this Container component more flexible by passing the rest props to it:
type ContainerProps<T extends ElementType> = {
as : T;
children : ReactNode;
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({as , children , ...props} : ContainerProps<C>){
  const Component = as || "div";
  return <Component className="container" {...props}>{children}</Component>
};
*/
