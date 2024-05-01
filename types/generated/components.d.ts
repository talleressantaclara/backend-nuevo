import type { Schema, Attribute } from '@strapi/strapi';

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

export interface DisenioComoTrabajamos extends Schema.Component {
  collectionName: 'components_disenio_como_trabajamos';
  info: {
    displayName: 'ComoTrabajamos';
    icon: 'shield';
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
    caracteristicas: Attribute.Relation<
      'disenio.como-trabajamos',
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
    href: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    icono: Attribute.Media & Attribute.Required;
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
      'disenio.blog': DisenioBlog;
      'disenio.caracteristicas': DisenioCaracteristicas;
      'disenio.como-trabajamos': DisenioComoTrabajamos;
      'disenio.contacto': DisenioContacto;
      'disenio.mapa': DisenioMapa;
      'disenio.nosotros': DisenioNosotros;
      'disenio.servicios': DisenioServicios;
      'utilidades.cta': UtilidadesCta;
      'utilidades.link': UtilidadesLink;
      'utilidades.navegacion': UtilidadesNavegacion;
    }
  }
}
