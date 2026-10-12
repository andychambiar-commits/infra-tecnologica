---
sidebar_position: 3
title: Software
description: Sistemas operativos de red y servidores, servicios de infraestructura, monitoreo, seguridad, protocolos, IPv4, IPv6 y virtualización.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Software

## Introducción

El **software de infraestructura** reúne los programas y las reglas lógicas que controlan el funcionamiento de los dispositivos y hacen posible la comunicación. Sin él, el hardware no sabría qué hacer con los datos.

<div className="flow">
  <span>🖥️ Sistemas operativos</span>
  <span className="arrow">➜</span>
  <span>⚙️ Servicios</span>
  <span className="arrow">➜</span>
  <span>📜 Protocolos</span>
  <span className="arrow">➜</span>
  <span>🛡️ Seguridad y monitoreo</span>
</div>

---

## Sistemas operativos de red y servidores

<Tabs>
  <TabItem value="so-servidores" label="🗄️ Servidores" default>

| Sistema | Licencia | Características | Uso típico |
|---|---|---|---|
| **Windows Server** | Comercial | Integra Active Directory, DNS, DHCP, IIS y Hyper-V. Administración gráfica. | Redes corporativas con entorno Microsoft |
| **Ubuntu Server** | Libre | Versiones LTS con 5 años de soporte. Muy usado en la nube. | Servidores web, contenedores, nube |
| **Red Hat Enterprise Linux (RHEL)** | Por suscripción | Estabilidad y soporte empresarial. Base de AlmaLinux y Rocky Linux. | Empresas y datacenters críticos |
| **Debian** | Libre | Muy estable y mantenido por la comunidad. Base de Ubuntu. | Servidores de larga duración |

  </TabItem>
  <TabItem value="so-red" label="🔀 Equipos de red">

| Sistema | Fabricante | Características | Equipos donde se usa |
|---|---|---|---|
| **Cisco IOS** | Cisco | Interfaz de línea de comandos (CLI). Existen variantes IOS XE, IOS XR y NX-OS. | Routers y switches Cisco |
| **Junos OS** | Juniper | Basado en FreeBSD. Separa la configuración candidata de la activa. | Routers, switches y firewalls Juniper |
| **FortiOS** | Fortinet | Integra firewall, VPN, IPS y filtrado web. | Firewalls FortiGate |
| **RouterOS** | MikroTik | Basado en Linux. Se administra por WinBox, web o CLI. | Routers y switches MikroTik |

  </TabItem>
</Tabs>

<details>
  <summary>⌨️ Ver comandos de ejemplo en cada sistema de red</summary>

| Sistema | Comando de ejemplo | Qué hace |
|---|---|---|
| **Cisco IOS** | `show ip interface brief` | Lista las interfaces y sus direcciones IP |
| **Junos OS** | `show interfaces terse` | Lista las interfaces y su estado |
| **FortiOS** | `get system status` | Muestra la versión y el estado del equipo |
| **RouterOS** | `/ip address print` | Lista las direcciones IP configuradas |

</details>

---

## Servicios de infraestructura de red

Son programas que corren en servidores o equipos de red y ofrecen funciones esenciales a los demás dispositivos.

| Servicio | Función | Puerto habitual |
|---|---|---|
| **DHCP** | Asigna direcciones IP automáticamente. | UDP 67 y 68 |
| **DNS** | Traduce nombres de dominio a direcciones IP. | 53 |
| **HTTP / HTTPS** | Entrega páginas web, sin cifrar o cifradas. | 80 / 443 |
| **FTP / SFTP** | Transfiere archivos. SFTP lo hace de forma segura sobre SSH. | 21 / 22 |
| **SMTP / IMAP / POP3** | Envía y recibe correo electrónico. | 25 / 143 / 110 |
| **Active Directory / LDAP** | Directorio centralizado de usuarios, equipos y permisos. | 389 (LDAP) |
| **Proxy** | Intermediario que filtra y guarda en caché el tráfico web. | 3128 u 8080 |
| **NTP** | Sincroniza la hora de todos los equipos. | UDP 123 |
| **VPN** | Crea túneles cifrados sobre redes públicas. | Según la tecnología |
| **SSH / Telnet** | Acceso remoto por consola. SSH cifra; Telnet no. | 22 / 23 |

