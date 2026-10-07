---
sidebar_position: 4
title: Hardware
description: Dispositivos finales, dispositivos de interconexión (routers, switches, access points, firewalls), medios de transmisión y otros elementos físicos de una red.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Hardware

## Introducción

El **hardware de red** es el conjunto de elementos tangibles que forman la infraestructura: los equipos que generan o consumen datos, los dispositivos que los interconectan y los medios por donde viaja la información.

<div className="flow">
  <span>💻 Dispositivos finales</span>
  <span className="arrow">➜</span>
  <span>🔀 Dispositivos de interconexión</span>
  <span className="arrow">➜</span>
  <span>🔌 Medios de transmisión</span>
</div>

:::info Cómo leer este documento
Los dispositivos de interconexión están organizados en tres niveles: **dispositivo ➜ marca ➜ modelo**, con las características principales de cada uno.
:::

---

## Dispositivos finales

Son los equipos donde **se origina o termina** la comunicación. Se conectan a la red mediante una tarjeta de red (NIC) cableada o inalámbrica.

<div className="card-grid">
  <div className="info-card">
    <span className="info-card__icon">🖥️</span>
    <strong>Computadora de escritorio</strong>
    <p>Equipo fijo para trabajo de oficina, diseño o desarrollo.</p>
    <em>Conexión típica: Ethernet.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">💻</span>
    <strong>Laptop</strong>
    <p>Equipo portátil con Wi-Fi, Bluetooth y puerto Ethernet.</p>
    <em>Conexión típica: Wi-Fi.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🗄️</span>
    <strong>Servidor</strong>
    <p>Equipo de alto rendimiento que ofrece servicios a otros dispositivos.</p>
    <em>Conexión típica: Ethernet 1/10/25 Gbps.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📱</span>
    <strong>Smartphone y tablet</strong>
    <p>Dispositivos móviles con Wi-Fi y redes celulares 4G/5G.</p>
    <em>Conexión típica: Wi-Fi y datos móviles.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🖨️</span>
    <strong>Impresora de red</strong>
    <p>Impresora compartida mediante una dirección IP.</p>
    <em>Conexión típica: Ethernet o Wi-Fi.</em>
  </div>
  <div className="info-card">
    <span className="info-card__icon">📹</span>
    <strong>Cámara IP</strong>
    <p>Cámara que transmite video por la red, a menudo alimentada por PoE.</p>
    <em>Conexión típica: Ethernet con PoE.</em>
  </div>
</div>

### Tipos de servidores

| Tipo | Descripción | Ventaja | Uso típico |
|---|---|---|---|
| **Torre** | Gabinete similar a un PC de escritorio. | Económico y fácil de instalar. | Pymes, oficinas pequeñas |
| **Rack** | Montado en un rack estándar de 19 pulgadas (1U, 2U, 4U). | Alta densidad y orden. | Salas de servidores, datacenters |
| **Blade** | Módulos delgados que comparten chasis, energía y refrigeración. | Máxima densidad y administración centralizada. | Datacenters grandes, virtualización |

---

## Dispositivos de interconexión

Conectan los dispositivos finales entre sí y con otras redes. Cada uno trabaja principalmente en una capa del modelo OSI.

| Dispositivo | Función principal | Capa OSI |
|---|---|---|
| **Switch** | Conecta equipos dentro de una LAN usando direcciones MAC. | 2 (y 3 en switches L3) |
| **Router** | Conecta redes distintas y enruta paquetes usando direcciones IP. | 3 |
| **Access Point (AP)** | Extiende la red cableada a dispositivos inalámbricos. | 1 y 2 |
| **Firewall** | Filtra el tráfico y aplica políticas de seguridad. | 3 a 7 |

### Routers

Interconectan redes y deciden la mejor ruta para cada paquete. Pueden incluir NAT, VPN y balanceo de múltiples enlaces WAN.

<Tabs>
  <TabItem value="r-cisco" label="Cisco" default>

| Modelo | Puertos | Rendimiento | Ideal para |
|---|---|---|---|
| **ISR 1100** | Hasta 8 GE LAN y 2 GE WAN (según variante) | Cientos de Mbps | Pymes y sucursales pequeñas |
| **ISR 4331** | 3 GE integrados, 2 ranuras NIM, 1 ranura SM | 100 a 300 Mbps (según licencia) | Sucursales medianas |
| **ISR 4451-X** | 4 GE integrados, 3 ranuras NIM, 2 ranuras SM | 1 a 2 Gbps | Sucursales grandes |
| **Catalyst 8200** | Puertos GE y ranuras modulares (según variante) | Varios Gbps, con SD-WAN | Sucursales con SD-WAN y nube |
| **ASR 1001-X** | 6 SFP GE integrados y opción de 10G | 2.5 a 20 Gbps (según licencia) | Borde de WAN y proveedores pequeños |

  </TabItem>
  <TabItem value="r-mikrotik" label="MikroTik">

