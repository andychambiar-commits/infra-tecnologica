---
sidebar_position: 1
title: Comunicaciones
description: Fundamentos de la comunicación de datos, tipos de transmisión y tecnologías de comunicación.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Comunicaciones

## Introducción

La **comunicación de datos** es el intercambio de información entre dos o más dispositivos a través de un medio de transmisión. Es la base de toda la infraestructura tecnológica: sin un medio y un protocolo claros, ningún equipo podría enviar ni recibir información.

:::info ¿Por qué es importante?
Cada vez que envías un mensaje, ves un video o abres una página web, ocurre un proceso de comunicación de datos que involucra emisor, receptor, mensaje, medio y protocolo.
:::

---

## Elementos del proceso de comunicación

Para que exista comunicación se necesitan cinco elementos fundamentales:

<div className="flow">
  <span>📤 Emisor</span>
  <span className="arrow">➜</span>
  <span>✉️ Mensaje</span>
  <span className="arrow">➜</span>
  <span>🔌 Medio / Canal</span>
  <span className="arrow">➜</span>
  <span>📥 Receptor</span>
</div>

<div className="card-grid">
  <div className="info-card">
    <span className="info-card__icon">📤</span>
    <strong>Emisor</strong>
    <p>Dispositivo o persona que origina y envía la información.</p>
    <em>Ejemplo: una laptop que envía un correo.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📥</span>
    <strong>Receptor</strong>
    <p>Dispositivo o persona que recibe e interpreta el mensaje.</p>
    <em>Ejemplo: el servidor de correo del destinatario.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">✉️</span>
    <strong>Mensaje</strong>
    <p>La información que se transmite: texto, voz, imagen, video o datos.</p>
    <em>Ejemplo: un archivo PDF.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🔌</span>
    <strong>Medio / Canal</strong>
    <p>Camino físico o inalámbrico por donde viaja el mensaje.</p>
    <em>Ejemplo: cable UTP, fibra óptica, ondas de radio.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📜</span>
    <strong>Protocolo</strong>
    <p>Conjunto de reglas que define cómo se formatea, envía y recibe la información.</p>
    <em>Ejemplo: TCP/IP, HTTP, Ethernet.</em>
  </div>
</div>

<details>
  <summary>💡 Ver ejemplo: enviar un correo electrónico</summary>

| Elemento | En el ejemplo |
|---|---|
| **Emisor** | Tu laptop con el cliente de correo |
| **Receptor** | El servidor de correo del destinatario |
| **Mensaje** | El correo con su archivo adjunto |
| **Medio / Canal** | Wi-Fi hasta el router y luego fibra óptica |
| **Protocolo** | SMTP sobre TCP/IP |

</details>

---

## Tipos de transmisión

### Por dirección

Define en qué sentido pueden fluir los datos entre los dos extremos.

| Tipo | Funcionamiento | Ejemplo |
|---|---|---|
| **Simplex** | Un solo sentido, siempre del emisor al receptor. | Radio FM, televisión, teclado a PC |
| **Half-duplex** | Ambos sentidos, pero **no al mismo tiempo**. | Walkie-talkie, Wi-Fi |
| **Full-duplex** | Ambos sentidos **al mismo tiempo**. | Llamada telefónica, Ethernet con switch |

{/* 🖼️ IMAGEN → static/img/comunicaciones/transmision-direccion.png
    QUÉ DEBE SER: Diagrama con tres filas (Simplex, Half-duplex y Full-duplex). Cada fila muestra dos equipos conectados por flechas: una sola flecha, una flecha que alterna sentido y dos flechas simultáneas.
    MEDIDAS SUGERIDAS: 1200 x 500 px (PNG con fondo transparente o blanco) */}
<figure className="img-figure">
  <img src="/img/comunicaciones/transmision-direccion.png" alt="Diagrama de transmisión simplex, half-duplex y full-duplex" />
  <figcaption>Figura 1. Comparación de los modos de transmisión por dirección.</figcaption>
</figure>

### Por sincronización, forma y señal

<Tabs>
  <TabItem value="sync" label="⏱️ Sincronización" default>

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Síncrona** | Emisor y receptor comparten una señal de reloj; los datos se envían en bloques continuos. | Ethernet, SDH |
| **Asíncrona** | Cada byte lleva bits de inicio y parada; no hay reloj común. | Puerto serial RS-232 |

  </TabItem>
  <TabItem value="forma" label="🧵 Forma de envío">

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Serie** | Los bits viajan uno tras otro por un solo canal. Sirve para largas distancias. | USB, SATA, Ethernet |
| **Paralelo** | Varios bits viajan a la vez por varios canales. Es rápido, pero solo en distancias cortas. | Antiguo puerto de impresora, buses internos |

  </TabItem>
  <TabItem value="senal" label="📈 Tipo de señal">