<details>
  <summary>🔄 Ver cómo funciona DHCP (proceso DORA)</summary>

{/* 🖼️ IMAGEN → static/img/software/dhcp-dora.png
    QUÉ DEBE SER: Diagrama de secuencia entre un cliente y un servidor DHCP con cuatro flechas numeradas: Discover (broadcast), Offer, Request y Acknowledge.
    MEDIDAS SUGERIDAS: 1000 x 500 px */}
<figure className="img-figure">
  <img src="/img/software/dhcp-dora.png" alt="Proceso DORA de DHCP: Discover, Offer, Request y Acknowledge" />
  <figcaption>Figura 1. Intercambio de mensajes DHCP.</figcaption>
</figure>

| Paso | Mensaje | Descripción |
|---|---|---|
| **1** | **D**iscover | El cliente busca un servidor DHCP enviando un broadcast. |
| **2** | **O**ffer | El servidor ofrece una IP y parámetros de red. |
| **3** | **R**equest | El cliente solicita la dirección ofrecida. |
| **4** | **A**cknowledge | El servidor confirma y asigna la dirección por un tiempo (lease). |

El servidor entrega la dirección IP, la máscara, el gateway y los servidores DNS.

</details>

<details>
  <summary>🔎 Ver cómo funciona DNS y sus registros</summary>

{/* 🖼️ IMAGEN → static/img/software/dns-resolucion.png
    QUÉ DEBE SER: Diagrama que muestre el recorrido de una consulta DNS: navegador, resolver recursivo, servidor raíz, servidor TLD (.com) y servidor autoritativo, con la respuesta final de vuelta al navegador.
    MEDIDAS SUGERIDAS: 1200 x 500 px */}
<figure className="img-figure">
  <img src="/img/software/dns-resolucion.png" alt="Recorrido de una consulta DNS desde el navegador hasta el servidor autoritativo" />
  <figcaption>Figura 2. Resolución de un nombre de dominio.</figcaption>
</figure>

La consulta viaja desde el equipo hasta el **resolver**, que pregunta al servidor **raíz**, luego al servidor del dominio de nivel superior (como .com) y finalmente al servidor **autoritativo**, que conoce la IP.

| Registro | Función |
|---|---|
| **A** | Asocia un nombre con una dirección IPv4. |
| **AAAA** | Asocia un nombre con una dirección IPv6. |
| **CNAME** | Crea un alias de otro nombre. |
| **MX** | Indica el servidor de correo del dominio. |
| **NS** | Indica los servidores de nombres del dominio. |
| **PTR** | Resolución inversa: de IP a nombre. |
| **TXT** | Texto libre, usado en verificaciones de dominio. |

</details>

---

## Software de monitoreo

Permite **vigilar el estado y el rendimiento** de la red, detectar fallas a tiempo y analizar el tráfico.

**Pasa el cursor sobre cada captura:**

<div className="hover-gallery">
  {/* 🖼️ IMAGEN → static/img/software/zabbix-dashboard.png
      QUÉ DEBE SER: Captura de pantalla de un dashboard de Zabbix con gráficos de CPU, memoria o tráfico de red.
      MEDIDAS SUGERIDAS: 600 x 400 px (las tres capturas con la misma proporción) */}
  <div className="hover-card">
    <img src="/img/software/zabbix-dashboard.png" alt="Dashboard de Zabbix" />
    <div className="hover-card__info"><strong>Zabbix</strong><span>Monitoreo de código abierto con agentes y SNMP, y alertas.</span></div>
  </div>
  {/* 🖼️ IMAGEN → static/img/software/wireshark-captura.png
      QUÉ DEBE SER: Captura de pantalla de Wireshark con una lista de paquetes capturados y el panel de detalle de un paquete.
      MEDIDAS SUGERIDAS: 600 x 400 px */}
  <div className="hover-card">
    <img src="/img/software/wireshark-captura.png" alt="Captura de paquetes en Wireshark" />
    <div className="hover-card__info"><strong>Wireshark</strong><span>Analizador de paquetes que muestra el tráfico en detalle.</span></div>
  </div>
  {/* 🖼️ IMAGEN → static/img/software/grafana-dashboard.png
      QUÉ DEBE SER: Captura de pantalla de un dashboard de Grafana con varios paneles de métricas.
      MEDIDAS SUGERIDAS: 600 x 400 px */}
  <div className="hover-card">
    <img src="/img/software/grafana-dashboard.png" alt="Dashboard de Grafana" />
    <div className="hover-card__info"><strong>Grafana</strong><span>Visualización de métricas con paneles personalizables.</span></div>
  </div>
