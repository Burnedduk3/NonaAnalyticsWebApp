# CREATE USER HOOK
The `useCreateUser` hook is execution an apollo client hook called `useMutation` to create an user in the database given some specific values. 

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value.
then it checks that there was no error in the operation and that the user was created succesfully.

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)