| Tipo | Descripción | Ejemplo |
|---|---|---|
| **Analógica** | Señal continua que varía en el tiempo. Es más sensible al ruido. | Radio AM/FM, telefonía tradicional |
| **Digital** | Señal discreta de valores 0 y 1. Es más robusta y fácil de regenerar. | Redes de datos, fibra óptica |

  </TabItem>
</Tabs>

### Por modo de entrega

Define a cuántos destinatarios llega un mensaje.

<div className="card-grid card-grid--3">
  <div className="info-card">
    <span className="info-card__icon">1️⃣</span>
    <strong>Unicast</strong>
    <p>De uno a uno. El mensaje va a un único destino.</p>
    <em>Ejemplo: navegar a una página web.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">👥</span>
    <strong>Multicast</strong>
    <p>De uno a un grupo específico de destinos.</p>
    <em>Ejemplo: IPTV, videoconferencias.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📢</span>
    <strong>Broadcast</strong>
    <p>De uno a todos los dispositivos de la red local.</p>
    <em>Ejemplo: solicitudes ARP, DHCP Discover.</em>
  </div>
</div>

---

## Tecnologías de comunicación

<Tabs>
  <TabItem value="cableadas" label="🔌 Cableadas" default>

| Tecnología | Medio | Velocidad típica | Uso principal |
|---|---|---|---|
| **Telefonía fija (PSTN)** | Par de cobre | Hasta 56 kbps (módem) | Voz y conexiones antiguas |
| **Ethernet** | Cable UTP | 10 Mbps a 10 Gbps | Redes locales (LAN) |
| **Fibra óptica** | Vidrio o plástico | Gbps a Tbps | Backbones, FTTH, datacenters |
| **Coaxial** | Cable coaxial | Hasta 10 Gbps (DOCSIS 3.1) | TV por cable e internet |
| **xDSL** | Línea telefónica de cobre | ADSL hasta 24 Mbps, VDSL2 hasta 100 Mbps | Internet residencial |

**Pasa el cursor sobre cada foto:**

<div className="hover-gallery">
  {/* 🖼️ IMAGEN → static/img/comunicaciones/cable-utp.jpg
      QUÉ DEBE SER: Foto de un cable de par trenzado UTP con conectores RJ45.
      MEDIDAS SUGERIDAS: 600 x 400 px (las tres fotos deben tener la misma proporción) */}
  <div className="hover-card">
    <img src="/img/comunicaciones/cable-utp.jpg" alt="Cable UTP con conectores RJ45" />
    <div className="hover-card__info"><strong>Cable UTP</strong><span>Ethernet en redes LAN. Hasta 100 m por segmento.</span></div>
  </div>
  {/* 🖼️ IMAGEN → static/img/comunicaciones/fibra-optica.jpg
      QUÉ DEBE SER: Foto de fibra óptica (hilos iluminados o patch cord con conectores LC).
      MEDIDAS SUGERIDAS: 600 x 400 px */}
  <div className="hover-card">
    <img src="/img/comunicaciones/fibra-optica.jpg" alt="Cable de fibra óptica" />
    <div className="hover-card__info"><strong>Fibra óptica</strong><span>Pulsos de luz. Máxima velocidad y distancia.</span></div>
  </div>
  {/* 🖼️ IMAGEN → static/img/comunicaciones/cable-coaxial.jpg
      QUÉ DEBE SER: Foto de un cable coaxial con su conector F, idealmente mostrando las capas internas.
      MEDIDAS SUGERIDAS: 600 x 400 px */}
  <div className="hover-card">
    <img src="/img/comunicaciones/cable-coaxial.jpg" alt="Cable coaxial con conector F" />
    <div className="hover-card__info"><strong>Cable coaxial</strong><span>TV por cable e internet por cable (DOCSIS).</span></div>
  </div>
</div>

  </TabItem>
  <TabItem value="inalambricas" label="📶 Inalámbricas">

| Tecnología | Alcance | Velocidad típica | Uso principal |
|---|---|---|---|
| **Wi-Fi** | 30 a 100 m | Hasta 9.6 Gbps (Wi-Fi 6) | Redes locales inalámbricas |
| **Bluetooth** | 10 a 100 m | Hasta 2 Mbps (BLE) | Audífonos, periféricos, wearables |
| **NFC** | Aprox. 4 cm | Hasta 424 kbps | Pagos sin contacto, tarjetas de acceso |
| **Zigbee** | 10 a 100 m | 250 kbps | Domótica y sensores |
| **LoRa** | 2 a 15 km | 0.3 a 50 kbps | IoT de largo alcance y bajo consumo |

