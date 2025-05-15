import "..//css/Serviceautomation.css";
import prueba from "../Images/enchufea.jpg";
import Interuptor from "../Images/interuptor.jpg";
import Regulador from "../Images/regulador.jpeg";
import Bombillo from "../Images/bombillo.jpg";
import Tiraled from "../Images/luzled.jpg";
import Sensor from "../Images/sensor.jpeg";
import Termostato from "../Images/termostato.jpeg";
import Ventilador from "../Images/Ventilador.jpg";
import Cortina from "../Images/cortina.jpg";



const Serviceautomation = () => {
  return (
    <>
    <section id="nuestros-servicios">
        <div className="container">
          <h2>CATALOGO</h2>
          <p></p>
          <h1>⚡ Control y Energia ⚡</h1>
          <p></p>
          <div className="servicios">
            <div className="carte"><br/>
             <h3>Enchufe inteligente</h3><br/>
              <p>Permite encender o apagar cualquier electrodoméstico conectado desde una aplicación móvil o mediante comandos de voz. Ideal para automatizar el encendido de cafeteras, lámparas o televisores.</p><br/>
               <img  style={{ width: '60%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={prueba} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
              
            </div>
            <div className="carte"><br/>
              <h3>Interruptor inteligente</h3><br/>
              <p>Reemplaza los interruptores tradicionales y permite controlar las luces o ventiladores desde el celular o mediante asistentes como Alexa o Google Home. Se pueden programar horarios o usar sensores.</p>
             <img  style={{ width: '60%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Interuptor} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
            </div>
            <div className="carte"><br/>
              <h3>Regulador de voltaje automático</h3><br/>
              <p>Protege electrodomésticos costosos contra subidas y bajadas de voltaje. Se activa automáticamente para estabilizar la corriente, prolongando la vida útil de tus equipos.</p>
             <img  style={{ width: '60%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Regulador} alt="Cerradura Inteligente" className="item-image"/>
             <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
            </div>
          </div>    
        </div>
      </section>

      <section id="nuestros-servicios">
        <div className="container">
          <p></p>
          <h1>💡 Iluminacion 💡</h1>
          <p></p>
          <div className="servicios">
            <div className="carte"><br/>
             <h3>Bombilla inteligente RGB</h3><br/>
              <p>Una bombilla que se conecta por WiFi o Bluetooth y puede cambiar de color, intensidad y programarse. Compatible con Alexa y Google Home. Aporta ahorro y ambientación.</p>
              <img  style={{ width: '60%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Bombillo} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
              
            </div>
            <div className="carte"><br/>
              <h3>Tiras LED inteligentes</h3><br/>
              <p>Luces LED adhesivas que pueden cambiar de color y sincronizarse con música o rutinas. Se manejan desde app o por voz. Ideales para decorar salas, habitaciones o escritorios.</p>
             <img  style={{ width: '60%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Tiraled} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
            </div>
            <div className="carte"><br/>
              <h3>Sensor de movimiento con luz</h3><br/>
              <p>Al detectar presencia, activa una luz automáticamente. Muy útil para escaleras, pasillos, garajes o exteriores durante la noche.</p>
             <img  style={{ width: '90%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Sensor} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
            </div>
          </div>    
        </div>
      </section>

      <section id="nuestros-servicios">
        <div className="container">
          <p></p>
          <h1> ☀️ Clima y Confort ❄️</h1>
          <p></p>
          <div className="servicios">
            <div className="carte"><br/>
             <h3>Termostato inteligente WiFi</h3><br/>
              <p>Controla la temperatura del hogar ajustando el aire acondicionado o la calefacción desde el celular. Aprende tus rutinas para optimizar el consumo energético.</p>
              <img  style={{ width: '90%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Termostato} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
              
            </div>
            <div className="carte"><br/>
              <h3>Ventilador inteligente</h3><br/>
              <p>Ventilador con conexión WiFi que puedes programar por horario, temperatura o usar desde la app. Algunos modelos son compatibles con comandos de voz.</p>
             <img  style={{ width: '90%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Ventilador} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
            </div>
            <div className="carte"><br/>
              <h3>Cortinas motorizadas</h3><br/>
              <p>Sistema que permite abrir o cerrar cortinas automáticamente, ya sea por horario, detección de luz o control manual desde el celular. Mejora el confort y el ahorro energético.</p>
             <img  style={{ width: '90%', height: '300px', objectFit: 'cover' }}  class="imagenes" src={Cortina} alt="Cerradura Inteligente" className="item-image"/>
              <a className="nav-link active" href="/Carrito"><br/>
              <button >AGREGAR AL CARRITO</button>
             </a>
            </div>
          </div>    
        </div>
      </section>

      </>
  );
}



export default Serviceautomation;