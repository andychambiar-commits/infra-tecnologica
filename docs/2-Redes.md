---
sidebar_position: 2
title: Redes
description: Modelos de referencia, clasificación por alcance, topologías, arquitecturas, direccionamiento y conceptos clave de las redes de computadoras.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Redes

## Introducción

Una **red de computadoras** es un conjunto de dispositivos interconectados que comparten recursos e información: archivos, impresoras, aplicaciones y acceso a internet.

<div className="card-grid card-grid--4">
  <div className="info-card">
    <span className="info-card__icon">🔗</span>
    <strong>Compartir recursos</strong>
    <p>Impresoras, archivos y servidores accesibles para todos.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">💬</span>
    <strong>Comunicación</strong>
    <p>Correo, videollamadas y mensajería en tiempo real.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🌐</span>
    <strong>Acceso a internet</strong>
    <p>Una sola conexión compartida por muchos equipos.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🛡️</span>
    <strong>Centralización</strong>
    <p>Administración, respaldos y seguridad desde un solo punto.</p>
  </div>
</div>

---

## Modelos de referencia

Los modelos dividen la comunicación en **capas**, cada una con una función específica. Así los equipos y fabricantes distintos pueden trabajar juntos.

### Modelo OSI (7 capas)

| Capa | Nombre | Función | Unidad de datos | Ejemplos |
|---|---|---|---|---|
| **7** | Aplicación | Interfaz con el usuario y las aplicaciones. | Datos | HTTP, DNS, SMTP |
| **6** | Presentación | Formato, cifrado y compresión de datos. | Datos | TLS, JPEG, ASCII |
| **5** | Sesión | Establece, mantiene y cierra sesiones. | Datos | NetBIOS, RPC |
| **4** | Transporte | Entrega extremo a extremo, control de flujo y errores. | Segmento | TCP, UDP |
| **3** | Red | Direccionamiento lógico y enrutamiento. | Paquete | IP, ICMP, routers |
| **2** | Enlace de datos | Direccionamiento físico (MAC) y acceso al medio. | Trama | Ethernet, switches |
| **1** | Física | Transmisión de bits por el medio. | Bits | Cables, hubs, señales |

:::tip Regla para recordarlo
De la capa 7 a la 1: **A**ll **P**eople **S**eem **T**o **N**eed **D**ata **P**rocessing (Aplicación, Presentación, Sesión, Transporte, Red, Datos, Física).
:::

<details>
  <summary>📦 Ver cómo viajan los datos por las capas (encapsulación)</summary>

Al enviar información, cada capa **agrega su propia cabecera** a los datos (encapsulación). El receptor hace el proceso inverso, de la capa 1 a la 7 (desencapsulación).

{/* 🖼️ IMAGEN → static/img/redes/encapsulacion-datos.png
    QUÉ DEBE SER: Diagrama en escalera descendente: Datos, luego Segmento (con cabecera TCP), Paquete (con cabecera IP), Trama (con cabecera y cola Ethernet) y Bits. Cada capa agrega un bloque de color distinto.
    MEDIDAS SUGERIDAS: 1200 x 500 px */}
<figure className="img-figure">
  <img src="/img/redes/encapsulacion-datos.png" alt="Proceso de encapsulación de datos a través de las capas del modelo OSI" />
  <figcaption>Figura 1. Encapsulación: cada capa agrega su cabecera.</figcaption>
</figure>

</details>

### Modelo TCP/IP (4 capas)

Es el modelo que realmente usa internet. Es más simple y práctico que OSI.

| Capa TCP/IP | Equivale en OSI | Protocolos principales |
|---|---|---|
| **Aplicación** | 5, 6 y 7 | HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH |
| **Transporte** | 4 | TCP, UDP |
| **Internet** | 3 | IP, ICMP, ARP, IPsec |
| **Acceso a red** | 1 y 2 | Ethernet, Wi-Fi, PPP |

### OSI vs. TCP/IP

Ambos modelos organizan la comunicación en capas, pero con enfoques distintos.

<details>
  <summary>⚖️ Ver comparación</summary>

| Aspecto | OSI | TCP/IP |
|---|---|---|
| **Capas** | 7 | 4 |
| **Naturaleza** | Modelo teórico de referencia | Modelo práctico, base de internet |
| **Uso principal** | Enseñanza y diagnóstico | Implementación real |
| **Origen** | ISO | Departamento de Defensa de EE. UU. |

</details>

---

## Clasificación por alcance

