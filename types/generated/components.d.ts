import type { Schema, Attribute } from '@strapi/strapi';

export interface ContenidosCortoComplejo extends Schema.Component {
  collectionName: 'components_contenidos_corto_complejos';
  info: {
    displayName: 'CortoComplejo';
    icon: 'server';
  };
  attributes: {
    imagenes: Attribute.Media & Attribute.Required;
    bloqueDeTexto: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    categoria: Attribute.Relation<
      'contenidos.corto-complejo',
      'oneToOne',
      'api::categoria.categoria'
    >;
  };
}

export interface ContenidosCortoSencillo extends Schema.Component {
  collectionName: 'components_contenidos_corto_sencillos';
  info: {
    displayName: 'cortoSencillo';
    icon: 'calendar';
    description: '';
  };
  attributes: {
    imagen: Attribute.Media & Attribute.Required;
    bloqueDeTexto: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    categoria: Attribute.Relation<
      'contenidos.corto-sencillo',
      'oneToOne',
      'api::categoria.categoria'
    >;
  };
}

export interface ContenidosLargaSencilla extends Schema.Component {
  collectionName: 'components_contenidos_larga_sencillas';
  info: {
    displayName: 'LargoSencillo';
    icon: 'filter';
    description: '';
  };
  attributes: {
    primeraImagen: Attribute.Media & Attribute.Required;
    primerBloque: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    categoria: Attribute.Relation<
      'contenidos.larga-sencilla',
      'oneToOne',
      'api::categoria.categoria'
    >;
    segundaImagen: Attribute.Media & Attribute.Required;
    segundoBloque: Attribute.RichText &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
  };
}

export interface ContenidosLargoComplejo extends Schema.Component {
  collectionName: 'components_contenidos_largo_complejos';
  info: {
    displayName: 'LargoComplejo';
    icon: 'layer';
  };
  attributes: {
    primerasImagenes: Attribute.Media & Attribute.Required;
    primerBloque: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    segundasImagenes: Attribute.Media & Attribute.Required;
    segundoBloque: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 100;
      }>;
    categoria: Attribute.Relation<
      'contenidos.largo-complejo',
      'oneToOne',
      'api::categoria.categoria'
    >;
  };
}

export interface DisenioBlog extends Schema.Component {
  collectionName: 'components_disenio_blogs';
  info: {
    displayName: 'Blog';
    icon: 'filter';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    publicaciones: Attribute.Relation<
      'disenio.blog',
      'oneToMany',
      'api::publicacion.publicacion'
    >;
  };
}

export interface DisenioCaracteristicas extends Schema.Component {
  collectionName: 'components_disenio_caracteristicas';
  info: {
    displayName: 'Caracteristicas';
    icon: 'bulletList';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    caracteristicas: Attribute.Relation<
      'disenio.caracteristicas',
      'oneToMany',
      'api::caracteristica.caracteristica'
    >;
  };
}

export interface DisenioContacto extends Schema.Component {
  collectionName: 'components_disenio_contactos';
  info: {
    displayName: 'Contacto';
    icon: 'user';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    fondo: Attribute.Media & Attribute.Required;
  };
}

export interface DisenioHowSection extends Schema.Component {
  collectionName: 'components_disenio_how_sections';
  info: {
    displayName: 'howSection';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    how_items: Attribute.Relation<
      'disenio.how-section',
      'oneToMany',
      'api::how-item.how-item'
    >;
  };
}

export interface DisenioMapa extends Schema.Component {
  collectionName: 'components_disenio_mapas';
  info: {
    displayName: 'Mapa';
    icon: 'pinMap';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
  };
}

export interface DisenioNosotros extends Schema.Component {
  collectionName: 'components_disenio_nosotros';
  info: {
    displayName: 'Nosotros';
    icon: 'bulletList';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    contenido: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    cta: Attribute.Component<'utilidades.cta'> & Attribute.Required;
    fondo: Attribute.Media & Attribute.Required;
  };
}

export interface DisenioServicios extends Schema.Component {
  collectionName: 'components_disenio_servicios';
  info: {
    displayName: 'Servicios';
    icon: 'bulletList';
  };
  attributes: {
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    services: Attribute.Relation<
      'disenio.servicios',
      'oneToMany',
      'api::service.service'
    >;
  };
}

export interface UtilidadesCta extends Schema.Component {
  collectionName: 'components_utilidades_ctas';
  info: {
    displayName: 'Cta';
    icon: 'link';
    description: '';
  };
  attributes: {
    texto: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }> &
      Attribute.DefaultTo<'Ver m\u00E1s'>;
    spriteName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

export interface UtilidadesLink extends Schema.Component {
  collectionName: 'components_utilidades_links';
  info: {
    displayName: 'Link';
    icon: 'hashtag';
    description: '';
  };
  attributes: {
    texto: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    href: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
  };
}

export interface UtilidadesNavegacion extends Schema.Component {
  collectionName: 'components_utilidades_navegacions';
  info: {
    displayName: 'Navegacion';
    icon: 'layer';
  };
  attributes: {
    link: Attribute.Component<'utilidades.link', true> & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contenidos.corto-complejo': ContenidosCortoComplejo;
      'contenidos.corto-sencillo': ContenidosCortoSencillo;
      'contenidos.larga-sencilla': ContenidosLargaSencilla;
      'contenidos.largo-complejo': ContenidosLargoComplejo;
      'disenio.blog': DisenioBlog;
      'disenio.caracteristicas': DisenioCaracteristicas;
      'disenio.contacto': DisenioContacto;
      'disenio.how-section': DisenioHowSection;
      'disenio.mapa': DisenioMapa;
      'disenio.nosotros': DisenioNosotros;
      'disenio.servicios': DisenioServicios;
      'utilidades.cta': UtilidadesCta;
      'utilidades.link': UtilidadesLink;
      'utilidades.navegacion': UtilidadesNavegacion;
    }
  }
}
