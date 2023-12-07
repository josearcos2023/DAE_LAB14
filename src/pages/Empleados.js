import { useEffect, useState } from "react";

function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = async () => {
        const rutaServicio = "http://127.0.0.1:8000/empleados";
        const response = await fetch(rutaServicio);
        const data = await response.json();
        setListaEmpleados(data);
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th columna="nombre" >Nombre</th>
                    <th columna="categoria" >Categoria</th>
                    <th columna="horas" >Horas Trabajadas</th>
                    <th columna="pago" >Pago</th>
                </tr>
                </thead>
                <tbody>
                {listaEmpleados.map(item =>
                    <tr key={item.idempleado}>
                        <td>{item.nombre}</td>
                        <td>{item.categoria}</td>
                        <td>{item.horas_trabajadas}</td>
                        <td>{item.pago}</td>
                    </tr>
                )}
                </tbody>
            </table>
        )
    }

    return (
        <section className="padded">
            <div className="container">
                {dibujarTabla()}
            </div>
        </section>
    );
}

export default Empleados;