| Modelo | Puertos | Rendimiento y hardware | Ideal para |
|---|---|---|---|
| **hEX S** | 5 GE y 1 SFP | CPU dual-core 880 MHz, 256 MB RAM | Hogar y pymes pequeñas |
| **RB4011** | 10 GE y 1 SFP+ 10G | CPU quad-core 1.4 GHz, 1 GB RAM | Pymes con alta demanda |
| **RB5009** | 7 GE, 1 puerto 2.5G y 1 SFP+ 10G | CPU quad-core 64 bits, 1 GB RAM | Pymes y ISPs pequeños |
| **CCR2004-16G-2S+** | 16 GE y 2 SFP+ 10G | CPU de 4 núcleos 64 bits, 4 GB RAM | ISPs y redes medianas |
| **hAP ax²** | 5 GE y Wi-Fi 6 dual-band | CPU quad-core 1.8 GHz, 1 GB RAM | Hogar y oficina con Wi-Fi |

  </TabItem>
  <TabItem value="r-juniper" label="Juniper">

| Modelo | Puertos | Rendimiento | Ideal para |
|---|---|---|---|
| **MX204** | 4 puertos de 100G y 8 de 10G | Hasta 400 Gbps | Borde de proveedores y datacenter |
| **MX304** | Tarjetas modulares de 100G/400G | Hasta 4.8 Tbps | Agregación y borde de alta capacidad |
| **MX480** | Chasis modular de 8 ranuras | Múltiples Tbps (según tarjetas) | Core y agregación de operadores |
| **MX10003** | Chasis modular de 3 ranuras | Rendimiento de Tbps | Borde y agregación de operadores |
| **ACX710** | Puertos 1G, 10G y 100G | Alta densidad y baja latencia | Backhaul móvil 5G y acceso |

  </TabItem>
  <TabItem value="r-huawei" label="Huawei">

| Modelo | Puertos | Rendimiento | Ideal para |
|---|---|---|---|
| **AR161** | Puertos GE/FE para WAN y LAN (según variante) | Rendimiento básico | Micro-sucursales y SOHO |
| **AR651** | Varios puertos GE, WAN GE y combo SFP | Rendimiento medio | Sucursales pequeñas y medianas |
| **AR6140** | Puertos GE y SFP+ 10G (según variante) con ranuras modulares | Alto rendimiento empresarial | Sedes grandes y SD-WAN |
| **NE20E-S2** | Chasis modular de operador | Cientos de Gbps | Agregación metropolitana |
| **NE40E** | Chasis modular de operador | Tbps | Core y backbone de ISP |

  </TabItem>
  <TabItem value="r-tplink" label="TP-Link">

| Modelo | Puertos | Funciones | Ideal para |
|---|---|---|---|
| **ER605** | 5 GE (1 WAN, 1 LAN y 3 configurables) | Multi-WAN, VPN, balanceo de carga | Pymes y oficinas pequeñas |
| **ER7206** | 6 GE, uno de ellos SFP | Multi-WAN, VPN, gestión con Omada | Pymes medianas |
| **ER8411** | Puertos GE y SFP+ 10G | VPN avanzada, alto número de sesiones | Pymes grandes |
| **Archer AX73** | 1 WAN y 4 LAN GE | Wi-Fi 6 AX5400 | Hogar |
| **Archer C6** | 1 WAN y 4 LAN GE | Wi-Fi 5 AC1200 | Hogar básico |

  </TabItem>
</Tabs>

### Switches

Conectan equipos dentro de una red local y reenvían tramas según la dirección MAC. Los switches **capa 3** además pueden enrutar entre VLANs.

<Tabs>
  <TabItem value="s-cisco" label="Cisco" default>

