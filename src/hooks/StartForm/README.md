# GET START FORM HOOK
The `useStartForm` hook is execution an apollo client hook called `useMutation`.

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value.
This hook will create a form into the backend, and gets the ID of the respective Survey to then relate all the answers to that form. is will update the FormContext, using the `SET_CURRENT_FORM_ID`

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)