<details>
  <summary>📶 Ver estándares Wi-Fi (IEEE 802.11)</summary>

| Estándar | Nombre comercial | Bandas | Velocidad máx. teórica |
|---|---|---|---|
| **802.11b** | Wi-Fi 1 | 2.4 GHz | 11 Mbps |
| **802.11g** | Wi-Fi 3 | 2.4 GHz | 54 Mbps |
| **802.11n** | Wi-Fi 4 | 2.4 y 5 GHz | 600 Mbps |
| **802.11ac** | Wi-Fi 5 | 5 GHz | 6.9 Gbps |
| **802.11ax** | Wi-Fi 6 y 6E | 2.4, 5 y 6 GHz (6E) | 9.6 Gbps |
| **802.11be** | Wi-Fi 7 | 2.4, 5 y 6 GHz | 46 Gbps |

</details>

  </TabItem>
  <TabItem value="moviles" label="📱 Móviles">

| Generación | Tecnología | Velocidad aprox. | Característica |
|---|---|---|---|
| **2G** | GSM, GPRS, EDGE | Hasta 384 kbps | Llamadas y SMS, primeros datos móviles |
| **3G** | UMTS, HSPA+ | Hasta 42 Mbps | Internet móvil y videollamadas básicas |
| **4G** | LTE, LTE-Advanced | 100 Mbps a 1 Gbps | Streaming y banda ancha móvil |
| **5G** | NR | 1 a 10 Gbps (pico) | Latencia muy baja, IoT masivo, industria |

{/* 🖼️ IMAGEN → static/img/comunicaciones/evolucion-2g-5g.png
    QUÉ DEBE SER: Infografía de línea de tiempo horizontal con las cuatro generaciones (2G, 3G, 4G, 5G), mostrando velocidad aproximada y un ícono de uso típico de cada una (llamada, internet, video, IoT).
    MEDIDAS SUGERIDAS: 1200 x 400 px */}
<figure className="img-figure">
  <img src="/img/comunicaciones/evolucion-2g-5g.png" alt="Línea de tiempo de la evolución de las redes móviles de 2G a 5G" />
  <figcaption>Figura 2. Evolución de las generaciones de telefonía móvil.</figcaption>
</figure>

  </TabItem>
  <TabItem value="otras" label="🛰️ Otras">

| Tecnología | Descripción | Uso |
|---|---|---|
| **Satelital** | Enlaces vía satélite. GEO tiene latencia de unos 600 ms; LEO, de 20 a 50 ms. | Zonas rurales, navegación, TV |
| **Microondas** | Enlaces punto a punto con línea de vista. | Enlaces entre torres, backhaul |
| **Radio** | Ondas de radio de distintas frecuencias (AM, FM, VHF, UHF). | Radiodifusión, radioenlaces |
| **Infrarrojos** | Luz infrarroja de corto alcance. Requiere línea de vista. | Controles remotos, IrDA |

{/* 🖼️ IMAGEN → static/img/comunicaciones/satelite-orbitas.png
    QUÉ DEBE SER: Ilustración de la Tierra con las órbitas LEO, MEO y GEO, indicando la altura aproximada de cada una y un satélite en cada órbita.
    MEDIDAS SUGERIDAS: 1000 x 600 px */}
<figure className="img-figure">
  <img src="/img/comunicaciones/satelite-orbitas.png" alt="Órbitas satelitales LEO, MEO y GEO alrededor de la Tierra" />
  <figcaption>Figura 3. Órbitas satelitales y su altura aproximada.</figcaption>
</figure>

  </TabItem>
</Tabs>

---

## Temas adicionales de conectividad

### Métricas de rendimiento

<div className="card-grid card-grid--4">
  <div className="info-card">
    <span className="info-card__icon">📏</span>
    <strong>Ancho de banda</strong>
    <p>Capacidad máxima del canal, medida en bps.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🚀</span>
    <strong>Throughput</strong>
    <p>Velocidad real de transferencia lograda.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">⏳</span>
    <strong>Latencia</strong>
    <p>Tiempo que tarda un paquete en llegar al destino (ms).</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">〰️</span>
    <strong>Jitter</strong>
    <p>Variación de la latencia entre paquetes.</p>
  </div>
</div>

:::tip Diferencia clave
El **ancho de banda** es lo que contratas; el **throughput** es lo que realmente obtienes. Casi siempre el throughput es menor.
:::

### Multiplexación

Técnica que permite **compartir un mismo canal** entre varias comunicaciones al mismo tiempo.

