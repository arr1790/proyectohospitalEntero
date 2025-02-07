'use client'
import { insertarMedicina } from "@/lib/actions";
import { useEffect, useActionState, useId } from "react";
import { toast } from "sonner";

function MedicinaInsertar({ pacientes }) {

    const formId = useId();
     const [state,action,pending] = useActionState(insertarMedicina, {});

     useEffect(() => {
            if(state.sucess){ toast.success(state.sucess)
                document.getElementById(formId)?.closest("dialog")?.close();

            }
     },[state])


    return (
        <form action={action} id="{formId}" className="form">
            <input name="nombre" placeholder="Nombre" />
          <input name="via" placeholder="via" />

            {
                pacientes.map(paciente =>
                    <label key={paciente.id}>
                        <input
                            type="checkbox"
                            name = {`pacientes${paciente.id}`} //esto seria que salga el id del estudiante en el checkbox
                            value={paciente.nombre} />

                        {paciente.nombre}

                    </label>
                )
            }

            <button disabled={pending}
            
            className="border-2 border-black disabled:bg-gray-200"
            >{pending ? "Insertando..." : "Insertar Medicina"}
            
            </button>
        </form>
    );
}

export default MedicinaInsertar;