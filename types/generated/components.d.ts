import type { Attribute, Schema } from '@strapi/strapi';

export interface ContenidosAutor extends Schema.Component {
  collectionName: 'components_contenidos_autors';
  info: {
    displayName: 'Autor';
    icon: 'user';
  };
  attributes: {
    imagen: Attribute.Media<'images'> & Attribute.Required;
    nombre: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 40;
        minLength: 3;
      }>;
  };
}

export interface ContenidosCortoSencillo extends Schema.Component {
  collectionName: 'components_contenidos_corto_sencillos';
  info: {
    description: '';
    displayName: 'cortoSencillo';
    icon: 'calendar';
  };
  attributes: {
    autor: Attribute.Component<'contenidos.autor'> & Attribute.Required;
    bloqueDeTexto: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 3500;
        minLength: 300;
      }>;
    imagen: Attribute.Media<'images'> & Attribute.Required;
    palabras_clave: Attribute.Relation<
      'contenidos.corto-sencillo',
      'oneToMany',
      'api::palabra-clave.palabra-clave'
    >;
    tipoPublicacion: Attribute.Enumeration<['cortoSencillo', 'largoSencillo']>;
  };
}

export interface ContenidosLargaSencilla extends Schema.Component {
  collectionName: 'components_contenidos_larga_sencillas';
  info: {
    description: '';
    displayName: 'LargoSencillo';
    icon: 'filter';
  };
  attributes: {
    autor: Attribute.Component<'contenidos.autor'> & Attribute.Required;
    palabras_clave: Attribute.Relation<
      'contenidos.larga-sencilla',
      'oneToMany',
      'api::palabra-clave.palabra-clave'
    >;
    primeraImagen: Attribute.Media<'images'> & Attribute.Required;
    primerBloque: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 3500;
        minLength: 250;
      }>;
    segundaImagen: Attribute.Media<'images'> & Attribute.Required;
    segundoBloque: Attribute.RichText &
      Attribute.SetMinMaxLength<{
        maxLength: 3500;
        minLength: 250;
      }>;
    tipoPublicacion: Attribute.Enumeration<['cortoSencillo', 'largoSencillo']>;
  };
}

export interface DisenioBlog extends Schema.Component {
  collectionName: 'components_disenio_blogs';
  info: {
    displayName: 'Blog';
    icon: 'filter';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    publicaciones: Attribute.Relation<
      'disenio.blog',
      'oneToMany',
      'api::publicacion.publicacion'
    >;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface DisenioCaracteristicas extends Schema.Component {
  collectionName: 'components_disenio_caracteristicas';
  info: {
    displayName: 'Caracteristicas';
    icon: 'bulletList';
  };
  attributes: {
    caracteristicas: Attribute.Relation<
      'disenio.caracteristicas',
      'oneToMany',
      'api::caracteristica.caracteristica'
    >;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface DisenioContacto extends Schema.Component {
  collectionName: 'components_disenio_contactos';
  info: {
    displayName: 'Contacto';
    icon: 'user';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    fondo: Attribute.Media<'images'> & Attribute.Required;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface DisenioHowSection extends Schema.Component {
  collectionName: 'components_disenio_how_sections';
  info: {
    description: '';
    displayName: 'howSection';
    icon: 'bulletList';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    how_items: Attribute.Relation<
      'disenio.how-section',
      'oneToMany',
      'api::how-item.how-item'
    >;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface DisenioMapa extends Schema.Component {
  collectionName: 'components_disenio_mapas';
  info: {
    displayName: 'Mapa';
    icon: 'pinMap';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
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
    contenido: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 500;
      }>;
    cta: Attribute.Component<'utilidades.cta'> & Attribute.Required;
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 80;
      }>;
    fondo: Attribute.Media<'images'> & Attribute.Required;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface DisenioPopupServicio extends Schema.Component {
  collectionName: 'components_disenio_popup_servicios';
  info: {
    displayName: 'popupServicio';
    icon: 'landscape';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
        minLength: 40;
      }>;
    imagen: Attribute.Media<'images'> & Attribute.Required;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 120;
        minLength: 20;
      }>;
  };
}

export interface DisenioServicios extends Schema.Component {
  collectionName: 'components_disenio_servicios';
  info: {
    displayName: 'Servicios';
    icon: 'bulletList';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 100;
      }>;
    services: Attribute.Relation<
      'disenio.servicios',
      'oneToMany',
      'api::service.service'
    >;
    titulo: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 50;
      }>;
  };
}

export interface UtilidadesCta extends Schema.Component {
  collectionName: 'components_utilidades_ctas';
  info: {
    description: '';
    displayName: 'Cta';
    icon: 'link';
  };
  attributes: {
    spriteName: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
    texto: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }> &
      Attribute.DefaultTo<'Ver m\u00E1s'>;
  };
}

export interface UtilidadesLink extends Schema.Component {
  collectionName: 'components_utilidades_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'hashtag';
  };
  attributes: {
    descripcion: Attribute.Text &
      Attribute.SetMinMaxLength<{
        maxLength: 75;
        minLength: 10;
      }>;
    href: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 250;
      }>;
    texto: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 30;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'contenidos.autor': ContenidosAutor;
      'contenidos.corto-sencillo': ContenidosCortoSencillo;
      'contenidos.larga-sencilla': ContenidosLargaSencilla;
      'disenio.blog': DisenioBlog;
      'disenio.caracteristicas': DisenioCaracteristicas;
      'disenio.contacto': DisenioContacto;
      'disenio.how-section': DisenioHowSection;
      'disenio.mapa': DisenioMapa;
      'disenio.nosotros': DisenioNosotros;
      'disenio.popup-servicio': DisenioPopupServicio;
      'disenio.servicios': DisenioServicios;
      'utilidades.cta': UtilidadesCta;
      'utilidades.link': UtilidadesLink;
    }
  }
}