| Modelo | Puertos | PoE y capa | Ideal para |
|---|---|---|---|
| **Catalyst 9200L** | 24 o 48 GE y 4 uplinks | PoE+ en variantes P, capa 2/3 básica | Acceso en campus |
| **Catalyst 9300-48P** | 48 GE y uplinks modulares | PoE+, capa 3, apilable | Acceso empresarial |
| **Catalyst 9500-24Y4C** | 24 puertos de 1/10/25G y 4 de 40/100G | Capa 3 | Core y distribución |
| **CBS350-24T-4G** | 24 GE y 4 SFP GE | Gestionable, capa 2/3 ligera | Pymes |
| **Nexus 93180YC-FX** | 48 puertos de 1/10/25G y 6 de 40/100G | Capa 2/3 de datacenter | Datacenter (leaf) |

  </TabItem>
  <TabItem value="s-aruba" label="Aruba (HPE)">

| Modelo | Puertos | PoE y capa | Ideal para |
|---|---|---|---|
| **2930F** | 24 o 48 GE y 4 SFP+ 10G | PoE+ en variantes P, capa 3 básica | Acceso de campus |
| **6100** | 24 o 48 GE y 4 SFP+ | PoE en variantes P, capa 2 | Acceso y pymes |
| **6200F** | 24 o 48 GE y 4 SFP+ | PoE Clase 4, capa 3 básica | Acceso con PoE |
| **6300M** | 24 o 48 GE y 4 SFP56 de 50G | PoE Clase 4, capa 3, apilable (VSF) | Acceso y agregación |
| **CX 8325** | Hasta 32 puertos de 100G (según modelo) | Capa 3 de datacenter | Datacenter y core |

  </TabItem>
  <TabItem value="s-juniper" label="Juniper">

| Modelo | Puertos | PoE y capa | Ideal para |
|---|---|---|---|
| **EX2300** | 24 o 48 GE y 4 uplinks 10G | PoE+ en variantes P, capa 2/3 básica | Acceso en sucursales |
| **EX3400** | 24 o 48 GE, 4 SFP+ y 2 QSFP+ 40G | PoE+ en variantes P, capa 3 | Acceso empresarial |
| **EX4300** | 24 o 48 GE y uplinks de 10G/40G | PoE+ en variantes P, capa 3 | Campus y agregación |
| **EX4650** | 48 puertos de 25G y 8 de 100G | Capa 3 | Core y datacenter |
| **QFX5120** | 48 puertos de 25G y 8 de 100G (modelo 48Y) | Capa 3, soporte EVPN-VXLAN | Datacenter (leaf) |

  </TabItem>
  <TabItem value="s-ubiquiti" label="Ubiquiti">

| Modelo | Puertos | PoE | Ideal para |
|---|---|---|---|
| **USW-Lite-8-PoE** | 8 GE | 4 puertos PoE+, 52 W | Hogar y oficina pequeña |
| **USW-24-PoE** | 24 GE y 2 SFP | 16 puertos PoE+, 95 W | Pymes |
| **USW-Pro-48-PoE** | 48 GE y 4 SFP+ 10G | PoE+ y PoE++, 600 W | Oficinas y campus |
| **USW-Aggregation** | 8 SFP+ 10G | No aplica | Agregación 10G |
| **USW-Enterprise-24-PoE** | 12 puertos 2.5G, 12 GE y 2 SFP+ | PoE+ y PoE++, 400 W | Redes con Wi-Fi 6/7 |

  </TabItem>
  <TabItem value="s-tplink" label="TP-Link">

| Modelo | Puertos | Gestión | Ideal para |
|---|---|---|---|
| **TL-SG108** | 8 GE | No gestionable | Hogar |
| **TL-SG1016DE** | 16 GE | Easy Smart (VLAN, QoS básico) | Pymes pequeñas |
| **TL-SG3428** | 24 GE y 4 SFP | Gestionable L2+ | Pymes |
| **TL-SG3210XHP-M2** | 8 puertos 2.5G PoE+ y 2 SFP+ 10G | Gestionable, PoE+ (240 W) | Pymes con Wi-Fi 6 |
| **TL-SX3008F** | 8 SFP+ 10G | Gestionable L2+ | Agregación 10G |

  </TabItem>
</Tabs>

### Access Points (AP)

Permiten que los dispositivos inalámbricos se conecten a la red cableada. Suelen alimentarse por **PoE** desde el switch.

<Tabs>
  <TabItem value="a-ubiquiti" label="Ubiquiti" default>

