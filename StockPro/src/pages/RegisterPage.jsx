import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { UserForm } from "../components/UserForm"

export const RegisterPage = ({ users=[], handlerAddUser, initialUserForm }) => {

    const [userSelected, setUserSelected] = useState(initialUserForm);

    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        if (id) {
            const user = users.find(u => u.id == id) || initialUserForm;
            setUserSelected(user);
        }
    }, [id])

    return (
        <div className="container my-4">
            <h4>{ userSelected.id > 0 ? 'Editar' : 'Registrar'} Usuario</h4>
            <div className="row">
                <div className="col">
                    <UserForm
                        userSelected={userSelected}
                        handlerAddUser={handlerAddUser}
                        initialUserForm={initialUserForm} />
                </div>
            </div>
        </div>
    )
}