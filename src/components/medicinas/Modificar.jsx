'use client'
import { useEffect } from "react";
import { useId } from "react";
import { useActionState } from "react";
import { modificarMedicina } from "@/lib/actions";
import { toast } from "sonner"; // Asegúrate de importar 'toast' correctamente

function MedicinaModificar({ medicina, pacientes }) {

    const formId = useId();
    const [state, action, pending] = useActionState(modificarMedicina, {});

    useEffect(() => {
        if (state.success) {
            toast.success(state.success); 
            document.getElementById(formId)?.closest("dialog")?.close();
        }
    }, [state]);

    const IDs = medicina.pacientes.map(paciente => paciente.id);
    console.log(medicina);

    return (
        <form action={action} id={formId}>
            <input type="hidden" name="id" defaultValue={medicina.id} />
            <input name='nombre' defaultValue={medicina.nombre} />
            <input name='via' defaultValue={medicina.via} />

            {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox"
                            name={`paciente${paciente.id}`}
                            value={paciente.nombre}
                            defaultChecked={IDs.includes(paciente.id)} // Para marcar los pacientes que ya están asociados
                        />
                        {paciente.nombre}
                    </label>
                )
            }

            <button className="border-2 border-black">Modificar</button>
        </form>
    );
}

export default MedicinaModificar;