| Modelo | Wi-Fi y bandas | Uplink | Ideal para |
|---|---|---|---|
| **U6-Lite** | Wi-Fi 6, dual-band, 2x2 | GE | Hogar y oficina pequeña |
| **U6-Pro** | Wi-Fi 6, dual-band, 4x4 en 5 GHz | GE | Oficinas y espacios medianos |
| **U6-Enterprise** | Wi-Fi 6E, tri-band | 2.5 GbE | Alta densidad |
| **U7 Pro** | Wi-Fi 7, tri-band | 2.5 GbE | Redes modernas de alto rendimiento |
| **UAP-AC-Pro** | Wi-Fi 5, dual-band, 3x3 | GE | Redes ya existentes |

  </TabItem>
  <TabItem value="a-meraki" label="Cisco Meraki">

| Modelo | Wi-Fi y bandas | Gestión | Ideal para |
|---|---|---|---|
| **MR36** | Wi-Fi 6, dual-band, 2x2 | Nube Meraki | Oficinas pequeñas y medianas |
| **MR44** | Wi-Fi 6, dual-band, 4x4 | Nube Meraki | Espacios medianos |
| **MR46** | Wi-Fi 6, dual-band, 4x4 | Nube Meraki | Entornos de alta densidad |
| **MR56** | Wi-Fi 6, dual-band, 8x8 en 5 GHz | Nube Meraki | Alta densidad (auditorios, aulas) |
| **MR57** | Wi-Fi 6E, tri-band | Nube Meraki | Redes de última generación |

  </TabItem>
  <TabItem value="a-aruba" label="Aruba">

| Modelo | Wi-Fi y bandas | Uso | Ideal para |
|---|---|---|---|
| **AP-505** | Wi-Fi 6, dual-band, 2x2 | Interior | Oficinas y retail |
| **AP-515** | Wi-Fi 6, dual-band, 4x4 | Interior | Densidad media |
| **AP-535** | Wi-Fi 6, dual-band, 4x4 | Interior | Densidad alta |
| **AP-635** | Wi-Fi 6E, tri-band, 2x2 | Interior | Redes con banda de 6 GHz |
| **AP-655** | Wi-Fi 6E, tri-band, 4x4 | Interior | Alta densidad con 6 GHz |

  </TabItem>
  <TabItem value="a-omada" label="TP-Link Omada">

| Modelo | Wi-Fi y velocidad | Alimentación | Ideal para |
|---|---|---|---|
| **EAP225** | Wi-Fi 5, AC1350 | PoE | Oficinas pequeñas |
| **EAP610** | Wi-Fi 6, AX1800 | PoE | Oficinas y comercios |
| **EAP650** | Wi-Fi 6, AX3000 | PoE | Espacios medianos |
| **EAP670** | Wi-Fi 6, AX5400, puerto 2.5G | PoE+ | Alta demanda |
| **EAP773** | Wi-Fi 7, BE11000, tri-band | PoE++ | Redes modernas |

  </TabItem>
  <TabItem value="a-ruckus" label="Ruckus">

| Modelo | Wi-Fi y bandas | Antenas | Ideal para |
|---|---|---|---|
| **R350** | Wi-Fi 6, dual-band, 2x2 | BeamFlex | Oficinas pequeñas |
| **R550** | Wi-Fi 6, dual-band, 2x2 | BeamFlex+ | Oficinas y educación |
| **R650** | Wi-Fi 6, dual-band, 4x4 en 5 GHz | BeamFlex+ | Densidad media y alta |
| **R750** | Wi-Fi 6, dual-band, 4x4, puerto 2.5G | BeamFlex+ | Alta densidad |
| **R770** | Wi-Fi 7, tri-band | BeamFlex+ | Entornos exigentes |

  </TabItem>
</Tabs>

### Firewalls

Controlan el tráfico entrante y saliente según reglas de seguridad. Los de **próxima generación (NGFW)** incluyen IPS, filtrado web, control de aplicaciones y VPN.

<Tabs>
  <TabItem value="f-fortinet" label="Fortinet" default>

| Modelo | Interfaces | Firewall throughput | Ideal para |
|---|---|---|---|
| **FortiGate 40F** | 5 GE | Aprox. 5 Gbps | Sucursales y pymes pequeñas |
| **FortiGate 60F** | 10 GE | Aprox. 10 Gbps | Pymes |
| **FortiGate 100F** | 22 GE y puertos SFP | Aprox. 20 Gbps | Pymes grandes |
| **FortiGate 200F** | GE, SFP y SFP+ | Aprox. 27 Gbps | Empresas medianas |
| **FortiGate 600F** | GE, SFP+ y 25G | Más de 100 Gbps | Empresas grandes y campus |

  </TabItem>
  <TabItem value="f-paloalto" label="Palo Alto Networks">