Las redes se clasifican según el área geográfica que cubren.

| Tipo | Nombre | Alcance aproximado | Ejemplo |
|---|---|---|---|
| **PAN** | Personal Area Network | 1 a 10 m | Celular con audífonos Bluetooth |
| **LAN** | Local Area Network | Un edificio o una casa | Red de una oficina |
| **WLAN** | Wireless LAN | Un edificio o zona Wi-Fi | Wi-Fi de una cafetería |
| **CAN** | Campus Area Network | Varios edificios cercanos | Red de una universidad |
| **MAN** | Metropolitan Area Network | Una ciudad | Red de un proveedor de internet urbano |
| **WAN** | Wide Area Network | Países o continentes | Internet |
| **SAN** | Storage Area Network | Un datacenter | Red de almacenamiento de servidores |
| **VPN** | Virtual Private Network | Cualquiera (sobre internet) | Acceso remoto seguro a la empresa |

{/* 🖼️ IMAGEN → static/img/redes/clasificacion-alcance.png
    QUÉ DEBE SER: Infografía de círculos concéntricos o escalera de tamaños que vaya de PAN (un escritorio) a LAN, CAN, MAN y WAN (el mundo), con un ícono representativo en cada nivel.
    MEDIDAS SUGERIDAS: 1200 x 500 px */}
<figure className="img-figure">
  <img src="/img/redes/clasificacion-alcance.png" alt="Clasificación de las redes por alcance, de PAN a WAN" />
  <figcaption>Figura 2. Redes según su alcance geográfico.</figcaption>
</figure>

---

## Topologías de red

La **topología** describe cómo se organizan los dispositivos de una red.

- **Topología física:** la disposición real de cables y equipos.
- **Topología lógica:** la forma en que los datos fluyen entre los equipos, sin importar el cableado.

<Tabs>
  <TabItem value="estrella" label="⭐ Estrella" default>

```text
        PC1
         |
PC2 ---- SWITCH ---- PC3
         |
        PC4
```

| Ventajas | Desventajas |
|---|---|
| Fácil de instalar y administrar. | Si falla el nodo central, cae toda la red. |
| La falla de un equipo no afecta a los demás. | Requiere más cable. |
| Fácil de ampliar. | El switch es un punto único de falla. |

**Es la topología más usada hoy en redes LAN.**

  </TabItem>
  <TabItem value="bus" label="➖ Bus">

```text
PC1    PC2    PC3    PC4
 |      |      |      |
=========================  (cable troncal)
```

| Ventajas | Desventajas |
|---|---|
| Económica y simple. | Una falla del cable troncal deja sin red a todos. |
| Usa poco cable. | Difícil de diagnosticar. |
| Útil para redes muy pequeñas. | El rendimiento baja al agregar equipos. |

  </TabItem>
  <TabItem value="anillo" label="🔄 Anillo">

```text
   PC1 ---- PC2
    |        |
   PC4 ---- PC3
```

| Ventajas | Desventajas |
|---|---|
| Acceso ordenado al medio. | Una ruptura puede interrumpir la red. |
| Buen rendimiento con carga alta. | Agregar o quitar nodos afecta al anillo. |
| Usada en anillos de fibra (SDH, FDDI). | Diagnóstico más complejo. |

  </TabItem>
  <TabItem value="malla" label="🕸️ Malla">

```text
PC1 ---- PC2
 | \    / |
 |  \  /  |
 |   \/   |
 |   /\   |
 |  /  \  |
PC4 ---- PC3
```

| Ventajas | Desventajas |
|---|---|
| Alta redundancia y tolerancia a fallas. | Muy costosa por la cantidad de enlaces. |
| Varias rutas posibles. | Compleja de instalar y administrar. |
| Usada en el core de internet y en redes Wi-Fi mesh. | Se usa sobre todo de forma parcial. |

  </TabItem>
  <TabItem value="arbol" label="🌳 Árbol">

```text
          SWITCH CORE
          /         \
     SWITCH A     SWITCH B
     /     \       /     \
   PC1    PC2    PC3    PC4
```

| Ventajas | Desventajas |
|---|---|
| Escalable y jerárquica. | Si falla un nodo superior, se aíslan sus ramas. |
| Fácil de segmentar por áreas. | Depende mucho del nodo raíz. |
| Común en redes corporativas. | Requiere más cableado y planificación. |

  </TabItem>
  <TabItem value="hibrida" label="🧩 Híbrida">

