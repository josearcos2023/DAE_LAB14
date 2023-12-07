import React, { useState, useEffect } from "react";

function Calculos() {
    const [listaEmpleados, setListaEmpleados] = useState([]);
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [horas_trabajadas, setHorasTrabajadas] = useState("");
    const [pago, setPago] = useState("");

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = async () => {
        const rutaServicio = "http://127.0.0.1:8000/empleados";
        const response = await fetch(rutaServicio);
        const data = await response.json();
        setListaEmpleados(data);
    };

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleCategoriaChange = (event) => {
        setCategoria(event.target.value);
    };

    const handleHorasChange = (event) => {
        setHorasTrabajadas(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        let pagoCompleto;
        if (categoria === "A") {
            pagoCompleto = 30 * parseFloat(horas_trabajadas);
        } else if (categoria==="B") {
            pagoCompleto = 20 * parseFloat(horas_trabajadas);
        } else if (categoria==="C") {
            pagoCompleto = 10 * parseFloat(horas_trabajadas);
        }


        const rutaServicio = "http://127.0.0.1:8000/empleados";
        const response = await fetch(rutaServicio, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                nombre,
                categoria,
                horas_trabajadas,
                pago:pagoCompleto
            }),
        });

        leerServicio();

        setNombre("");
        setCategoria("");
        setHorasTrabajadas("");
        setPago("");

        window.location.href = "/empleados";
    };

    return (
        <section className="padded">
            <div className="container">

                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input type="text" value={nombre} onChange={handleNombreChange} />
                    </label>
                    <br />
                    <label>
                        Categoría:
                        <input type="text" value={categoria} onChange={handleCategoriaChange} />
                    </label>
                    <br />
                    <label>
                        Horas Trabajadas:
                        <input type="number" value={horas_trabajadas} onChange={handleHorasChange} />
                    </label>
                    <br />
                    <button type="submit" >Agregar Empleado</button>
                </form>
            </div>
        </section>
    );
}

export default Calculos;