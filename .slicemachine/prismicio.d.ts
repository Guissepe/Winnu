// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismicT from "@prismicio/types";
import type * as prismic from "@prismicio/client";

type Simplify<T> = {
    [KeyType in keyof T]: T[KeyType];
};
/** Content for a documents */
type ADocumentData = Record<string, never>;
/**
 * a document from Prismic
 *
 * - **API ID**: `a`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ADocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<ADocumentData>, "a", Lang>;
/** Content for Header documents */
interface HeaderDocumentData {
    /**
     * Menu items field in *Header*
     *
     * - **Field Type**: Group
     * - **Placeholder**: *None*
     * - **API ID Path**: header.menu_items[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/group
     *
     */
    menu_items: prismicT.GroupField<Simplify<HeaderDocumentDataMenuItemsItem>>;
}
/**
 * Item in Header → Menu items
 *
 */
export interface HeaderDocumentDataMenuItemsItem {
    /**
     * Label field in *Header → Menu items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: header.menu_items[].label
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    label: prismicT.KeyTextField;
    /**
     * Link field in *Header → Menu items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header.menu_items[].link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<HeaderDocumentData>, "header", Lang>;
/** Content for Homepage documents */
interface HomepageDocumentData {
    /**
     * SEO title field in *Homepage*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.seo_title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    seo_title: prismicT.KeyTextField;
    /**
     * SEO description field in *Homepage*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.seo_description
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    seo_description: prismicT.RichTextField;
    /**
     * Slice Zone field in *Homepage*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: homepage.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<HomepageDocumentDataSlicesSlice>;
}
/**
 * Slice for *Homepage → Slice Zone*
 *
 */
type HomepageDocumentDataSlicesSlice = HeaderSlice | InfoboxSlice | NavigationItemSlice | Slice1Slice | ButtonSlice | TextimgSlice | CustumersSlice;
/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<HomepageDocumentData>, "homepage", Lang>;
/** Content for Login documents */
interface LoginDocumentData {
    /**
     * Title field in *Login*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: login.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Slice Zone field in *Login*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: login.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<LoginDocumentDataSlicesSlice>;
}
/**
 * Slice for *Login → Slice Zone*
 *
 */
type LoginDocumentDataSlicesSlice = HeaderSlice | InfoboxSlice | Slice1Slice | NavigationItemSlice | ButtonSlice | ButtonRowSlice | ImgrowSlice | TextimgSlice | CustumersSlice;
/**
 * Login document from Prismic
 *
 * - **API ID**: `login`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LoginDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<LoginDocumentData>, "login", Lang>;
/** Content for Login documents */
interface LoginDocumentData {
    /**
     * Title field in *Login*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: login.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Slice Zone field in *Login*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: login.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<LoginDocumentDataSlicesSlice>;
}
/**
 * Slice for *Login → Slice Zone*
 *
 */
type LoginDocumentDataSlicesSlice = HeaderSlice | InfoboxSlice | Slice1Slice | NavigationItemSlice | ButtonSlice | ButtonRowSlice | ImgrowSlice | TextimgSlice | CustumersSlice;
/**
 * Login document from Prismic
 *
 * - **API ID**: `login`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LoginDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<LoginDocumentData>, "login", Lang>;
/** Content for Login documents */
interface LoginDocumentData {
    /**
     * Title field in *Login*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: login.title
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Slice Zone field in *Login*
     *
     * - **Field Type**: Slice Zone
     * - **Placeholder**: *None*
     * - **API ID Path**: login.slices[]
     * - **Tab**: Main
     * - **Documentation**: https://prismic.io/docs/core-concepts/slices
     *
     */
    slices: prismicT.SliceZone<LoginDocumentDataSlicesSlice>;
}
/**
 * Slice for *Login → Slice Zone*
 *
 */
type LoginDocumentDataSlicesSlice = HeaderSlice | InfoboxSlice | Slice1Slice | NavigationItemSlice | ButtonSlice | ButtonRowSlice | ImgrowSlice | TextimgSlice | CustumersSlice;
/**
 * Login document from Prismic
 *
 * - **API ID**: `login`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type LoginDocument<Lang extends string = string> = prismicT.PrismicDocumentWithUID<Simplify<LoginDocumentData>, "login", Lang>;
/** Content for TestType documents */
type TesttypeDocumentData = Record<string, never>;
/**
 * TestType document from Prismic
 *
 * - **API ID**: `testtype`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/core-concepts/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type TesttypeDocument<Lang extends string = string> = prismicT.PrismicDocumentWithoutUID<Simplify<TesttypeDocumentData>, "testtype", Lang>;
export type AllDocumentTypes = ADocument | HeaderDocument | HomepageDocument | LoginDocument | LoginDocument | LoginDocument | TesttypeDocument;
/**
 * Primary content in Button → Primary
 *
 */
interface ButtonSliceDefaultPrimary {
    /**
     * CTA text field in *Button → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: button.primary.cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
    /**
     * CTA link field in *Button → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
}
/**
 * Default variation for Button Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Button`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ButtonSliceDefaultPrimary>, never>;
/**
 * Primary content in Button → Primary
 *
 */
interface ButtonSliceDarkPrimary {
    /**
     * CTA text field in *Button → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: button.primary.cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
    /**
     * CTA link field in *Button → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
}
/**
 * Dark variation for Button Slice
 *
 * - **API ID**: `dark`
 * - **Description**: `Button`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSliceDark = prismicT.SharedSliceVariation<"dark", Simplify<ButtonSliceDarkPrimary>, never>;
/**
 * Primary content in Button → Primary
 *
 */
interface ButtonSliceLogPrimary {
    /**
     * CTA text field in *Button → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: button.primary.cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
    /**
     * CTA link field in *Button → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * Handle field in *Button → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: button.primary.handle
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    handle: prismicT.KeyTextField;
}
/**
 * Log variation for Button Slice
 *
 * - **API ID**: `log`
 * - **Description**: `Button`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSliceLog = prismicT.SharedSliceVariation<"log", Simplify<ButtonSliceLogPrimary>, never>;
/**
 * Primary content in Button → Primary
 *
 */
interface ButtonSliceLogDarkPrimary {
    /**
     * CTA text field in *Button → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: button.primary.cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
    /**
     * CTA link field in *Button → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
}
/**
 * LogDark variation for Button Slice
 *
 * - **API ID**: `logDark`
 * - **Description**: `Button`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSliceLogDark = prismicT.SharedSliceVariation<"logDark", Simplify<ButtonSliceLogDarkPrimary>, never>;
/**
 * Slice variation for *Button*
 *
 */
type ButtonSliceVariation = ButtonSliceDefault | ButtonSliceDark | ButtonSliceLog | ButtonSliceLogDark;
/**
 * Button Shared Slice
 *
 * - **API ID**: `button`
 * - **Description**: `Button`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonSlice = prismicT.SharedSlice<"button", ButtonSliceVariation>;
/**
 * Item in ButtonRow → Items
 *
 */
export interface ButtonRowSliceDefaultItem {
    /**
     * CTA text field in *ButtonRow → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
    /**
     * CTA link field in *ButtonRow → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
}
/**
 * Default variation for ButtonRow Slice
 *
 * - **API ID**: `default`
 * - **Description**: `ButtonRow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonRowSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<ButtonRowSliceDefaultItem>>;
/**
 * Item in ButtonRow → Items
 *
 */
export interface ButtonRowSliceDarkItem {
    /**
     * CTA text field in *ButtonRow → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
    /**
     * CTA link field in *ButtonRow → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
}
/**
 * Dark variation for ButtonRow Slice
 *
 * - **API ID**: `dark`
 * - **Description**: `ButtonRow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonRowSliceDark = prismicT.SharedSliceVariation<"dark", Record<string, never>, Simplify<ButtonRowSliceDarkItem>>;
/**
 * Item in ButtonRow → Items
 *
 */
export interface ButtonRowSliceDarkLogItem {
    /**
     * CTA text field in *ButtonRow → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    cta_text: prismicT.KeyTextField;
    /**
     * CTA link field in *ButtonRow → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * Handler field in *ButtonRow → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: button_row.items[].handler
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    handler: prismicT.KeyTextField;
}
/**
 * DarkLog variation for ButtonRow Slice
 *
 * - **API ID**: `darkLog`
 * - **Description**: `ButtonRow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonRowSliceDarkLog = prismicT.SharedSliceVariation<"darkLog", Record<string, never>, Simplify<ButtonRowSliceDarkLogItem>>;
/**
 * Slice variation for *ButtonRow*
 *
 */
type ButtonRowSliceVariation = ButtonRowSliceDefault | ButtonRowSliceDark | ButtonRowSliceDarkLog;
/**
 * ButtonRow Shared Slice
 *
 * - **API ID**: `button_row`
 * - **Description**: `ButtonRow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ButtonRowSlice = prismicT.SharedSlice<"button_row", ButtonRowSliceVariation>;
/**
 * Primary content in Custumers → Primary
 *
 */
interface CustumersSliceDefaultPrimary {
    /**
     * Title field in *Custumers → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: custumers.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title: prismicT.KeyTextField;
}
/**
 * Item in Custumers → Items
 *
 */
export interface CustumersSliceDefaultItem {
    /**
     * Custumer field in *Custumers → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: custumers.items[].custumer
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    custumer: prismicT.ImageField<never>;
}
/**
 * Default variation for Custumers Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Custumers`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CustumersSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<CustumersSliceDefaultPrimary>, Simplify<CustumersSliceDefaultItem>>;
/**
 * Slice variation for *Custumers*
 *
 */
type CustumersSliceVariation = CustumersSliceDefault;
/**
 * Custumers Shared Slice
 *
 * - **API ID**: `custumers`
 * - **Description**: `Custumers`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type CustumersSlice = prismicT.SharedSlice<"custumers", CustumersSliceVariation>;
/**
 * Primary content in Header → Primary
 *
 */
interface HeaderSliceDefaultPrimary {
    /**
     * Logo field in *Header → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.logo
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    logo: prismicT.ImageField<never>;
    /**
     * Button field in *Header → Primary*
     *
     * - **Field Type**: Link to Media
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.button
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    button: prismicT.LinkToMediaField;
    /**
     * Normalbutton field in *Header → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: header.primary.normalbutton
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    normalbutton: prismicT.LinkField;
}
/**
 * Default variation for Header Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<HeaderSliceDefaultPrimary>, never>;
/**
 * Slice variation for *Header*
 *
 */
type HeaderSliceVariation = HeaderSliceDefault;
/**
 * Header Shared Slice
 *
 * - **API ID**: `header`
 * - **Description**: `Header`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type HeaderSlice = prismicT.SharedSlice<"header", HeaderSliceVariation>;
/**
 * Primary content in Imgrow → Primary
 *
 */
interface ImgrowSliceDefaultPrimary {
    /**
     * Main Title field in *Imgrow → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: imgrow.primary.main_title
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    main_title: prismicT.KeyTextField;
}
/**
 * Item in Imgrow → Items
 *
 */
export interface ImgrowSliceDefaultItem {
    /**
     * Image field in *Imgrow → Items*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: imgrow.items[].image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
    /**
     * Title field in *Imgrow → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: imgrow.items[].title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.RichTextField;
    /**
     * Description field in *Imgrow → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: imgrow.items[].description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Default variation for Imgrow Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Imgrow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImgrowSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<ImgrowSliceDefaultPrimary>, Simplify<ImgrowSliceDefaultItem>>;
/**
 * Slice variation for *Imgrow*
 *
 */
type ImgrowSliceVariation = ImgrowSliceDefault;
/**
 * Imgrow Shared Slice
 *
 * - **API ID**: `imgrow`
 * - **Description**: `Imgrow`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type ImgrowSlice = prismicT.SharedSlice<"imgrow", ImgrowSliceVariation>;
/**
 * Primary content in Infobox → Primary
 *
 */
interface InfoboxSliceDefaultPrimary {
    /**
     * Title field in *Infobox → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: infobox.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Infobox → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: infobox.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
}
/**
 * Item in Infobox → Items
 *
 */
export interface InfoboxSliceDefaultItem {
    /**
     * CTA link field in *Infobox → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: infobox.items[].cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * CTA text field in *Infobox → Items*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: infobox.items[].cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
}
/**
 * Default variation for Infobox Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Infobox`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoboxSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<InfoboxSliceDefaultPrimary>, Simplify<InfoboxSliceDefaultItem>>;
/**
 * Primary content in Infobox → Primary
 *
 */
interface InfoboxSliceSingleButtonPrimary {
    /**
     * Title field in *Infobox → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: infobox.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Description field in *Infobox → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: infobox.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * CTA link field in *Infobox → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: infobox.primary.cta_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    cta_link: prismicT.LinkField;
    /**
     * CTA text field in *Infobox → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: infobox.primary.cta_text
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    cta_text: prismicT.RichTextField;
}
/**
 * SingleButton variation for Infobox Slice
 *
 * - **API ID**: `singleButton`
 * - **Description**: `Infobox`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoboxSliceSingleButton = prismicT.SharedSliceVariation<"singleButton", Simplify<InfoboxSliceSingleButtonPrimary>, never>;
/**
 * Slice variation for *Infobox*
 *
 */
type InfoboxSliceVariation = InfoboxSliceDefault | InfoboxSliceSingleButton;
/**
 * Infobox Shared Slice
 *
 * - **API ID**: `infobox`
 * - **Description**: `Infobox`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type InfoboxSlice = prismicT.SharedSlice<"infobox", InfoboxSliceVariation>;
/**
 * Primary content in NavigationItem → Primary
 *
 */
interface NavigationItemSliceDefaultPrimary {
    /**
     * Name field in *NavigationItem → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    name: prismicT.RichTextField;
    /**
     * Link field in *NavigationItem → Primary*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.primary.link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    link: prismicT.LinkField;
}
/**
 * Item in NavigationItem → Items
 *
 */
export interface NavigationItemSliceDefaultItem {
    /**
     * Child Name field in *NavigationItem → Items*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_name
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    child_name: prismicT.TitleField;
    /**
     * Child Link field in *NavigationItem → Items*
     *
     * - **Field Type**: Link
     * - **Placeholder**: *None*
     * - **API ID Path**: navigation_item.items[].child_link
     * - **Documentation**: https://prismic.io/docs/core-concepts/link-content-relationship
     *
     */
    child_link: prismicT.LinkField;
}
/**
 * Default variation for NavigationItem Slice
 *
 * - **API ID**: `default`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<NavigationItemSliceDefaultPrimary>, Simplify<NavigationItemSliceDefaultItem>>;
/**
 * Slice variation for *NavigationItem*
 *
 */
type NavigationItemSliceVariation = NavigationItemSliceDefault;
/**
 * NavigationItem Shared Slice
 *
 * - **API ID**: `navigation_item`
 * - **Description**: `NavigationItem`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type NavigationItemSlice = prismicT.SharedSlice<"navigation_item", NavigationItemSliceVariation>;
/**
 * Primary content in PageInfo → Primary
 *
 */
interface Slice1SliceDefaultPrimary {
    /**
     * Title field in *PageInfo → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: slice1.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Body field in *PageInfo → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: slice1.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * Default variation for PageInfo Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Slice1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type Slice1SliceDefault = prismicT.SharedSliceVariation<"default", Simplify<Slice1SliceDefaultPrimary>, never>;
/**
 * Primary content in PageInfo → Primary
 *
 */
interface Slice1SliceLoginPrimary {
    /**
     * Title field in *PageInfo → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: *None*
     * - **API ID Path**: slice1.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Body field in *PageInfo → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: slice1.primary.body
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    body: prismicT.RichTextField;
}
/**
 * login variation for PageInfo Slice
 *
 * - **API ID**: `login`
 * - **Description**: `Slice1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type Slice1SliceLogin = prismicT.SharedSliceVariation<"login", Simplify<Slice1SliceLoginPrimary>, never>;
/**
 * Slice variation for *PageInfo*
 *
 */
type Slice1SliceVariation = Slice1SliceDefault | Slice1SliceLogin;
/**
 * PageInfo Shared Slice
 *
 * - **API ID**: `slice1`
 * - **Description**: `Slice1`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type Slice1Slice = prismicT.SharedSlice<"slice1", Slice1SliceVariation>;
/**
 * Primary content in Textimg → Primary
 *
 */
interface TextimgSliceDefaultPrimary {
    /**
     * Title field in *Textimg → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: textimg.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *Textimg → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: textimg.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * Description field in *Textimg → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: textimg.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Title2 field in *Textimg → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: textimg.primary.title2
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title2: prismicT.KeyTextField;
    /**
     * Title3 field in *Textimg → Primary*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: textimg.primary.title3
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    title3: prismicT.KeyTextField;
    /**
     * Image field in *Textimg → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: textimg.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Default variation for Textimg Slice
 *
 * - **API ID**: `default`
 * - **Description**: `Textimg`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextimgSliceDefault = prismicT.SharedSliceVariation<"default", Simplify<TextimgSliceDefaultPrimary>, never>;
/**
 * Primary content in Textimg → Primary
 *
 */
interface TextimgSliceTextimgImgBottomPrimary {
    /**
     * Title field in *Textimg → Primary*
     *
     * - **Field Type**: Title
     * - **Placeholder**: This is where it all begins...
     * - **API ID Path**: textimg.primary.title
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    title: prismicT.TitleField;
    /**
     * Subtitle field in *Textimg → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: *None*
     * - **API ID Path**: textimg.primary.subtitle
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    subtitle: prismicT.RichTextField;
    /**
     * Description field in *Textimg → Primary*
     *
     * - **Field Type**: Rich Text
     * - **Placeholder**: A nice description of your feature
     * - **API ID Path**: textimg.primary.description
     * - **Documentation**: https://prismic.io/docs/core-concepts/rich-text-title
     *
     */
    description: prismicT.RichTextField;
    /**
     * Image field in *Textimg → Primary*
     *
     * - **Field Type**: Image
     * - **Placeholder**: *None*
     * - **API ID Path**: textimg.primary.image
     * - **Documentation**: https://prismic.io/docs/core-concepts/image
     *
     */
    image: prismicT.ImageField<never>;
}
/**
 * Textimg img bottom variation for Textimg Slice
 *
 * - **API ID**: `textimgImgBottom`
 * - **Description**: `Textimg`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextimgSliceTextimgImgBottom = prismicT.SharedSliceVariation<"textimgImgBottom", Simplify<TextimgSliceTextimgImgBottomPrimary>, never>;
/**
 * Slice variation for *Textimg*
 *
 */
type TextimgSliceVariation = TextimgSliceDefault | TextimgSliceTextimgImgBottom;
/**
 * Textimg Shared Slice
 *
 * - **API ID**: `textimg`
 * - **Description**: `Textimg`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextimgSlice = prismicT.SharedSlice<"textimg", TextimgSliceVariation>;
/**
 * Item in TextPile → Items
 *
 */
export interface TextPileSliceDefaultItem {
    /**
     * Text field in *TextPile → Items*
     *
     * - **Field Type**: Text
     * - **Placeholder**: *None*
     * - **API ID Path**: text_pile.items[].text
     * - **Documentation**: https://prismic.io/docs/core-concepts/key-text
     *
     */
    text: prismicT.KeyTextField;
}
/**
 * Default variation for TextPile Slice
 *
 * - **API ID**: `default`
 * - **Description**: `TextPile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextPileSliceDefault = prismicT.SharedSliceVariation<"default", Record<string, never>, Simplify<TextPileSliceDefaultItem>>;
/**
 * Slice variation for *TextPile*
 *
 */
type TextPileSliceVariation = TextPileSliceDefault;
/**
 * TextPile Shared Slice
 *
 * - **API ID**: `text_pile`
 * - **Description**: `TextPile`
 * - **Documentation**: https://prismic.io/docs/core-concepts/reusing-slices
 *
 */
export type TextPileSlice = prismicT.SharedSlice<"text_pile", TextPileSliceVariation>;
declare module "@prismicio/client" {
    interface CreateClient {
        (repositoryNameOrEndpoint: string, options?: prismic.ClientConfig): prismic.Client<AllDocumentTypes>;
    }
    namespace Content {
        export type { ADocumentData, ADocument, HeaderDocumentData, HeaderDocumentDataMenuItemsItem, HeaderDocument, HomepageDocumentData, HomepageDocumentDataSlicesSlice, HomepageDocument, LoginDocumentData, LoginDocumentDataSlicesSlice, LoginDocument, TesttypeDocumentData, TesttypeDocument, AllDocumentTypes, ButtonSliceDefaultPrimary, ButtonSliceDefault, ButtonSliceDarkPrimary, ButtonSliceDark, ButtonSliceLogPrimary, ButtonSliceLog, ButtonSliceLogDarkPrimary, ButtonSliceLogDark, ButtonSliceVariation, ButtonSlice, ButtonRowSliceDefaultItem, ButtonRowSliceDefault, ButtonRowSliceDarkItem, ButtonRowSliceDark, ButtonRowSliceDarkLogItem, ButtonRowSliceDarkLog, ButtonRowSliceVariation, ButtonRowSlice, CustumersSliceDefaultPrimary, CustumersSliceDefaultItem, CustumersSliceDefault, CustumersSliceVariation, CustumersSlice, HeaderSliceDefaultPrimary, HeaderSliceDefault, HeaderSliceVariation, HeaderSlice, ImgrowSliceDefaultPrimary, ImgrowSliceDefaultItem, ImgrowSliceDefault, ImgrowSliceVariation, ImgrowSlice, InfoboxSliceDefaultPrimary, InfoboxSliceDefaultItem, InfoboxSliceDefault, InfoboxSliceSingleButtonPrimary, InfoboxSliceSingleButton, InfoboxSliceVariation, InfoboxSlice, NavigationItemSliceDefaultPrimary, NavigationItemSliceDefaultItem, NavigationItemSliceDefault, NavigationItemSliceVariation, NavigationItemSlice, Slice1SliceDefaultPrimary, Slice1SliceDefault, Slice1SliceLoginPrimary, Slice1SliceLogin, Slice1SliceVariation, Slice1Slice, TextimgSliceDefaultPrimary, TextimgSliceDefault, TextimgSliceTextimgImgBottomPrimary, TextimgSliceTextimgImgBottom, TextimgSliceVariation, TextimgSlice, TextPileSliceDefaultItem, TextPileSliceDefault, TextPileSliceVariation, TextPileSlice };
    }
}
