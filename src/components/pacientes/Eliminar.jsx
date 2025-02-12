import { eliminarPaciente } from "@/lib/actions";
function PacienteEliminar({ paciente }) {
    return (
        <>
            <h1 className="text-2xl text-red-600">¿Desea eliminar los siguentes datos</h1>
            <p>Nombre: {paciente.nombre}</p>
            <p>Fecha de Nacimiento: <span className="font-semibold">{new Date(paciente.fechaNacimiento).toLocaleDateString()}</span></p>

         
            <form action={eliminarPaciente}>
                <input type="hidden" name="id" defaultValue={paciente.id} />
                <button className="border-2 border-black">Eliminar</button>
            </form>
        </>
    );
}
export default PacienteEliminar;