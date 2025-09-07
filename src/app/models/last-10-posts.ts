export type ResponseLast10Posts = ResponsePostObject[]

export interface ResponsePostObject {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: Title
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
  categories: number[]
  tags: number[]
  class_list: string[]
  yoast_head: string
  yoast_head_json: YoastHeadJson
  _links: Links
  _embedded: Embedded
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  _yoast_wpseo_title: string
  _yoast_wpseo_metadesc: string
  "_yoast_wpseo_opengraph-title": string
  "_yoast_wpseo_opengraph-description": string
  _yoast_wpseo_facebook_title: string
  _yoast_wpseo_facebook_description: string
  _yoast_wpseo_facebook_image: string
  _yoast_wpseo_twitter_title: string
  _yoast_wpseo_twitter_description: string
  _yoast_wpseo_twitter_image: string
  footnotes: string
}

export interface YoastHeadJson {
  title: string
  description?: string
  robots: Robots
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_description: string
  og_url: string
  og_site_name: string
  article_publisher: string
  article_published_time: string
  article_modified_time: string
  og_image: OgImage[]
  author: string
  twitter_card: string
  twitter_creator: string
  twitter_site: string
  twitter_misc: TwitterMisc
  schema: Schema
}

export interface Robots {
  index: string
  follow: string
  "max-snippet": string
  "max-image-preview": string
  "max-video-preview": string
}

export interface OgImage {
  width: number
  height: number
  url: string
  type: string
}

export interface TwitterMisc {
  "Escrito por": string
  "Est. tempo de leitura": string
}

export interface Schema {
  "@context": string
  "@graph": Graph[]
}

export interface Graph {
  "@type": string
  "@id": string
  url?: string
  name?: string
  isPartOf?: IsPartOf
  primaryImageOfPage?: PrimaryImageOfPage
  image?: Image
  thumbnailUrl?: string
  datePublished?: string
  dateModified?: string
  author?: Author
  description?: string
  breadcrumb?: Breadcrumb
  inLanguage?: string
  potentialAction?: PotentialAction[]
  contentUrl?: string
  width?: number
  height?: number
  itemListElement?: ItemListElement[]
}

export interface IsPartOf {
  "@id": string
}

export interface PrimaryImageOfPage {
  "@id": string
}

export interface Image {
  "@type"?: string
  inLanguage?: string
  "@id": string
  url?: string
  contentUrl?: string
  caption?: string
}

export interface Author {
  "@id": string
}

export interface Breadcrumb {
  "@id": string
}

export interface PotentialAction {
  "@type": string
  target: any
  "query-input"?: string
}

export interface ItemListElement {
  "@type": string
  position: number
  name: string
  item?: string
}

export interface Links {
  self: Self[]
  collection: Collection[]
  about: About[]
  author: Author2[]
  replies: Reply[]
  "version-history": VersionHistory[]
  "predecessor-version": PredecessorVersion[]
  "wp:featuredmedia": Featuredmedum[]
  "wp:attachment": WpAttachment[]
  "wp:term": WpTerm[]
  curies: Cury[]
}

export interface Self {
  href: string
  targetHints: TargetHints
}

export interface TargetHints {
  allow: string[]
}

export interface Collection {
  href: string
}

export interface About {
  href: string
}

export interface Author2 {
  embeddable: boolean
  href: string
}

export interface Reply {
  embeddable: boolean
  href: string
}

export interface VersionHistory {
  count: number
  href: string
}

export interface PredecessorVersion {
  id: number
  href: string
}

export interface Featuredmedum {
  embeddable: boolean
  href: string
}

export interface WpAttachment {
  href: string
}