| Modelo | Serie | Rendimiento | Ideal para |
|---|---|---|---|
| **PA-440** | PA-400 | Sucursal pequeña | Sucursales y pymes |
| **PA-450** | PA-400 | Sucursal | Sucursales con más tráfico |
| **PA-1410** | PA-1400 | Campus pequeño | Empresas medianas |
| **PA-3410** | PA-3400 | Alto rendimiento | Empresas grandes |
| **PA-5410** | PA-5400 | Muy alto rendimiento | Datacenter y grandes corporaciones |

  </TabItem>
  <TabItem value="f-cisco" label="Cisco">

| Modelo | Formato | Rendimiento | Ideal para |
|---|---|---|---|
| **Secure Firewall 1010** | Escritorio, puertos GE | Básico | Sucursales y teletrabajo |
| **Secure Firewall 1120** | Escritorio o rack, GE y SFP | Medio-bajo | Sucursales medianas |
| **Secure Firewall 3110** | Rack 1U | Medio-alto | Campus y borde de internet |
| **Secure Firewall 4215** | Rack 1U modular | Alto | Empresas grandes |
| **Secure Firewall 9300** | Chasis modular | Muy alto | Datacenter y operadores |

  </TabItem>
  <TabItem value="f-sonicwall" label="SonicWall">

| Modelo | Serie | Rendimiento | Ideal para |
|---|---|---|---|
| **TZ270** | TZ | Básico | Pymes pequeñas |
| **TZ370** | TZ | Medio-bajo | Pymes |
| **NSa 2700** | NSa | Medio | Empresas medianas |
| **NSa 3700** | NSa | Medio-alto | Empresas grandes |
| **NSsp 10700** | NSsp | Muy alto | Datacenter y grandes redes |

  </TabItem>
  <TabItem value="f-sophos" label="Sophos">

| Modelo | Serie | Rendimiento | Ideal para |
|---|---|---|---|
| **XGS 87** | XGS escritorio | Básico | Sucursales pequeñas |
| **XGS 107** | XGS escritorio | Medio-bajo | Pymes |
| **XGS 116** | XGS escritorio | Medio | Pymes con más usuarios |
| **XGS 2100** | XGS 1U | Alto | Empresas medianas |
| **XGS 3100** | XGS 1U | Alto | Empresas grandes |

  </TabItem>
</Tabs>

:::warning Verifica las especificaciones
Los modelos son reales, pero los fabricantes actualizan sus productos con frecuencia. Antes de usar cifras exactas (throughput, puertos, PoE) confírmalas en la ficha técnica oficial de cada marca.
:::

---

## Medios de transmisión

Son los canales físicos o inalámbricos por donde viajan las señales.

<Tabs>
  <TabItem value="cobre" label="🔌 Cobre" default>

**Par trenzado (UTP/STP):** dos hilos de cobre trenzados para reducir interferencias. Es el medio más usado en redes LAN. Su conector estándar es el **RJ45** y la distancia máxima por segmento es de **100 m**.

| Categoría | Velocidad | Frecuencia | Uso |
|---|---|---|---|
| **Cat5e** | 1 Gbps | 100 MHz | Redes básicas |
| **Cat6** | 1 Gbps (10 Gbps hasta 55 m) | 250 MHz | Oficinas y hogares |
| **Cat6A** | 10 Gbps a 100 m | 500 MHz | Empresas y datacenters |
| **Cat7** | 10 Gbps | 600 MHz | Entornos con mucha interferencia (blindado) |
| **Cat8** | 25/40 Gbps hasta 30 m | 2000 MHz | Conexiones dentro del datacenter |

**Cable coaxial:** núcleo de cobre con malla de blindaje. Se usa en TV por cable, internet por cable y CCTV analógico. Conectores típicos: F y BNC.

  </TabItem>
  <TabItem value="fibra" label="💡 Fibra óptica">

Transmite datos como **pulsos de luz** por un hilo de vidrio. No se ve afectada por interferencias electromagnéticas y alcanza grandes distancias.

| Característica | Monomodo (OS2) | Multimodo (OM3 / OM4) |
|---|---|---|
| **Núcleo** | 9 µm | 50 µm |
| **Fuente de luz** | Láser | LED o VCSEL |
| **Distancia** | Decenas de kilómetros | OM3: hasta 300 m a 10G. OM4: hasta 400 m a 10G |
| **Costo** | Cable económico, equipos más caros | Cable más caro, equipos más económicos |
| **Color de cubierta** | Amarillo | Aqua (OM3 y OM4) |
| **Uso** | Enlaces entre edificios y ciudades | Dentro de edificios y datacenters |

  </TabItem>
  <TabItem value="inalambricos" label="📡 Inalámbricos">

