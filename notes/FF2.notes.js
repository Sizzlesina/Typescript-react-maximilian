/** @format */

{/* prettier-ignore */}

/*
@ Accepting props in React components:
++ 1 :
function MyComponent({name,id}: {
  name: string; 
  id:number
}) {
  return <h1>My Component</h1>
}

++ 2 :
type MyComponentProps = {
  name : string;
  id: number;
};
function MyComponent({name,id}:MyComponentProps){
  return <h1>My Component</h1>
}

++ 3 : 
interface MyComponentProps {
  name: string;
  id : number;
}
function MyComponent({name,id}:MyComponentProps){
  return <h1>My Component</h1>
}

@ How to accept children in the props (What is the type of a children prop?):
++ We can use a special type that can be used in React which is called ReactNode

interface MyComponentProps{
  name: string;
  id: number;
  children : ReactNode;
}
function MyComponent({name,id,children}:MyComponentProps){
  return <h1>My Component</h1>
}

! ReactNode will be imported from 'react'
++ So its better to write "type" keyword before the imported ReactNode:
import {type ReactNode} from 'react'


++ Another special React type this time using "type" keyword:
import {type PropsWithChildren} from 'react';
type MyComponentProps = PropsWithChildren<{
name:string;
id: number;
}>
function MyComponent({name,children}:PropsWithChildren) {
  return <h1>My Component</h1>
};

@ Accepting children props using arrow function components:
import {type FC, type PropsWithChildren} from 'react';
type MyCiomponentProps = PropsWithChildren<{
name:string;
id: number;
}>

const MyComponent : FC<MYComponentProps> = ({name,id,children}) => {
  return <h1>My Component</h1>
}

@ How to fix eslint in a typescript React project?:
++ - When we create a vite project just in the .eslint.cjs file in the rules just remove the commands written by the vite project starters and then replace this line of code :

  "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        args: "all",
        argsIgnorePattern: "^_",
        caughtErrors: "all",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        ignoreRestSiblings: true,
      },
    ],

! HINT: In the documnet was two syntax but the recommanded one to use this rule was:
++ Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "warn",
  },

@ How to use states in typescript react? :
- When in the default value of the states we have a complex value like null or [] or {} the value of the state will be set to <never< type

++ So what can we do?
- Imagine we want to add a array full of custom type that we create earlier so we create the state like this:
type CourseGoal = {
  tite : string;
  description : string;
  id : number;
}
const [goals,setGoals] = useState<CourseGoal[]>([]);
function handleAddGoal(){
  setGoals();
};
*/
