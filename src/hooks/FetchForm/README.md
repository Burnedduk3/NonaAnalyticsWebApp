# FETCH FORM HOOK
The `useOrganizeForm` hook is execution an apollo client hook called `useQuery`, this is one of the most complex hooks in the application. 

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value.
after the creation, the data will be iterated and mapped to the interfaces, of the FormContext to have all the results to the 
context. also it will calculate some metadata like the total number of questions and add a choose one option in the combo box
question category.

for the last part of the hook it will order the items, and the questions to be displayed where this hooks is called.
at the end it will set all this information into the Form context.

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)