Combina dos o más topologías, por ejemplo, **estrellas conectadas entre sí en forma de árbol o malla parcial**.

| Ventajas | Desventajas |
|---|---|
| Flexible y adaptable a cada necesidad. | Diseño y administración más complejos. |
| Combina lo mejor de varias topologías. | Mayor costo de implementación. |
| Es la que se encuentra en la mayoría de redes reales. | Requiere buena documentación. |

  </TabItem>
</Tabs>

<details>
  <summary>🔍 Ver topología física vs. lógica con ejemplos</summary>

{/* 🖼️ IMAGEN → static/img/redes/topologia-fisica-vs-logica.png
    QUÉ DEBE SER: Imagen dividida en dos mitades con los mismos equipos: a la izquierda el cableado real (estrella hacia un hub o switch) y a la derecha el recorrido de los datos (por ejemplo, un bus o un anillo), con flechas.
    MEDIDAS SUGERIDAS: 1200 x 450 px */}
<figure className="img-figure">
  <img src="/img/redes/topologia-fisica-vs-logica.png" alt="Comparación entre topología física y topología lógica" />
  <figcaption>Figura 3. La topología física y la lógica pueden ser distintas.</figcaption>
</figure>

| Red | Topología física | Topología lógica |
|---|---|---|
| **Ethernet con hub** | Estrella | Bus (todos reciben la señal) |
| **Token Ring** | Estrella (hacia el MAU) | Anillo |
| **Ethernet con switch** | Estrella | Estrella (punto a punto entre puertos) |

</details>

---

## Arquitecturas de red

Definen **cómo se reparten los roles** entre los equipos de la red.

**Pasa el cursor sobre cada diagrama:**

<div className="hover-gallery">
  {/* 🖼️ IMAGEN → static/img/redes/arq-cliente-servidor.png
      QUÉ DEBE SER: Diagrama con un servidor al centro conectado a varios clientes (PC, laptop, celular), con flechas de solicitud y respuesta.
      MEDIDAS SUGERIDAS: 600 x 400 px (las tres con la misma proporción y buen margen interior) */}
  <div className="hover-card">
    <img src="/img/redes/arq-cliente-servidor.png" alt="Arquitectura cliente-servidor" />
    <div className="hover-card__info"><strong>Cliente-servidor</strong><span>Los clientes solicitan servicios y los servidores los proveen de forma centralizada.</span></div>
  </div>
  {/* 🖼️ IMAGEN → static/img/redes/arq-p2p.png
      QUÉ DEBE SER: Diagrama con varios equipos del mismo tamaño conectados directamente entre sí, sin servidor central.
      MEDIDAS SUGERIDAS: 600 x 400 px */}
  <div className="hover-card">
    <img src="/img/redes/arq-p2p.png" alt="Arquitectura peer-to-peer" />
    <div className="hover-card__info"><strong>Peer-to-peer (P2P)</strong><span>Todos los equipos son iguales y comparten recursos entre sí.</span></div>
  </div>
  {/* 🖼️ IMAGEN → static/img/redes/arq-hibrida.png
      QUÉ DEBE SER: Diagrama con un servidor pequeño de coordinación y varios equipos que, además, se conectan entre ellos.
      MEDIDAS SUGERIDAS: 600 x 400 px */}
  <div className="hover-card">
    <img src="/img/redes/arq-hibrida.png" alt="Arquitectura híbrida" />
    <div className="hover-card__info"><strong>Híbrida</strong><span>Combina un servidor que coordina con intercambio directo entre usuarios.</span></div>
  </div>
</div>

<details>
  <summary>⚖️ Ver ventajas y desventajas</summary>

| Arquitectura | Ventajas | Desventajas | Ejemplo |
|---|---|---|---|
| **Cliente-servidor** | Control y seguridad centralizados | El servidor es un punto crítico | Web y correo |
| **P2P** | Económica y simple | Difícil de controlar y proteger | BitTorrent |
| **Híbrida** | Equilibrio entre control y eficiencia | Más compleja de administrar | Algunas plataformas de videollamadas |

</details>

---

## Direccionamiento

Para que un dato llegue a su destino, cada dispositivo necesita identificadores.