export interface WpTerm {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury {
  name: string
  href: string
  templated: boolean
}

export interface Embedded {
  author: Author3[]
  "wp:featuredmedia": Featuredmedum2[]
  "wp:term": WpTerm3[][]
}

export interface Author3 {
  id: number
  name: string
  url: string
  description: string
  link: string
  slug: string
  avatar_urls: AvatarUrls
  yoast_head: string
  yoast_head_json: YoastHeadJson2
  _links: Links2
}

export interface AvatarUrls {
  "24": string
  "48": string
  "96": string
}

export interface YoastHeadJson2 {
  title: string
  description: string
  robots: Robots2
  canonical: string
  og_locale: string
  og_type: string
  og_title: string
  og_description: string
  og_url: string
  og_site_name: string
  og_image: OgImage2[]
  twitter_card: string
  twitter_site: string
  schema: Schema2
}

export interface Robots2 {
  index: string
  follow: string
  "max-snippet": string
  "max-image-preview": string
  "max-video-preview": string
}

export interface OgImage2 {
  url: string
}

export interface Schema2 {
  "@context": string
  "@graph": Graph2[]
}

export interface Graph2 {
  "@type": string
  "@id": string
  url?: string
  name?: string
  isPartOf?: IsPartOf2
  description?: string
  breadcrumb?: Breadcrumb2
  inLanguage?: string
  potentialAction?: PotentialAction2[]
  itemListElement?: ItemListElement2[]
  image?: Image2
  mainEntityOfPage?: MainEntityOfPage
}

export interface IsPartOf2 {
  "@id": string
}

export interface Breadcrumb2 {
  "@id": string
}

export interface PotentialAction2 {
  "@type": string
  target: any
  "query-input"?: string
}

export interface ItemListElement2 {
  "@type": string
  position: number
  name: string
  item?: string
}

export interface Image2 {
  "@type": string
  inLanguage: string
  "@id": string
  url: string
  contentUrl: string
  caption: string
}

export interface MainEntityOfPage {
  "@id": string
}

export interface Links2 {
  self: Self2[]
  collection: Collection2[]
}

export interface Self2 {
  href: string
  targetHints: TargetHints2
}

export interface TargetHints2 {
  allow: string[]
}

export interface Collection2 {
  href: string
}

export interface Featuredmedum2 {
  id: number
  date: string
  slug: string
  type: string
  link: string
  title: Title2
  author: number
  featured_media: number
  yoast_head: string
  yoast_head_json: YoastHeadJson3
  web_stories_media_source: string
  web_stories_is_muted: any
  featured_media_src: any[]
  caption: Caption
  alt_text: string
  media_type: string
  mime_type: string
  media_details: MediaDetails
  source_url: string
  _links: Links3
}

export interface Title2 {
  rendered: string
}

export interface YoastHeadJson3 {
  title: string
  robots: Robots3
  og_locale: string
  og_type: string
  og_title: string
  og_url: string
  og_site_name: string
  article_publisher: string
  article_modified_time?: string
  og_image: OgImage3[]
  twitter_card: string
  twitter_site: string
  schema: Schema3
}

export interface Robots3 {
  index: string
  follow: string
}

export interface OgImage3 {
  width: number
  height: number
  url: string
  type: string
}

export interface Schema3 {
  "@context": string
  "@graph": Graph3[]
}

export interface Graph3 {
  "@type": string
  "@id": string
  url?: string
  name?: string
  isPartOf?: IsPartOf3
  datePublished?: string
  dateModified?: string
  breadcrumb?: Breadcrumb3
  inLanguage?: string
  potentialAction?: PotentialAction3[]
  itemListElement?: ItemListElement3[]
  description?: string
}

export interface IsPartOf3 {
  "@id": string
}

export interface Breadcrumb3 {
  "@id": string
}

export interface PotentialAction3 {
  "@type": string
  target: any
  "query-input"?: string
}

export interface ItemListElement3 {
  "@type": string
  position: number
  name: string
  item?: string
}

export interface Caption {
  rendered: string
}

export interface MediaDetails {
  width: number
  height: number
  file: string
  filesize: number
  sizes: Sizes
  image_meta: ImageMeta
}

export interface Sizes {
  medium: Medium
  large: Large
  thumbnail: Thumbnail
  medium_large: MediumLarge
  "1536x1536"?: N1536x1536
  "web-stories-poster-portrait": WebStoriesPosterPortrait
  "web-stories-publisher-logo": WebStoriesPublisherLogo
  "web-stories-thumbnail": WebStoriesThumbnail
  full: Full
}

export interface Medium {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface Large {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface Thumbnail {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface MediumLarge {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface N1536x1536 {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface WebStoriesPosterPortrait {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface WebStoriesPublisherLogo {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface WebStoriesThumbnail {
  file: string
  width: number
  height: number
  filesize: number
  mime_type: string
  source_url: string
}

export interface Full {
  file: string
  width: number
  height: number
  mime_type: string
  source_url: string
}

export interface ImageMeta {
  aperture: string
  credit: string
  camera: string
  caption: string
  created_timestamp: string
  copyright: string
  focal_length: string
  iso: string
  shutter_speed: string
  title: string
  orientation: string
  keywords: any[]
}

export interface Links3 {
  self: Self3[]
  collection: Collection3[]
  about: About2[]
  author: Author4[]
  replies: Reply2[]
  "wp:term": WpTerm2[]
  curies: Cury2[]
}

export interface Self3 {
  href: string
  targetHints: TargetHints3
}

export interface TargetHints3 {
  allow: string[]
}

export interface Collection3 {
  href: string
}

export interface About2 {
  href: string
}

export interface Author4 {
  embeddable: boolean
  href: string
}

export interface Reply2 {
  embeddable: boolean
  href: string
}

export interface WpTerm2 {
  taxonomy: string
  embeddable: boolean
  href: string
}

export interface Cury2 {
  name: string
  href: string
  templated: boolean
}

export interface WpTerm3 {
  id: number
  link: string
  name: string
  slug: string
  taxonomy: string
  yoast_head: string
  yoast_head_json: YoastHeadJson4
  _links: Links4
}

export interface YoastHeadJson4 {
  title: string
  description?: string
  robots: Robots4
  canonical?: string
  og_locale: string
  og_type: string
  og_title: string
  og_description?: string
  og_url: string
  og_site_name: string
  og_image: OgImage4[]
  twitter_card: string
  twitter_title?: string
  twitter_description?: string
  twitter_image?: string
  twitter_site: string
  schema: Schema4
}

export interface Robots4 {
  index: string
  follow: string
  "max-snippet"?: string
  "max-image-preview"?: string
  "max-video-preview"?: string
}

export interface OgImage4 {
  width: number
  height: number
  url: string
  type: string
}

export interface Schema4 {
  "@context": string
  "@graph": Graph4[]
}

export interface Graph4 {
  "@type": string
  "@id": string
  url?: string
  name?: string
  isPartOf?: IsPartOf4
  description?: string
  breadcrumb?: Breadcrumb4
  inLanguage?: string
  itemListElement?: ItemListElement4[]
  potentialAction?: PotentialAction4[]
}

export interface IsPartOf4 {
  "@id": string
}

export interface Breadcrumb4 {
  "@id": string
}

export interface ItemListElement4 {
  "@type": string
  position: number
  name: string
  item?: string
}

export interface PotentialAction4 {
  "@type": string
  target: Target
  "query-input": string
}

export interface Target {
  "@type": string
  urlTemplate: string
}

export interface Links4 {
  self: Self4[]
  collection: Collection4[]
  about: About3[]
  "wp:post_type": WpPostType[]
  curies: Cury3[]
}

export interface Self4 {
  href: string
  targetHints: TargetHints4
}

export interface TargetHints4 {
  allow: string[]
}

export interface Collection4 {
  href: string
}

export interface About3 {
  href: string
}

export interface WpPostType {
  href: string
}

export interface Cury3 {
  name: string
  href: string
  templated: boolean
}
