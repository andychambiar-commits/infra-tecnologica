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

### Modelo TCP/IP (4 capas)

Es el modelo que realmente usa internet. Es más simple y práctico que OSI.

| Capa TCP/IP | Equivale en OSI | Protocolos principales |
|---|---|---|
| **Aplicación** | 5, 6 y 7 | HTTP, HTTPS, FTP, SMTP, DNS, DHCP, SSH |
| **Transporte** | 4 | TCP, UDP |
| **Internet** | 3 | IP, ICMP, ARP, IPsec |
| **Acceso a red** | 1 y 2 | Ethernet, Wi-Fi, PPP |

### OSI vs. TCP/IP

| Aspecto | OSI | TCP/IP |
|---|---|---|
| **Capas** | 7 | 4 |
| **Naturaleza** | Modelo teórico de referencia | Modelo práctico, base de internet |
| **Uso principal** | Enseñanza y diagnóstico | Implementación real |
| **Origen** | ISO | Departamento de Defensa de EE. UU. |

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

---

## Arquitecturas de red

Definen **cómo se reparten los roles** entre los equipos de la red.

<div className="card-grid card-grid--3">
  <div className="info-card">
    <span className="info-card__icon">🗄️</span>
    <strong>Cliente-servidor</strong>
    <p>Los clientes solicitan servicios y los servidores los proveen de forma centralizada.</p>
    <em>Ventaja: control y seguridad centralizados. Desventaja: el servidor es un punto crítico. Ejemplo: web y correo.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🤝</span>
    <strong>Peer-to-peer (P2P)</strong>
    <p>Todos los equipos son iguales y comparten recursos entre sí, sin servidor central.</p>
    <em>Ventaja: económica y simple. Desventaja: difícil de controlar y proteger. Ejemplo: BitTorrent.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🔀</span>
    <strong>Híbrida</strong>
    <p>Combina un servidor central para coordinar con intercambio directo entre usuarios.</p>
    <em>Ventaja: equilibrio entre control y eficiencia. Ejemplo: algunas plataformas de videollamadas.</em>
  </div>
</div>

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

:::info Puertos más comunes
**21** FTP · **22** SSH · **25** SMTP · **53** DNS · **80** HTTP · **443** HTTPS · **3389** RDP
:::

---

## Conceptos clave

### Subnetting

Consiste en **dividir una red grande en subredes más pequeñas** para ordenar el tráfico, mejorar la seguridad y aprovechar mejor las direcciones.

| Subred | Rango de hosts | Broadcast |
|---|---|---|
| 192.168.1.0/26 | .1 a .62 | .63 |
| 192.168.1.64/26 | .65 a .126 | .127 |
| 192.168.1.128/26 | .129 a .190 | .191 |
| 192.168.1.192/26 | .193 a .254 | .255 |

El ejemplo divide la red 192.168.1.0/24 en **4 subredes /26**, cada una con **62 hosts utilizables**.

### VLAN

Una **VLAN** (Virtual LAN) divide lógicamente una red física en varias redes independientes dentro de un mismo switch. Por ejemplo: VLAN 10 para Administración, VLAN 20 para Ventas y VLAN 30 para Invitados.

- Reduce el tráfico de broadcast.
- Mejora la seguridad al aislar grupos.
- Se identifica mediante etiquetas **802.1Q** en los enlaces troncales.

### NAT

**NAT** (Network Address Translation) traduce direcciones IP privadas a una o más IP públicas, lo que permite que una red completa salga a internet con pocas direcciones públicas.

| Tipo | Descripción |
|---|---|
| **Estático** | Una IP privada se asocia a una IP pública fija. |
| **Dinámico** | Se asigna una IP pública de un conjunto disponible. |
| **PAT (sobrecarga)** | Muchas IP privadas comparten una sola IP pública, diferenciadas por puerto. Es el más usado. |

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