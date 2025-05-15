import "../css/Serviciocamaras.css";
import Hogar from "../Images/hogar.jpg";

const Serviciocamaras = () => {
  return (
    <section className="servicio-camaras">
      {/* Contenido principal del servicio */}
      <div className="tarjeta animacion-entrada">
        <a>
          <h1 className="titulo">📷 Servicio de Cámaras 📷</h1>
        </a>

        <div className="parrafos">
          <p>
            El servicio de cámaras de seguridad consiste en la instalación,
            configuración y mantenimiento de sistemas de videovigilancia con el
            fin de monitorear, registrar y proteger espacios físicos ante
            posibles incidentes como robos, intrusiones, actos vandálicos u
            otras situaciones de riesgo.
          </p>
          <p>
            Este servicio incluye el suministro de cámaras (analógicas o IP),
            grabadores (DVR/NVR), almacenamiento en la nube o local, así como la
            posibilidad de monitoreo en tiempo real a través de dispositivos
            móviles o estaciones de control.
          </p>
          <p>
            Los sistemas de cámaras pueden ser utilizados en entornos
            residenciales, comerciales e industriales, y pueden complementarse
            con funciones avanzadas como detección de movimiento, reconocimiento
            facial, visión nocturna, alertas automáticas y acceso remoto.
          </p>
        </div>

        <div className="beneficios">
          <h3>Beneficios del servicio:</h3>
          <ol>
            <li>Disuasión de actos delictivos.</li>
            <li>
              Registro continuo o por eventos de actividades en zonas
              específicas.
            </li>
            <li>Evidencia visual ante incidentes.</li>
            <li>Mejora del control operativo y la seguridad.</li>
            <li>
              Acceso remoto a través de aplicaciones móviles o plataformas web.
            </li>
          </ol>
        </div>
      </div>

      {/* Tarjetas independientes, por fuera del div .tarjeta */}
      <div className="carte">
        <br />
        <h3>Para hogares, el sistema proporciona:</h3>
        <br />
        <p>
          <ul>
            <li>Vigilancia continua del exterior e interior de la vivienda.</li>
            <li>Notificaciones instantáneas ante movimientos sospechosos.</li>
            <li>Registro de eventos para mayor seguridad familiar.</li>
            <li>
              Control desde el celular para ver lo que ocurre en tiempo real.
            </li>
          </ul>
        </p>
        <img
          style={{ width: "60%", height: "300px", objectFit: "cover" }}
          class="imagenes"
          src={Hogar}
          alt="Casa con camara"
          className="item-image"
        />
        <a className="nav-link active" href="/Carrito">
          <br />
          <button>AGREGAR AL CARRITO</button>
        </a>
      </div>

      <div className="carte">
        <br />
        <h3>Para empresas, el sistema incluye:</h3>
        <br />
        <p>
          <ul>
            <li>
              Monitoreo de áreas sensibles como oficinas, almacenes o puntos de
              venta.
            </li>
            <li>Supervisión del personal y operaciones.</li>
            <li>Registro de evidencias ante incidentes o pérdidas.</li>
            <li>Mejora en la seguridad general del negocio.</li>
          </ul>

          <img
          style={{ width: "60%", height: "300px", objectFit: "cover" }}
          class="imagenes"
          src= "https://www.aideabogados.com/wp-content/uploads/2017/05/aide-abogados-camara-de-seguridad-en-el-trabajo-1.jpg"
          alt="Casa con camara"
          className="item-image"
        />
        <a className="nav-link active" href="/Carrito">
          <br />
          <button>AGREGAR AL CARRITO</button>
        </a>
        
        </p>
      </div>
    </section>
  );
};

export default Serviciocamaras;