</div>

<details>
  <summary>📋 Ver comparación de herramientas de monitoreo</summary>

| Herramienta | Licencia | Qué hace | Ideal para |
|---|---|---|---|
| **Zabbix** | Libre | Monitorea servidores y equipos con agentes y SNMP, con alertas y gráficos. | Empresas de cualquier tamaño |
| **Nagios** | Libre (Core) y comercial (XI) | Vigila hosts y servicios mediante plugins. | Monitoreo de disponibilidad |
| **PRTG** | Comercial | Usa sensores y tiene instalación sencilla. Versión gratuita de hasta 100 sensores. | Pymes y equipos sin experiencia previa |
| **Wireshark** | Libre | Captura y analiza paquetes en tiempo real. | Diagnóstico y análisis de protocolos |
| **SolarWinds** | Comercial | Suite para monitorear rendimiento de red, flujos y configuraciones. | Redes empresariales grandes |
| **Grafana** | Libre y comercial | Muestra métricas de otras fuentes en paneles visuales. | Visualización de datos de monitoreo |

:::tip SNMP
Muchas de estas herramientas usan **SNMP** (puerto UDP 161) para consultar el estado de routers, switches y servidores.
:::

</details>

---

## Software de seguridad

Protege la red y los datos frente a accesos no autorizados y amenazas.

| Categoría | Función | Ejemplos |
|---|---|---|
| **Firewalls** | Filtran el tráfico según reglas. | iptables, nftables, pfSense, OPNsense, Windows Defender Firewall |
| **IDS / IPS** | Detectan intrusos y, en el caso del IPS, los bloquean. | Snort, Suricata |
| **Antivirus / EDR** | Protegen los equipos finales y detectan comportamientos sospechosos. | Microsoft Defender, CrowdStrike Falcon |
| **SIEM** | Centralizan y correlacionan registros (logs) de seguridad. | Wazuh, Splunk, Microsoft Sentinel |
| **VPN** | Cifran la comunicación entre sitios o usuarios remotos. | OpenVPN, WireGuard, IPsec |
| **Autenticación** | Verifican quién accede a la red. | RADIUS, 802.1X, TACACS+ |

<details>
  <summary>🕵️ Ver diferencia entre IDS e IPS</summary>

{/* 🖼️ IMAGEN → static/img/software/ids-ips-ubicacion.png
    QUÉ DEBE SER: Dos diagramas de red lado a lado. El IDS recibe una copia del tráfico (conexión lateral) y solo envía alertas; el IPS está en línea, en medio del camino del tráfico, y puede bloquearlo.
    MEDIDAS SUGERIDAS: 1200 x 450 px */}
<figure className="img-figure">
  <img src="/img/software/ids-ips-ubicacion.png" alt="Ubicación de un IDS y un IPS en la red" />
  <figcaption>Figura 3. El IDS observa; el IPS está en línea y bloquea.</figcaption>
</figure>

| Aspecto | IDS | IPS |
|---|---|---|
| **Ubicación** | Recibe una copia del tráfico (pasivo) | En línea con el tráfico |
| **Acción** | Detecta y genera alertas | Detecta y bloquea |
| **Riesgo** | No detiene el ataque por sí solo | Puede bloquear tráfico legítimo (falso positivo) |

</details>

<details>
  <summary>🔐 Ver autenticación: RADIUS, TACACS+ y 802.1X</summary>

| Tecnología | Función | Puerto |
|---|---|---|
| **RADIUS** | Servidor AAA (autenticación, autorización y registro) para Wi-Fi, VPN y acceso a la red. | UDP 1812 y 1813 |
| **TACACS+** | Controla qué comandos puede ejecutar cada administrador en los equipos de red. | TCP 49 |
| **802.1X** | Permite o bloquea el acceso a un puerto o a una red Wi-Fi hasta que el usuario se autentique. | Usa EAP con un servidor RADIUS |