<details>
  <summary>📊 Ver técnicas: TDM, FDM y WDM</summary>

{/* 🖼️ IMAGEN → static/img/comunicaciones/multiplexacion-tdm-fdm-wdm.png
    QUÉ DEBE SER: Diagrama de tres paneles: TDM (bloques de colores alternados en el tiempo), FDM (franjas de colores apiladas por frecuencia) y WDM (haz de luz que se separa en colores con un prisma).
    MEDIDAS SUGERIDAS: 1200 x 450 px */}
<figure className="img-figure">
  <img src="/img/comunicaciones/multiplexacion-tdm-fdm-wdm.png" alt="Comparación visual de las técnicas de multiplexación TDM, FDM y WDM" />
  <figcaption>Figura 4. Técnicas de multiplexación.</figcaption>
</figure>

| Técnica | Cómo comparte el canal | Ejemplo |
|---|---|---|
| **TDM** (por tiempo) | Cada usuario transmite en un intervalo de tiempo propio. | Telefonía digital |
| **FDM** (por frecuencia) | Cada usuario usa una banda de frecuencia distinta. | Radio y TV |
| **WDM** (por longitud de onda) | Cada señal usa un color (longitud de onda) de luz distinto. | Fibra óptica de alta capacidad |

</details>

### Conmutación de circuitos vs. de paquetes

Define cómo se establece el camino de los datos entre el origen y el destino.

<details>
  <summary>🔀 Ver comparación</summary>

| Característica | Circuitos | Paquetes |
|---|---|---|
| **Ruta** | Dedicada durante toda la comunicación | Cada paquete puede tomar una ruta distinta |
| **Uso del canal** | Reservado, aunque no se use | Compartido, más eficiente |
| **Retardo** | Constante | Variable |
| **Ejemplo** | Telefonía tradicional | Internet |

</details>

### Interferencia y atenuación

- **Atenuación:** pérdida de potencia de la señal a medida que recorre el medio. Se corrige con repetidores o amplificadores.
- **Interferencia:** señales externas que alteran la original, como el ruido electromagnético (EMI) o la diafonía entre cables.

### Codificación y modulación

- **Codificación:** convierte datos digitales en señales digitales para transmitirlos (por ejemplo, Manchester o NRZ).
- **Modulación:** adapta la señal para viajar por un medio, usando una onda portadora que se modifica según los datos.

<details>
  <summary>〰️ Ver tipos de modulación</summary>

{/* 🖼️ IMAGEN → static/img/comunicaciones/modulacion-ask-fsk-psk.png
    QUÉ DEBE SER: Gráfico con cuatro ondas apiladas: la señal digital original (0 y 1) y su resultado con modulación ASK, FSK y PSK, alineadas en el tiempo.
    MEDIDAS SUGERIDAS: 1200 x 600 px */}
<figure className="img-figure">
  <img src="/img/comunicaciones/modulacion-ask-fsk-psk.png" alt="Formas de onda de las modulaciones ASK, FSK y PSK" />
  <figcaption>Figura 5. Modulación ASK, FSK y PSK de una misma señal digital.</figcaption>
</figure>

| Tipo | Qué varía de la portadora | Uso común |
|---|---|---|
| **ASK** | Amplitud | Sistemas simples, fibra óptica |
| **FSK** | Frecuencia | Módems antiguos, radio digital |
| **PSK** | Fase | Wi-Fi, Bluetooth, satélite |
| **QAM** | Amplitud y fase | Wi-Fi, cable, 4G/5G |

</details>

### Detección y corrección de errores

Permiten saber si los datos llegaron dañados y, en algunos casos, repararlos.

<details>
  <summary>🛠️ Ver técnicas</summary>

| Técnica | Función | Ejemplo |
|---|---|---|
| **Paridad** | Detecta errores simples agregando un bit extra. | Comunicación serial |
| **Checksum** | Suma de verificación de los datos. | TCP, UDP, IP |
| **CRC** | Código de redundancia cíclica, de alta fiabilidad. | Ethernet, Wi-Fi |
| **ARQ** | Solicita retransmitir el dato dañado. | TCP |
| **FEC** | Corrige errores sin retransmitir, con datos redundantes. | Satélite, 5G, DVD |

</details>

---

## Resumen rápido

:::note Ideas clave
- Toda comunicación necesita **emisor, receptor, mensaje, medio y protocolo**.
- Las transmisiones se clasifican por **dirección, sincronización, forma de envío, señal y modo de entrega**.
- Las tecnologías pueden ser **cableadas, inalámbricas, móviles o satelitales**, según velocidad, alcance y costo.
- El rendimiento se evalúa con **ancho de banda, throughput, latencia y jitter**.
:::