| Elemento | Descripción | Ejemplo |
|---|---|---|
| **Dirección IP** | Identificador lógico de un equipo en la red (capa 3). | 192.168.1.10 |
| **Máscara de subred** | Indica qué parte de la IP es red y cuál es host. | 255.255.255.0 (/24) |
| **Gateway** | Router por el que se sale hacia otras redes. | 192.168.1.1 |
| **Dirección MAC** | Identificador físico de la tarjeta de red, de 48 bits (capa 2). | 00:1A:2B:3C:4D:5E |
| **Puerto** | Número que identifica el servicio dentro del equipo (capa 4). | 80 (HTTP), 443 (HTTPS) |
| **DNS** | Traduce nombres de dominio a direcciones IP. | ejemplo.com ➜ 93.184.216.34 |

<details>
  <summary>🚪 Ver puertos más comunes</summary>

| Puerto | Protocolo | Servicio |
|---|---|---|
| **20 y 21** | FTP | Transferencia de archivos |
| **22** | SSH | Acceso remoto seguro |
| **23** | Telnet | Acceso remoto sin cifrar |
| **25** | SMTP | Envío de correo |
| **53** | DNS | Resolución de nombres |
| **67 y 68** | DHCP | Asignación automática de IP |
| **80** | HTTP | Páginas web |
| **110** | POP3 | Recepción de correo |
| **143** | IMAP | Recepción de correo |
| **443** | HTTPS | Páginas web cifradas |
| **3389** | RDP | Escritorio remoto de Windows |

</details>

---

## Conceptos clave

### Subnetting

Consiste en **dividir una red grande en subredes más pequeñas** para ordenar el tráfico, mejorar la seguridad y aprovechar mejor las direcciones.

<details>
  <summary>🧮 Ver ejemplo resuelto</summary>

**Fórmulas útiles:** subredes = 2^n (n = bits prestados a la red) y hosts utilizables = 2^h − 2 (h = bits de host).

| Subred | Rango de hosts | Broadcast |
|---|---|---|
| 192.168.1.0/26 | .1 a .62 | .63 |
| 192.168.1.64/26 | .65 a .126 | .127 |
| 192.168.1.128/26 | .129 a .190 | .191 |
| 192.168.1.192/26 | .193 a .254 | .255 |

El ejemplo divide la red 192.168.1.0/24 en **4 subredes /26**, cada una con **62 hosts utilizables**.

</details>

### VLAN

Una **VLAN** (Virtual LAN) divide lógicamente una red física en varias redes independientes dentro de un mismo switch. Por ejemplo: VLAN 10 para Administración, VLAN 20 para Ventas y VLAN 30 para Invitados.

- Reduce el tráfico de broadcast.
- Mejora la seguridad al aislar grupos.
- Se identifica mediante etiquetas **802.1Q** en los enlaces troncales.

<details>
  <summary>🏷️ Ver ejemplo de VLAN</summary>

{/* 🖼️ IMAGEN → static/img/redes/vlan-segmentacion.png
    QUÉ DEBE SER: Diagrama de un solo switch con equipos agrupados por colores en tres VLAN (10, 20 y 30), mostrando que cada grupo queda aislado aunque compartan el mismo equipo físico.
    MEDIDAS SUGERIDAS: 1000 x 500 px */}
<figure className="img-figure">
  <img src="/img/redes/vlan-segmentacion.png" alt="Un switch dividido en tres VLAN" />
  <figcaption>Figura 4. Un switch físico dividido en varias redes lógicas.</figcaption>
</figure>

| VLAN | Nombre | Uso |
|---|---|---|
| **10** | Administración | Personal administrativo |
| **20** | Ventas | Equipo comercial |
| **30** | Invitados | Wi-Fi para visitantes |

</details>

### NAT

**NAT** (Network Address Translation) traduce direcciones IP privadas a una o más IP públicas, lo que permite que una red completa salga a internet con pocas direcciones públicas.

<details>
  <summary>🔁 Ver tipos de NAT</summary>

{/* 🖼️ IMAGEN → static/img/redes/nat-pat.png
    QUÉ DEBE SER: Diagrama de varias computadoras con IP privadas (192.168.1.x) que pasan por un router y salen a internet con una sola IP pública, indicando la traducción en el router.
    MEDIDAS SUGERIDAS: 1200 x 450 px */}
<figure className="img-figure">
  <img src="/img/redes/nat-pat.png" alt="Funcionamiento de NAT: IP privadas traducidas a una IP pública" />
  <figcaption>Figura 5. NAT/PAT: muchas IP privadas comparten una IP pública.</figcaption>
</figure>

