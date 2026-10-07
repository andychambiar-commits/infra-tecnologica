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

---

## Tipos de transmisión

### Por dirección

Define en qué sentido pueden fluir los datos entre los dos extremos.

| Tipo | Funcionamiento | Ejemplo |
|---|---|---|
| **Simplex** | Un solo sentido, siempre del emisor al receptor. | Radio FM, televisión, teclado a PC |
| **Half-duplex** | Ambos sentidos, pero **no al mismo tiempo**. | Walkie-talkie, Wi-Fi |
| **Full-duplex** | Ambos sentidos **al mismo tiempo**. | Llamada telefónica, Ethernet con switch |

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

  </TabItem>
  <TabItem value="inalambricas" label="📶 Inalámbricas">

| Tecnología | Alcance | Velocidad típica | Uso principal |
|---|---|---|---|
| **Wi-Fi** | 30 a 100 m | Hasta 9.6 Gbps (Wi-Fi 6) | Redes locales inalámbricas |
| **Bluetooth** | 10 a 100 m | Hasta 2 Mbps (BLE) | Audífonos, periféricos, wearables |
| **NFC** | Aprox. 4 cm | Hasta 424 kbps | Pagos sin contacto, tarjetas de acceso |
| **Zigbee** | 10 a 100 m | 250 kbps | Domótica y sensores |
| **LoRa** | 2 a 15 km | 0.3 a 50 kbps | IoT de largo alcance y bajo consumo |

  </TabItem>
  <TabItem value="moviles" label="📱 Móviles">

| Generación | Tecnología | Velocidad aprox. | Característica |
|---|---|---|---|
| **2G** | GSM, GPRS, EDGE | Hasta 384 kbps | Llamadas y SMS, primeros datos móviles |
| **3G** | UMTS, HSPA+ | Hasta 42 Mbps | Internet móvil y videollamadas básicas |
| **4G** | LTE, LTE-Advanced | 100 Mbps a 1 Gbps | Streaming y banda ancha móvil |
| **5G** | NR | 1 a 10 Gbps (pico) | Latencia muy baja, IoT masivo, industria |

  </TabItem>
  <TabItem value="otras" label="🛰️ Otras">

| Tecnología | Descripción | Uso |
|---|---|---|
| **Satelital** | Enlaces vía satélite. GEO tiene latencia de unos 600 ms; LEO, de 20 a 50 ms. | Zonas rurales, navegación, TV |
| **Microondas** | Enlaces punto a punto con línea de vista. | Enlaces entre torres, backhaul |
| **Radio** | Ondas de radio de distintas frecuencias (AM, FM, VHF, UHF). | Radiodifusión, radioenlaces |
| **Infrarrojos** | Luz infrarroja de corto alcance. Requiere línea de vista. | Controles remotos, IrDA |

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

Técnica que permite **compartir un mismo canal** entre varias comunicaciones.

| Técnica | Cómo comparte el canal | Ejemplo |
|---|---|---|
| **TDM** (por tiempo) | Cada usuario transmite en un intervalo de tiempo propio. | Telefonía digital |
| **FDM** (por frecuencia) | Cada usuario usa una banda de frecuencia distinta. | Radio y TV |
| **WDM** (por longitud de onda) | Cada señal usa un color (longitud de onda) de luz distinto. | Fibra óptica de alta capacidad |

### Conmutación de circuitos vs. de paquetes

| Característica | Circuitos | Paquetes |
|---|---|---|
| **Ruta** | Dedicada durante toda la comunicación | Cada paquete puede tomar una ruta distinta |
| **Uso del canal** | Reservado, aunque no se use | Compartido, más eficiente |
| **Retardo** | Constante | Variable |
| **Ejemplo** | Telefonía tradicional | Internet |

### Interferencia y atenuación

- **Atenuación:** pérdida de potencia de la señal a medida que recorre el medio. Se corrige con repetidores o amplificadores.
- **Interferencia:** señales externas que alteran la original, como el ruido electromagnético (EMI) o la diafonía entre cables.

### Codificación y modulación

- **Codificación:** convierte datos digitales en señales digitales para transmitirlos (por ejemplo, Manchester o NRZ).
- **Modulación:** adapta la señal para viajar por un medio, variando la **amplitud (ASK)**, la **frecuencia (FSK)** o la **fase (PSK)** de una onda portadora. **QAM** combina amplitud y fase, y es muy usada en Wi-Fi, cable y 4G/5G.

### Detección y corrección de errores

| Técnica | Función | Ejemplo |
|---|---|---|
| **Paridad** | Detecta errores simples agregando un bit extra. | Comunicación serial |
| **Checksum** | Suma de verificación de los datos. | TCP, UDP, IP |
| **CRC** | Código de redundancia cíclica, de alta fiabilidad. | Ethernet, Wi-Fi |
| **ARQ** | Solicita retransmitir el dato dañado. | TCP |
| **FEC** | Corrige errores sin retransmitir, con datos redundantes. | Satélite, 5G, DVD |

---

## Resumen rápido

:::note Ideas clave
- Toda comunicación necesita **emisor, receptor, mensaje, medio y protocolo**.
- Las transmisiones se clasifican por **dirección, sincronización, forma de envío, señal y modo de entrega**.
- Las tecnologías pueden ser **cableadas, inalámbricas, móviles o satelitales**, según velocidad, alcance y costo.
- El rendimiento se evalúa con **ancho de banda, throughput, latencia y jitter**.
:::