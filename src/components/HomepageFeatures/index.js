import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link'; // Importamos el componente para enlaces internos
import styles from './styles.module.css';

// Agregamos la propiedad 'link' a cada objeto apuntando al 'id' de tus archivos .md
const FeatureList = [
  {
    title: 'Comunicaciones',
    image: require('@site/static/img/comunicacion.jpeg').default,
    link: '/docs/Comunicaciones', 
    description: (
      <>
        La base de la infraestructura tecnológica. Abarca el proceso de transmisión de datos, 
        tecnologías cableadas, inalámbricas, móviles, satelitales y conceptos como ancho de banda.
      </>
    ),
  },
  {
    title: 'Redes',
    image: require('@site/static/img/redes.jpeg').default,
    link: '/docs/Redes',
    description: (
      <>
        Interconexión mediante modelos OSI y TCP/IP. Incluye topologías, arquitecturas, 
        direccionamiento IPv4/IPv6, subnetting, VLANs y protocolos de enrutamiento.
      </>
    ),
  },
  {
    title: 'Software',
    image: require('@site/static/img/software.jpeg').default,
    link: '/docs/Software',
    description: (
      <>
        Sistemas operativos de red y servidores. Abarca servicios de infraestructura (DHCP, DNS), 
        herramientas de monitoreo (Zabbix, Wireshark) y seguridad perimetral e interna.
      </>
    ),
  },
  {
    title: 'Hardware',
    image: require('@site/static/img/hardware.jpeg').default,
    link: '/docs/Hardware',
    description: (
      <>
        Dispositivos físicos y de interconexión: routers, switches, access points y firewalls. 
        Incluye medios de transmisión (cobre y fibra óptica) y dispositivos finales.
      </>
    ),
  },
];

function Feature({image, title, description, link}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        {/* Agregamos la clase hover-scale al enlace de la imagen */}
        <Link to={link} className="hover-scale">
          <img src={image} className={styles.featureSvg} alt={title} style={{ borderRadius: '10px', objectFit: 'cover' }} /> 
        </Link>
      </div>
      <div className="text--center padding-horiz--md" style={{ marginTop: '1rem' }}>
        <Heading as="h3">
          {/* Agregamos la clase hover-scale al enlace del título */}
          <Link to={link} className="hover-scale" style={{ color: 'inherit', textDecoration: 'none' }}>
            {title}
          </Link>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}