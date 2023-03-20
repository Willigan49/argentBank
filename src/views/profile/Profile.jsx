import { useLoaderData } from "react-router-dom"

export default function Profile() {
    const {firstName, lastName} = useLoaderData();

    return(
        <div>
            profil de {firstName} {lastName}
        </div>
    )
}