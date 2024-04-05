import { useRouteError } from "react-router-dom";

export default function ErrorComponent() {
    const error = useRouteError();
    console.log(error);   // check the console to see the full contents of the error object

    return (
        <div>
            <h1>Sorry something went wrong</h1>
            <p>Page not found</p>
            <p>{error.data}</p>
        </div>
    );
}