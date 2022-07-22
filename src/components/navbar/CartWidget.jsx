import pacienteHead from "../../assets/pacienteHead.png";
import data from "../../helper/Vehiculos.json";

function CartWidget() {
      return (
            <>
                  <span className="badge contmens badge-counter">
                        <img
                              src={pacienteHead}
                              className="pacienteHead"
                              alt=""
                        />
                        {data.pacientes.length}
                  </span>
            </>
      );
}

export default CartWidget;
