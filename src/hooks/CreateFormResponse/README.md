# CREATE FORM RESPONSE HOOK
If you use this hook you will be saving a response into the database, using the Apollo client hook `useMutation`
the hook return value is the function `saveData` which takes the interface params and executes the query.

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value,
inside this hook, the response will be mapped into an interface and then used to update the
`FormQestionsContext`.

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)