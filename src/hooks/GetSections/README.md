# FETCH FORM HOOK
The `useSectionsAndSubSections` hook is execution an apollo client hook called `useQuery`.

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value.
this hook will fetch all the sections and subsections into the application, it will map the backend response to the respective 
interface in the `FormContext` it will return the sections of the application.

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)