| Medio | Descripción | Alcance | Uso |
|---|---|---|---|
| **Ondas de radio** | Se propagan en todas direcciones y atraviesan obstáculos. | Metros a kilómetros | Wi-Fi, Bluetooth, telefonía móvil |
| **Microondas** | Enlaces punto a punto que requieren línea de vista. | Decenas de kilómetros | Enlaces entre torres |
| **Satélite** | Retransmisión mediante satélites en órbita. | Global | Zonas remotas, TV, navegación |

  </TabItem>
</Tabs>

### Conectores más comunes

<div className="card-grid card-grid--3">
  <div className="info-card">
    <span className="info-card__icon">🔌</span>
    <strong>RJ45</strong>
    <p>Conector de 8 pines para cable de par trenzado en redes Ethernet.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🟦</span>
    <strong>LC</strong>
    <p>Conector pequeño de fibra con cierre a presión. Muy usado en transceivers SFP.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">⬜</span>
    <strong>SC</strong>
    <p>Conector de fibra cuadrado tipo push-pull. Común en redes FTTH y de telecomunicaciones.</p>
  </div>
</div>

### Marcas de cableado

| Marca | Especialidad | Línea de ejemplo |
|---|---|---|
| **Panduit** | Cableado estructurado, patch panels, racks | TX6A |
| **CommScope** | Cableado de cobre y fibra para empresas y operadores | SYSTIMAX |
| **Belden** | Cables de cobre y fibra para empresas e industria | 10GXS |
| **Corning** | Fibra óptica y soluciones de conectividad óptica | ClearCurve |
| **Furukawa** | Cableado de cobre y fibra, fuerte presencia en Latinoamérica | GigaLan |

---

## Otros elementos de la infraestructura

<div className="card-grid">
  <div className="info-card">
    <span className="info-card__icon">🧰</span>
    <strong>Patch panel</strong>
    <p>Panel donde terminan los cables del cableado estructurado. Se conecta al switch con patch cords cortos.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🗃️</span>
    <strong>Rack</strong>
    <p>Gabinete estándar de 19 pulgadas que aloja switches, servidores y patch panels. Su altura se mide en unidades (U).</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🔋</span>
    <strong>UPS</strong>
    <p>Sistema de alimentación ininterrumpida. Mantiene los equipos encendidos durante un corte eléctrico y protege contra picos.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🧩</span>
    <strong>NIC</strong>
    <p>Tarjeta de interfaz de red. Conecta un equipo a la red, por cable o por Wi-Fi, e incluye una dirección MAC única.</p>
  </div>
</div>

### Transceivers

Módulos intercambiables que se insertan en puertos de switches y routers para conectar fibra o cobre de alta velocidad.

| Formato | Velocidad | Uso típico |
|---|---|---|
| **SFP** | 1 Gbps | Enlaces de fibra en redes de acceso |
| **SFP+** | 10 Gbps | Uplinks y servidores |
| **SFP28** | 25 Gbps | Servidores y datacenters |
| **QSFP+** | 40 Gbps | Agregación en datacenters |
| **QSFP28** | 100 Gbps | Core y datacenters |

### Power over Ethernet (PoE)

Permite alimentar dispositivos (APs, cámaras IP, teléfonos) por el mismo cable de red.

| Estándar | Nombre común | Potencia por puerto | Ejemplo de uso |
|---|---|---|---|
| **IEEE 802.3af** | PoE | Hasta 15.4 W | Teléfonos IP, APs básicos |
| **IEEE 802.3at** | PoE+ | Hasta 30 W | Cámaras, APs Wi-Fi 6 |
| **IEEE 802.3bt** | PoE++ | Hasta 60 W o 90 W | Cámaras PTZ, APs Wi-Fi 7 |

---

## Resumen rápido

:::note Ideas clave
- Los **dispositivos finales** generan o reciben datos; los de **interconexión** los conectan entre sí.
- El **switch** trabaja en la capa 2, el **router** en la capa 3, el **AP** conecta equipos inalámbricos y el **firewall** protege la red.
- El **cobre** es el medio más usado en LAN, la **fibra** destaca en distancia y velocidad, y los medios **inalámbricos** aportan movilidad.
- Elementos como **racks, UPS, patch panels, transceivers y PoE** completan la infraestructura física.
:::