| Tipo | Descripción |
|---|---|
| **Estático** | Una IP privada se asocia a una IP pública fija. |
| **Dinámico** | Se asigna una IP pública de un conjunto disponible. |
| **PAT (sobrecarga)** | Muchas IP privadas comparten una sola IP pública, diferenciadas por puerto. Es el más usado. |

</details>

### Enrutamiento

Es el proceso por el cual un router decide por dónde enviar cada paquete.

<Tabs>
  <TabItem value="estatico" label="📌 Estático" default>

Las rutas se configuran **manualmente** por el administrador.

- ✅ Simple, sin consumo de recursos y predecible.
- ❌ No se adapta solo a fallas; no escala bien.
- Ideal para redes pequeñas o rutas por defecto.

  </TabItem>
  <TabItem value="dinamico" label="🔁 Dinámico">

Los routers **intercambian información** y calculan las rutas automáticamente.

| Protocolo | Tipo | Característica |
|---|---|---|
| **RIP** | Vector de distancia (IGP) | Simple; límite de 15 saltos; para redes pequeñas. |
| **OSPF** | Estado de enlace (IGP) | Rápido y escalable; usa áreas; estándar abierto. |
| **EIGRP** | Híbrido (IGP) | Propietario de Cisco; convergencia rápida. |
| **BGP** | Vector de ruta (EGP) | Conecta sistemas autónomos; es el protocolo de internet. |

  </TabItem>
</Tabs>

### QoS (Calidad de servicio)

Conjunto de técnicas para **priorizar cierto tipo de tráfico** cuando hay congestión. Por ejemplo, la voz y el video tienen prioridad sobre las descargas.

- **Clasificación y marcado:** identifica el tráfico (por ejemplo, con DSCP).
- **Colas:** ordenan los paquetes según su prioridad.
- **Control de ancho de banda:** limita o garantiza velocidad por servicio.

---

## Métodos de acceso al medio

Cuando varios equipos comparten un canal, necesitan reglas para no transmitir al mismo tiempo.

<div className="card-grid">
  <div className="info-card">
    <span className="info-card__icon">🔌</span>
    <strong>CSMA/CD</strong>
    <p>Con detección de colisiones. El equipo escucha el canal, transmite y, si detecta una colisión, espera un tiempo aleatorio y reintenta.</p>
    <em>Se usó en Ethernet con hubs (half-duplex). Hoy los switches full-duplex lo hacen innecesario.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📶</span>
    <strong>CSMA/CA</strong>
    <p>Con evasión de colisiones. El equipo espera a que el canal esté libre y usa confirmaciones (ACK) y, opcionalmente, RTS/CTS.</p>
    <em>Es el método de Wi-Fi (802.11), donde no se pueden detectar colisiones mientras se transmite.</em>
  </div>
</div>

---

## Tendencias en redes

<div className="card-grid card-grid--3">
  <div className="info-card">
    <span className="info-card__icon">☁️</span>
    <strong>Redes en la nube</strong>
    <p>Infraestructura de red y servicios alojados en proveedores como AWS, Azure o Google Cloud.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🧠</span>
    <strong>SDN</strong>
    <p>Redes definidas por software. Separa el plano de control del de datos y centraliza la gestión.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🧱</span>
    <strong>Virtualización de redes</strong>
    <p>NFV y redes virtuales que reemplazan equipos físicos por funciones de software.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🌡️</span>
    <strong>IoT</strong>
    <p>Miles de millones de sensores y objetos conectados: domótica, ciudades y fábricas inteligentes.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📡</span>
    <strong>5G y Wi-Fi 7</strong>
    <p>Mayor velocidad, menor latencia y más dispositivos conectados al mismo tiempo.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">⚡</span>
    <strong>Edge computing</strong>
    <p>Procesamiento cerca del usuario o del dispositivo para reducir la latencia.</p>
  </div>
</div>

---

## Resumen rápido

:::note Ideas clave
- Los modelos **OSI (7 capas)** y **TCP/IP (4 capas)** organizan la comunicación; TCP/IP es el que usa internet.
- Las redes se clasifican por alcance: **PAN, LAN, WLAN, CAN, MAN, WAN, SAN y VPN**.
- La topología **estrella** domina las LAN; la **malla** da redundancia y la **híbrida** es la más común en la práctica.
- **IP, máscara, gateway, MAC, puertos y DNS** permiten identificar y encontrar cada dispositivo.
- **Subnetting, VLAN, NAT, enrutamiento y QoS** son las herramientas para organizar, proteger y optimizar una red.
:::