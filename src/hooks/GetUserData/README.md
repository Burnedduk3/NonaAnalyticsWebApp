# GET USER DATA HOOK
The `useGetUser` hook is execution an apollo client hook called `useQuery`.

Also, this hooks has a `useEffect` hook that will be triggered each time the `loading` variables changes its value.
This hook will fetch all the respective user data and adds all the information into the User Context

If something went wrong in this process the catch block will be executed where you may handle the error.

to see the code [click here](./index.tsx)

[GO BACK](../README.md)
