---
sidebar_position: 3
title: Software
description: Sistemas operativos de red, servicios de infraestructura, herramientas de monitoreo, seguridad y virtualización.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Software

## Sistemas Operativos y Servidores

El software base es fundamental para administrar el hardware de la infraestructura.

<div className="card-grid">
  <div className="info-card">
    <span className="info-card__icon">🐧</span>
    <strong>Sistemas de Red y Servidores</strong>
    <p>Windows Server y distribuciones Linux enfocadas a servidores como Ubuntu Server, Red Hat y Debian.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">⚙️</span>
    <strong>Sistemas de Dispositivos</strong>
    <p>Sistemas operativos integrados en equipos como Cisco IOS, JunOS, FortiOS y RouterOS.</p>
  </div>
</div>

---

## Servicios de Infraestructura de Red

Son los servicios esenciales que mantienen la red operativa y a los usuarios conectados.

| Servicio | Función | Protocolo / Puertos típicos |
|---|---|---|
| **DHCP** | Asignación automática de direcciones IP a los equipos. | UDP 67/68 |
| **DNS** | Resolución de nombres de dominio (ej. google.com) a IP. | UDP/TCP 53 |
| **HTTP / HTTPS** | Transferencia de páginas web (HTTPS añade cifrado). | TCP 80/443 |
| **FTP / SFTP** | Transferencia de archivos (SFTP es la versión segura). | TCP 21 / 22 |
| **Correo** | SMTP (envío), IMAP/POP3 (recepción). | TCP 25/587, 143, 110 |
| **Directorio** | Active Directory / LDAP para gestión centralizada de usuarios. | TCP/UDP 389 |
| **Proxy** | Intermediario para peticiones web y filtrado de contenido. | TCP 8080/3128 |
| **NTP** | Sincronización precisa de hora en todos los dispositivos. | UDP 123 |
| **VPN** | Acceso remoto seguro cifrado hacia la red local. | Varios (IPsec, SSL) |
| **SSH / Telnet** | Acceso a terminal remota para administración (SSH es cifrado). | TCP 22 / 23 |

---

## Protocolos de Red por Capa

<Tabs>
  <TabItem value="capa7" label="Capa de Aplicación" default>
  Interactúan directamente con el usuario y el software: **HTTP/HTTPS** (web), **FTP** (archivos), **SMTP/IMAP** (correo), **DNS** (nombres).
  </TabItem>
  <TabItem value="capa4" label="Capa de Transporte">
  Controlan el flujo de datos: **TCP** (orientado a conexión, confiable para descargas) y **UDP** (sin conexión, rápido para streaming o voz).
  </TabItem>
  <TabItem value="capa3" label="Capa de Red">
  Enrutamiento lógico de los paquetes: **IPv4 e IPv6** (direcciones lógicas), **ICMP** (diagnóstico, usado por el comando ping), **IPsec** (seguridad).
  </TabItem>
  <TabItem value="capa2" label="Capa de Enlace">
  Control del acceso al medio físico: **ARP** (traduce IP a MAC), **Ethernet**, **Wi-Fi (802.11)**.
  </TabItem>
</Tabs>

---

## Direccionamiento Lógico (IPv4 vs IPv6)

| Característica | IPv4 | IPv6 |
|---|---|---|
| **Formato** | 32 bits (ej. `192.168.1.1`) | 128 bits (ej. `2001:0db8::ff00:0042:8329`) |
| **Tipos de dirección** | Públicas y Privadas. Se agrupan en clases (A, B, C) o CIDR. | Unicast, Multicast, Anycast. |
| **Segmentación** | Usa máscara de subred (ej. `255.255.255.0`). | Usa prefijos de longitud (ej. `/64`). |
| **Ventajas IPv6** | Ampliamente compatible e implementado. | Espacio de direcciones casi infinito, IPSec nativo, elimina la necesidad de NAT. |

---

## Herramientas de Gestión y Seguridad

### Software de Monitoreo
Herramientas críticas para vigilar el estado de la red, el consumo de ancho de banda y generar alertas.

<div className="flow">
  <span>👁️ Zabbix</span>
  <span>📊 Nagios</span>
  <span>📈 PRTG</span>
  <span>🦈 Wireshark</span>
  <span>☀️ SolarWinds</span>
  <span>🖥️ Grafana</span>
</div>

### Software de Seguridad
Protegen la infraestructura frente a amenazas cibernéticas internas y externas.

<div className="card-grid card-grid--3">
  <div className="info-card">
    <span className="info-card__icon">🔥</span>
    <strong>Firewalls</strong>
    <p>Filtran el tráfico en los límites perimetrales y entre segmentos internos.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🛡️</span>
    <strong>IDS / IPS</strong>
    <p>Sistemas como Snort y Suricata para detectar o bloquear intrusiones.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🦠</span>
    <strong>Antivirus / EDR</strong>
    <p>Protección avanzada en los dispositivos finales o endpoints.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🧠</span>
    <strong>SIEM</strong>
    <p>Correlación y análisis de logs y eventos de seguridad en tiempo real.</p>
  </div>
  <div className="info-card">
    <span className="info-card__icon">🔐</span>
    <strong>Autenticación</strong>
    <p>Protocolos como RADIUS y 802.1X para un control estricto de acceso a la red.</p>
  </div>
</div>

---

## Virtualización y Nube

La infraestructura moderna ha evolucionado más allá del hardware puramente físico.

### Plataformas de Virtualización
Permiten ejecutar múltiples sistemas y servicios aislados dentro de un único servidor de hardware, optimizando recursos.
*   **Hipervisores clásicos:** VMware y Hyper-V.
*   **Contenedores:** Docker (virtualización a nivel de sistema operativo, altamente escalable y ligera).

### Modelos de Nube (Cloud)

<Tabs>
  <TabItem value="iaas" label="IaaS" default>
  **Infraestructura como Servicio.** El proveedor te alquila el hardware virtual (servidores, almacenamiento, redes). Tú administras el sistema operativo y el software.
  </TabItem>
  <TabItem value="paas" label="PaaS">
  **Plataforma como Servicio.** El proveedor te entrega un entorno listo para programar y desplegar aplicaciones, gestionando todo el sistema operativo por detrás.
  </TabItem>
  <TabItem value="saas" label="SaaS">
  **Software como Servicio.** Consumes una aplicación final alojada completamente en la nube bajo un modelo de suscripción o licencia.
  </TabItem>
</Tabs>