</details>

---

## Protocolos de red

Son las **reglas** que definen cómo se envían, reciben e interpretan los datos.

| Protocolo | Capa TCP/IP | Función | Puerto o número |
|---|---|---|---|
| **HTTP / HTTPS** | Aplicación | Web | 80 / 443 |
| **DNS** | Aplicación | Resolución de nombres | 53 |
| **DHCP** | Aplicación | Asignación automática de IP | 67 y 68 |
| **SMTP** | Aplicación | Envío de correo | 25 |
| **SSH** | Aplicación | Acceso remoto seguro | 22 |
| **SNMP** | Aplicación | Gestión y monitoreo de dispositivos | 161 |
| **TCP** | Transporte | Entrega confiable y ordenada | Protocolo 6 |
| **UDP** | Transporte | Entrega rápida sin confirmación | Protocolo 17 |
| **IP** | Internet | Direccionamiento y enrutamiento | IPv4 e IPv6 |
| **ICMP** | Internet | Mensajes de control y diagnóstico (ping) | Protocolo 1 |
| **ARP** | Internet | Asocia una IP con una dirección MAC | Sin puerto |
| **OSPF / BGP** | Internet | Intercambio de rutas entre routers | Protocolo 89 / TCP 179 |
| **Ethernet** | Acceso a red | Comunicación en redes cableadas | IEEE 802.3 |
| **Wi-Fi** | Acceso a red | Comunicación inalámbrica | IEEE 802.11 |

<details>
  <summary>⚖️ Ver TCP vs. UDP y el saludo de tres vías</summary>

| Característica | TCP | UDP |
|---|---|---|
| **Conexión** | Orientado a conexión | Sin conexión |
| **Confiabilidad** | Confirma y reenvía datos perdidos | No confirma |
| **Velocidad** | Más lento | Más rápido |
| **Uso típico** | Web, correo, archivos | Streaming, VoIP, juegos, DNS |

{/* 🖼️ IMAGEN → static/img/software/tcp-handshake.png
    QUÉ DEBE SER: Diagrama de secuencia entre cliente y servidor con tres flechas: SYN, SYN-ACK y ACK, mostrando el establecimiento de la conexión TCP.
    MEDIDAS SUGERIDAS: 800 x 500 px */}
<figure className="img-figure">
  <img src="/img/software/tcp-handshake.png" alt="Saludo de tres vías de TCP: SYN, SYN-ACK y ACK" />
  <figcaption>Figura 4. Establecimiento de una conexión TCP.</figcaption>
</figure>

</details>

---

## IPv4

Es la versión 4 del Protocolo de Internet. Usa direcciones de **32 bits**, escritas en cuatro números decimales separados por puntos. Permite cerca de 4,300 millones de direcciones.

| Parte | Ejemplo |
|---|---|
| **Dirección** | 192.168.1.10 |
| **En binario** | 11000000.10101000.00000001.00001010 |
| **Máscara** | 255.255.255.0 (/24) |

<details>
  <summary>🔤 Ver clases de direcciones IPv4</summary>

| Clase | Rango del primer octeto | Máscara por defecto | Uso |
|---|---|---|---|
| **A** | 1 a 126 | 255.0.0.0 (/8) | Redes muy grandes |
| **B** | 128 a 191 | 255.255.0.0 (/16) | Redes medianas |
| **C** | 192 a 223 | 255.255.255.0 (/24) | Redes pequeñas |
| **D** | 224 a 239 | No aplica | Multicast |
| **E** | 240 a 255 | No aplica | Experimental |

La red 127.0.0.0/8 está reservada para **loopback** (el propio equipo).

</details>

<details>
  <summary>🏠 Ver direcciones públicas y privadas</summary>

Las direcciones **privadas** se usan dentro de redes locales y no se enrutan en internet. Para salir a internet necesitan NAT.

| Rango privado | Notación CIDR | Clase |
|---|---|---|
| 10.0.0.0 a 10.255.255.255 | 10.0.0.0/8 | A |
| 172.16.0.0 a 172.31.255.255 | 172.16.0.0/12 | B |
| 192.168.0.0 a 192.168.255.255 | 192.168.0.0/16 | C |

