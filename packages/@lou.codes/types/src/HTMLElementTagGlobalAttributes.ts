/* eslint-disable max-lines, id-denylist */
/* This file is auto-generated. Don't edit manually */

import type { ReadOnlyRecord } from "./ReadOnlyRecord.js";

/**
 * Global HTML attributes.
 *
 * @category HTML
 * @remarks
 * If you need the type of all HTML attributes, this is it.
 * @example
 * ```typescript
 * const getAttribute = (attribute: keyof HTMLElementTagGlobalAttributes) => // …
 * ```
 * @see {@link ReadOnlyRecord}
 */
export type HTMLElementTagGlobalAttributes = {
	/**
	 * Provides a hint for generating a keyboard shortcut for the current element. This attribute consists of a space-separated list of characters. The browser should use the first one that exists on the computer keyboard layout.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey)
	 */
	readonly accesskey?: string;

	/**
	 * Controls whether and how text input is automatically capitalized as it is entered/edited by the user. It can have the following values:
	 *
	 * *   `off` or `none`, no autocapitalization is applied (all letters default to lowercase)
	 * *   `on` or `sentences`, the first letter of each sentence defaults to a capital letter; all other letters default to lowercase
	 * *   `words`, the first letter of each word defaults to a capital letter; all other letters default to lowercase
	 * *   `characters`, all letters should default to uppercase
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize)
	 */
	readonly autocapitalize?: string;

	/**
	 * A space-separated list of the classes of the element. Classes allows CSS and JavaScript to select and access specific elements via the [class selectors](https://developer.mozilla.org/docs/Web/CSS/Class_selectors) or functions like the method [`Document.getElementsByClassName()`](https://developer.mozilla.org/docs/Web/API/Document/getElementsByClassName "returns an array-like object of all child elements which have all of the given class names.").
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class)
	 */
	readonly class?: string;

	/**
	 * An enumerated attribute indicating if the element should be editable by the user. If so, the browser modifies its widget to allow editing. The attribute must take one of the following values:
	 *
	 * *   `true` or the _empty string_, which indicates that the element must be editable;
	 * *   `false`, which indicates that the element must not be editable.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable)
	 */
	readonly contenteditable?: string;

	/**
	 * The `[**id**](#attr-id)` of a [`<menu>`](https://developer.mozilla.org/docs/Web/HTML/Element/menu "The HTML <menu> element represents a group of commands that a user can perform or activate. This includes both list menus, which might appear across the top of a screen, as well as context menus, such as those that might appear underneath a button after it has been clicked.") to use as the contextual menu for this element.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu)
	 */
	readonly contextmenu?: string;

	/**
	 * An enumerated attribute indicating the directionality of the element's text. It can have the following values:
	 *
	 * *   `ltr`, which means _left to right_ and is to be used for languages that are written from the left to the right (like English);
	 * *   `rtl`, which means _right to left_ and is to be used for languages that are written from the right to the left (like Arabic);
	 * *   `auto`, which lets the user agent decide. It uses a basic algorithm as it parses the characters inside the element until it finds a character with a strong directionality, then it applies that directionality to the whole element.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir)
	 */
	readonly dir?: string;

	/**
	 * An enumerated attribute indicating whether the element can be dragged, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values:
	 *
	 * *   `true`, which indicates that the element may be dragged
	 * *   `false`, which indicates that the element may not be dragged.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable)
	 */
	readonly draggable?: string;

	/**
	 * An enumerated attribute indicating what types of content can be dropped on an element, using the [Drag and Drop API](https://developer.mozilla.org/docs/DragDrop/Drag_and_Drop). It can have the following values:
	 *
	 * *   `copy`, which indicates that dropping will create a copy of the element that was dragged
	 * *   `move`, which indicates that the element that was dragged will be moved to this new location.
	 * *   `link`, will create a link to the dragged data.
	 */
	readonly dropzone?: string;

	/**
	 * Used to transitively export shadow parts from a nested shadow tree into a containing light tree.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/exportparts)
	 */
	readonly exportparts?: string;

	/**
	 * A Boolean attribute indicates that the element is not yet, or is no longer, _relevant_. For example, it can be used to hide elements of the page that can't be used until the login process has been completed. The browser won't render such elements. This attribute must not be used to hide content that could legitimately be shown.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)
	 */
	readonly hidden?: string;

	/**
	 * Defines a unique identifier (ID) which must be unique in the whole document. Its purpose is to identify the element when linking (using a fragment identifier), scripting, or styling (with CSS).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)
	 */
	readonly id?: string;

	/**
	 * Provides a hint to browsers as to the type of virtual keyboard configuration to use when editing this element or its contents. Used primarily on [`<input>`](https://developer.mozilla.org/docs/Web/HTML/Element/input "The HTML <input> element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent.") elements, but is usable on any element while in `[contenteditable](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-contenteditable)` mode.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode)
	 */
	readonly inputmode?: string;

	/**
	 * Allows you to specify that a standard HTML element should behave like a registered custom built-in element (see [Using custom elements](https://developer.mozilla.org/docs/Web/Web_Components/Using_custom_elements) for more details).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is)
	 */
	readonly is?: string;

	/**
	 * The unique, global identifier of an item.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid)
	 */
	readonly itemid?: string;

	/**
	 * Used to add properties to an item. Every HTML element may have an `itemprop` attribute specified, where an `itemprop` consists of a name and value pair.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop)
	 */
	readonly itemprop?: string;

	/**
	 * Properties that are not descendants of an element with the `itemscope` attribute can be associated with the item using an `itemref`. It provides a list of element ids (not `itemid`s) with additional properties elsewhere in the document.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref)
	 */
	readonly itemref?: string;

	/**
	 * `itemscope` (usually) works along with `[itemtype](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemtype)` to specify that the HTML contained in a block is about a particular item. `itemscope` creates the Item and defines the scope of the `itemtype` associated with it. `itemtype` is a valid URL of a vocabulary (such as [schema.org](https://schema.org/)) that describes the item and its properties context.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope)
	 */
	readonly itemscope?: string;

	/**
	 * Specifies the URL of the vocabulary that will be used to define `itemprop`s (item properties) in the data structure. `[itemscope](https://developer.mozilla.org/docs/Web/HTML/Global_attributes#attr-itemscope)` is used to set the scope of where in the data structure the vocabulary set by `itemtype` will be active.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype)
	 */
	readonly itemtype?: string;

	/**
	 * Helps define the language of an element: the language that non-editable elements are in, or the language that editable elements should be written in by the user. The attribute contains one “language tag” (made of hyphen-separated “language subtags”) in the format defined in [_Tags for Identifying Languages (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). [**xml:lang**](#attr-xml:lang) has priority over it.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang)
	 */
	readonly lang?: string;

	/**
	 * A space-separated list of the part names of the element. Part names allows CSS to select and style specific elements in a shadow tree via the [`::part`](https://developer.mozilla.org/docs/Web/CSS/::part "The ::part CSS pseudo-element represents any element within a shadow tree that has a matching part attribute.") pseudo-element.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/part)
	 */
	readonly part?: string;

	readonly role?: string;

	/**
	 * Assigns a slot in a [shadow DOM](https://developer.mozilla.org/docs/Web/Web_Components/Shadow_DOM) shadow tree to an element: An element with a `slot` attribute is assigned to the slot created by the [`<slot>`](https://developer.mozilla.org/docs/Web/HTML/Element/slot "The HTML <slot> element—part of the Web Components technology suite—is a placeholder inside a web component that you can fill with your own markup, which lets you create separate DOM trees and present them together.") element whose `[name](https://developer.mozilla.org/docs/Web/HTML/Element/slot#attr-name)` attribute's value matches that `slot` attribute's value.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot)
	 */
	readonly slot?: string;

	/**
	 * An enumerated attribute defines whether the element may be checked for spelling errors. It may have the following values:
	 *
	 * *   `true`, which indicates that the element should be, if possible, checked for spelling errors;
	 * *   `false`, which indicates that the element should not be checked for spelling errors.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck)
	 */
	readonly spellcheck?: string;

	/**
	 * Contains [CSS](https://developer.mozilla.org/docs/Web/CSS) styling declarations to be applied to the element. Note that it is recommended for styles to be defined in a separate file or files. This attribute and the [`<style>`](https://developer.mozilla.org/docs/Web/HTML/Element/style "The HTML <style> element contains style information for a document, or part of a document.") element have mainly the purpose of allowing for quick styling, for example for testing purposes.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style)
	 */
	readonly style?: string;

	/**
	 * An integer attribute indicating if the element can take input focus (is _focusable_), if it should participate to sequential keyboard navigation, and if so, at what position. It can take several values:
	 *
	 * *   a _negative value_ means that the element should be focusable, but should not be reachable via sequential keyboard navigation;
	 * *   `0` means that the element should be focusable and reachable via sequential keyboard navigation, but its relative order is defined by the platform convention;
	 * *   a _positive value_ means that the element should be focusable and reachable via sequential keyboard navigation; the order in which the elements are focused is the increasing value of the [**tabindex**](#attr-tabindex). If several elements share the same tabindex, their relative order follows their relative positions in the document.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex)
	 */
	readonly tabindex?: string;

	/**
	 * Contains a text representing advisory information related to the element it belongs to. Such information can typically, but not necessarily, be presented to the user as a tooltip.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title)
	 */
	readonly title?: string;

	/**
	 * An enumerated attribute that is used to specify whether an element's attribute values and the values of its [`Text`](https://developer.mozilla.org/docs/Web/API/Text "The Text interface represents the textual content of Element or Attr. If an element has no markup within its content, it has a single child implementing Text that contains the element's text. However, if the element contains markup, it is parsed into information items and Text nodes that form its children.") node children are to be translated when the page is localized, or whether to leave them unchanged. It can have the following values:
	 *
	 * *   empty string and `yes`, which indicates that the element will be translated.
	 * *   `no`, which indicates that the element will not be translated.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [MDN Reference](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate)
	 */
	readonly translate?: string;

	/**
	 * The loading of a resource has been aborted.
	 */
	readonly onabort?: string;

	/**
	 * An element has lost focus (does not bubble).
	 */
	readonly onblur?: string;

	/**
	 * The user agent can play the media, but estimates that not enough data has been loaded to play the media up to its end without having to stop for further buffering of content.
	 */
	readonly oncanplay?: string;

	/**
	 * The user agent can play the media up to its end without having to stop for further buffering of content.
	 */
	readonly oncanplaythrough?: string;

	/**
	 * The change event is fired for <input>, <select>, and <textarea> elements when a change to the element's value is committed by the user.
	 */
	readonly onchange?: string;

	/**
	 * A pointing device button has been pressed and released on an element.
	 */
	readonly onclick?: string;

	/**
	 * The right button of the mouse is clicked (before the context menu is displayed).
	 */
	readonly oncontextmenu?: string;

	/**
	 * A pointing device button is clicked twice on an element.
	 */
	readonly ondblclick?: string;

	/**
	 * An element or text selection is being dragged (every 350ms).
	 */
	readonly ondrag?: string;

	/**
	 * A drag operation is being ended (by releasing a mouse button or hitting the escape key).
	 */
	readonly ondragend?: string;

	/**
	 * A dragged element or text selection enters a valid drop target.
	 */
	readonly ondragenter?: string;

	/**
	 * A dragged element or text selection leaves a valid drop target.
	 */
	readonly ondragleave?: string;

	/**
	 * An element or text selection is being dragged over a valid drop target (every 350ms).
	 */
	readonly ondragover?: string;

	/**
	 * The user starts dragging an element or text selection.
	 */
	readonly ondragstart?: string;

	/**
	 * An element is dropped on a valid drop target.
	 */
	readonly ondrop?: string;

	/**
	 * The duration attribute has been updated.
	 */
	readonly ondurationchange?: string;

	/**
	 * The media has become empty; for example, this event is sent if the media has already been loaded (or partially loaded), and the load() method is called to reload it.
	 */
	readonly onemptied?: string;

	/**
	 * Playback has stopped because the end of the media was reached.
	 */
	readonly onended?: string;

	/**
	 * A resource failed to load.
	 */
	readonly onerror?: string;

	/**
	 * An element has received focus (does not bubble).
	 */
	readonly onfocus?: string;

	readonly onformchange?: string;

	readonly onforminput?: string;

	/**
	 * The value of an element changes or the content of an element with the attribute contenteditable is modified.
	 */
	readonly oninput?: string;

	/**
	 * A submittable element has been checked and doesn't satisfy its constraints.
	 */
	readonly oninvalid?: string;

	/**
	 * A key is pressed down.
	 */
	readonly onkeydown?: string;

	/**
	 * A key is pressed down and that key normally produces a character value (use input instead).
	 */
	readonly onkeypress?: string;

	/**
	 * A key is released.
	 */
	readonly onkeyup?: string;

	/**
	 * A resource and its dependent resources have finished loading.
	 */
	readonly onload?: string;

	/**
	 * The first frame of the media has finished loading.
	 */
	readonly onloadeddata?: string;

	/**
	 * The metadata has been loaded.
	 */
	readonly onloadedmetadata?: string;

	/**
	 * Progress has begun.
	 */
	readonly onloadstart?: string;

	/**
	 * A pointing device button (usually a mouse) is pressed on an element.
	 */
	readonly onmousedown?: string;

	/**
	 * A pointing device is moved over an element.
	 */
	readonly onmousemove?: string;

	/**
	 * A pointing device is moved off the element that has the listener attached or off one of its children.
	 */
	readonly onmouseout?: string;

	/**
	 * A pointing device is moved onto the element that has the listener attached or onto one of its children.
	 */
	readonly onmouseover?: string;

	/**
	 * A pointing device button is released over an element.
	 */
	readonly onmouseup?: string;

	readonly onmousewheel?: string;

	/**
	 * A pointing device is moved onto the element that has the listener attached.
	 */
	readonly onmouseenter?: string;

	/**
	 * A pointing device is moved off the element that has the listener attached.
	 */
	readonly onmouseleave?: string;

	/**
	 * Playback has been paused.
	 */
	readonly onpause?: string;

	/**
	 * Playback has begun.
	 */
	readonly onplay?: string;

	/**
	 * Playback is ready to start after having been paused or delayed due to lack of data.
	 */
	readonly onplaying?: string;

	/**
	 * In progress.
	 */
	readonly onprogress?: string;

	/**
	 * The playback rate has changed.
	 */
	readonly onratechange?: string;

	/**
	 * A form is reset.
	 */
	readonly onreset?: string;

	/**
	 * The document view has been resized.
	 */
	readonly onresize?: string;

	/**
	 * The readyState attribute of a document has changed.
	 */
	readonly onreadystatechange?: string;

	/**
	 * The document view or an element has been scrolled.
	 */
	readonly onscroll?: string;

	/**
	 * A seek operation completed.
	 */
	readonly onseeked?: string;

	/**
	 * A seek operation began.
	 */
	readonly onseeking?: string;

	/**
	 * Some text is being selected.
	 */
	readonly onselect?: string;

	/**
	 * A contextmenu event was fired on/bubbled to an element that has a contextmenu attribute
	 */
	readonly onshow?: string;

	/**
	 * The user agent is trying to fetch media data, but data is unexpectedly not forthcoming.
	 */
	readonly onstalled?: string;

	/**
	 * A form is submitted.
	 */
	readonly onsubmit?: string;

	/**
	 * Media data loading has been suspended.
	 */
	readonly onsuspend?: string;

	/**
	 * The time indicated by the currentTime attribute has been updated.
	 */
	readonly ontimeupdate?: string;

	/**
	 * The volume has changed.
	 */
	readonly onvolumechange?: string;

	/**
	 * Playback has stopped because of a temporary lack of data.
	 */
	readonly onwaiting?: string;

	/**
	 * The pointer is unlikely to produce any more events.
	 */
	readonly onpointercancel?: string;

	/**
	 * The pointer enters the active buttons state.
	 */
	readonly onpointerdown?: string;

	/**
	 * Pointing device is moved inside the hit-testing boundary.
	 */
	readonly onpointerenter?: string;

	/**
	 * Pointing device is moved out of the hit-testing boundary.
	 */
	readonly onpointerleave?: string;

	/**
	 * The pointer was locked or released.
	 */
	readonly onpointerlockchange?: string;

	/**
	 * It was impossible to lock the pointer for technical reasons or because the permission was denied.
	 */
	readonly onpointerlockerror?: string;

	/**
	 * The pointer changed coordinates.
	 */
	readonly onpointermove?: string;

	/**
	 * The pointing device moved out of hit-testing boundary or leaves detectable hover range.
	 */
	readonly onpointerout?: string;

	/**
	 * The pointing device is moved into the hit-testing boundary.
	 */
	readonly onpointerover?: string;

	/**
	 * The pointer leaves the active buttons state.
	 */
	readonly onpointerup?: string;

	/**
	 * Identifies the currently active element when DOM focus is on a [`composite`](https://www.w3.org/TR/wai-aria-1.1/#composite) widget, [`textbox`](https://www.w3.org/TR/wai-aria-1.1/#textbox), [`group`](https://www.w3.org/TR/wai-aria-1.1/#group), or [`application`](https://www.w3.org/TR/wai-aria-1.1/#application).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant)
	 */
	readonly "aria-activedescendant"?: string;

	/**
	 * Indicates whether [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology) will present all, or only parts of, the changed region based on the change notifications defined by the [`aria-relevant`](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant) attribute.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic)
	 */
	readonly "aria-atomic"?: string;

	/**
	 * Indicates whether inputting text could trigger display of one or more predictions of the user's intended value for an input and specifies how predictions would be presented if they are made.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-autocomplete)
	 */
	readonly "aria-autocomplete"?: string;

	/**
	 * Indicates an element is being modified and that assistive technologies _MAY_ want to wait until the modifications are complete before exposing them to the user.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-busy)
	 */
	readonly "aria-busy"?: string;

	/**
	 * Indicates the current "checked" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of checkboxes, radio buttons, and other [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-checked)
	 */
	readonly "aria-checked"?: string;

	/**
	 * Defines the total number of columns in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount)
	 */
	readonly "aria-colcount"?: string;

	/**
	 * Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) column index or position with respect to the total number of columns within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-colcount) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex)
	 */
	readonly "aria-colindex"?: string;

	/**
	 * Defines the number of columns spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-colindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-colindex) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan)
	 */
	readonly "aria-colspan"?: string;

	/**
	 * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) whose contents or presence are controlled by the current element. See related [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-controls)
	 */
	readonly "aria-controls"?: string;

	/**
	 * Indicates the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that represents the current item within a container or set of related elements.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-current)
	 */
	readonly "aria-current"?: string;

	/**
	 * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that describes the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)
	 */
	readonly "aria-describedby"?: string;

	/**
	 * Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is [perceivable](https://www.w3.org/TR/wai-aria-1.1/#dfn-perceivable) but disabled, so it is not editable or otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-hidden`](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden) and [`aria-readonly`](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled)
	 */
	readonly "aria-disabled"?: string;

	/**
	 * \[Deprecated in ARIA 1.1\] Indicates what functions can be performed when a dragged object is released on the drop target.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-dropeffect)
	 */
	readonly "aria-dropeffect"?: string;

	/**
	 * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides an error message for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-invalid`](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid) and [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage)
	 */
	readonly "aria-errormessage"?: string;

	/**
	 * Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-expanded)
	 */
	readonly "aria-expanded"?: string;

	/**
	 * Identifies the next [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in an alternate reading order of content which, at the user's discretion, allows assistive technology to override the general default of reading in document source order.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-flowto)
	 */
	readonly "aria-flowto"?: string;

	/**
	 * \[Deprecated in ARIA 1.1\] Indicates an element's "grabbed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) in a drag-and-drop operation.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-grabbed)
	 */
	readonly "aria-grabbed"?: string;

	/**
	 * Indicates the availability and type of interactive popup element, such as menu or dialog, that can be triggered by an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup)
	 */
	readonly "aria-haspopup"?: string;

	/**
	 * Indicates whether the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is exposed to an accessibility API. See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-hidden)
	 */
	readonly "aria-hidden"?: string;

	/**
	 * Indicates the entered value does not conform to the format expected by the application. See related [`aria-errormessage`](https://www.w3.org/TR/wai-aria-1.1/#aria-errormessage).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-invalid)
	 */
	readonly "aria-invalid"?: string;

	/**
	 * Defines a string value that labels the current element. See related [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-label)
	 */
	readonly "aria-label"?: string;

	/**
	 * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) that labels the current element. See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
	 */
	readonly "aria-labelledby"?: string;

	/**
	 * Defines the hierarchical level of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) within a structure.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-level)
	 */
	readonly "aria-level"?: string;

	/**
	 * Indicates that an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) will be updated, and describes the types of updates the [user agents](https://www.w3.org/TR/wai-aria-1.1/#dfn-user-agent), [assistive technologies](https://www.w3.org/TR/wai-aria-1.1/#dfn-assistive-technology), and user can expect from the [live region](https://www.w3.org/TR/wai-aria-1.1/#dfn-live-region).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-live)
	 */
	readonly "aria-live"?: string;

	/**
	 * Indicates whether an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is modal when displayed.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-modal)
	 */
	readonly "aria-modal"?: string;

	/**
	 * Indicates whether a text box accepts multiple lines of input or only a single line.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-multiline)
	 */
	readonly "aria-multiline"?: string;

	/**
	 * Indicates that the user may select more than one item from the current selectable descendants.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-multiselectable)
	 */
	readonly "aria-multiselectable"?: string;

	/**
	 * Indicates whether the element's orientation is horizontal, vertical, or unknown/ambiguous.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-orientation)
	 */
	readonly "aria-orientation"?: string;

	/**
	 * Identifies an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) (or elements) in order to define a visual, functional, or contextual parent/child [relationship](https://www.w3.org/TR/wai-aria-1.1/#dfn-relationship) between DOM elements where the DOM hierarchy cannot be used to represent the relationship. See related [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-owns)
	 */
	readonly "aria-owns"?: string;

	/**
	 * Defines a short hint (a word or short phrase) intended to aid the user with data entry when the control has no value. A hint could be a sample value or a brief description of the expected format.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-placeholder)
	 */
	readonly "aria-placeholder"?: string;

	/**
	 * Defines an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)'s number or position in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset)
	 */
	readonly "aria-posinset"?: string;

	/**
	 * Indicates the current "pressed" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of toggle buttons. See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-selected`](https://www.w3.org/TR/wai-aria-1.1/#aria-selected).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed)
	 */
	readonly "aria-pressed"?: string;

	/**
	 * Indicates that the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) is not editable, but is otherwise [operable](https://www.w3.org/TR/wai-aria-1.1/#dfn-operable). See related [`aria-disabled`](https://www.w3.org/TR/wai-aria-1.1/#aria-disabled).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-readonly)
	 */
	readonly "aria-readonly"?: string;

	/**
	 * Indicates what notifications the user agent will trigger when the accessibility tree within a live region is modified. See related [`aria-atomic`](https://www.w3.org/TR/wai-aria-1.1/#aria-atomic).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-relevant)
	 */
	readonly "aria-relevant"?: string;

	/**
	 * Indicates that user input is required on the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) before a form may be submitted.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-required)
	 */
	readonly "aria-required"?: string;

	/**
	 * Defines a human-readable, author-localized description for the [role](https://www.w3.org/TR/wai-aria-1.1/#dfn-role) of an [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription)
	 */
	readonly "aria-roledescription"?: string;

	/**
	 * Defines the total number of rows in a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount)
	 */
	readonly "aria-rowcount"?: string;

	/**
	 * Defines an [element's](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) row index or position with respect to the total number of rows within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowcount`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowcount) and [`aria-rowspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex)
	 */
	readonly "aria-rowindex"?: string;

	/**
	 * Defines the number of rows spanned by a cell or gridcell within a [`table`](https://www.w3.org/TR/wai-aria-1.1/#table), [`grid`](https://www.w3.org/TR/wai-aria-1.1/#grid), or [`treegrid`](https://www.w3.org/TR/wai-aria-1.1/#treegrid). See related [`aria-rowindex`](https://www.w3.org/TR/wai-aria-1.1/#aria-rowindex) and [`aria-colspan`](https://www.w3.org/TR/wai-aria-1.1/#aria-colspan).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-rowspan)
	 */
	readonly "aria-rowspan"?: string;

	/**
	 * Indicates the current "selected" [state](https://www.w3.org/TR/wai-aria-1.1/#dfn-state) of various [widgets](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-checked`](https://www.w3.org/TR/wai-aria-1.1/#aria-checked) and [`aria-pressed`](https://www.w3.org/TR/wai-aria-1.1/#aria-pressed).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-selected)
	 */
	readonly "aria-selected"?: string;

	/**
	 * Defines the number of items in the current set of listitems or treeitems. Not required if all elements in the set are present in the DOM. See related [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize)
	 */
	readonly "aria-setsize"?: string;

	/**
	 * Indicates if items in a table or grid are sorted in ascending or descending order.
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-sort)
	 */
	readonly "aria-sort"?: string;

	/**
	 * Defines the maximum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemax)
	 */
	readonly "aria-valuemax"?: string;

	/**
	 * Defines the minimum allowed value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-valuemin)
	 */
	readonly "aria-valuemin"?: string;

	/**
	 * Defines the current value for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget). See related [`aria-valuetext`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow)
	 */
	readonly "aria-valuenow"?: string;

	/**
	 * Defines the human readable text alternative of [`aria-valuenow`](https://www.w3.org/TR/wai-aria-1.1/#aria-valuenow) for a range [widget](https://www.w3.org/TR/wai-aria-1.1/#dfn-widget).
	 *
	 * ---
	 *
	 * **References**
	 *
	 * @see [WAI-ARIA Reference](https://www.w3.org/TR/wai-aria-1.1/#aria-valuetext)
	 */
	readonly "aria-valuetext"?: string;

	/**
	 * Identifies the [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element) that provides a detailed, extended description for the [object](https://www.w3.org/TR/wai-aria-1.1/#dfn-object). See related [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby).
	 */
	readonly "aria-details"?: string;

	/**
	 * Indicates keyboard shortcuts that an author has implemented to activate or give focus to an element.
	 */
	readonly "aria-keyshortcuts"?: string;
};
