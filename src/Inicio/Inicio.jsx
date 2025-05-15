import "../css/Inicio.css";
const Pagina1 = () => {
    return (
      <>
        <header>
          <a href="#" className="logo">
            <p className="logo-nombre">MultiServicios S.A.S</p>
          </a>
        </header>

        <section
          id="hero"
          style={{
            backgroundImage:
              'url("https://stonkstutors.com/wp-content/uploads/2023/06/20-Conoce-la-aplicacion-de-camara-con-GPS-que-anade-la-ubicacion-en-las-fotos1-1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            padding: "100px 20px",
            textAlign: "center",
            
          }}
        >
          <h1>
            BIENVENIDO A: <br />
            MultiServicios SAS
          </h1>{" "}
          <br />
          

<h2 style={{ color: "#ffffff", fontSize: "40px" }}>
  Tecnología y confianza para transformar tu hogar
</h2> 



          <form action="http://whatsapp.com/">
          <br />
            <button>Contacto</button>
          </form>
          
        </section>

        <section id="Segunda">
          <div className="container">
            <div className="texto">
              <h2>Multiservicios S.A.S.</h2>
              <p>
                Es una empresa especializada en brindar soluciones integrales en
                tecnología, enfocada en tres áreas clave: sistemas de cámaras de
                seguridad, rastreadores GPS y automatización de procesos.
                Nuestro compromiso es ofrecer a nuestros clientes herramientas
                innovadoras que mejoren la seguridad, eficiencia y control tanto
                en entornos residenciales como empresariales.
              </p>
              <p>
                Con un equipo técnico altamente capacitado y tecnología de
                vanguardia, en Multiservicios S.A.S. trabajamos para garantizar
                confianza, precisión y soluciones personalizadas que se adaptan
                a las necesidades de cada cliente.
              </p>
            </div>
          </div>
        </section>

        <section id="nuestros-servicios">
          <div className="container">
            <h2>NUESTROS SERVICIOS</h2>
            <div className="servicios">
              <div className="carte">
                <h3>Servicio De Automatizacion</h3>
                <p>
                  Ofrecemos un servicio de Automatizacion en los hogares para
                  poder facilitar tareas en el hogar A través de un sistema
                  inteligente e intuitivo, podrás gestionar fácilmente
                  dispositivos como luces, cámaras de seguridad, sensores de
                  movimiento, cerraduras electrónicas y electrodomésticos, todo
                  desde una aplicación web o móvil personalizada.
                </p>
                <a className="nav-link active" href="/Serviceautomation">
                  <button>+info</button>
                </a>
              </div>
              <div className="carte">
                <h3>Servicio de Camaras</h3>
                <p>
                  Ofrecemos un servicio integral de instalación, configuración y
                  mantenimiento de sistemas de cámaras de seguridad (CCTV/IP)
                  para hogares, negocios, oficinas e industrias. Nuestro
                  objetivo es brindar protección, vigilancia continua y
                  tranquilidad a través de soluciones tecnológicas modernas,
                  adaptadas a las necesidades de cada cliente.
                </p>
                <a className="nav-link active" href="/Serviciocamaras">
                  <button>+info</button>
                </a>
              </div>
              <div className="carte">
                <h3>Servicio de GPS</h3>
                <p>
                  Ofrecemos soluciones de localización en tiempo real mediante
                  tecnología GPS de alta precisión. Ideal para el monitoreo de
                  vehículos, personas, mercancías o activos, nuestro servicio
                  garantiza seguridad, eficiencia y control desde cualquier
                  lugar, en todo momento.
                </p>
                <a className="nav-link active" href="/Serviciogps">
                  <button>+info</button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="mensaje">
          <div className="Datos">
            <h2>CONTACTO</h2>
            <form>
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                required
                placeholder="Ingrese nombre"
              />

              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                required
                placeholder="Su telefono"
              />

              <label htmlFor="correo">Email:</label>
              <input
                type="email"
                id="correo"
                name="email"
                required
                placeholder="Ingrese email"
              />

              <label htmlFor="solicitud">Solicitud:</label>
              <textarea
                id="solicitud"
                name="solicitud"
                rows="4"
                required
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>

        <footer>
          <div className="container">
            <p>@MultiServicios</p>
          </div>
        </footer>
      </>
    );
    
  };
  export default Pagina1;