Las direcciones **públicas** son únicas en internet y las asignan los proveedores (ISP). Si un equipo no encuentra servidor DHCP, puede autoasignarse una dirección 169.254.x.x (APIPA).

</details>

<details>
  <summary>✂️ Ver máscaras y notación CIDR</summary>

**CIDR** (Classless Inter-Domain Routing) indica cuántos bits pertenecen a la red mediante una barra, y permite dividir redes sin depender de las clases.

| CIDR | Máscara | Hosts utilizables |
|---|---|---|
| **/8** | 255.0.0.0 | 16,777,214 |
| **/16** | 255.255.0.0 | 65,534 |
| **/24** | 255.255.255.0 | 254 |
| **/25** | 255.255.255.128 | 126 |
| **/26** | 255.255.255.192 | 62 |
| **/27** | 255.255.255.224 | 30 |
| **/28** | 255.255.255.240 | 14 |
| **/30** | 255.255.255.252 | 2 |

</details>

---

## IPv6

Es la evolución de IPv4, creada porque las direcciones IPv4 se agotaron. Usa direcciones de **128 bits**, escritas en ocho grupos de cuatro dígitos hexadecimales separados por dos puntos.

| Forma | Ejemplo |
|---|---|
| **Completa** | 2001:0db8:85a3:0000:0000:8a2e:0370:7334 |
| **Abreviada** | 2001:db8:85a3::8a2e:370:7334 |

:::info Reglas de abreviación
Se pueden omitir los ceros a la izquierda de cada grupo, y una sola secuencia de grupos de ceros se reemplaza por **::** (solo una vez por dirección).
:::

<details>
  <summary>📬 Ver tipos de direcciones IPv6</summary>

| Tipo | Prefijo | Descripción |
|---|---|---|
| **Unicast global** | 2000::/3 | Dirección pública, enrutable en internet. |
| **Link-local** | fe80::/10 | Válida solo en el enlace local. Todos los equipos IPv6 tienen una. |
| **Unique local** | fc00::/7 | Equivalente a las direcciones privadas de IPv4. |
| **Multicast** | ff00::/8 | Envía a un grupo de equipos. Reemplaza al broadcast. |
| **Anycast** | Del rango unicast | Se entrega al destino más cercano de un grupo. |

</details>

<details>
  <summary>⚖️ Ver comparación IPv4 vs. IPv6</summary>

| Característica | IPv4 | IPv6 |
|---|---|---|
| **Tamaño** | 32 bits | 128 bits |
| **Notación** | Decimal con puntos | Hexadecimal con dos puntos |
| **Direcciones** | Cerca de 4,300 millones | Un número prácticamente ilimitado |
| **Broadcast** | Sí | No, usa multicast |
| **NAT** | Muy usado | No es necesario |
| **Configuración** | Manual o DHCP | Autoconfiguración (SLAAC) o DHCPv6 |
| **Cabecera** | De 20 a 60 bytes, variable | 40 bytes, fija |

Durante la transición ambos protocolos conviven mediante **doble pila (dual stack)**, túneles o traducción (NAT64).

</details>

---

## Virtualización y nube

La **virtualización** permite ejecutar varios sistemas o aplicaciones aislados sobre un mismo hardware físico.

<Tabs>
  <TabItem value="v-hipervisores" label="🖥️ Máquinas virtuales" default>

Un **hipervisor** crea y administra máquinas virtuales (VM), cada una con su propio sistema operativo.

| Software | Tipo | Características |
|---|---|---|
| **VMware ESXi / vSphere** | Tipo 1 (directo sobre el hardware) | Estándar en datacenters empresariales. |
| **Microsoft Hyper-V** | Tipo 1 | Incluido en Windows Server y en algunas ediciones de Windows. |
| **KVM** | Tipo 1 | Integrado en el kernel de Linux. Base de muchas nubes. |
| **VirtualBox** | Tipo 2 (sobre un sistema operativo) | Gratuito. Ideal para pruebas y aprendizaje. |

  </TabItem>
  <TabItem value="v-contenedores" label="📦 Contenedores">

