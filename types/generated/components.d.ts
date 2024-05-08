import type { Schema, Attribute } from '@strapi/strapi';

export interface BlogAutor extends Schema.Component {
  collectionName: 'components_blog_autors';
  info: {
    displayName: 'autor';
    icon: 'user';
    description: '';
  };
  attributes: {
    admin_user: Attribute.Relation<'blog.autor', 'oneToOne', 'admin::user'>;
    imagen: Attribute.Media & Attribute.Required;
  };
}

export interface BlogBloqueTexto extends Schema.Component {
  collectionName: 'components_blog_bloque_textos';
  info: {
    displayName: 'bloqueTexto';
    icon: 'write';
  };
  attributes: {
    textoEnriquecido: Attribute.Blocks & Attribute.Required;
  };
}

export interface BlogImagenCompleja extends Schema.Component {
  collectionName: 'components_blog_imagen_complejas';
  info: {
    displayName: 'imagenCompleja';
    icon: 'landscape';
  };
  attributes: {
    imagenes: Attribute.Media & Attribute.Required;
  };
}

export interface BlogImagenSimple extends Schema.Component {
  collectionName: 'components_blog_imagen_simples';
  info: {
    displayName: 'imagenSimple';
    icon: 'picture';
  };
  attributes: {
    imagen: Attribute.Media & Attribute.Required;
  };
}

export interface BlogSubTitulo extends Schema.Component {
  collectionName: 'components_blog_sub_titulos';
  info: {
    displayName: 'subTitulo';
    icon: 'write';
  };
  attributes: {
    texto: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 15;
        maxLength: 100;
      }>;
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
      'blog.autor': BlogAutor;
      'blog.bloque-texto': BlogBloqueTexto;
      'blog.imagen-compleja': BlogImagenCompleja;
      'blog.imagen-simple': BlogImagenSimple;
      'blog.sub-titulo': BlogSubTitulo;
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
