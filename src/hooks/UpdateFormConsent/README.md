# GET UPDATE FORM CONSENT HOOK
The `useStartForm` hook is execution an apollo client hook called `useMutation`.

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value.
This hook will update the survey consent value to true if the user accepts.

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)