Los **contenedores** empaquetan una aplicación con sus dependencias y **comparten el kernel** del sistema operativo anfitrión, por lo que son más ligeros que una VM.

| Software | Función |
|---|---|
| **Docker** | Crea y ejecuta contenedores a partir de imágenes. |
| **Kubernetes** | Orquesta y escala muchos contenedores de forma automática. |

  </TabItem>
</Tabs>

<details>
  <summary>🧱 Ver diferencia entre máquina virtual y contenedor</summary>

{/* 🖼️ IMAGEN → static/img/software/vm-vs-contenedores.png
    QUÉ DEBE SER: Dos pilas de capas lado a lado. Izquierda (VM): hardware, hipervisor y varias VM, cada una con su sistema operativo invitado. Derecha (contenedores): hardware, sistema operativo, motor de contenedores y varios contenedores.
    MEDIDAS SUGERIDAS: 1200 x 500 px */}
<figure className="img-figure">
  <img src="/img/software/vm-vs-contenedores.png" alt="Comparación de capas entre máquinas virtuales y contenedores" />
  <figcaption>Figura 5. Máquinas virtuales frente a contenedores.</figcaption>
</figure>

| Aspecto | Máquina virtual | Contenedor |
|---|---|---|
| **Sistema operativo** | Uno completo por VM | Comparte el del anfitrión |
| **Tamaño** | Gigabytes | Megabytes |
| **Arranque** | Minutos | Segundos |
| **Aislamiento** | Muy alto | Alto, pero menor que una VM |

</details>

### Modelos de servicio en la nube

| Modelo | Qué ofrece | Ejemplos |
|---|---|---|
| **IaaS** (Infraestructura como servicio) | Servidores virtuales, almacenamiento y redes. | AWS EC2, Azure Virtual Machines |
| **PaaS** (Plataforma como servicio) | Entorno listo para desplegar aplicaciones sin administrar servidores. | Google App Engine, Azure App Service |
| **SaaS** (Software como servicio) | Aplicación completa lista para usar desde el navegador. | Gmail, Microsoft 365, Zoom |

<details>
  <summary>📊 Ver quién administra qué en cada modelo</summary>

{/* 🖼️ IMAGEN → static/img/software/iaas-paas-saas.png
    QUÉ DEBE SER: Gráfico de columnas comparando On-premise, IaaS, PaaS y SaaS. Cada columna muestra las capas (red, almacenamiento, servidores, virtualización, sistema operativo, aplicaciones, datos) coloreadas según las administre el cliente o el proveedor.
    MEDIDAS SUGERIDAS: 1200 x 550 px */}
<figure className="img-figure">
  <img src="/img/software/iaas-paas-saas.png" alt="Responsabilidades del cliente y del proveedor en IaaS, PaaS y SaaS" />
  <figcaption>Figura 6. Responsabilidad compartida en la nube.</figcaption>
</figure>

| Modelo | Lo administra el cliente | Lo administra el proveedor |
|---|---|---|
| **IaaS** | Sistema operativo, aplicaciones y datos | Hardware, red y virtualización |
| **PaaS** | Aplicaciones y datos | Todo lo demás, incluido el sistema operativo |
| **SaaS** | Solo el uso y sus datos | Toda la plataforma y la aplicación |

</details>

---

## Resumen rápido

:::note Ideas clave
- Los **sistemas operativos** de servidores (Windows Server, Linux) y de red (IOS, Junos, FortiOS, RouterOS) controlan los equipos.
- Los **servicios** como DHCP, DNS, HTTP y VPN dan funciones esenciales a la red.
- El **monitoreo** (Zabbix, Nagios, PRTG, Wireshark) y la **seguridad** (firewalls, IDS/IPS, SIEM, RADIUS) mantienen la red estable y protegida.
- Los **protocolos** definen las reglas de comunicación; **TCP** es confiable y **UDP** es rápido.
- **IPv4** usa 32 bits y **IPv6** usa 128 bits, con un espacio de direcciones prácticamente ilimitado.
- La **virtualización** y la **nube** (IaaS, PaaS, SaaS) permiten aprovechar mejor el hardware y escalar servicios.
:::